import reducers, {IAppState} from '@store/reducers';
import {createStore, applyMiddleware, Store, Reducer, CombinedState} from 'redux';
import {combineEpics, createEpicMiddleware, StateObservable} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {epics} from '@store/epics';
import {catchError} from 'rxjs/operators';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistPartial} from 'redux-persist/es/persistReducer';
import asyncSessionStorage from 'redux-persist/lib/storage';
import {environment} from '@env/env';
import {handleError} from '@store/actions';
import {IAction} from '@shared/interfaces';
import {Observable} from 'rxjs';

const epicMiddleware = createEpicMiddleware<IAction, IAction, IAppState>();
const middlewares = [epicMiddleware, createLogger()];
const persistConfig = {
    key: 'root',
    debug: environment.debug,
    storage: asyncSessionStorage,
    whitelist: ['auth'],
    blacklist: [],
};

const composeEnhancer = composeWithDevTools({trace: true, traceLimit: 25});
const persistedReducer = persistReducer<IAppState & PersistPartial, IAction>(
    persistConfig,
    reducers as unknown as Reducer<CombinedState<IAppState> & PersistPartial>,
);

const store = createStore<IAppState & PersistPartial, IAction, any, any>(
    persistedReducer,
    composeEnhancer(applyMiddleware(...middlewares)),
) as Store<IAppState>;

const rootEpic = (
    action$: Observable<IAction>,
    state: StateObservable<IAppState>,
    dependencies: any[],
) =>
    combineEpics<IAction, IAction, IAppState>(...(epics as any))(action$, state, dependencies).pipe(
        catchError((error, source) => {
            if (store.dispatch) {
                store.dispatch(handleError(error));
            }
            return source;
        }),
    );

epicMiddleware.run(rootEpic);

const persistor = persistStore(store);

export {store, persistor};
