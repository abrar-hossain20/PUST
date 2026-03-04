import React from 'react';
import Navbar from './Navbar';
import MastHead from './MastHead';

const Header = () => {
    return (
        <header>
            <MastHead></MastHead>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;