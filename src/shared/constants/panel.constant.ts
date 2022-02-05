import {PanelRouting} from '@shared/enums';
import {History} from 'history';

export const menuDefault = (navigation: History, isAdmin: boolean) => {
    return [
        {
            label: 'Przegląd pomysłów ',
            icon: 'pi pi-fw pi-list',
            command: () => navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS}`),
        },
        !isAdmin
            ? {
                  label: 'Moje Pomysły',
                  icon: 'pi pi-fw pi-plus',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.MY_IDEAS}`);
                  },
              }
            : {
                  label: 'Oczrekujące pomysły',
                  icon: 'pi pi-fw pi-chart-bar',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.PENDING_IDEAS}`);
                  },
              },
        isAdmin
            ? {
                  label: 'Statystyki',
                  icon: 'pi pi-fw pi-chart-bar',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.STATISTICS}`);
                  },
              }
            : {},
    ];
};
