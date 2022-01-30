import {useHistory, useLocation} from 'react-router-dom';
import './homepage.styles.scss';
import React from 'react';
import IdeaListElement from '@components/idea/ideaListElement.component';
import {useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {Skeleton} from 'primereact/skeleton';
const IdeasPage = () => {
    const history = useHistory();
    const location = useLocation();
    const handleIdeaClick = (id: string) => history.push(`${location.pathname}/${id}`);
    const {ideas} = useSelector((state: IAppState) => state.idea);
    if (!ideas.length) {
        return (
            <main className="container">
                <header className="home-header">
                    <h1>Lista pomysłów</h1>
                </header>
                <article className="home-ideas-list">
                    <Skeleton className="skeleton-item" height="13rem"></Skeleton>
                    <Skeleton className="skeleton-item" height="13rem"></Skeleton>
                    <Skeleton className="skeleton-item" height="13rem"></Skeleton>
                </article>
            </main>
        );
    }
    return (
        <main className="container">
            <header className="home-header">
                <h1>Lista pomysłów</h1>
            </header>
            <article className="home-ideas-list">
                {ideas.map((idea, index) => (
                    <IdeaListElement onPress={handleIdeaClick} key={idea.id + index} idea={idea} />
                ))}
            </article>
        </main>
    );
};

export default IdeasPage;
