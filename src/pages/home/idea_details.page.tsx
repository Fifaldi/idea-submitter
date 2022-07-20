import {useParams} from 'react-router-dom';
import './homepage.styles.scss';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '@store/reducers';
import {isAdministrator} from '@store/selectors';
import {Button} from 'primereact/button';
import {changeIdeaStatus} from '../../store/actions/idea.actions';
import {ImplementationStatusChangeModal, RateModal} from '@components/idea';
import {getIdeaImplementationStatus} from '@shared/functions';

const IdeaDetailsPage = () => {
    const {id} = useParams<{id: string}>();
    const {ideas} = useSelector((state: IAppState) => state.idea);
    const idea = ideas.find((el) => el.id === id);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isAdministrator);
    const [showRateModalVisible, setRateModalVisible] = useState(false);
    const [showImplementationStatusChangeModal, setShowImplementationStatusChangeModal] =
        useState(false);

    if (!idea) {
        return null;
    }
    return (
        <main className="container flex flex-column">
            <header className="flex justify-content-between">
                <div>Szczegóły pomysłu</div>
            </header>
            {isAdmin && (
                <div className="px-6 absolute right-0 flex flex-column">
                    <div className="flex px-6 mb-2">
                        <div className="mr-2">Status realizacji pomysłu:</div>
                        <div className="font-bold">
                            {getIdeaImplementationStatus(idea.implementation_status)}
                        </div>
                    </div>
                    {idea.implementation_status !== 'implemented' && (
                        <Button
                            onClick={() => setShowImplementationStatusChangeModal(true)}
                            label="Zmień status realizacji pomysłu"
                            icon="pi pi-chart-line"
                            className="p-button-rounded p-button  h-3rem mx-2"
                        />
                    )}
                    {showImplementationStatusChangeModal && (
                        <ImplementationStatusChangeModal
                            idea={idea}
                            visible={showImplementationStatusChangeModal}
                            onHide={() => setShowImplementationStatusChangeModal(false)}
                        />
                    )}
                </div>
            )}
            <div className="flex-1">
                <div className="flex justify-content-between">
                    <h1>{idea.title}</h1>
                    {isAdmin && idea.status === 'pending' && (
                        <div className="flex">
                            <Button
                                onClick={() => dispatch(changeIdeaStatus(id, 'approved'))}
                                label="Zatwierdź pomysł"
                                icon="pi pi-check"
                                className="p-button-rounded p-button  h-3rem mx-2"
                            />
                            <Button
                                onClick={() => dispatch(changeIdeaStatus(id, 'declined'))}
                                label="Odrzuć pomysł"
                                icon="pi pi-times"
                                className="p-button-rounded p-button  h-3rem bg-pink-500 mx-2"
                            />
                        </div>
                    )}
                </div>
                <h4>{idea.author}</h4>
                <p>{idea.description}</p>
            </div>
            {!isAdmin && (
                <footer className="h-4rem flex sm:w-12 lg:w-7 justify-content-between align-items-center">
                    <h3>Spodobał Ci się ten pomysł? Podziel się swoją opinią z jego autorem!</h3>
                    <Button
                        onClick={() => setRateModalVisible(true)}
                        label="Oceń pomysł"
                        icon="pi pi-star"
                        className="p-button-rounded p-button  h-3rem"
                    />
                    {showRateModalVisible && (
                        <RateModal
                            visible={showRateModalVisible}
                            onHide={() => setRateModalVisible(false)}
                            idea={idea}
                        />
                    )}
                </footer>
            )}
        </main>
    );
};

export default IdeaDetailsPage;
