import './Todos.css';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

import { useState } from 'react';

const Todos = (props) => {

    const { username } = props;

    const [todoList, setTodoList] = useState([]);

    return (
        <>
            <Header />
            <AddTodo username={username} todoList={todoList} setTodoList={setTodoList}/>
            <TodoList username={username} todoList={todoList} setTodoList={setTodoList}/>
        </>
    );
}

export default Todos;