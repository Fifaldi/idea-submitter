import MainRouter from './main.router';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';

export const ApplicationRouter = () => {
    return (
        <div className="main-container-style">
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </div>
    );
};
export {default as PanelRouter} from './panel.router';
