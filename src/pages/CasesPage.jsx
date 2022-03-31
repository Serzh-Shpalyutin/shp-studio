import React from 'react';
import CarouselCases from "../components/CarouselCases";

const CasesPage = () => {
  return (
      <div className="cases">
        <div className="head">
          <div className="section-title services__title">УСЛУГИ, КОТОРЫЕ ПРЕДОСТАВЛЯЕМ</div>
    
          <button className="btn">Связаться с нами</button>
        </div>
        
        <CarouselCases/>
      </div>
  );
};

export default CasesPage;