import {MainRouting, PanelRouting} from '@shared/enums';
import {History} from 'history';

export const menuDefault = (navigation: History) => {
    return [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
            command: () => navigation.push(`${MainRouting.HOME}${PanelRouting.DASHBOARD}`),
        },
        {
            label: 'Dodaj pomysł',
            icon: 'pi pi-fw pi-file',
            command: () => {
                navigation.push(`${MainRouting.HOME}${PanelRouting.ADD}`);
            },
        },
    ];
};
