import './Signup.css';

import Header from '../components/Header';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function getUsername(event) {
        setUsername(event.target.value);
    }

    function getPassword(event) {
        setPassword(event.target.value);
    }

    function userLogin() {
        console.log('provar skapa konto!');
    }

    const navigate = useNavigate();

    // async function testTodos() {
    //     try {
    //         const response = await fetch('https://brawny-gusty-navy.glitch.me/api/todos');
    //         const data = await response.json();

    //         console.log(data);
    //     }
    //     catch(err) {
    //         console.error(err);
    //     }
    // }

    async function signUp() {
        const credentials = {
            username: username,
            password: password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }

        const response = await fetch('https://brawny-gusty-navy.glitch.me/api/account/signup/', requestOptions);

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
            <h1 className='title'>SKAPA KONTO</h1>
            <section className=" container signup">
                <input className='input signup__input' type="text" placeholder='ANVÄNDARNAMN' onKeyUp={ getUsername }/>
                <input className='input signup__input' type="password" placeholder='LÖSENORD' onKeyUp={ getPassword }/>
                <button className='button signup__signupButton' onClick={ signUp }>SKAPA KONTO</button>
            </section>  
        </>
    );
}

export default Signup;