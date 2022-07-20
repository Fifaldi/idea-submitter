import {IIdea, IIdeaEditor, IImplementationStatusType} from '@shared/interfaces';

export const IdeaActions = {
    GET_IDEAS: '[Idea] Get ideas',
    GET_IDEAS_SUCCESS: '[Idea] Get ideas success',
    GET_IDEA_DETAILS: '[Idea] Get idea details',
    GET_IDEA_DETAILS_SUCCESS: '[Idea] Get idea details success',
    CREATE_IDEA: '[Idea] Create idea ',
    CREATE_IDEA_SUCCESS: '[Idea] Create idea success',
    EDIT_IDEA: '[Idea] Edit idea',
    EDIT_IDEAS_SUCCESS: '[Idea] Edit idea success',
    DELETE_IDEA: '[Idea] Delete idea',
    DELETE_IDEA_SUCCESS: '[Idea] Delete idea success',
    CHANGE_IDEA_STATUS: '[Idea] Change idea status',
    RATE_IDEA: '[Idea] Rate idea',
    RATE_IDEA_SUCCESS: '[Idea] Rate idea success',
    CHANGE_IDEA_IMPLEMENTATION_STATUS: '[Idea] Change idea implementation status',
    CHANGE_IDEA_IMPLEMENTATION_STATUS_SUCCESS: '[Idea] Change idea implementation status success',
};

export const getIdeas = () => ({
    type: IdeaActions.GET_IDEAS,
});

export const getIdeasSuccess = (data: IIdea[]) => ({
    type: IdeaActions.GET_IDEAS_SUCCESS,
    data,
});
export const getIdeaDetails = (data: string) => ({
    type: IdeaActions.GET_IDEA_DETAILS,
    data,
});
export const createIdea = (data: IIdeaEditor) => ({
    type: IdeaActions.CREATE_IDEA,
    data,
});

export const editIdea = (id: string, editData: IIdeaEditor) => ({
    type: IdeaActions.EDIT_IDEA,
    data: {id, editData},
});
export const editIdeaSuccess = (data: IIdea) => ({
    type: IdeaActions.EDIT_IDEAS_SUCCESS,
    data,
});
export const deleteIdea = (data: string) => ({
    type: IdeaActions.DELETE_IDEA,
    data,
});
export const deleteIdeaSuccess = () => ({
    type: IdeaActions.DELETE_IDEA_SUCCESS,
});

export const changeIdeaStatus = (id: string, status: 'approved' | 'declined') => ({
    type: IdeaActions.CHANGE_IDEA_STATUS,
    data: {id, status},
});

export const rateIdea = (data: {
    id: string;
    rating: number;
    userId: string;
    currentRating: number;
    currentReviewers: string[];
}) => ({
    type: IdeaActions.RATE_IDEA,
    data,
});
export const rateIdeaSuccess = () => ({
    type: IdeaActions.RATE_IDEA_SUCCESS,
});

export const changeIdeaImplementationStatus = (data: {
    id: string;
    implementation_status: IImplementationStatusType;
}) => ({
    type: IdeaActions.CHANGE_IDEA_IMPLEMENTATION_STATUS,
    data,
});
export const changeIdeaImplementationStatusSuccess = () => ({
    type: IdeaActions.CHANGE_IDEA_IMPLEMENTATION_STATUS_SUCCESS,
});
