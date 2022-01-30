import {useHistory, useLocation} from 'react-router-dom';
import './homepage.styles.scss';
import React, {useState} from 'react';
import IdeaListElement from '@components/idea/ideaListElement.component';
import {useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {Skeleton} from 'primereact/skeleton';
import {InputText} from 'primereact/inputtext';
const IdeasPage = () => {
    const history = useHistory();
    const location = useLocation();
    const handleIdeaClick = (id: string) => history.push(`${location.pathname}/${id}`);
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const [searchValue, setSearchValue] = useState('');
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
            <div className="flex justify-content-center">
                <span className="my-4 p-float-label flex flex-column justify-content-center w-4">
                    <InputText
                        className="bg-white text-primary"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <label htmlFor="inputtext" className="text-primary">
                        <i className="pi pi-search mr-2" /> Szukaj
                    </label>
                </span>
            </div>
            <article className="home-ideas-list">
                {ideas
                    .filter(
                        (idea) =>
                            idea.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                            idea.author.toLowerCase().includes(searchValue.toLowerCase()),
                    )
                    .map((idea, index) => (
                        <IdeaListElement
                            onPress={handleIdeaClick}
                            key={idea.id + index}
                            idea={idea}
                        />
                    ))}
            </article>
        </main>
    );
};

export default IdeasPage;
