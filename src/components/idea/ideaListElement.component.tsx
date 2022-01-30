import {IIdeaDetails} from '@shared/interfaces';
import {Menu} from 'primereact/menu';
import React, {useRef} from 'react';
import {Card} from 'primereact/card';
import './idea.style.scss';
import {confirmDialog} from 'primereact/confirmdialog';

interface IIdeaListElement {
    idea: IIdeaDetails;
    onPress: (id: string) => void;
    editable?: boolean;
    editIdea?: (id: string) => void;
    deleteIdea?: (id: string) => void;
}
const IdeaListElement: React.FC<IIdeaListElement> = ({
    idea,
    onPress,
    editable,
    editIdea,
    deleteIdea,
}) => {
    const menuRef = useRef<Menu | null>(null);
    const menuItems = [
        {
            label: 'Zobacz szczegóły',
            icon: 'pi pi-search',
            command: () => onPress(idea.id),
        },
        {
            label: 'Edytuj',
            icon: 'pi pi-pencil',
            command: () => editIdea && editIdea(idea.id),
        },
        {
            label: 'Usuń',
            icon: 'pi pi-trash',
            command: () => {
                confirmDialog({
                    message: 'Czy na pewno chcesz usunąć ten pomysł?',
                    header: 'Potwirdzenie',
                    icon: 'pi pi-exclamation-triangle',
                    acceptClassName: 'p-button-danger',
                    acceptLabel: 'Tak',
                    rejectLabel: 'Nie',
                    accept: () => deleteIdea && deleteIdea(idea.id),
                });
            },
        },
    ];
    return (
        <Card className="product-item">
            <div
                onClick={(e) => {
                    editable ? menuRef.current?.toggle(e) : onPress(idea.id);
                }}>
                <div className="flex flex-row align-items-center justify-content-between">
                    <h4>{idea.title}</h4>
                    {idea.author === 'Jan Kowalski' && <i className="pi pi-user"></i>}
                </div>
                <div className="product-list-action">
                    <p>{idea.summary}</p>
                    <h6 className="mb-2">{idea.author}</h6>
                </div>
            </div>

            <Menu model={menuItems} popup ref={menuRef} id="popup_menu" />
        </Card>
    );
};
export default IdeaListElement;
