import React from 'react';

const testimonials = () => {
  return <div className='test'>
            <h1>Don't just take<br /> our word</h1>
            <div className='test-review'>
                <div className='review1 comment'>
                    <p>"This bag holds all of my needs"</p>
                    <img src={require('./images/person1.png')} alt='review' />
                </div>
                <div className='review2 comment'>
                    <p>"The shipping for this was amazingly fast"</p>
                    <img src={require('./images/person2.jpg')} alt='review ' />
                </div>
                <div className='review3 comment'>
                    <p>"No longer do I forget anything that I need"</p>
                    <img src={require('./images/person3.jpg')} alt='review ' />
                </div>
            </div>
        </div>;
};

export default testimonials;
