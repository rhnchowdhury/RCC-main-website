import React from 'react';
import img1 from '../../../Client work/11 Bokul.png';
import img2 from '../../../Client work/Door_post25_04january2023.png';
import img3 from '../../../Client work/Bowling_post41_03april2023.png';
import img4 from '../../../Client work/3 Sharif.png';
import img5 from '../../../Client work/WhatsApp Image 2023-05-11 at 5.16.18 PM.jpeg';
import img6 from '../../../Client work/Post-61_16-10-2022.png';
import img7 from '../../../Client work/SLI - Apr 20.jpg';
import { Link } from 'react-router-dom';
import './work.css';

const Work = () => {
    return (
        <section>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='div-1 '>
                        <img src={img1} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div className=''>
                        <img src={img2} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img3} alt="" className='opacity-50 hover:opacity-100 ' />
                    </div>
                    <div >
                        <img src={img4} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div >
                        <img src={img5} alt="" className='opacity-50 hover:opacity-100' />
                    </div>

                    <div >
                        <img src={img6} alt="" className='opacity-50 hover:opacity-100 ' />
                    </div>
                    <div >
                        <img src={img7} alt="" className='opacity-50 hover:opacity-100' />
                    </div>
                    <div className='work-div'>
                        <h1 className='work-text'>See Our All <br /> Works Here</h1>
                        <div className='work-div-btn'>
                            <Link to='/work'><button className="work-btn">See All</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;