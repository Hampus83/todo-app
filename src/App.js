import './App.css';

import { Routes, Route } from 'react-router-dom';

import Todos from './views/Todos';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/todos' element={ <Todos /> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </div>
  );
}

export default App;
