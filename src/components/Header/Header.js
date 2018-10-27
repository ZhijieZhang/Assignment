import React from 'react';

import Link from 'components/Link';

import Logo from 'assets/web-logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="header logo" />
      <div className="header__links">
        <Link href="https://reactjs.org/">React</Link>
        <Link href="https://angular.io/">Angular</Link>
        <Link href="https://vuejs.org/">Vue</Link>
      </div>
    </div>
  );
}

export default Header;