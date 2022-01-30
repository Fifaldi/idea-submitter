import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import React from 'react';
import {PanelRouting} from '@shared/enums';
import {
    AddIdeaPage,
    EditIdeaPage,
    IdeaDetailsPage,
    IdeasPage,
    MyIdeasPage,
    StatisticsPage,
} from '@pages/home';

const PanelRouter = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}${PanelRouting.IDEAS}`} />
            </Route>
            <Route exact path={`${path}${PanelRouting.IDEAS}`}>
                <IdeasPage />
            </Route>
            <Route exact path={`${path}${PanelRouting.MY_IDEAS}`}>
                <MyIdeasPage />
            </Route>
            <Route exact path={`${path}${PanelRouting.IDEAS}/:id`}>
                <IdeaDetailsPage />
            </Route>
            <Route exact path={`${path}${PanelRouting.STATISTICS}`}>
                <StatisticsPage />
            </Route>
            <Route exact path={`${path}${PanelRouting.MY_IDEAS}${PanelRouting.ADD_NEW_IDEA}`}>
                <AddIdeaPage />
            </Route>
            <Route exact path={`${path}${PanelRouting.MY_IDEAS}/:id`}>
                <EditIdeaPage />
            </Route>
        </Switch>
    );
};

export default PanelRouter;
