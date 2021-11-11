import {combineReducers} from 'redux';
import AuthReducer, {IAuthState} from './auth.reducer';
import CoreReducer, {ICoreState} from './core.reducer';

export interface IAppState {
    core: ICoreState;
    auth: IAuthState;
}

const reducers = combineReducers({
    core: CoreReducer,
    auth: AuthReducer,
});

export default reducers;
