import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import img1 from '../../../teams/Azfar-Rahman.png';
import img2 from '../../../teams/Fahmeda-Gulzar.png';
import img3 from '../../../teams/Golam-Isnad-Ahmed.png';
import img4 from '../../../teams/MD-Yeasin-Ahmed.png';
import img5 from '../../../teams/MD-Zakarul.png';
import img6 from '../../../teams/Mahmudul-Hasan-Bokul.png';
import img7 from '../../../teams/Mir-Ibtid-Mahmud.png';
import img8 from '../../../teams/Moumita-Saha.png';
import img9 from '../../../teams/Raad-Rahman.png';
import img10 from '../../../teams/Redwanur-Rahman-Rafi.png';
import img11 from '../../../teams/Sadia-Hossain-Lubna.png';
import img12 from '../../../teams/Sadman-al-sadaf.png';
import img13 from '../../../teams/Sharif-Hossen.png';
import img14 from '../../../teams/sajib.png';
import './Team.css';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <section className='m-20'>
            <p className='text-center'>CREATIVE MINDS</p>
            <div className='text-center'>
                <h1 className=" text-4xl font-medium">Our Team</h1>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio cumque <br /> tempora hic optio quasi assumenda.</p> */}
                <p className='mt-4'>We pride ourselves on being a dynamic and innovative group of professionals dedicated <br /> to delivering exceptional results for our clients.</p>
            </div>

            <div className="carousel w-full mt-5">
                <div id="slide1" className="carousel-item relative w-full space-x-1.5">
                    <div className='img-edit'>
                        <img src={img1} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/azfar-rahman-76ba2813b/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=azfar.rahman@raincloudcomms.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img2} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/fahmeda-gulzar/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fahmeda.raincloud@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img3} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/golam-isnad-ahmed-21433621a/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='hhttps://mail.google.com/mail/?view=cm&fs=1&tf=1&to=isnad.raincloud@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-10 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full space-x-1.5">
                    <div className='img-edit'>
                        <img src={img4} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/yeasin-ahmed-a2893910a/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yeasin.raincloud@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img8} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/moumita-saha-01a352142/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=moumita.raincloud@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img5} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-10 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full space-x-1.5">
                    <div className='img-edit'>
                        <img src={img12} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/sadman-al-sadaf-7b700a110/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sadman@raincloudcomms.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img7} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/ibtid-m-86ab39216/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ibtid@raincloudcomms.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img6} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/mahamudul-hasan-411558237/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bokul@raincloudcomms.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-10 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full space-x-1.5">
                    <div className='img-edit'>
                        <img src={img10} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/redwanur-rahman-rafi/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafi.raincloud@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img11} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lubnaraincloudcommunication@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img9} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/rahman-raad/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rahmanraincloud3@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-10 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full space-x-1.5">
                    <div className='img-edit'>
                        <img src={img13} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/sharif-hossain-25357a237/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sharif@raincloudcomms.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img14} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/muktadirul-islam-35538424b/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=muktadirul666@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className='img-edit'>
                        <img src={img2} alt='' className="w-96" />
                        <div className='overlay'>
                            <div>
                                <Link to='https://www.linkedin.com/in/fahmeda-gulzar/' target="_blank"><BsLinkedin className='social-icon'></BsLinkedin></Link>
                                <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fahmeda.raincloud@gmail.com' target='_blank'><SiGmail className=' social-icon '></SiGmail></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-10 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;