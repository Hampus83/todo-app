import './SignupItem.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignupItem() {

    const [signupUsername, setSignupUsername] = useState();
    const [signupPassword, setSignupPassword] = useState();

    const navigate = useNavigate();

    function getSignupUsername(event) {
        setSignupUsername(event.target.value);
        if (event.keyCode == 13) {
            signUp();
        }
    }

    function getSignupPassword(event) {
        setSignupPassword(event.target.value);
        if (event.keyCode == 13) {
            signUp();
        }
    }

    async function signUp() {
        const credentials = {
            username: signupUsername,
            password: signupPassword
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
            localStorage.setItem('user', JSON.stringify(signupUsername));
        }
    }

    return (
        <section className=" container signup">
            <input className='input signup__input' type="text" placeholder='ANVÄNDARNAMN' onKeyUp={ getSignupUsername }/>
            <input className='input signup__input' type="password" placeholder='LÖSENORD' onKeyUp={ getSignupPassword }/>
            <button className='button signup__signupButton' onClick={ signUp }>SKAPA KONTO</button>
        </section>  
    );
}

export default SignupItem;