import './LoginItem.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginItem(props) {

    const { username, setUsername, password, setPassword } = props;

    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();

    let classNames = 'login__error-message-hidden';

    function getUsername(event) {
        setUsername(event.target.value);
        if (event.keyCode == 13) {
            userLogin();
        }
    }

    function getPassword(event) {
        setPassword(event.target.value);
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

        if (data.success === true) {
            navigate('/todos');
            localStorage.setItem('user', JSON.stringify(username));
        } else {
            showErrorMsg();
        }
    }

    return (
        <section className="container login">
            <input className='input login__input' type="text" placeholder='ANVÄNDARNAMN' onKeyUp={ getUsername }/>
            <input className='input login__input' type="password" placeholder='LÖSENORD' onKeyUp={ getPassword }/>
            <button className='button login__loginButton' onClick={ userLogin }>LOGGA IN</button>
            <h4 className={ classNames }>Felaktigt användarnamn eller lösenord</h4>
            <Link className='login__register' to="/signup">Skapa konto här</Link>
        </section>
    );
}

export default LoginItem;