import {API_ROUTES} from '@shared/constants';
import ApiService from './api.service';
import {IIdeaEditor, IIdea} from '@shared/interfaces';
import {of} from 'rxjs';
import {collection, getDocs} from 'firebase/firestore';
import {database} from '@core/firebase.config';

export default class IdeaService {
    static async getIdeas() {
        const ideaCollection = collection(database, 'ideas');
        const data = await getDocs(ideaCollection);
        return data.docs.map((doc) => ({...doc.data()}));
    }
    static getIdeaDetails(id: string) {
        // return this.get<IIdeaDetails>(`${API_ROUTES.IDEAS.ROOT}/${id}`);
        // const idea = mockIdeas.find((el) => el.id === id);
        // if (idea) return of(idea);
        // throw new Error('Nie ma takiego pomysłu');
    }
    static createIdea(data: IIdeaEditor) {
        // return this.post<Omit<IIdeaDetails, 'author' | 'id'>, IIdeaDetails>(
        //     `${API_ROUTES.IDEAS.ROOT}`,
        //     data,
        // );
        // return of(mockIdeas[1]);
    }
    static editIdea(id: string, editData: IIdeaEditor) {
        // return this.patch<Omit<IIdeaDetails, 'author' | 'id'>, IIdeaDetails>(
        //     `${API_ROUTES.IDEAS.ROOT}/${id}`,
        //     editData,
        // );
        // const idea = mockIdeas.find((el) => el.id === id);
        // if (idea) return of(idea);
        // throw new Error('Nie ma takiego pomysłu');
    }
    static deleteIdea(id: string) {
        // return this.delete(`${API_ROUTES.IDEAS.ROOT}/${id}`);
        // return of(() => console.log('deleted'));
    }
}
