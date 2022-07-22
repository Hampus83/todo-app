import './TodoItem.css';

function TodoItem(props) {

    const { username, id, todo, setTodoList } = props;

    async function deleteClickedTodo() {
        const input = {
            username: username,
            id: id
        }

        console.log(input);

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        }

        const response = await fetch('https://brawny-gusty-navy.glitch.me/api/todos/delete/', requestOptions);

        console.log(response);

        console.log(id);
        getTheTodos();
    }

    async function getTheTodos() {
        const localUser = JSON.parse(localStorage.getItem('user'));
        if (localUser) {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }
            const response = await fetch(`https://brawny-gusty-navy.glitch.me/api/todos/gettodos/${username}`, requestOptions);
            const data = await response.json();
            console.log(data);
    
            const storedTodos = data.todos;

            function sortArray(x, y) {
                return x.todo.localeCompare(y.todo);
            }

            const sortedStoredTodos = storedTodos.sort(sortArray);
    
            if (storedTodos.length > 0) {
                setTodoList(sortedStoredTodos);
            } 
        }  
    }

    return (
        <li className='todo-item' onClick={ deleteClickedTodo }>
            <span className='todo-item__text'>{ todo }</span>
        </li>
    );
}

export default TodoItem;    