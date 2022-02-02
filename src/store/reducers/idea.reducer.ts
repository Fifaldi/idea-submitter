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
            return {...state, ideas: action.data};
        case IdeaActions.GET_IDEA_DETAILS_SUCCESS:
        case IdeaActions.EDIT_IDEAS_SUCCESS:
            return {...state, currentIdea: action.data};
        default:
            return state;
    }
};

export default IdeaReducer;
