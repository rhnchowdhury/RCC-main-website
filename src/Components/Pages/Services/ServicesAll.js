import React from 'react';
import img1 from '../../../logo/add-operation.png';
import img2 from '../../../logo/eco.png';
import img3 from '../../../logo/content.png';
import img4 from '../../../logo/influencer.png';
import img5 from '../../../logo/media buying.png';
import img6 from '../../../logo/photo-video.png';
import { FaCheck } from "react-icons/fa";
import './servicesAll.css';

const ServicesAll = () => {
    return (
        <section className='serviceAll-section'>
            <div className='serviceAll-header'>
                <div className='serviceAll-header-bg'>
                </div>
                <div >
                    <div className='flex'>
                        <h1 className='text-style'>Services</h1>
                        <span className='text-style-div'>
                            <h3 className='text-style-2'>Since Our Earliest Days lorem ipsum dolor sit amet, elit. Ut elit tellus, luctus, erat sed fermentum feugiat.</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div className='serviceAll-mid'>
                <div className='serviceAll-back-overlay'>
                </div>
                <div className='serviceAll-div mx-40 mt-28'>
                    <div >
                        <h6 className='serviceAll-paragraph'>WHAT WE DO</h6>
                        <h1 className=' serviceAll-title'>We work on <br /> awesome projects <br /> with etiam sed <br /> pharetra.</h1>
                    </div>
                    <div className='mt-72 ml-20'>
                        <h4 className='serviceAll-head-four'>Digital Experiences</h4>
                        <h6 className='serviceAll-paragraph mt-6'>Proin gravida nibh vel velit auctor aliquet. Aenean <br /> sollicitudin, lorem quis bibendum auctor, nisi elit <br /> consequat ipsum, nec sagittis sem nibh id elit. Duis <br /> sed odio sit amet nibh vulputate cursus a sit amet mauris.</h6>
                        <div className='ml-10 mt-12 space-y-3'>
                            <h6 className='serviceAll-six'><FaCheck className='check-icon mt-1'></FaCheck> GREAT DESIGN</h6>
                            <h6 className='serviceAll-six'><FaCheck className='check-icon mt-1'></FaCheck>Experience</h6>
                            <h6 className='serviceAll-six'><FaCheck className='check-icon mt-1'></FaCheck> Value</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222222' }}>
                <div className='grid grid-cols-2 gap-4 mx-20' >
                    <div className='serviceAll-mid-div'>
                        <div className='serviceAll-element'>
                            <img src={img1} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Ads & Optimization</h1>
                            <p className='mt-20 serviceAll-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                <br />
                                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img2} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Digital Eco System</h1>
                            <p className='mt-20 serviceAll-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                <br />
                                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img3} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Content Management</h1>
                            <p className='mt-20 serviceAll-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                <br />
                                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div'>
                        <div className='serviceAll-element'>
                            <img src={img4} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Influencer Marketing</h1>
                            <p className='mt-20 serviceAll-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                <br />
                                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' >
                        <div className='serviceAll-element'>
                            <img src={img5} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Media Buying</h1>
                            <p className='mt-20 serviceAll-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                <br />
                                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img6} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Photo & Video Production</h1>
                            <p className='mt-20 serviceAll-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                <br />
                                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className='serviceAll-mid-style'>
                    <div className='serviceAll-mid-style-bg'>
                    </div>
                    <div className='mx-40 py-16'>
                        <p className='serviceAll-paragraph'>VISION & INNOVATION</p>
                        <h1 className='serviceAll-text mt-4'>We merge Advertising and <br /> Marketing to engage lorem ipsum <br /> dolor sit amet, consectetur elit.</h1>
                        <button className="head-btn mt-5 head-text">GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default ServicesAll;