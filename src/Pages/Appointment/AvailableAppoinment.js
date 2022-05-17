import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingAppointment from './BookingAppointment';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services,setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mx-3' >
            <h2 className='text-secondary text-center font-bold text-xl'>Available Appointment on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                   {
                       services.map(service => <Service 
                       key={service._id}
                       service = {service}
                       setTreatment={setTreatment}
                       ></Service>)
                   }
            </div>
            {treatment && <BookingAppointment treatment={treatment} date={date}></BookingAppointment>}
        </div>
    );
};

export default AvailableAppoinment;