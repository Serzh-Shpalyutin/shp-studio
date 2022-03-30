import React from 'react';

const HeaderContacts = () => {
  return (
      <div className="header__contacts">
        <a className="header__contacts-item" href="tel:89537283128">
                    <span>
                      <img src="images/RU.svg" alt=""/>
                    </span>
          +7 (953) 728-31-28
        </a>
        <a className="header__contacts-item" href="mailto:info@shpstudio.ru">
                    <span>
                      <img src="images/MAIL.svg" alt=""/>
                    </span>
          info@shpstudio.ru
        </a>
      </div>
  );
};

export default HeaderContacts;