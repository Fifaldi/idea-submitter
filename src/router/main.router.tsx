import React, {useEffect, useRef} from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import {PanelPage} from '@pages/home';
import {pageNotFound} from '@pages/common/not-found.page';
import {AuthRouting, PanelRouting} from '@shared/enums';
import {NavigationService} from '@shared/services';
import {PrivateRoute, ProtectedRoute} from '@core/hoc';
import {AuthPage} from '@pages/auth';

const MainRouter = () => {
    const history = useHistory();
    const historyRef = useRef(history);
    useEffect(() => {
        if (historyRef.current) {
            NavigationService.navigationRef = historyRef;
        }
    }, [historyRef, history]);
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={AuthRouting.ROOT} />
            </Route>
            <ProtectedRoute path={AuthRouting.ROOT}>
                <AuthPage />
            </ProtectedRoute>
            <PrivateRoute path={PanelRouting.ROOT}>
                <PanelPage />
            </PrivateRoute>

            {pageNotFound()}
        </Switch>
    );
};

export default MainRouter;
