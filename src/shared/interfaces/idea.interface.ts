import {Timestamp} from 'firebase/firestore';
import {IBaseModel} from './core.interface';

export interface IIdea extends IBaseModel<string> {
    rating: number;
    title: string;
    description: string;
    shortDescription: string;
    author: string;
    userId: string;
    status: 'approved' | 'declined' | 'pending';
    timestamp: Timestamp;
}
export type IIdeaEditor = Omit<IIdea, 'id'>;
