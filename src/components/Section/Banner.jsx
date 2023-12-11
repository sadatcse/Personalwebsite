import React from 'react';

const Banner = () => {
    return (
        <div className="banner bg-opacity-10 bg-gray-300 flex justify-around px-20 pt-20 border-b-2 border-inherit">
        <div>
            <p className='font-semibold text-2xl pt-10 '>Hello,It's Md Sadat Khan </p>
          <h3 className="text-gray-800 text-6xl font-extrabold my-8">I 'm a Developer</h3>
          <p className="text-gray-600 text-lg font-normal pb-8">
            It is a long established fact that a reader will be distracted by the readable content
            of a  <br />page when looking at its layout. The point of using Lorem Ipsum is that it has a <br />
            more-or-less normal distribution of letters.
          </p>
          <button class="btn btn-primary px-5 hover:bg-orange-400">Hire Now</button>
<button class="btn btn-secondary px-5 mx-3 hover:bg-orange-400"> Download CV</button>
        </div>
        <img
          src="https://i.ibb.co/JKvmCsq/sadat-banner.png"
          alt="sadat stand image"
          className="w-96 object-cover"
        />
      </div>
    );
};

export default Banner;