import {useQuery} from '@shared/hooks';
import {handleError} from '@store/actions';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

function QueryProtectedRoute({
    children,
    ...rest
}: {
    children: React.ReactNode;
    [key: string]: string | React.ReactNode;
}) {
    const dispatch = useDispatch();
    const query = useQuery();
    const token = query.get('resetToken');
    return (
        <Route
            {...rest}
            render={({location}) => {
                if (token) return children;
                else {
                    dispatch(
                        handleError({
                            message: 'Akcja niedozwolona!',
                            details: 'Skontaktuj się z administratorem',
                        }),
                    );
                    return (
                        <Redirect
                            to={{
                                pathname: '/home',
                                state: {from: location},
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default QueryProtectedRoute;
