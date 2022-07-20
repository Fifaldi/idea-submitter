import {IImplementationStatusType} from '@shared/interfaces';

export const getIdeaImplementationStatus = (status: IImplementationStatusType) => {
    switch (status) {
        case 'in_progress':
            return 'W trakcie realizacji';
        case 'implemented':
            return 'Zrealizowano';
        case 'not_implemented':
        default:
            return 'Oczekuje na realizajce';
    }
};
