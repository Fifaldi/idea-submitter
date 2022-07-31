import {IIdeaEditor, IImplementationStatusType} from '@shared/interfaces';
import {from} from 'rxjs';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import {database} from '@core/firebase.config';

export default class IdeaService {
    static readonly ideaCollection = collection(database, 'ideas');
    static getIdeas() {
        return from(
            (async () => {
                const data = await getDocs(this.ideaCollection);
                return data.docs.map((result) => ({...result.data(), id: result.id}));
            })(),
        );
    }

    static createIdea(data: IIdeaEditor) {
        return from(
            (async () => {
                await addDoc(this.ideaCollection, {
                    ...data,
                });
            })(),
        );
    }
    static editIdea(id: string, editData: IIdeaEditor) {
        const ideaDoc = doc(database, 'ideas', id);
        return from((async () => await updateDoc(ideaDoc, editData))());
    }
    static deleteIdea(id: string) {
        return from((async () => await deleteDoc(doc(database, 'ideas', id)))());
    }
    static changeIdeaStatus(id: string, status: 'approved' | 'declined') {
        const ideaDoc = doc(database, 'ideas', id);
        return from((async () => await updateDoc(ideaDoc, {status}))());
    }
    static rateIdea({
        id,
        rating,
        userId,
        currentRating,
        currentReviewers,
    }: {
        id: string;
        rating: number;
        userId: string;
        currentRating: number;
        currentReviewers: string[];
    }) {
        const ideaDoc = doc(database, 'ideas', id);
        return from(
            (async () =>
                await updateDoc(ideaDoc, {
                    rating: (currentRating + rating) / (currentReviewers.length > 1 ? 2 : 1),
                    reviewers: [...currentReviewers, userId],
                }))(),
        );
    }
    static changeIdeaImplementationStatus({
        id,
        implementation_status,
    }: {
        id: string;
        implementation_status: IImplementationStatusType;
    }) {
        const ideaDoc = doc(database, 'ideas', id);
        return from(
            (async () =>
                await updateDoc(ideaDoc, {
                    implementation_status,
                }))(),
        );
    }
}
