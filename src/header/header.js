import React from 'react';

import styles from './header.module.css';
import Logo from '../Image/Logo.png';

function Header () {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="QH img" className={styles.logo} />
            <div className={styles.heading}>QH Inter College!</div>
        </div>
    );
}

export default Header;