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
    reviewers: string[];
    implementation_status: IImplementationStatusType;
}
export type IIdeaEditor = Omit<IIdea, 'id'>;
export type IImplementationStatusType = 'not_implemented' | 'in_progress' | 'implemented';
