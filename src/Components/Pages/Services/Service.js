import React from 'react';
import './service.css';
import img1 from '../../../logo/add-operation.png';
import img2 from '../../../logo/graphics.jpeg';
import img3 from '../../../logo/eco.jpeg';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className='p-12' style={{ backgroundColor: '#222222' }}>
            <div className='grid grid-cols-3 gap-3 mx-16'>
                <div className='service-div'>
                    <div className='service-element'>
                        <img src={img1} alt="" className='service-icon text-white' />
                        <h1 className='service-text'>Ads & Optimization</h1>
                        <p className='service-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.</p>
                    </div>
                </div>
                <div className='service-div' style={{ backgroundColor: '#C28FB0' }}>
                    <div className='service-element'>
                        <img src={img2} alt="" className='service-icon text-white' />
                        <h1 className='service-text'>Graphic Design</h1>
                        <p className='service-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='service-element'>
                        <img src={img3} alt="" className='service-icon text-white' />
                        <h1 className='service-text'>Digital Eco</h1>
                        <p className='service-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5' >
                <Link to='/service'><button className="service-btn">SEE ALL</button></Link>
            </div>
        </section>
    );
};

export default Service;