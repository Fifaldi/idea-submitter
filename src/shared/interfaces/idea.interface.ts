import {IBaseModel} from './core.interface';

export interface IIdea extends IBaseModel<string> {
    title: string;
    description: string;
    shortDescription: string;
    author: string;
    userId: string;
    status: 'approved' | 'declined' | 'pending';
}
export type IIdeaEditor = Omit<IIdea, 'author' | 'id' | 'userId' | 'status'>;
