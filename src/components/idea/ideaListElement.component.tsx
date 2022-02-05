import {IIdea} from '@shared/interfaces';
import {Menu} from 'primereact/menu';
import React, {useRef} from 'react';
import {Card} from 'primereact/card';
import './idea.style.scss';
import {confirmDialog} from 'primereact/confirmdialog';
import {useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import jwt_decode from 'jwt-decode';
interface IIdeaListElement {
    idea: IIdea;
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
    const {token} = useSelector((state: IAppState) => state.auth);
    const decodedToken = jwt_decode(token) as any;
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
                    {idea.author === decodedToken.email && <i className="pi pi-user"></i>}
                </div>
                <div className="product-list-action">
                    <p>{idea.shortDescription}</p>
                    <div className="flex justify-content-between">
                        <h6>{idea.author}</h6>
                        {editable && <h6>{idea.status}</h6>}
                    </div>
                </div>
            </div>

            <Menu model={menuItems} popup ref={menuRef} id="popup_menu" />
        </Card>
    );
};
export default IdeaListElement;
