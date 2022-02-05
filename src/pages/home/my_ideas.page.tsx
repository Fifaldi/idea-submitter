import {useHistory, useLocation} from 'react-router-dom';
import './homepage.styles.scss';
import React from 'react';
import IdeaListElement from '@components/idea/ideaListElement.component';
import {PanelRouting} from '@shared/enums';
import {Button} from 'primereact/button';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {deleteIdea} from '@store/actions';
import jwt_decode from 'jwt-decode';

const MyIdeasPage = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const editIdea = (id: string) => history.push(`${location.pathname}/${id}`);
    const handleDeleteIdea = (id: string) => dispatch(deleteIdea(id));
    const showDetails = (id: string) =>
        history.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS}/${id}`);
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const {token} = useSelector((state: IAppState) => state.auth);
    const decodedToken = jwt_decode(token) as any;
    return (
        <main className="container">
            <header className="home-header flex flex-row justify-content-between align-items-center">
                <h1>Lista moich pomysłów</h1>
                <Button
                    onClick={() => history.push(`${location.pathname}${PanelRouting.ADD_NEW_IDEA}`)}
                    label="Dodaj pomysł"
                    icon="pi pi-plus"
                    className="p-button-rounded p-button  h-3rem"
                />
            </header>
            <article className="home-ideas-list">
                {ideas
                    .filter((idea) => idea.author === decodedToken.email)
                    .map((idea, index) => (
                        <IdeaListElement
                            editable
                            editIdea={editIdea}
                            deleteIdea={handleDeleteIdea}
                            onPress={showDetails}
                            key={idea.id + index}
                            idea={idea}
                        />
                    ))}
            </article>
        </main>
    );
};

export default MyIdeasPage;
