import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Axios from 'axios';
import {authHttpInterceptor} from './interceptors';
// import {isAuthenticated} from '@store/selectors';

export const useSetup = () => {
    const [initialized, setInitialized] = useState(false);
    // const authenticated = useSelector(isAuthenticated);

    useEffect(() => {
        Axios.interceptors.request.use(
            authHttpInterceptor.onFulfilled,
            authHttpInterceptor.onRejected,
        );
        setInitialized(true);
    }, []);

    return initialized;
};
