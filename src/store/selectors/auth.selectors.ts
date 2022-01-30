import {IAppState} from '@store/reducers';

export const isAuthenticated = (state: IAppState) => !!state.auth.token;
