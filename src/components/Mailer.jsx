import React from 'react';

const Mailer = () => {
  return (
      <div className="popup-form">
        <form className="form">
          <label className="form__label">
            <input className="form__input" type="text" placeholder="Имя"/>
          </label>
          
          <label className="form__label">
            <input className="form__input" type="tel" placeholder="Телефон"/>
          </label>
          
          <label className="form__label">
            <input className="form__input" type="email" placeholder="Е-mail"/>
          </label>
          
          <p className="form__text">
            Отправляя заявку, вы принимаете условия обработки персональных данных
          </p>
          
          <label>
            <input className="btn" type="submit" value="Отправить"/>
          </label>
        </form>
      </div>
  );
};

export default Mailer;