import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import './Message.css';

const Message = () => {
    return (
        <section style={{ backgroundColor: '#222222' }}>
            <h1 className='message-text py-8'>Contact Us</h1>
            <div className='message-sec'>
                <div>
                    <div className='lg:mt-12 mx-10 lg:mx-0'>
                        <div className='flex'>
                            <FaLocationDot className='icon mt-1'></FaLocationDot>
                            <p className='text-white text-base lg:font-bold ml-2'>Rangs Shawpnil, Level 5, House 2, Road ⅔,  Banani, Dhaka 1213</p>
                        </div>
                        <div className='flex'>
                            <MdOutlineForwardToInbox className='icon mt-1'></MdOutlineForwardToInbox>
                            <p className='text-white text-base lg:font-bold ml-2'>raincloud.hr@gmail.com</p>
                        </div>
                        <div className='flex'>
                            <IoCallSharp className='icon mt-1'></IoCallSharp>
                            <a href="tel:+8801716688069" className='text-white text-base lg:font-bold ml-2'>Call Now</a>
                        </div>
                    </div>
                </div>
                <div className='message-box'>
                    <div className=' grid grid-cols-1 gap-5'>
                        <span className='flex space-x-3'>
                            <input type="text" placeholder="First Name" className="message-input-box w-full max-w-xs" />
                            <input type="text" placeholder="Last Name" className="message-input-box w-full max-w-xs" />
                        </span>
                        <input type="text" placeholder="Email Address" className="message-input-box w-full" />
                    </div>
                    <div className=' mt-4'>
                        <textarea placeholder="Write Message" className="textarea-box textarea-lg h-40  w-full" ></textarea>
                        <div className='flex justify-center'>
                            <button className="message-btn-design mt-2 text">SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;