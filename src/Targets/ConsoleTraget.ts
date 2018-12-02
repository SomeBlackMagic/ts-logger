


import {TargetInterface} from "../Interface/TargetInterface";
import {MessageEntity} from "../Entityes/MessageEntity";
import {LogLevelString} from "../Types";
import {AbstractTarget} from "./AbstractTarget";

export class ConsoleTarget extends AbstractTarget implements TargetInterface {


    public export(): void {
        this.messages.map((item: MessageEntity) => {
            console.log('[' + item.time.toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/Z/, '') + ']['+LogLevelString[item.level]+']['+item.category+'] ' + item.message );
            //+ ' ['+JSON.stringify(item.data)+']'
        });
    }
}