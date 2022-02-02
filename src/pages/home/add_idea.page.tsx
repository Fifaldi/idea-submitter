import './homepage.styles.scss';
import React from 'react';

import {IdeaEditor} from '@components/idea';
import {IIdea, IIdeaEditor} from '@shared/interfaces';
import {useDispatch} from 'react-redux';
import {createIdea} from '@store/actions';

const EditIdeaPage = () => {
    const dispatch = useDispatch();
    const handleSave = (form: IIdeaEditor) => dispatch(createIdea(form));
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
