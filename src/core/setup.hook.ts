import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getIdeas, logout} from '@store/actions';

export const useSetup = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useDispatch();

    // Initialize Firebase

    useEffect(() => {
        dispatch(getIdeas());
        dispatch(logout());
        setInitialized(true);
    }, []);

    return initialized;
};
