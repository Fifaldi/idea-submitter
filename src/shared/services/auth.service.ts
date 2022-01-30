import {API_ROUTES} from '@shared/constants';
import ApiService from './api.service';
import {ILoginCredentials, IAuth} from '@shared/interfaces';
import {of} from 'rxjs';

export default class AuthService extends ApiService {
    static login(data: ILoginCredentials) {
        // return this.post<ILoginCredentials, IAuth>(API_ROUTES.AUTH.LOGIN, {...data});
        return of({token: 'test_token'});
    }
}
