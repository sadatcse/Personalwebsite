import React from 'react';
import HeroSection from './../Section/HeroSection';
import AboutMe from './../Section/AboutMe';
import ContactMe from './../Section/ContactMe';
import MyPortfolio from '../Section/MyPortfolio';
import MySkills from './../Section/MySkills';
import Testimonial from './../Section/Testimonials';


const Home = () => {
    return (
        
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <MyPortfolio></MyPortfolio>
            <MySkills></MySkills>
            <Testimonial></Testimonial>
            <ContactMe></ContactMe>
 
        </div>
    );
};

export default Home;