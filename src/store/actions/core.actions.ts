export const CoreActions = {
    HANDLE_ERROR: '[Core] Handle error',
    HANDLE_SUCCESS: '[Core] Handle success',
    TOAST_CREATED: '[Core] Toast created',
    GO: '[Core] Navigate to',
    NAVIGATED_TO: '[Core] Navigated to',
};

export const go = (data: string, params?: any) => ({
    type: CoreActions.GO,
    data,
    params,
});

export const navigatedTo = () => ({
    type: CoreActions.NAVIGATED_TO,
});

export const handleError = (data: string | Record<string, any>) => ({
    type: CoreActions.HANDLE_ERROR,
    data: data,
});

export const handleSuccess = (data: string | Record<string, any>) => ({
    type: CoreActions.HANDLE_SUCCESS,
    data: data,
});

export const toastCreated = () => ({
    type: CoreActions.TOAST_CREATED,
});
