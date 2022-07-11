import './Login.css';

import Header from '../components/Header';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function getUsername(event) {
        setUsername(event.target.value);
    }

    function getPassword(event) {
        setPassword(event.target.value);
    }

    async function userLogin() {
        const credentials = {
            username: username,
            password: password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }

        const response = await fetch('https://brawny-gusty-navy.glitch.me/api/account/login/', requestOptions);

        const data = await response.json();
        console.log(data);

        if (data.success === true) {
            navigate('/todos');
        }
        // .then(response => {
        //     if (response.ok) {
        //         return response.json()
        //     } else {
        //         console.log('hej');
        //     }
        // });
    }

    return (
        <>
            <Header />
            <h1 className='title'>LOGGA IN</h1>
            <section className="container login">
                <input className='input login__input' type="text" placeholder='ANVÄNDARNAMN' onKeyUp={ getUsername }/>
                <input className='input login__input' type="password" placeholder='LÖSENORD' onKeyUp={ getPassword }/>
                <button className='button login__loginButton' onClick={ userLogin }>LOGGA IN</button>
                <Link className='login__register' to="/signup">Skapa konto här</Link>
            </section>
        </>
    );
}

export default Login;