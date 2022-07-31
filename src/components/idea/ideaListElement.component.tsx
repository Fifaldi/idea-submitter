import {IIdea} from '@shared/interfaces';
import {Menu} from 'primereact/menu';
import React, {useRef} from 'react';
import {Card} from 'primereact/card';
import './idea.style.scss';
import {confirmDialog} from 'primereact/confirmdialog';
import {useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import jwt_decode from 'jwt-decode';
import {Rating} from 'primereact/rating';
import {createImmediatelyInvokedArrowFunction} from 'typescript';
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
    const tooltipText =
        idea.status === 'approved'
            ? 'Pomysł zaakceptowany'
            : idea.status === 'declined'
            ? 'Pomysł odrzucony'
            : 'Pomysł weryfikowany';
    const menuItemsBase = {
        label: 'Zobacz szczegóły',
        icon: 'pi pi-search',
        command: () => onPress(idea.id),
    };
    const menuItemsFull = [
        menuItemsBase,
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
                    header: 'Potwierdzenie',
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
                        {editable && (
                            <div className="my-idea-status flex justify-content-center align-items-center">
                                <h6
                                    className={
                                        idea.status === 'approved'
                                            ? ' text-green-500'
                                            : idea.status === 'declined'
                                            ? 'text-pink-500  '
                                            : ''
                                    }>
                                    {tooltipText}
                                </h6>
                            </div>
                        )}
                    </div>
                    {!!idea.rating && (
                        <div className="w-5 flex align-items-center">
                            <p className="mr-1">({idea.reviewers.length})</p>

                            <Rating value={idea.rating} readOnly stars={5} cancel={false} />
                        </div>
                    )}
                </div>
            </div>

            <Menu
                model={idea.status === 'approved' ? [menuItemsBase] : menuItemsFull}
                popup
                ref={menuRef}
                id="popup_menu"
            />
        </Card>
    );
};
export default IdeaListElement;
