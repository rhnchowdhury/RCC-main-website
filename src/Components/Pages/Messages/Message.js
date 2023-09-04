import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Message = () => {

    return (
        <div className='mt-8'>
            <p className='text-center'>Get in touch</p>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-medium '>CONTACT US</h1>
                <p className='lg:text-lg  mt-2'>Reach out and connect with us! Whether you have questions, feedback, or simply <br /> want to get in touch, we're here to listen and assist.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 mt-6 gap-12'>
                <div className="card lg:w-96 text-primary-content " style={{ backgroundColor: '#12585a' }}>
                    <div className="card-body">
                        <span className='flex justify-center'><FaMobileAlt className='w-12 h-10 text-white' ></FaMobileAlt></span>
                        <p className='text-center text-xl font-semibold text-white' >Phone</p>
                        <p className='text-center text-white' >+8801777750875</p>
                        <p className='text-center text-white' >+8801716688069</p>
                    </div>
                </div>
                <div className="card lg:w-96 text-primary-content" style={{ backgroundColor: '#12585a' }}>
                    <div className="card-body">
                        <span className='flex justify-center'><IoLocationSharp className='w-12 h-10 text-white' ></IoLocationSharp> </span>
                        <p className='text-center text-xl font-semibold text-white' >Address</p>
                        <p className='text-center text-white' >Rangs Shawpnil, Level 5, House 2,  <br /> Road ⅔, Banani, Dhaka 1213</p>

                    </div>
                </div>
                <div className="card lg:w-96 text-primary-content" style={{ backgroundColor: '#12585a' }}>
                    <div className="card-body">
                        <span className='flex justify-center'><MdAlternateEmail className='w-12 h-10 text-white' ></MdAlternateEmail></span>
                        <p className='text-center text-xl font-semibold text-white' >Email</p>
                        <p className='text-center text-white' >raincloud.hr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='mx-12 lg:mx-0 my-5 space-y-4'>
                <div className='lg:ml-36 lg:space-x-1 space-y-4 lg:space-y-0' >
                    <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-lg" />
                </div>
                <div className='lg:ml-36'>
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-5xl" />
                </div>
                <div className='lg:ml-36'>
                    <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full h-56 max-w-5xl" ></textarea>
                </div>
                <div className='flex justify-center' >
                    <button className="btn btn-outline">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;