import './Todos.css';

import Header from '../components/Header';
import TodoList from '../components/TodoList';

const Todos = () => {
    return (
        <>
            <>
            <Header />
            <h1 className='title'>TODOS</h1>
            <section className="container add-todo">
                <input className='input add-todo__input' type="text" placeholder='lägg till todo...' />
                <button className='button add-todo__button'>LÄGG TILL</button>
            </section>
            <TodoList /> 
        </>
        </>
    );
}

export default Todos;