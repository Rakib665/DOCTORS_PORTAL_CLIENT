import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name:'Winson Herry',
            city: 'california',
            img: people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name:'Winson Herry',
            city: 'california',
            img: people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name:'Winson Herry',
            city: 'california',
            img: people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <section className='mt-2'>
            <div className='flex justify-between '>
                <div className='mt-2 '>
                    <h2 className='text-primary font-bold text-xl'>Testimonial</h2>
                    <h3 className='text-2xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            {
                reviews.map(review => <Testimonial key={review._id} review={review}></Testimonial>)
            }

            </div>
            
        </section>
    );
};

export default Testimonials;