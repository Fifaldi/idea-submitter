import {IAction} from '@shared/interfaces';
import {Observable, switchMap, catchError, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {getIdeasSuccess, go, handleError, IdeaActions} from '@store/actions';
import {IdeaService} from '@shared/services';
import {
    editIdeaSuccess,
    deleteIdeaSuccess,
    createIdeaSuccess,
    getIdeas,
    handleSucess,
} from '@store/actions';
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
                switchMap((result) => [
                    createIdeaSuccess(result),
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
// const onEditIdea$ = (actions$: Observable<IAction>) =>
//     actions$.pipe(
//         ofType(IdeaActions.EDIT_IDEA),
//         switchMap((action) =>
//             IdeaService.editIdea(action.data.id, action.data.editData).pipe(
//                 switchMap((result) => [
//                     editIdeaSuccess(result),
//                     handleSucess({
//                         title: 'Sukces',
//                         message: 'Pomysł został zaktualizowany',
//                     }),
//                     getIdeas(),
//                     go(`${PanelRouting.ROOT}${PanelRouting.MY_IDEAS}`),
//                 ]),
//                 catchError((err) => [handleError(err)]),
//             ),
//         ),
//     );
// const onDeleteIdea$ = (actions$: Observable<IAction>) =>
//     actions$.pipe(
//         ofType(IdeaActions.DELETE_IDEA),
//         switchMap((action) =>
//             IdeaService.getIdeaDetails(action.data).pipe(
//                 switchMap(() => [
//                     deleteIdeaSuccess(),
//                     handleSucess({
//                         title: 'Sukces',
//                         message: 'Pomyślnie usunięto pomysł',
//                     }),
//                     getIdeas(),
//                 ]),
//                 catchError((err) => [handleError(err)]),
//             ),
//         ),
//     );
export const ideas = [onGetIdeas$, onCreateIdea$];
