import React from 'react';

// Styles
import * as naming from '../../constants/styles';
import './Header.css';

// Components
import BuildIcon from '@mui/icons-material/Build';

const Header = () => (
    <header className={naming.HEADER.base}>
        <h1 className={naming.HEADER.title}>
            <BuildIcon 
                className={naming.HEADER.icon} 
                fontSize="large" 
            />
            VEILLE TECHNO
        </h1>
        <nav></nav>
    </header>
);

export default Header;
