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
                  label: 'Pomysły realizowane',
                  icon: 'pi pi-fw pi-play',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS_IN_PROGRESS}`);
                  },
              },
              {
                  label: 'Pomysły zrealizowane',
                  icon: 'pi pi-fw pi-check-square',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS_IMPLEMENTED}`);
                  },
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
                  label: 'Pomysły realizowane',
                  icon: 'pi pi-fw pi-play',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS_IN_PROGRESS}`);
                  },
              },
              {
                  label: 'Pomysły zrealizowane',
                  icon: 'pi pi-fw pi-check-square',
                  command: () => {
                      navigation.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS_IMPLEMENTED}`);
                  },
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
