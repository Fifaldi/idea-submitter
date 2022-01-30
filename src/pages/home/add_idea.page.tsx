import './homepage.styles.scss';
import React from 'react';

import {IdeaEditor} from '@components/idea';
import {IIdeaDetails} from '@shared/interfaces';
import {useDispatch} from 'react-redux';
import {createIdea} from '../../store/actions/idea.actions';

const EditIdeaPage = () => {
    const dispatch = useDispatch();
    const handleSave = (form: Omit<IIdeaDetails, 'author' | 'id'>) => dispatch(createIdea(form));
    return (
        <main className="container">
            <header className="home-header">
                <h1>Dodaj pomysł</h1>
            </header>
            <IdeaEditor handleSave={handleSave} />
        </main>
    );
};

export default EditIdeaPage;
