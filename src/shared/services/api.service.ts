import {environment} from '@env/env';
import {IBaseModel} from '@shared/interfaces';
import Axios, {AxiosRequestConfig} from 'axios';
import {from, Observable, of} from 'rxjs';
import {Dictionary} from 'lodash';
import {switchMap} from 'rxjs/operators';

export default abstract class ApiService {
    protected static post = <T extends IBaseModel | unknown, TX = T>(
        uri: string,
        data?: T,
        headers?: AxiosRequestConfig,
        baseUrl: string = environment.apiUrl,
    ): Observable<TX> => {
        return from(Axios.post(baseUrl + uri, data, headers)).pipe(
            switchMap((response: {data: any}) => of(response.data)),
        );
    };

    static get = <T extends IBaseModel | IBaseModel[] | unknown>(
        uri: string,
        headers?: AxiosRequestConfig,
        baseUrl: string = environment.apiUrl,
    ): Observable<T> => {
        return from(Axios.get(baseUrl + uri, headers)).pipe(
            switchMap((response: {data: any}) => of(response.data)),
        );
    };

    protected static postWithFile = <T extends IBaseModel | unknown, TX = T>(
        uri: string,
        formData: FormData,
        baseUrl: string = environment.apiUrl,
    ): Observable<TX> => {
        return from(
            Axios.post(baseUrl + uri, formData, {
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            }),
        ).pipe(switchMap((response) => of(response.data)));
    };

    protected static patchWithFile = <T extends IBaseModel | unknown, TX = T>(
        uri: string,
        formData: FormData,
        baseUrl: string = environment.apiUrl,
    ): Observable<TX> => {
        return from(
            Axios.patch(baseUrl + uri, formData, {
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            }),
        ).pipe(switchMap((response) => of(response.data)));
    };

    protected static delete = (
        uri: string,
        headers?: Dictionary<string>,
        baseUrl: string = environment.apiUrl,
    ): Observable<void> => {
        return from(Axios.delete(baseUrl + uri, {headers})).pipe(
            switchMap((response: {data: any}) => of(response.data)),
        );
    };

    protected static put = <T extends IBaseModel>(
        uri: string,
        data: T,
        baseUrl: string = environment.apiUrl,
    ): Observable<T> => {
        return from(Axios.put(baseUrl + uri, data)).pipe(
            switchMap((response: {data: any}) => of(response.data)),
        );
    };

    protected static patch = <T extends IBaseModel | unknown, TX = T>(
        uri: string,
        data: T,
        baseUrl: string = environment.apiUrl,
    ): Observable<TX> => {
        return from(Axios.patch(baseUrl + uri, data)).pipe(
            switchMap((response: {data: any}) => of(response.data)),
        );
    };

    protected static getExternal = <T extends IBaseModel | unknown>(uri: string): Observable<T> => {
        return from(Axios.get(uri)).pipe(switchMap((response: {data: any}) => of(response.data)));
    };
}
