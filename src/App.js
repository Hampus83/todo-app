import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Todos from './views/Todos';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/> } />
        <Route path='/todos' element={ <Todos username={username}/> } />
        <Route path='/signup' element={ <Signup username={username} setUsername={setUsername} password={password} setPassword={setPassword}/> } />
      </Routes>
    </div>
  );
}

export default App;
