import {IBaseModel} from './core.interface';
export interface IIdea extends IBaseModel<string> {
    title: string;
    author: string;
    summary: string;
}
export interface IIdeaDetails extends IIdea {
    description: string;
}
