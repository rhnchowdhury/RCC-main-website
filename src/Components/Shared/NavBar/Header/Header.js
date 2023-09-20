import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className='head-section'>
            <div className='head-part '>
                <div className='head-part-bg'>
                </div>
                <div className='ml-20 lg:ml-32 pt-56'>
                    <div >
                        <h6 className='head-text-six'>ADVERTISING & MARKETING AGENCY</h6>
                        <h1 className='head-text-one'>We Help <br /> Brands Grow <br /> <span className='head-text-two'>To Their Full Potential</span></h1>
                    </div>
                    <Link to='/service'><button className="head-btn mt-6 head-text">GET STARTED NOW</button></Link>
                </div>
            </div>
        </section>
    );
};
export default Header;