import {Route} from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h3>Those are not the pages you are lookin for</h3>
        </div>
    );
};

export const pageNotFound = () => (
    <Route>
        <NotFoundPage />
    </Route>
);

export default NotFoundPage;
