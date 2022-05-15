import React from 'react';
import service1 from '../../assets/images/fluoride.png'
import service2 from '../../assets/images/cavity.png'
import service3 from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import './Service.css'
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride Treatment',
            description: 'This service best for your teeth',
            img: service1
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'This service best for your teeth',
            img: service2
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'This service best for your teeth',
            img: service3
        },
    ]
    return (
        <div>
            <div className='text-center my-7'>
                <h2 className='text-primary font-bold uppercase text-2xl'>Our Services</h2>
                <h3 className='text-xl'>Services We Provide</h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2'>
                {
                    services.map(s => <Service key={s._id} service={s}></Service>)
                }
            </div>

            <div className='px-20 mt-1'>
                <div class="hero min-h-screen ">
                    <div class="hero-content flex-col lg:flex-row">
                        <img className='img' src={treatment} />
                        <div>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;