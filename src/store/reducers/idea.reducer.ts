import {IAction, IIdea} from '@shared/interfaces';
import {IdeaActions} from '@store/actions';

export interface IIdeaState {
    ideas: IIdea[];
    currentIdea: IIdea | null;
}

const initialState: IIdeaState = {
    ideas: [],
    currentIdea: null,
};

const IdeaReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case IdeaActions.GET_IDEAS_SUCCESS:
            return {
                ...state,
                ideas: (action.data as IIdea[]).sort(
                    (a, b) => b.timestamp.seconds - a.timestamp.seconds,
                ),
            };
        case IdeaActions.GET_IDEA_DETAILS:
            return {...state, currentIdea: state.ideas.find((idea) => idea.id === action.data)};

        default:
            return state;
    }
};

export default IdeaReducer;
