export const addTodo = (payload) => {
    return {
        type: 'ADD_TODOS',
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: 'DELETE_TODOS',
        payload,
    };
};
