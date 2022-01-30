import {useParams} from 'react-router-dom';
import './homepage.styles.scss';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IAppState} from '@store/reducers';
import {useEffect} from 'react';
import {getIdeaDetails} from '@store/actions';

const IdeaDetailsPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        dispatch(getIdeaDetails(id));
    }, []);

    const idea = useSelector((state: IAppState) => state.idea.currentIdea);
    if (!idea) {
        return null;
    }
    return (
        <main className="container">
            <div>
                <h1>{idea.title}</h1>
                <h2>{idea.author}</h2>
                <p>{idea.description}</p>
            </div>
        </main>
    );
};

export default IdeaDetailsPage;
