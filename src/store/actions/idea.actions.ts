import {IIdea, IIdeaEditor} from '@shared/interfaces';

export const IdeaActions = {
    GET_IDEAS: '[Idea] Get ideas',
    GET_IDEAS_SUCCESS: '[Idea] Get ideas success',
    GET_IDEA_DETAILS: '[Idea] Get idea details',
    GET_IDEA_DETAILS_SUCCESS: '[Idea] Get idea details success',
    CREAT_IDEA: '[Idea] Create idea ',
    CREATE_IDEA_SUCCESS: '[Idea] Create idea success',
    EDIT_IDEA: '[Idea] Edit idea',
    EDIT_IDEAS_SUCCESS: '[Idea] Edit idea success',
    DELETE_IDEA: '[Idea] Delete idea',
    DELETE_IDEA_SUCCESS: '[Idea] Delete idea success',
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
    type: IdeaActions.CREAT_IDEA,
    data,
});
export const createIdeaSuccess = (data: IIdea) => ({
    type: IdeaActions.CREATE_IDEA_SUCCESS,
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
