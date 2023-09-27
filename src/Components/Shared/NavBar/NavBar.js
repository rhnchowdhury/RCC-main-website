import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import icon from '../../../Icon/Artboard-1.png';

const NavBar = () => {

    return (
        <div className="navbar nav-edit">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-warning lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52" style={{ backgroundColor: '#C1A55D' }}>
                        <li><Link to='/' className='list-edit'>Home</Link></li>
                        <li><Link to='/about' className='list-edit'>About</Link></li>
                        <li><Link to='/service' className='list-edit'>Services</Link></li>
                        <li><button><Link to='/team' className='list-edit'>Team</Link></button></li>
                        <li><Link to='/contact' className='list-edit'>Contact</Link></li>
                    </ul>
                </div>
                <Link ><img src={icon} className='web-logo' alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><button><Link to='/' className='list-edit'>Home</Link></button></li>
                    <li><button><Link to='/about' className='list-edit'>About</Link></button></li>
                    <li><button><Link to='/service' className='list-edit'>Services</Link></button></li>
                    <li><button><Link to='/portfolio' className='list-edit'>Portfolio</Link></button></li>
                    <li><button><Link to='/team' className='list-edit'>Team</Link></button></li>
                    <li><button><Link to='/contact' className='list-edit'>Contact</Link></button></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;