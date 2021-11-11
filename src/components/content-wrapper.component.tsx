import {useSetup} from '@core/setup.hook';
import {ApplicationRouter} from '@router/index';
import {ProgressSpinner} from 'primereact/progressspinner';
import React from 'react';

const ContentWrapperComponent = () => {
    const initialized = useSetup();

    return (
        <div id="dropie" className="layout-wrapper main-container-style">
            {initialized ? <ApplicationRouter /> : <ProgressSpinner />}
        </div>
    );
};

export default ContentWrapperComponent;
