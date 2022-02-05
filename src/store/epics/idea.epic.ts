import {IAction} from '@shared/interfaces';
import {Observable, switchMap, catchError} from 'rxjs';
import {ofType} from 'redux-observable';
import {getIdeasSuccess, go, handleError, IdeaActions} from '@store/actions';
import {IdeaService} from '@shared/services';
import {deleteIdeaSuccess, getIdeas, handleSucess} from '@store/actions';
import {PanelRouting} from '@shared/enums';
const onGetIdeas$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(IdeaActions.GET_IDEAS),
        switchMap(() =>
            IdeaService.getIdeas().pipe(
                switchMap((result) => [getIdeasSuccess(result as any)]),
                catchError((err) => [handleError(err)]),
            ),
        ),
    );

const onCreateIdea$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(IdeaActions.CREAT_IDEA),
        switchMap((action) =>
            IdeaService.createIdea(action.data).pipe(
                switchMap(() => [
                    handleSucess({
                        title: 'Sukces',
                        message: 'Pomysł został dodany',
                    }),
                    getIdeas(),
                    go(`${PanelRouting.ROOT}${PanelRouting.MY_IDEAS}`),
                ]),
                catchError((err) => [handleError(err)]),
            ),
        ),
    );
const onEditIdea$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(IdeaActions.EDIT_IDEA),
        switchMap((action) =>
            IdeaService.editIdea(action.data.id, action.data.editData).pipe(
                switchMap(() => [
                    handleSucess({
                        title: 'Sukces',
                        message: 'Pomysł został zaktualizowany',
                    }),
                    getIdeas(),
                    go(`${PanelRouting.ROOT}${PanelRouting.MY_IDEAS}`),
                ]),
                catchError((err) => [handleError(err)]),
            ),
        ),
    );
const onDeleteIdea$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(IdeaActions.DELETE_IDEA),
        switchMap((action) =>
            IdeaService.deleteIdea(action.data).pipe(
                switchMap(() => [
                    deleteIdeaSuccess(),
                    handleSucess({
                        title: 'Sukces',
                        message: 'Pomyślnie usunięto pomysł',
                    }),
                    getIdeas(),
                ]),
                catchError((err) => [handleError(err)]),
            ),
        ),
    );

const onChangeIdeaStatus$ = (actions$: Observable<IAction>) =>
    actions$.pipe(
        ofType(IdeaActions.CHANGE_IDEA_STATUS),
        switchMap((action) =>
            IdeaService.changeIdeaStatus(action.data.id, action.data.status).pipe(
                switchMap(() => [
                    handleSucess({
                        title: 'Sukces',
                        message: 'Pomysł został zaktualizowany',
                    }),
                    getIdeas(),
                    go(`${PanelRouting.ROOT}${PanelRouting.PENDING_IDEAS}`),
                ]),
                catchError((err) => [handleError(err)]),
            ),
        ),
    );
export const ideas = [onGetIdeas$, onCreateIdea$, onEditIdea$, onDeleteIdea$, onChangeIdeaStatus$];
