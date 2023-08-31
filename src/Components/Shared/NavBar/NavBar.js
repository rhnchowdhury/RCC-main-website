import React from 'react';
import { Link } from 'react-router-dom';
import { MdForwardToInbox } from "react-icons/md";
import logo from '../../../Icon/RC-black-logo.png';
import './NavBar.css';

const NavBar = () => {

    return (
        <div className="navbar" >
            <div className="navbar-start test -mb-2">
                {/* <label className='hamburger' style={{ backgroundColor: 'rgb(212,175,55)' }}> */}
                <label className='hamburger'>
                    <input type="checkbox" className='input-check' />
                    <div className='toggle'>
                        <span className='line1 common'></span>
                        <span className='line2 common'></span>
                        <span className='line3 common'></span>
                    </div>
                    <ul className="drop " style={{ backgroundColor: '#12585a' }}>
                        <li><Link to='/' className='ml-3 text-white'>Home</Link></li>
                        <li><Link to='/about' className='ml-3 text-white'>About</Link></li>
                        {/* <li><Link to='/team' className='ml-3 text-white'>Our Teams</Link></li> */}
                        <li><Link to='/service' className='ml-3 text-white'>Services</Link></li>
                        <li><Link to='/contact' className='ml-3 text-white'>Contact</Link></li>
                    </ul>
                </label>
            </div>
            <div className="navbar-center">
                <Link to='/contact' className='flex'>
                    <p className='text-base font-bold' style={{ color: '#12585a' }}>GET IN TOUCH</p>
                    <span className='ml-2'><MdForwardToInbox className='w-6 h-6' style={{ color: '#12585a' }}></MdForwardToInbox></span>
                </Link>
            </div>
            <div className="navbar-end">
                <Link to='/'><img src={logo} alt="RainCloud" className='h-12 w-40' /></Link>
            </div>
        </div>
    );
};

export default NavBar;