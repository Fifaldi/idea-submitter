import {PanelWrapper} from '@components/core';
import {useHistory} from 'react-router-dom';
import {menuDefault} from '@shared/constants';
import PanelRouter from '@router/panel.router';
import React from 'react';
import {useSelector} from 'react-redux';
import {isAdministrator} from '@store/selectors';

const HomePage = () => {
    const history = useHistory();
    const isAdmin = useSelector(isAdministrator);
    return (
        <PanelWrapper menuItems={menuDefault(history, isAdmin)}>
            <PanelRouter />
        </PanelWrapper>
    );
};

export default HomePage;
