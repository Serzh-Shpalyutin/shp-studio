import React from 'react';
import Header from '../components/Header';

const FirstScreen = () => {
  
  return (
      <div className="first-screen">
        <Header/>
      
        <div className="first-screen__content">
          <h1 className="first-screen__title">Shpalyutin <br/><span>Studio</span></h1>
        
          <p className="first-screen__subtitle">
            {/*РАЗРАБАТЫВАЕМ сайты, которые помогают бизнесу <br/>*/}
            {/*в продвижении услуг и продаже товаров*/}
            
            Сайт находится в разработке. Многие функции могут не работать. Приносим свои извинения. Всю информацию уточняйте по телефону вверху
          </p>
        
          <button className="btn btn-popup-js">ЗАКАЗАТЬ САЙТ</button>
        </div>
      </div>
  );
};

export default FirstScreen;