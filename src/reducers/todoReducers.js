const initialState  = {
    todos: []
};

const todoReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'GET_TODO_LIST':
            return {
                ...state,
                todos: action.payload
            }
            
        case 'ADD_TODO':

        // const copyTodoArray = [...state.todos];
        // copyTodoArray.push({ id: state.todos.length, todo: action.payload });

        // return {
        //     ...state,
        //     todos: copyTodoArray
        // }
        return {
            ...state,
            todos: [
                ...state.todos,
                { id: state.todos.length, todo: action.payload }
            ]
        }

        case 'DELETE_TODO':
            const copyTodoArray = [...state.todos];

            const newTodoArray = copyTodoArray.filter((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...state,
                    todos: newTodoArray
                }
            });
    
    default:
        return state
    }
}

export default todoReducer;