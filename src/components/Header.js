import './Header.css';

import navicon from '../assets/navicon.svg';

function Header() {

    function openMenu() {
        console.log('hamburger-klick!');
    }

    return (
        <header className='header'>
            <section className='header__hamburgerWrapper' onClick={ openMenu }>
                <img className='header__hamburger' src={navicon} alt="" />
            </section>
        </header>      
    );
}

export default Header;