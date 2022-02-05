import {useHistory, useLocation} from 'react-router-dom';
import './homepage.styles.scss';
import React from 'react';
import IdeaListElement from '@components/idea/ideaListElement.component';
import {PanelRouting} from '@shared/enums';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {deleteIdea} from '@store/actions';

const PendingIdeasPage = () => {
    const history = useHistory();
    const showDetails = (id: string) =>
        history.push(`${PanelRouting.ROOT}${PanelRouting.IDEAS}/${id}`);
    const {ideas} = useSelector((state: IAppState) => state.idea);
    return (
        <main className="container">
            <header className="home-header flex flex-row justify-content-between align-items-center">
                <h1>Lista pomysłów oczekujących na zatwierdzenie</h1>
            </header>
            <article className="home-ideas-list">
                {ideas
                    .filter((idea) => idea.status === 'pending')
                    .map((idea, index) => (
                        <IdeaListElement onPress={showDetails} key={idea.id + index} idea={idea} />
                    ))}
            </article>
        </main>
    );
};

export default PendingIdeasPage;
