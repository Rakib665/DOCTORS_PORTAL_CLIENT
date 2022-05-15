import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 mt-2 px-12'>
            <InfoCard cardTitle='Visit Our Location' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
            <InfoCard cardTitle='Opening Hours' bgClass='bg-accent' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact Us Now' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
        </div>
    );
};

export default Info;