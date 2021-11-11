import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import React from 'react';
import {PanelRouting} from '@shared/enums';

const PanelRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}${PanelRouting.DASHBOARD}`} />
            </Route>
            <Route path={`${path}${PanelRouting.DASHBOARD}`}>
                <div>Dashboard</div>
            </Route>
        </Switch>
    );
};

export default PanelRouter;
