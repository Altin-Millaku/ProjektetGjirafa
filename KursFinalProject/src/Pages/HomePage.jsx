import React from 'react';
import Hero from '../Components/HomeComponents/Hero';
import Specilizations from '../Components/HomeComponents/Specilizations';
import Slider from '../Components/HomeComponents/Slider';
import background1 from '../Assets/Images/background1.jpg';
import background2 from '../Assets/Images/background2.jpg';
import background3 from '../Assets/Images/background3.jpg';
import Clients from '../Components/HomeComponents/Clients';
import Products from '../Components/HomeComponents/Products';
import project1 from '../Assets/Images/project1.jpeg';
import project2 from '../Assets/Images/project2.jpeg';
import project3 from '../Assets/Images/project3.jpeg';

const backgrounds = [background1, background2, background3 ];

const images = [project1, project2, project3, project1];

const HomePage = () => {
  return (
    <div>
        <Slider backgrounds={backgrounds} />
        <Hero/>
        <Specilizations/>
        <Products images={images} />
        <Clients/>
    </div>
  );
};

export default HomePage;