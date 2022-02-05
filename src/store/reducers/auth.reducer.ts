import {IAction} from '@shared/interfaces';
import {AuthActions} from '@store/actions';

export interface IAuthState {
    token: string;
}

const initialState: IAuthState = {
    token: '',
};

const AuthReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case AuthActions.LOGIN_SUCCESS:
            return {...state, token: action.data};
        case AuthActions.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default AuthReducer;
