import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='head-part'>
            <div className='head-part-bg'>
            </div>
            <div >
                <div>
                    <h6 className='head-text-six'>ADVERTISING & MARKETING AGENCY</h6>
                    <h1 className='head-text-one'>We help <br /> brands Grow <br /> Beautifully</h1>
                </div>
                <button className="head-btn mt-2">GET STARTED NOW</button>
            </div>
        </div>
    );
};
export default Header;