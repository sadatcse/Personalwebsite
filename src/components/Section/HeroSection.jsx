import React from 'react';
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
      <p className='font-semibold text-2xl pt-10 '>Hello,It's Md Sadat Khan </p>
      <TypeAnimation
      sequence={[

        'React Developer',
        1000, 
        'UI/UX Designer',
        1000,
        'Web Devloper',
        1000
      ]}
      wrapper="span"
      className='hero--section--title'
      speed={50}
      repeat={Infinity}
    />
        <p className="hero--section-description mb-5">
        I specialize in crafting seamless digital experiences that resonate.<br />
        Ready to elevate your projects?
        </p>
      </div>
      <Link
      
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      to="Contact"
      className="btn btn-primary px-5 hover:bg-orange-400"
      >
      Hire Me
      </Link>
      <a href="https://drive.google.com/file/d/14nHp-0YVWimB78C_4YSZrhRUO999r3Og/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
<button class="btn btn-secondary px-5 mx-3 hover:bg-orange-400">Download CV</button>
</a>
    </div>
    <div className="hero--section--img">
      <img src="./img/hero_img.png" alt="Hero Section" />
    </div>
  </section>
  );
};

export default HeroSection;