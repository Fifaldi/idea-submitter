import {combineReducers} from 'redux';
import AuthReducer, {IAuthState} from './auth.reducer';
import CoreReducer, {ICoreState} from './core.reducer';
import {IIdeaState} from './idea.reducer';
import IdeaReducer from './idea.reducer';

export interface IAppState {
    core: ICoreState;
    auth: IAuthState;
    idea: IIdeaState;
}

const reducers = combineReducers({
    core: CoreReducer,
    auth: AuthReducer,
    idea: IdeaReducer,
});

export default reducers;
