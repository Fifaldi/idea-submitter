import React from 'react';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {IIdea, IIdeaEditor} from '@shared/interfaces';
import {object, string} from 'yup';
import {useFormik} from 'formik';
import {Button} from 'primereact/button';
interface IIdeaEditorPage {
    editedIdea?: IIdea;
    handleSave: (form: IIdeaEditor) => void;
}
const IdeaEditor: React.FC<IIdeaEditorPage> = ({editedIdea, handleSave}) => {
    const {values, setFieldValue, handleSubmit, errors, touched} = useFormik<IIdeaEditor>({
        initialValues: {
            title: editedIdea?.title ?? '',
            shortDescription: editedIdea?.shortDescription ?? '',
            description: editedIdea?.description ?? '',
        },
        validationSchema: object().shape({
            title: string().required('*Pole wymagane'),
            shortDescription: string().required('*Pole wymagane'),
            description: string().required('*Pole wymagane'),
        }),
        onSubmit: (form) => handleSave(form),
    });
    return (
        <form className="px-8 py-5" onSubmit={handleSubmit}>
            <div className="my-6">
                <span className="p-float-label flex flex-column justify-content-center">
                    <InputText
                        className="bg-white text-primary"
                        id="inputtext"
                        value={values.title}
                        onChange={(e) => setFieldValue('title', e.target.value)}
                    />
                    <label htmlFor="inputtext" className="text-primary">
                        Nazwa
                    </label>
                </span>
                {errors.title && touched.title && (
                    <span className="text-pink-500">{errors.title}</span>
                )}
            </div>
            <div className="my-6">
                <span className="p-float-label flex flex-column justify-content-center">
                    <InputText
                        className="bg-white text-primary"
                        id="inputtext"
                        value={values.shortDescription}
                        onChange={(e) => setFieldValue('shortDescription', e.target.value)}
                    />
                    <label htmlFor="inputtext" className="text-primary">
                        Krotkie podumowanie
                    </label>
                </span>
                {errors.shortDescription && touched.shortDescription && (
                    <span className="text-pink-500">{errors.shortDescription}</span>
                )}
            </div>
            <div className="my-6">
                <span className="p-float-label flex flex-column justify-content-center">
                    <InputTextarea
                        className="bg-white text-primary"
                        value={values.description}
                        onChange={(e) => setFieldValue('description', e.target.value)}
                        rows={10}
                        cols={30}
                        autoResize
                    />
                    <label htmlFor="inputtext" className="text-primary">
                        Opis pomysłu
                    </label>
                </span>
                {errors.description && touched.description && (
                    <span className="text-pink-500">{errors.description}</span>
                )}
            </div>
            <div className=" flex justify-content-end">
                <Button
                    onClick={() => handleSubmit}
                    label="Zapisz"
                    icon="pi pi-save"
                    className="p-button-rounded p-button  h-3rem"
                />
            </div>
        </form>
    );
};

export default IdeaEditor;
