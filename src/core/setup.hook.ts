import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getIdeas} from '@store/actions';

export const useSetup = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useDispatch();

    // Initialize Firebase

    useEffect(() => {
        dispatch(getIdeas());
        setInitialized(true);
    }, []);

    return initialized;
};
