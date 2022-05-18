import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className="hero min-h-screen bg-base-200">

           <div >
               <h2 className='text-primary text-center font-bold text-xl'>Contact Us</h2>
               <p className='text-center text-2xl text-white'>Stay connected with us</p>
           <div className="hero-content ">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Subject</span>
            </label>
            <input type="text" placeholder="Subject" className="input input-bordered" />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Your message</span>
            </label>
            <input type="text" placeholder="Your message" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
        </div>
    </div>
</div>
</div>
           </div>
        </div>
    );
};

export default Contact;