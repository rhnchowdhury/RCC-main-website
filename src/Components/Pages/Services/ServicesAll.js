import React from 'react';
import img1 from '../../../logo/content.png';
import img2 from '../../../logo/influencer.png';
import img3 from '../../../logo/eco.png';
import img4 from '../../../logo/photo-video.png';
import img5 from '../../../logo/media buying.png';
import img6 from '../../../logo/brand.png';
import img7 from '../../../logo/query.png';
import img8 from '../../../logo/printing.png';
import { FaCheck } from "react-icons/fa";
import './servicesAll.css';
import { Link } from 'react-router-dom';

const ServicesAll = () => {
    return (
        <section className='serviceAll-section'>
            <div className='serviceAll-header'>
                <div className='serviceAll-header-bg'>
                </div>
                <div >
                    <div className='serviceAll-div-text'>
                        <h1 className='serviceAll-text-style'>Our Services</h1>
                        <h3 className='serviceAll-text-style-2'>Explore our comprehensive range of services that will not only meet your marketing needs but exceed your expectations.</h3>
                    </div>
                </div>
            </div>
            <div className='serviceAll-mid'>
                <div className='serviceAll-back-overlay'>
                </div>
                <div className='serviceAll-div'>
                    <div >
                        <h6 className='serviceAll-paragraph-sm'>WHAT WE DO</h6>
                        <h1 className=' serviceAll-title'>We work on awesome projects with etiam <br /> sed pharetra.</h1>
                    </div>
                    <div className='lg:mt-72 lg:ml-20'>
                        <h4 className='serviceAll-head-four'>Digital Experiences</h4>
                        <h6 className='serviceAll-paragraph-sm mt-6'>Proin gravida nibh vel velit auctor aliquet. Aenean <br /> sollicitudin, lorem quis bibendum auctor, nisi elit <br /> consequat ipsum, nec sagittis sem nibh id elit. Duis <br /> sed odio sit amet nibh vulputate cursus a sit amet mauris.</h6>
                        <div className='lg:ml-10 lg:mt-12 lg:space-y-3'>
                            <h6 className='serviceAll-six'><FaCheck className='check-icon mt-1'></FaCheck> GREAT DESIGN</h6>
                            <h6 className='serviceAll-six'><FaCheck className='check-icon mt-1'></FaCheck>Experience</h6>
                            <h6 className='serviceAll-six'><FaCheck className='check-icon mt-1'></FaCheck> Value</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222222' }}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-16 lg:mx-20' >
                    <div className='serviceAll-mid-div'>
                        <div className='serviceAll-element'>
                            <img src={img1} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Content Strategy</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                Our team of expert plan, strategies and create contents according to your business needs.
                                <br />
                                Moreover, we do page/group moderation through monitoring and controlling user generated content on websites, social media platforms or other online communities.
                            </p>
                            <div className='flex justify-end mt-3 lg:mt-0'>
                                <Link to='/portfolio'><button className='text-white border px-3 py-1 hover:bg-white hover:text-[#ec4b46]'>See More</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img2} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Influencer & PR Marketing</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                Our specialise in leveraging the power of influencers and strategic public relations to enhance your brand's visibility, credibility, and engagement.
                                <br />
                                From identifying key influencers, we help you connect with your target audience and leave a lasting impression in today's competitive market.
                            </p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img3} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Digital Eco System Creation</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                We can help your business to grow on digital advertising platforms with an interconnected and integrated system consisting of brand guidelines,
                                <br />
                                improving customer experiences, and gathering customer behaviour data, website traffic data, and  lead conversion.
                            </p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div'>
                        <div className='serviceAll-element'>
                            <img src={img4} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Photography & Cinematography</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                From stunning visuals to captivating storytelling, our amazing team  specialise in crafting
                                <br />
                                compelling imagery and videos that leave a lasting impression. Let us bring your brand to life through the lens.</p>
                            <div className='flex justify-end mt-4'>
                                <Link><button className='text-white border px-3 py-1 hover:bg-white hover:text-[#ec4b46]'>See More</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' >
                        <div className='serviceAll-element'>
                            <img src={img5} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Media Buying & Ads Optimization</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                We specialise in strategic media buying and advertising solutions that drive results. From optimising ad placements to crafting compelling creatives,
                                <br />
                                we help businesses reach their target audience effectively and maximise their ROI in the ever-evolving media landscape.
                            </p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img6} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Brand Activation</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                We create engaging, memorable experiences that resonate with the target audience, fostering brand loyalty, and driving increased awareness and sales.
                                <br />
                                Through carefully crafted campaigns, and digital initiatives, we transform brands from static concepts into vibrant, interactive entities.
                            </p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' style={{ backgroundColor: '#C28FB0' }}>
                        <div className='serviceAll-element'>
                            <img src={img7} alt="" className='serviceAll-icon text-red-700' />
                            <h1 className='serviceAll-text'>Query Management</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                We  involve efficiently handling and responding to client inquiries, requests, and questions. This service ensures timely communication,
                                <br />
                                addresses client concerns, and helps maintain strong client relationships, contributing to the agency's success in delivering effective solutions.
                            </p>
                        </div>
                    </div>
                    <div className='serviceAll-mid-div' >
                        <div className='serviceAll-element'>
                            <img src={img8} alt="" className='serviceAll-icon ' />
                            <h1 className='serviceAll-text'>Printing & Production</h1>
                            <p className='mt-10 lg:mt-20 serviceAll-paragraph'>
                                We bring your marketing materials to life through top-notch printing, packaging, and manufacturing processes,
                                <br />
                                ensuring every detail shines, from brochures and banners to promotional products and branded merchandise.
                            </p>
                            <div className='flex justify-end mt-3'>
                                <Link><button className='text-white border px-3 py-1 hover:bg-white hover:text-[#ec4b46]'>See More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='serviceAll-mid-style'>
                    <div className='serviceAll-mid-style-bg'>
                    </div>
                    <div className='lg:mx-40 py-16'>
                        <p className='serviceAll-paragraph'>VISION & INNOVATION</p>
                        <h1 className='serviceAll-text mt-4'>We're all about that creative <br /> hustle, and we're not afraid <br /> to color outside the lines.</h1>
                        <div className='serviceAll-div-btn'>
                            <button className="serviceAll-btn mt-5 serviceAll-btn-text">GET IN TOUCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default ServicesAll;