import React from 'react';

const ServicesPage = () => {
  return (
      <div className="services">
        <div className="head">
          <div className="section-title services__title">УСЛУГИ, КОТОРЫЕ ПРЕДОСТАВЛЯЕМ</div>
          
          <button className="btn">Связаться с нами</button>
        </div>
        
        <div className="services__grid">
          <div className="services__item">
            <div className="services__item-lside">
              <div className="services__item-title">Landing Page</div>
  
              <div className="services__item-text">
                Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.
              </div>
  
              <div className="services__item-info">
                <span className="services__item-info-item services__item-term">от 5 дней</span>
    
                <span className="services__item-info-item services__item-price">от 15.000 ₽</span>
              </div>
            </div>
  
            <div className="services__item-rside">
              <button className="btn btn--gray btn--border">заказать</button>
            </div>
          </div>
  
          <div className="services__item">
            <div className="services__item-lside">
              <div className="services__item-title">Многостраничный сайт</div>
      
              <div className="services__item-text">
                Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.
              </div>
      
              <div className="services__item-info">
                <span className="services__item-info-item services__item-term">от 9 дней</span>
        
                <span className="services__item-info-item services__item-price">от 35.000 ₽</span>
              </div>
            </div>
  
            <div className="services__item-rside">
              <button className="btn btn--gray btn--border">заказать</button>
            </div>
          </div>
  
          <div className="services__item">
            <div className="services__item-lside">
              <div className="services__item-title">Интернет-магазин</div>
      
              <div className="services__item-text">
                Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.
              </div>
      
              <div className="services__item-info">
                <span className="services__item-info-item services__item-term">от 15 дней</span>
        
                <span className="services__item-info-item services__item-price">от 59.000 ₽</span>
              </div>
            </div>
  
            <div className="services__item-rside">
              <button className="btn btn--gray btn--border">заказать</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServicesPage;