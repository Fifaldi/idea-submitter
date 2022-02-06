import {PanelRouting} from '@shared/enums';
import {History} from 'history';

export const menuDefault = (navigation: History, isAdmin: boolean) => {
    return !isAdmin
        ? [
              {
                  label: 'Przegląd pomysłów ',
                  icon: 'pi pi-fw pi-list',
                  command: () => navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS}`),
              },
              {
                  label: 'Moje Pomysły',
                  icon: 'pi pi-fw pi-plus',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.MY_IDEAS}`);
                  },
              },
          ]
        : [
              {
                  label: 'Przegląd pomysłów ',
                  icon: 'pi pi-fw pi-list',
                  command: () => navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS}`),
              },
              {
                  label: 'Oczrekujące pomysły',
                  icon: 'pi pi-fw pi-spinner',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.PENDING_IDEAS}`);
                  },
              },
              {
                  label: 'Statystyki',
                  icon: 'pi pi-fw pi-chart-bar',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.STATISTICS}`);
                  },
              },
          ];
};
