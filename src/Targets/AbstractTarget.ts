import {MessageEntity} from "../Entityes/MessageEntity";
import {LogLevel} from "../Types";

export abstract class AbstractTarget {
    public enabled: boolean = true;
    public levels: string[] = [];

    public categories: string[] = [];
    public except: string[] = [];
    public prefix: string;
    public exportInterval: number = 1000;
    public messages: MessageEntity[] | null;

    abstract export(): void;

    public collect(messages: MessageEntity[], final:boolean = false) : void {
        this.messages = AbstractTarget.filterMessages(messages);
        //TODO export interval and filterMessages
        // $this->messages = array_merge($this->messages, static::filterMessages($messages, $this->getLevels(), $this->categories, $this->except));
        this.export()
    }

    public static filterMessages(messages: MessageEntity[], levels: number = 0, categories:string[] = [], except:string[] = []): MessageEntity[] {
        //TODO IN CONFIG!!!!!!!!!
        let allowed = [LogLevel.INFO, LogLevel.ERROR,LogLevel.WARN, LogLevel.FATAL];
        messages.map((value: MessageEntity, index: number, array) => {
            if(allowed.indexOf(value.level) !== -1 ) {
                delete array[index];
            }
        });
        //TODO filter
        return messages;
    }

    public formatMessage() {

    }

    /**
     *
     * @param message
     */
    public getMessagePrefix(message:MessageEntity): string {
        return "[ip][userID][sessionID]"
    }

    protected getTime(): string {
        return new Date().toUTCString().replace(/T/, ' ').replace(/Z/, '');
    }
}