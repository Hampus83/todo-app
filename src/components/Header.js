import './Header.css';

import { useNavigate } from 'react-router-dom';

import logoutIcon from '../assets/logout_FILL0_wght400_GRAD0_opsz48.svg';

function Header() {

    const navigate = useNavigate();

    function logOut() {
        console.log('localStorage tömd!');
        localStorage.clear();
        navigate('/');
    }

    return (
        <header className='header'>
            <h2 className='header__username'>{ JSON.parse(localStorage.getItem('user')) }</h2>
            <section className='header__logout-icon-Wrapper' onClick={ logOut }>
                <img className='header__logout-icon' src={ logoutIcon } alt="" />
            </section>
        </header>      
    );
}

export default Header;