import {LoginPage} from '@pages/auth';
import {AuthRouting} from '@shared/enums';
import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

const AuthRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}${AuthRouting.LOGIN}`} />
            </Route>
            <Route path={`${path}${AuthRouting.LOGIN}`}>
                <LoginPage />
            </Route>
        </Switch>
    );
};

export default AuthRouter;
