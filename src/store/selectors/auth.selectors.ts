import {ADMIN_MAIL} from '@shared/constants';
import {IAppState} from '@store/reducers';
import jwt_decode from 'jwt-decode';

export const isAuthenticated = (state: IAppState) => !!state.auth.token;
export const isAdministrator = (state: IAppState) =>
    (jwt_decode(state.auth.token) as any).email === ADMIN_MAIL;
