import {LogLevel} from './Types';
import {MessageEntity} from './Entityes/MessageEntity';
import {ConsoleTarget} from './Targets/ConsoleTraget';
import {TargetInterface} from './Interface/TargetInterface';
import {AbstractTarget} from "./Targets/AbstractTarget";
import StackTraceParser, {StackTraceParserResult} from "stacktrace-parser";

export class Logger {

    public flushInterval: number = 1000;

    public traceLevel: number = 0;

    private messages: MessageEntity[] = [];

    public targets: TargetInterface[] = [];

    public constructor(options: LoggerConfigInterface) {
        Object.assign(this, options);

        process.on('exit', ()  => {
            this.flush(this.messages, true);
        })
    }


    public log(message: string, level: LogLevel, data?: any, category: string = 'application', tags?: string[]) {
        let time = new Date();
        let traces: StackTraceParserResult[]  = [];
        if(this.traceLevel > 0 ) {
            let count = 0;
            let trace = StackTraceParser.parse(new Error().stack);
            trace.pop();
            trace.map((item: StackTraceParserResult) => {
                if(count++ >= this.traceLevel) {
                    return;
                }
                traces.push(item);
            })
        }
        this.messages.push({
            level: level,
            time: time,
            data: data,
            message: message,
            tags: tags,
            category: category,
            trace: traces,
            memoryUsage:  process.memoryUsage().heapUsed
        });

        if(this.flushInterval > 0 && this.messages.length >=this.flushInterval) {
            this.flush(this.messages);
            this.messages = [];
        }
    }

    public flush(messages: MessageEntity[], final: boolean = false) {
        let targetErrors: MessageEntity[] = [];

        this.targets.map((target: AbstractTarget) => {
             if (target.enabled) {
                 try {
                     target.collect(messages, final);
                 } catch(error) {
                     targetErrors.push({
                         level: LogLevel.WARN,
                         time: new Date(),
                         data: [error],
                         message: 'Unable to send log via'+target.constructor.name,
                         tags: [],
                         category: 'logger.core',
                         memoryUsage: process.memoryUsage().heapUsed,
                         trace: StackTraceParser.parse(new Error().stack)
                     })
                 }

             }
        });
        if(targetErrors.length > 0) {
            this.flush(targetErrors, true);
        }
    }
}

export interface LoggerConfigInterface {
    flushInterval?: number
    traceLevel?: number
    targets: AbstractTarget[]

}

