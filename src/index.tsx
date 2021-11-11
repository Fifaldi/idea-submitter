import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Toast} from 'primereact/toast';
import {ToastService} from '@shared/services';
export const appVersion = require('../package.json').version;

ReactDOM.render(
    <React.StrictMode>
        <Toast ref={ToastService.toastRef} />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
