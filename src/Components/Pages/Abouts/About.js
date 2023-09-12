import React from 'react';
import './about.css';
import { SlLink } from "react-icons/sl";
import { GoBroadcast } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='about-section'>
            <div className='about-header'>
                <div className='about-header-bg'>
                </div>
                <div >
                    <div className='flex'>
                        <h1 className='about-text-style'>About</h1>
                        <span>
                            <h3 className='about-text-style-2'>Since Our Earliest Days lorem <br /> ipsum dolor sit amet, elit. Ut <br /> elit tellus, luctus, erat sed <br /> fermentum feugiat.</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222222' }}>
                <div className='flex mx-32 pt-20'>
                    <div className=''>
                        <p className='about-paragraph'>A FEW WORDS ABOUT US</p>
                        <h1 className='about-title'>We have become one of the best advertising etiam sed pharetra.
                        </h1>
                    </div>
                    <div className='mt-60'>
                        <h6 className='about-header-six'>We think different...</h6>
                        <p className='about-paragraph'>
                            Proin gravida nibh vel velit auctor aliquet. <br /> Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat ipsum, nec sagittis sem nibh <br /> id elit. Duis sed odio sit amet nibh vulputate <br /> cursus a sit amet.
                            <br /><br />
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;