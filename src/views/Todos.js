import './Todos.css';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

import { useState } from 'react';

const Todos = () => {

    const [todoList, setTodoList] = useState([]);

    return (
        <>
            <Header />
            <AddTodo todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </>
    );
}

export default Todos;