import {IAction} from '@shared/interfaces';
import {CoreActions} from '@store/actions';

export interface ICoreState {
    loading: boolean;
}

const initialState = {
    loading: false,
};

const CoreReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default CoreReducer;
