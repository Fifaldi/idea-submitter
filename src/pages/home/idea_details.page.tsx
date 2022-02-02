import {useParams} from 'react-router-dom';
import './homepage.styles.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';

const IdeaDetailsPage = () => {
    const {id} = useParams<{id: string}>();
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const idea = ideas.find((el) => el.id === id);
    if (!idea) {
        return null;
    }
    return (
        <main className="container">
            <header>
                <div>Szczegóły pomysłu</div>
            </header>
            <div>
                <h1>{idea.title}</h1>
                <h2>{idea.author}</h2>
                <p>{idea.description}</p>
            </div>
        </main>
    );
};

export default IdeaDetailsPage;
