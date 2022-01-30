import {isAuthenticated} from '@store/selectors';
import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

/**
 * Protected route is inaccessible for authorized users. E.g. login page.
 */
function ProtectedRoute({
    children,
    ...rest
}: {
    children: React.ReactNode;
    [key: string]: string | React.ReactNode;
}) {
    const authenticated = useSelector(isAuthenticated);
    return (
        <Route
            {...rest}
            render={({location}) =>
                !authenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/panel',
                            state: {from: location},
                        }}
                    />
                )
            }
        />
    );
}

export default ProtectedRoute;
