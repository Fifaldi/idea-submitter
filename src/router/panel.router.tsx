import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import React from 'react';
import {PanelRouting} from '@shared/enums';
import {
    AddIdeaPage,
    EditIdeaPage,
    IdeaDetailsPage,
    IdeasImplemented,
    IdeasInProgress,
    IdeasPage,
    MyIdeasPage,
    PendingIdeasPage,
    StatisticsPage,
} from '@pages/home';
import {pageNotFound} from '@pages/common/not-found.page';

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
            <Route exact path={`${path}${PanelRouting.PENDING_IDEAS}`}>
                <PendingIdeasPage />
            </Route>
            <Route exact path={`${path}${PanelRouting.IDEAS_IN_PROGRESS}`}>
                <IdeasInProgress />
            </Route>
            <Route exact path={`${path}${PanelRouting.IDEAS_IMPLEMENTED}`}>
                <IdeasImplemented />
            </Route>
            {pageNotFound()}
        </Switch>
    );
};

export default PanelRouter;
