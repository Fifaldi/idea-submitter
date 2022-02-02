import {API_ROUTES} from '@shared/constants';
import ApiService from './api.service';
import {IIdeaEditor, IIdea} from '@shared/interfaces';
import {from, of} from 'rxjs';
import {addDoc, collection, getDocs, updateDoc} from 'firebase/firestore';
import {database} from '@core/firebase.config';

export default class IdeaService {
    static readonly ideaCollection = collection(database, 'ideas');
    static getIdeas() {
        return from(
            (async () => {
                const data = await getDocs(this.ideaCollection);
                return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            })(),
        );
    }

    static createIdea(data: IIdeaEditor) {
        async () => {
            await addDoc(this.ideaCollection, {
                title: data.title,
                shortDescription: data.shortDescription,
                description: data.description,
            });
        };
        return of();
    }
    static editIdea(id: string, editData: IIdeaEditor) {
        // async () => {
        //     await updateDoc(this.ideaCollection, {
        //         title: data.title,
        //         shortDescription: data.shortDescription,
        //         description: data.description,
        //     });
        // };
        return of();
    }
    static deleteIdea(id: string) {
        // return this.delete(`${API_ROUTES.IDEAS.ROOT}/${id}`);
        // return of(() => console.log('deleted'));
    }
}
