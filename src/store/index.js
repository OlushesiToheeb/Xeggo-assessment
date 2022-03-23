import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './reducers/auth';
import TodoReducer from './reducers/todos';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            todos: TodoReducer,
        }),
        composeEnhancer(applyMiddleware())
    );
    return store;
};

export default store;
