import React, {useEffect, useRef} from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import {HomePage} from '@pages/home';
import {pageNotFound} from '@pages/common/not-found.page';
import {MainRouting} from '@shared/enums';
import {NavigationService} from '@shared/services';

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
                <Redirect to={MainRouting.HOME} />
            </Route>
            <Route path={MainRouting.HOME}>
                <HomePage />
            </Route>

            {pageNotFound()}
        </Switch>
    );
};

export default MainRouter;
