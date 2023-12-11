import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navlinks = <> 
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/service">Service</NavLink></li>
  <li><NavLink to="/portfolio">Portfolio</NavLink></li>
  <li><NavLink to="/blog">Blog</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
  </>
    return (
        <div className='border-b-2 border-inherit'>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navlinks}
      </ul>
    </div>
    <img src="https://i.ibb.co/GvGP5kN/logo-1.png" alt="Company Logo" className="h-1/4 w-1/4 mr-2" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;