import './Signup.css';

import Header from '../components/Header';
import SignupItem from '../components/SignupItem';

const Signup = (props) => {

    const { username, setUsername, password, setPassword } = props;

    return (
        <>
            <Header />
            <h1 className='title'>SKAPA KONTO</h1>
            <SignupItem username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
        </>
    );
}

export default Signup;