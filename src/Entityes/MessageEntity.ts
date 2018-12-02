import {LogLevel} from '../Types';
import {StackTraceParserResult} from "stacktrace-parser";

export interface MessageEntity {
    category: string;
    level: LogLevel;
    time: Date;
    message: string;
    tags?: string[];
    data?: any;
    trace: StackTraceParserResult[]
    memoryUsage: number
}