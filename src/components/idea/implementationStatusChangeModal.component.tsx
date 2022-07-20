import {IIdea} from '@shared/interfaces';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {RadioButton} from 'primereact/radiobutton';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeIdeaImplementationStatus} from '../../store/actions/idea.actions';
interface IImplementationStatusChangeModal {
    idea: IIdea;
    visible: boolean;
    onHide(): void;
}
const ImplementationStatusChangeModal: React.FC<IImplementationStatusChangeModal> = ({
    idea,
    visible,
    onHide,
}) => {
    const [value, setValue] = useState(idea.implementation_status);
    const dispatch = useDispatch();
    const onStatusChange = () => {
        dispatch(
            changeIdeaImplementationStatus({
                id: idea.id,
                implementation_status: value,
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
                <Button label="Zapisz" icon="pi pi-check" onClick={onStatusChange} />
            </div>
        );
    };
    return (
        <Dialog
            header="Zmień status realizacji pomysłu"
            visible={visible}
            style={{width: '20vw'}}
            footer={() => renderFooter()}
            onHide={() => onHide()}>
            <div>
                <div className="my-2">
                    <RadioButton
                        className="mr-2"
                        inputId="city2"
                        name="city"
                        value="not_implemented"
                        onChange={(e) => setValue(e.value)}
                        checked={value === 'not_implemented'}
                    />
                    <label>Oczekuje na realizację</label>
                </div>
                <div className="my-2">
                    <RadioButton
                        className="mr-2"
                        inputId="city2"
                        name="city"
                        value="in_progress"
                        onChange={(e) => setValue(e.value)}
                        checked={value === 'in_progress'}
                    />
                    <label>W trakcie realizacji</label>
                </div>
                <div className="my-2">
                    <RadioButton
                        disabled={idea.implementation_status === 'not_implemented'}
                        className="mr-2"
                        inputId="city2"
                        name="city"
                        value="implemented"
                        onChange={(e) => setValue(e.value)}
                        checked={value === 'implemented'}
                    />
                    <label
                        style={{
                            opacity: idea.implementation_status === 'not_implemented' ? 0.5 : 1,
                        }}>
                        Zrealizowany
                    </label>
                </div>
            </div>
        </Dialog>
    );
};

export default ImplementationStatusChangeModal;
