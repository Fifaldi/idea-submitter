import {IAppState} from '@store/reducers';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {Rating} from 'primereact/rating';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {IIdea} from '@shared/interfaces';
import {rateIdea} from '@store/actions';

interface IRateModal {
    visible: boolean;
    onHide: () => void;
    idea: IIdea;
}

const RateModal: React.FC<IRateModal> = ({visible, onHide, idea}) => {
    const [value, setValue] = useState(0);
    const {token} = useSelector((state: IAppState) => state.auth);
    const decodedToken = jwt_decode(token) as any;
    const dispatch = useDispatch();

    const checkIfUsersIdea = () => decodedToken.user_id === idea.userId;
    const checkIfUserRated = () => idea.reviewers.includes(decodedToken.user_id);

    const onRate = () => {
        dispatch(
            rateIdea({
                id: idea.id,
                userId: decodedToken.user_id,
                rating: value,
                currentRating: idea.rating,
                currentReviewers: idea.reviewers,
            }),
        );
        onHide();
    };

    const renderFooter = () => {
        return (
            <div>
                <Button
                    label="Anuluj"
                    icon="pi pi-times"
                    onClick={onHide}
                    className="p-button-text"
                />
                <Button label="Zapisz" icon="pi pi-check" onClick={onRate} autoFocus />
            </div>
        );
    };
    const renderCancel = () => {
        return (
            <div>
                <Button
                    label="Anuluj"
                    icon="pi pi-times"
                    onClick={onHide}
                    className="p-button-text"
                />
            </div>
        );
    };

    return (
        <Dialog
            header="Oceń pomysł"
            visible={visible}
            style={{width: '20vw'}}
            footer={() =>
                checkIfUserRated() || checkIfUsersIdea() ? renderCancel() : renderFooter()
            }
            onHide={() => onHide()}>
            {checkIfUserRated() ? (
                <p>Oceniłeś już ten pomysł!</p>
            ) : checkIfUsersIdea() ? (
                <p>Nie możesz ocenić własnego pomysłu!</p>
            ) : (
                <Rating
                    value={value}
                    cancel={false}
                    onChange={(e) => setValue(e.value as number)}
                />
            )}
        </Dialog>
    );
};

export default RateModal;
