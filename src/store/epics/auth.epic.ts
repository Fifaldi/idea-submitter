import {IAction} from '@shared/interfaces';
import {catchError, Observable, switchMap} from 'rxjs';
import {ofType} from 'redux-observable';
import {AuthActions, loginSuccess} from '../actions/auth.actions';
import AuthService from '../../shared/services/auth.service';
import {handleError} from '../actions/core.actions';

const onLogin$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(AuthActions.LOGIN),
        switchMap((action) =>
            AuthService.login(action.data).pipe(
                switchMap((result) => [loginSuccess(result)]),
                catchError((err) => [handleError(err)]),
            ),
        ),
    );

export const auth = [onLogin$];
