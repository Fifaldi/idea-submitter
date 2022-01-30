import React from 'react';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import './login.page.scss';
import {Password} from 'primereact/password';
import {classNames} from 'primereact/utils';
import './login.page.scss';
import {useDispatch} from 'react-redux';
import {loginAction} from '@store/actions';
import {useFormik} from 'formik';
interface ILoginFormData {
    login: string;
    password: string;
}

const LoginPage = () => {
    const dispatch = useDispatch();

    const formik = useFormik<ILoginFormData>({
        initialValues: {
            login: '',
            password: '',
        },
        validate: (data: ILoginFormData) => {
            const errors: Partial<ILoginFormData> = {};

            if (!data.login) {
                errors.login = 'Login jest wymagany';
            }

            if (!data.password) {
                errors.password = 'Hasło jest wymagane';
            }

            return errors;
        },
        onSubmit: (data: ILoginFormData) => {
            dispatch(loginAction({login: data.login, password: data.password}));
            formik.resetForm();
        },
    });

    const isFormFieldValid = (name: 'password' | 'login'): boolean =>
        !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name: 'password' | 'login'): JSX.Element | null => {
        return isFormFieldValid(name) ? (
            <small className="p-error">{formik.errors[name]}</small>
        ) : null;
    };

    return (
        <section id="auth" className="main-container">
            <div className={'login-form'}>
                <h1 className="login-title mb-5">Login Form</h1>
                <form onSubmit={formik.handleSubmit} className="p-fluid">
                    <div className="mb-5">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-envelope" />
                            <InputText
                                id="login"
                                name="login"
                                value={formik.values.login}
                                onChange={formik.handleChange}
                                className={classNames({'p-invalid': isFormFieldValid('login')})}
                            />
                            <label
                                htmlFor="login"
                                className={classNames({'p-error': isFormFieldValid('login')})}>
                                Login*
                            </label>
                        </span>
                        {getFormErrorMessage('login')}
                    </div>
                    <div>
                        <span className="p-float-label">
                            <Password
                                id="password"
                                name="password"
                                feedback={false}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                toggleMask
                                className={classNames({'p-invalid': isFormFieldValid('password')})}
                            />
                            <label
                                htmlFor="password"
                                className={classNames({'p-error': isFormFieldValid('password')})}>
                                Password*
                            </label>
                        </span>
                        {getFormErrorMessage('password')}
                    </div>

                    <Button type="submit" label="Login" className="mt-6" />
                </form>
            </div>
        </section>
    );
};

export default LoginPage;
