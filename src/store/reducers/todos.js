const initialState = {
    todos: [
        {
            id: 1,
            todo: 'cook today',
        },

        {
            id: 2,
            todo: 'wash today',
        },

        {
            id: 3,
            todo: 'run today',
        },
    ],
};

const TodoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_TODOS':
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        case 'DELETE_TODOS':
            const filteredTodos = state.todos.filter(
                (todo) => todo.id !== payload
            );
            return {
                ...state,
                todos: filteredTodos,
            };
        default:
            return state;
    }
};

export default TodoReducer;
