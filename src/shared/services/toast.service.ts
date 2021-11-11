import {Toast} from 'primereact/toast';
import React from 'react';

abstract class ToastService {
    static toastRef = React.createRef<Toast>();
    static success(title: string, message: string) {
        this.toastRef.current?.show({
            severity: 'success',
            summary: title,
            detail: message,
        });
    }
    static error(err: Record<string, any>) {
        const response = err.response;
        this.toastRef.current?.show({
            severity: 'error',
            summary: response.status,
            detail: response.data.message,
        });
    }
}
export default ToastService;
