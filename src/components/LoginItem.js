import './LoginItem.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginItem() {

    const [visible, setVisible] = useState(false);
    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();

    const navigate = useNavigate();

    let classNames = 'login__error-message-hidden';

    function getLoginUsername(event) {
        setLoginUsername(event.target.value);
        if (event.keyCode == 13) {
            userLogin();
        }
    }

    function getLoginPassword(event) {
        setLoginPassword(event.target.value);
        if (event.keyCode == 13) {
            userLogin();
        }
    }

    function showErrorMsg() {
        if (!visible) {
            setVisible(true);
        } 
    }

    if (visible) {
        classNames += " login__error-message-visible";
    } else {
        classNames = "login__error-message-hidden";
    }

    async function userLogin() {
        const credentials = {
            username: loginUsername,
            password: loginPassword
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }

        const response = await fetch('https://brawny-gusty-navy.glitch.me/api/account/login/', requestOptions);

        const data = await response.json();        

        if (data.success === true) {
            navigate('/todos');
            localStorage.setItem('user', JSON.stringify(loginUsername));
        } else {
            showErrorMsg();
        }
    }

    return (
        <section className="container login">
            <input className='input login__input' type="text" placeholder='ANVÄNDARNAMN' onKeyUp={ getLoginUsername }/>
            <input className='input login__input' type="password" placeholder='LÖSENORD' onKeyUp={ getLoginPassword }/>
            <button className='button login__loginButton' onClick={ userLogin }>LOGGA IN</button>
            <h4 className={ classNames }>Felaktigt användarnamn eller lösenord</h4>
            <Link className='login__register' to="/signup">Skapa konto här</Link>
        </section>
    );
}

export default LoginItem;