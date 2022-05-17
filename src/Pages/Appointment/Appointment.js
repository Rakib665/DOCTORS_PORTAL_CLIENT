import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AvailableAppoinment from './AvailableAppoinment';
import MakeAppointment from './MakeAppointment';

const Appointment = () => {
    const [date,setDate] = useState(new Date())

    return (
        <div className='px-6'>
            <MakeAppointment date={date} setDate={setDate}></MakeAppointment>
            <AvailableAppoinment date={date}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;