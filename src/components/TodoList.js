import './TodoList.css';

import TodoItem from './TodoItem';

import { useEffect } from 'react';

function TodoList(props) {

    const { todoList, setTodoList } = props;

    const username = JSON.parse(localStorage.getItem('user'));

    const todoItems = todoList.map((todo) => {
        return <TodoItem id={ todo.id } todo={ todo.todo } key={ todo.id } username={ username } todoList={ todoList } setTodoList={ setTodoList } />
    });

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

    useEffect(() => {
        getTheTodos();
    }, [],);
    
    return (
        <ul className='todos'>
           { todoItems } 
        </ul>  
    );
}

export default TodoList;