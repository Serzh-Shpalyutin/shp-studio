import React from 'react';
import Logo from './Logo';
import HeaderContacts from './HeaderContacts';

const Header = () => {
  return (
      <header className="header">
        <div className="header__container">
          <Logo/>
        
          <div className="header__container-rside">
            <HeaderContacts/>
          
            <button className="btn btn--gray btn-popup-js">
              СВЯЗАТЬСЯ С НАМИ
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;