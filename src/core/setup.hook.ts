import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Axios from 'axios';
import {authHttpInterceptor} from './interceptors';
import {getIdeas} from '@store/actions';

export const useSetup = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        Axios.interceptors.request.use(
            authHttpInterceptor.onFulfilled,
            authHttpInterceptor.onRejected,
        );
        dispatch(getIdeas());
        setInitialized(true);
    }, []);

    return initialized;
};
