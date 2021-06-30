import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Zimo.png';
import './header.styles.scss'

const Header = () => (
    <div className="header">
        <Link className='logo-container' to="/">
            <img className='logo' src={Logo} alt="ZIMO" />
        </Link>
        <div className="options">
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                <Link className="option" to='/signin'>
                    SIGN IN
                </Link>
            </div>
        </div>
    </div>
)

export default Header