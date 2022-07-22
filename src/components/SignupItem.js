import './SignupItem.css';

import { useNavigate } from 'react-router-dom';

function SignupItem(props) {

    const { username, setUsername, password, setPassword } = props;

    const navigate = useNavigate();

    function getUsername(event) {
        setUsername(event.target.value);
        if (event.keyCode == 13) {
            signUp();
        }
    }

    function getPassword(event) {
        setPassword(event.target.value);
        if (event.keyCode == 13) {
            signUp();
        }
    }

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
            localStorage.setItem('user', JSON.stringify(username));
        }
    }

    return (
        <section className=" container signup">
            <input className='input signup__input' type="text" placeholder='ANVÄNDARNAMN' onKeyUp={ getUsername }/>
            <input className='input signup__input' type="password" placeholder='LÖSENORD' onKeyUp={ getPassword }/>
            <button className='button signup__signupButton' onClick={ signUp }>SKAPA KONTO</button>
        </section>  
    );
}

export default SignupItem;