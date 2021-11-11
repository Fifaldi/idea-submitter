import {Toolbar} from 'primereact/toolbar';
import React from 'react';
import './panelWrapper.component.scss';
import {TieredMenu} from 'primereact/tieredmenu';
import {Button} from 'primereact/button';
import {useDispatch} from 'react-redux';
import {appVersion} from '../../../index';
import {Tag} from 'primereact/tag';
import logo from '@assets/logo.png';
import {handleSucess} from '@store/actions';
import {MenuItem} from 'primereact/menuitem';

interface IPanelWrapper {
    menuItems: MenuItem[] | undefined;
    children: React.ReactNode;
}

const PanelWrapper = (props: IPanelWrapper) => {
    const dispatch = useDispatch();

    return (
        <div className="main-container-style">
            <div className="grid grid-nogutter">
                <div className="col-12 toolbar-col">
                    <Toolbar
                        left={
                            <div className="flex flex-row align-items-center h-2rem">
                                <img className="logo-style" src={logo} alt="logo" />
                                <Tag className="ml-2 p-2 h-1rem" value={appVersion} />
                            </div>
                        }
                        right={
                            <Button
                                onClick={() =>
                                    dispatch(
                                        handleSucess({
                                            title: 'Sukces',
                                            message: 'Zostaleś wylogowany',
                                        }),
                                    )
                                }
                                className="p-button-rounded p-button-text"
                                icon={'pi pi-sign-out'}
                            />
                        }
                        className="toolbar-style"
                    />
                </div>
            </div>
            <div className="grid grid-nogutter content-body">
                <div className="col-2 sidemenu-col">
                    <TieredMenu model={props.menuItems} className="menu" />
                </div>
                <div className="col-10 position-relative">{props.children}</div>
            </div>
        </div>
    );
};

export default PanelWrapper;
