import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className='head-section'>
            <div className='head-part '>
                <div className='head-part-bg'>
                </div>
                <div className='ml-32 pt-56'>
                    <div >
                        <h6 className='head-text-six'>ADVERTISING & MARKETING AGENCY</h6>
                        <h1 className='head-text-one'>We help <br /> brands Grow <br /> Beautifully</h1>
                    </div>
                    <button className="head-btn mt-5 head-text">GET STARTED NOW</button>
                </div>

            </div>
        </section>
    );
};
export default Header;