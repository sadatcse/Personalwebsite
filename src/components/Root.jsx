
import { Outlet } from 'react-router-dom';


import './root.css';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import Copyright from './Footer/Copyright';

const Root = () => {

    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    );
};

export default Root;