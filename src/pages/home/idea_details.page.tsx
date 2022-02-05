import {useParams} from 'react-router-dom';
import './homepage.styles.scss';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {isAdministrator} from '@store/selectors';
import {Button} from 'primereact/button';
import {changeIdeaStatus} from '../../store/actions/idea.actions';

const IdeaDetailsPage = () => {
    const {id} = useParams<{id: string}>();
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const idea = ideas.find((el) => el.id === id);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isAdministrator);
    if (!idea) {
        return null;
    }
    return (
        <main className="container">
            <header>
                <div>Szczegóły pomysłu</div>
            </header>
            <div>
                <div className="flex justify-content-between">
                    <h1>{idea.title}</h1>
                    {isAdmin && idea.status === 'pending' && (
                        <div className="flex">
                            <Button
                                onClick={() => dispatch(changeIdeaStatus(id, 'approved'))}
                                label="Zatwierdź pomysł"
                                icon="pi pi-check"
                                className="p-button-rounded p-button  h-3rem mx-2"
                            />
                            <Button
                                onClick={() => dispatch(changeIdeaStatus(id, 'declined'))}
                                label="Odrzuć pomysł"
                                icon="pi pi-times"
                                className="p-button-rounded p-button  h-3rem bg-pink-500 mx-2"
                            />
                        </div>
                    )}
                </div>
                <h2>{idea.author}</h2>
                <p>{idea.description}</p>
            </div>
        </main>
    );
};

export default IdeaDetailsPage;
