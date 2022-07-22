import './AddTodo.css';

import { useState } from 'react';
import { useRef } from 'react';

function AddTodo(props) {

    const { setTodoList } = props;
    const ref = useRef(null);
    const [todoText, setTodoText] = useState();
    const username = JSON.parse(localStorage.getItem('user'));


    function getInput(event) {
        setTodoText(event.target.value);
        if (event.keyCode == 13) {
            addNewTodo();
        }
    }

    async function addNewTodo() {
        const input = {
            username: username,
            todo: todoText
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        }

        const response = await fetch('https://brawny-gusty-navy.glitch.me/api/todos/', requestOptions);

        const data = await response.json();
        console.log(data);

        getTheTodos();
        ref.current.value = '';
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
        <section className="container add-todo">
            <input className='input add-todo__input' type="text" ref={ ref } placeholder='lägg till todo...' onKeyUp={getInput} onInput={getInput}/>
            <button className='button add-todo__button' onClick={ addNewTodo }>LÄGG TILL</button>
        </section>
    );
}

export default AddTodo;
