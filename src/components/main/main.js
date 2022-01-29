import React from 'react';
import Header from './header'
import Top from './top'
import Bottom from './bottom'
import Testimonials from './testimonials'

const main = () => {
  return <div className="main">
            {/* main image */}
            <Header />
            {/* body */}
            <Top />
            <Bottom />
            <Testimonials />
            <hr className="main-line" />
        </div>;
};

export default main;
