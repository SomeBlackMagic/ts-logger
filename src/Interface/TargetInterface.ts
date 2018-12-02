import {MessageEntity} from '../Entityes/MessageEntity';

export interface TargetInterface {
    enabled: boolean;
    categories: string[];
    prefix: string;
    exportInterval: number;
    messages: MessageEntity[] | null;

}