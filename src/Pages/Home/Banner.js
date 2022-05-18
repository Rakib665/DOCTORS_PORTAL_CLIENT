import React from 'react';
import Chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair}
                 className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">YOUR NEW SMILE START HERE!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;