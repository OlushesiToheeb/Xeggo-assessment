import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout/layout';
import styles from './Main.module.scss';
import Input from '../../components/input/Input';
import { addTodo, deleteTodo } from '../../store/actions/todos';
import { logoutUser } from '../../store/actions/auth';
import { Navigate } from 'react-router-dom';

const Main = ({ username, todos, dispatch }) => {
    const [todo, setTodo] = useState('');

    const handleOnChange = ({ target }) => {
        setTodo(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        const payload = {
            id: getRandomInt(100),
            todo: todo,
        };

        dispatch(addTodo(payload));

        setTodo('');
    };

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const signOutHandler = () => {
        sessionStorage.clear('user');
        <Navigate to='/login' />;
        dispatch(logoutUser());
    };

    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.main__header}>
                    <h2>
                        🎉 Welcome <span>{username}</span>
                    </h2>
                </div>

                <form
                    action=''
                    className={styles.main__form}
                    onSubmit={handleSubmit}
                >
                    <Input
                        id='todo'
                        type='text'
                        name='todo'
                        value={todo}
                        placeholder='Add Todo'
                        handleOnChange={handleOnChange}
                    />

                    <button type='submit' className={styles.main__formBtn}>
                        &#43;
                    </button>
                </form>

                <div className={styles.main__body}>
                    <ul className={styles.todos}>
                        {todos?.map((todo, index) => (
                            <li key={index} className={styles.todo}>
                                <span className={styles.todo__index}>
                                    {index + 1}.
                                </span>
                                <div className={styles.todo__item}>
                                    <span>{todo.todo}</span>
                                    <span
                                        className={styles.todo__bin}
                                        onClick={() =>
                                            deleteTodoHandler(todo.id)
                                        }
                                    >
                                        🗑
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.main__footer} onClick={signOutHandler}>
                    <p>Sign Out</p>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.user,
        todos: state.todos.todos,
    };
};

export default connect(mapStateToProps)(Main);
