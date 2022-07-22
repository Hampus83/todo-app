const getTodos = (data) => {
    return {
        type: 'GET_TODO_LIST',
        payload: data
    }
}

const addTodoToArray = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
}

const deleteTodo = (data) => {
    return {
        type: 'DELETE_TODO',
        payload: data
    }
}

export { getTodos, addTodoToArray, deleteTodo }