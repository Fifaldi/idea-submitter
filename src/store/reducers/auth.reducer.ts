import {IAction} from '@shared/interfaces';

export interface IAuthState {
    token: string;
    refreshToken: string;
}

const initialState: IAuthState = {
    token: '',
    refreshToken: '',
};

const AuthReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default AuthReducer;
