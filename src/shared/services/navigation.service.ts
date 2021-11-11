import {BrowserHistory, State} from 'history';
import React from 'react';

class NavigationService {
    static navigationRef = React.createRef<BrowserHistory<State>>();

    static navigate(name: string, params: string[] | undefined = undefined) {
        this.navigationRef.current?.push(name, params);
    }
}
export default NavigationService;
