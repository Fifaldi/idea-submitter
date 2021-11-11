import {PanelWrapper} from '@components/core';
import {useHistory} from 'react-router-dom';
import {menuDefault} from '@shared/constants';
import PanelRouter from '@router/panel.router';
import React from 'react';

const HomePage = () => {
    const history = useHistory();
    return (
        <PanelWrapper menuItems={menuDefault(history)}>
            <PanelRouter />
        </PanelWrapper>
    );
};

export default HomePage;
