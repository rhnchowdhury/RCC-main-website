import React from 'react';
import './service.css';
import img1 from '../../../logo/media buying.png';
import img2 from '../../../logo/graphics.png';
import img3 from '../../../logo/content.png';
import img4 from '../../../logo/test.jpg';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Service = () => {
    return (
        <section className='p-12' style={{ backgroundColor: '#222222' }}>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mx-16'>
                <div className='service-div'>
                    <div className='service-element'>
                        <img src={img1} alt="" className='service-icon' />
                        <h1 className='service-text'>Media Buying</h1>
                        <p className='service-paragraph'>We acquire ad space or time across various media platforms to efficiently reach a target audience & achieve marketing goals.</p>
                    </div>
                </div>
                <div className='service-div' style={{ backgroundColor: '#C28FB0' }}>
                    <div className='service-element'>
                        <img src={img2} alt="" className='service-icon' />
                        <h1 className='service-text'>Graphic Design</h1>
                        <p className='service-paragraph'>We create eye-catching and effective materials that build brand identity, engage audiences, and drive success.</p>
                    </div>
                </div>
                <div className='service-div'>
                    <div className='service-element'>
                        <img src={img3} alt="" className='service-icon text-white' />
                        <h1 className='service-text'>Content Strategy</h1>
                        <p className='service-paragraph'>We specialize in creating strategic and effective contents for various digital platforms.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5' >
                <Link to='/service'><button className="service-btn">SEE ALL</button></Link>
            </div>
            <div>
                <div className="hero mt-20 lg:mt-32">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <img src={img4} alt='' className="lg:max-w-sm shadow-2xl" />
                            <div className='mt-5'>
                                <div className="space-x-3">
                                    <button className=' service-social-btn '><Link to='https://www.facebook.com/Raincloudcommunications' target="_blank" rel="noopener noreferrer"><BsFacebook className='w-5 h-5 mx-auto'></BsFacebook></Link> </button>
                                    <button className='service-social-btn'><Link to='https://www.instagram.com/raincloud.communications/' target="_blank" rel="noopener noreferrer"><BsInstagram className='w-5 h-5 mx-auto'></BsInstagram></Link></button>
                                    <button className='service-social-btn'><Link to='https://www.linkedin.com/company/raincloud-communications/' target="_blank" rel="noopener noreferrer"><BsLinkedin className='w-5 h-5 mx-auto'></BsLinkedin></Link></button>
                                </div>
                            </div>
                        </div>
                        <div className='lg:mr-24'>
                            <h1 className="text-3xl lg:text-5xl text-white font-bold lg:-mt-72 lg:leading-[3.5rem]">We are an <br /> Advertising & <br /> Marketing firm.</h1>
                            <p className="py-6 text-white">Sed non mauris vitae erat consequat auctor eu in elit. Class <br /> aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;