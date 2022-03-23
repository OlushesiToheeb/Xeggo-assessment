import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/auth';
import Layout from '../../components/layout/layout';
import styles from './Landing.module.scss';
import Input from '../../components/input/Input';

const LandinPage = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formState;
        const payload = {
            username,
            password,
        };

        const authDetails = {
            isAuthenticated: true,
            user: payload.username,
        };

        dispatch(loginUser(authDetails));
        sessionStorage.setItem('user', JSON.stringify(authDetails));
    };

    const handleOnChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value });
    };

    return (
        <Layout>
            <div className={styles.login}>
                <div className={styles.login__header}>
                    <h2> Sign In 🥰 </h2>
                    <p>Please enter your details below to sign in</p>
                </div>

                <form
                    action=''
                    onSubmit={handleOnSubmit}
                    className={styles.form}
                >
                    <div className={styles.form__group}>
                        <label
                            hmtlfor='username'
                            className={styles.form__label}
                        >
                            User name
                        </label>

                        <Input
                            id='username'
                            type='text'
                            name='username'
                            placeholder='User name'
                            className={styles.form__input}
                            value={formState.username}
                            handleOnChange={handleOnChange}
                        />
                    </div>

                    <div className={styles.form__group}>
                        <label
                            hmtlfor='password'
                            className={styles.form__label}
                        >
                            Password
                        </label>

                        <Input
                            id='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            className={styles.form__input}
                            value={formState.password}
                            handleOnChange={handleOnChange}
                        />
                    </div>

                    <div className={styles.btnContainer}>
                        <button type='submit' className={styles.btn}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default LandinPage;
