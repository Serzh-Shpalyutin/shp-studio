import React from 'react';
import Mailer from "./Mailer";

const Popup = () => {
  return (
      <div>
        <div className="overlay"></div>
        <div className="popup">
          <div className="popup__title">
            Заказать обратный звонок
          </div>
          
          <Mailer/>
        </div>
      </div>
  );
};

export default Popup;