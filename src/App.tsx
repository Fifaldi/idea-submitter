import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@store/store';
import './App.scss';
import {ContentWrapper} from '@components/index';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ContentWrapper />
            </PersistGate>
        </Provider>
    );
}

export default App;
