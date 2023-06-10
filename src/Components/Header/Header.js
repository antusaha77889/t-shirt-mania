import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/Orders'>Orders</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/About'>About</Link>
           
        </nav>
    );
};

export default Header;