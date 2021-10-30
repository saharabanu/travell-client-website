import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
          
           <Banner></Banner>
           <Services></Services>
           <AboutUs></AboutUs>
           <Packages></Packages>

          
           
        </div>
    );
};

export default Home;