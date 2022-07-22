import './Login.css';

import Header from '../components/Header';
import LoginItem from '../components/LoginItem';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const { username, setUsername, password, setPassword } = props;

    const navigate = useNavigate();
    let checkLocalStorage = '';

    function checkUser() {
        checkLocalStorage = JSON.parse(localStorage.getItem('user'));
    }

    useEffect(() => {
        if (checkLocalStorage) {
            navigate('/todos');
        }
    }, []);

    checkUser();

    return (
        <>
            <Header />
            <h1 className='title'>LOGGA IN</h1>
            <LoginItem username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
        </>
    );
}

export default Login;