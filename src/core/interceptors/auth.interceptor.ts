import {store} from '@store/store';
import {AxiosRequestConfig} from 'axios';

const onFulfilled = (config: AxiosRequestConfig) => {
    const token = store.getState().auth?.token;

    if (!config.headers.Authorization && token) {
        config.headers = {...config.headers, Authorization: 'Bearer ' + token};
    }
    return config;
};

const onRejected = (error: Error) => Promise.reject(error);

export const authHttpInterceptor = {onFulfilled, onRejected};
