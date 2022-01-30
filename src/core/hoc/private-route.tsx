import {isAuthenticated} from '@store/selectors/';
import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AuthRouting} from '@shared/enums';

/**
 * Private route is inaccessible for unauthorized users.
 */
function PrivateRoute({
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
                authenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: `${AuthRouting.ROOT}${AuthRouting.LOGIN}`,
                            state: {from: location},
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
