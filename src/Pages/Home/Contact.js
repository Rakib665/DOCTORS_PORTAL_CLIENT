import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} class="hero min-h-screen bg-base-200">

           <div >
               <h2 className='text-primary text-center font-bold text-xl'>Contact Us</h2>
               <p className='text-center text-2xl text-white'>Stay connected with us</p>
           <div class="hero-content ">

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
        <div class="form-control">
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Subject</span>
            </label>
            <input type="text" placeholder="Subject" class="input input-bordered" />
            <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Your message</span>
            </label>
            <input type="text" placeholder="Your message" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
            <button class="btn btn-primary">Submit</button>
        </div>
    </div>
</div>
</div>
           </div>
        </div>
    );
};

export default Contact;