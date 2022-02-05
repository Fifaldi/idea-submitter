import './homepage.styles.scss';
import React from 'react';
import {useParams} from 'react-router-dom';
import {IdeaEditor} from '@components/idea';
import {IIdeaEditor} from '@shared/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {editIdea} from '@store/actions';

const EditIdeaPage = () => {
    const {id} = useParams<{id: string}>();
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const currentIdea = ideas.find((el) => el.id === id);
    const dispatch = useDispatch();

    const handleSave = (form: IIdeaEditor) => {
        if (currentIdea) dispatch(editIdea(id, form));
    };

    if (!currentIdea) {
        return null;
    }

    return (
        <main className="container">
            <header className="home-header">
                <h1>Edytuj pomysł</h1>
            </header>
            <IdeaEditor handleSave={handleSave} editedIdea={currentIdea} />
        </main>
    );
};

export default EditIdeaPage;
