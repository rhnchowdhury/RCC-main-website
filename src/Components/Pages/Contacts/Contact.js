import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
// import Map from './Map';
import './contact.css';

const Contact = () => {
    return (

        <section className='contact-section'>
            <div className='bg-black contact-header'>
                <h1>tmi</h1>
            </div>
            <div className='contact-back-overlay'>
            </div>
            <div className='contact-div mx-32 py-20 '>
                <div >
                    <h2 className='text-white contact-title'>Let's build amazing things together</h2>
                    <span className='flex mt-10'>
                        <FaLocationDot className='icon text-lg mt-2'></FaLocationDot>
                        <h6 className='text-lg font-bold ml-2 text-white'>Dhaka</h6>
                    </span>
                    <p className='text-base font-bold  text-white'>Rangs Shawpnil</p>
                    <p className='font-bold text-white'> Level 5, House 2, Road ⅔, Banani, Dhaka 1213</p>
                    <p className='font-bold text-white'>+8801777750875</p>
                    <p className='font-bold text-white'>raincloud.hr@gmail.com</p>
                </div>
                <div className='p-16 mt-44 message-div'>
                    <div className=' grid grid-cols-1 gap-5'>
                        <span className='flex space-x-3'>
                            <input type="text" placeholder="First Name" className="contact-input-box w-full max-w-xs" />
                            <input type="text" placeholder="Last Name" className="contact-input-box w-full max-w-xs" />
                        </span>
                        <input type="text" placeholder="Email Address" className="contact-input-box w-full" />
                    </div>
                    <div className=' mt-4'>
                        <textarea placeholder="Write Message" className="textarea-box textarea-lg h-40  w-full" ></textarea>
                        <button className="btn-design mt-2 text">SEND</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;