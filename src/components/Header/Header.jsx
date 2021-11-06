import React from 'react';

// Styles
import * as naming from '../../constants/styles';
import './Header.css';

const Header = () => (
    <header className={naming.HEADER.base}>
        <h1 className={naming.HEADER.title}>VEILLE TECHNOLOGIQUE</h1>
        <nav></nav>
    </header>
);

export default Header;
