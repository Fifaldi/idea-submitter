import {ILoginCredentials} from '@shared/interfaces';
import {UserCredential} from 'firebase/auth';

export const AuthActions = {
    LOGIN: '[Auth] Login',
    LOGIN_SUCCESS: '[Auth] Login success',
    LOGOUT: 'Auth] Logout',
};

export const loginAction = (data: ILoginCredentials) => ({
    type: AuthActions.LOGIN,
    data,
});

export const loginSuccess = (data: string) => ({
    type: AuthActions.LOGIN_SUCCESS,
    data,
});
export const logout = () => ({
    type: AuthActions.LOGOUT,
});
