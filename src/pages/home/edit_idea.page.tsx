import './homepage.styles.scss';
import React from 'react';
import {useParams} from 'react-router-dom';
import {IdeaEditor} from '@components/idea';
import {IIdeaEditor} from '@shared/interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {useEffect} from 'react';
import {getIdeaDetails} from '@store/actions';
import {editIdea} from '../../store/actions/idea.actions';

const EditIdeaPage = () => {
    const {id} = useParams<{id: string}>();
    const dispatch = useDispatch();
    const {currentIdea} = useSelector((state: IAppState) => state.idea);
    const handleSave = (form: IIdeaEditor) => {
        if (currentIdea) dispatch(editIdea(currentIdea.id, form));
    };

    useEffect(() => {
        dispatch(getIdeaDetails(id));
    }, []);

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
