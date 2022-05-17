import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ date }) => {
    return (
        <div>
            <h2 className='text-secondary text-center font-bold text-xl'>Available Appointment on {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppoinment;