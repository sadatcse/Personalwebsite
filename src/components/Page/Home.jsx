import React from 'react';
import Banner from './../Section/Banner';
import Aboutshow from './../Section/Aboutshow';
import Portfolioshowcase from './../Section/Portfolioshowcase';
import Quotes from '../Section/Quotes';
import WhatIDo from '../Section/WhatIDo';
import Testimonials from '../Section/Testimonials';
import RecentBlog from '../Section/RecentBlog';

const Home = () => {
    return (
        
        <div>
            <Banner></Banner>
            <Aboutshow></Aboutshow>
            <Portfolioshowcase></Portfolioshowcase>
            <Quotes></Quotes>
            <WhatIDo></WhatIDo>
            <Testimonials></Testimonials>
            <RecentBlog></RecentBlog>
        </div>
    );
};

export default Home;