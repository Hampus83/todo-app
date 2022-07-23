import './Signup.css';

import Header from '../components/Header';
import SignupItem from '../components/SignupItem';

const Signup = () => {

    return (
        <>
            <Header />
            <h1 className='title'>SKAPA KONTO</h1>
            <SignupItem />
        </>
    );
}

export default Signup;