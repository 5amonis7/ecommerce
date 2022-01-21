import React from 'react';

const top = () => {
  return <div className="top">
            <h1>Making<br />Every Traveler<br />Secured</h1>
            <div className="circles">
                <div className="circle1"><img src={require('./images/hiking1.png')} alt='hiking'/></div>
                <div className="circle2"><img src={require('./images/work1.png')} alt='work'/></div>
                <div className="circle3"><img src={require('./images/school1.png')} alt='wchool'/></div>
            </div>
        </div>;
};

export default top;
