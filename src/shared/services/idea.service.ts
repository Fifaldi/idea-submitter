import {API_ROUTES} from '@shared/constants';
import ApiService from './api.service';
import {IIdeaDetails} from '@shared/interfaces';
import {of} from 'rxjs';
import {mockIdeas} from '../mocks/idea.mock';

export default class IdeaService extends ApiService {
    static getIdeas() {
        // return this.get<IIdeaDetails[]>(API_ROUTES.IDEAS.ROOT);
        return of(mockIdeas);
    }
    static getIdeaDetails(id: string) {
        // return this.get<IIdeaDetails>(`${API_ROUTES.IDEAS.ROOT}/${id}`);
        const idea = mockIdeas.find((el) => el.id === id);
        if (idea) return of(idea);
        throw new Error('Nie ma takiego pomysłu');
    }
    static createIdea(data: Omit<IIdeaDetails, 'author' | 'id'>) {
        // return this.post<Omit<IIdeaDetails, 'author' | 'id'>, IIdeaDetails>(
        //     `${API_ROUTES.IDEAS.ROOT}`,
        //     data,
        // );
        return of(mockIdeas[1]);
    }
    static editIdea(id: string, editData: Omit<IIdeaDetails, 'author' | 'id'>) {
        // return this.patch<Omit<IIdeaDetails, 'author' | 'id'>, IIdeaDetails>(
        //     `${API_ROUTES.IDEAS.ROOT}/${id}`,
        //     editData,
        // );
        const idea = mockIdeas.find((el) => el.id === id);
        if (idea) return of(idea);
        throw new Error('Nie ma takiego pomysłu');
    }
    static deleteIdea(id: string) {
        // return this.delete(`${API_ROUTES.IDEAS.ROOT}/${id}`);
        return of(() => console.log('deleted'));
    }
}
