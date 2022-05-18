import React from 'react';

const Service = ({service,setTreatment}) => {
    const {slots,} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{service.name}</h2>
                <p>{
                    slots.length > 0 
                    ? <span>{slots[0]}</span>
                    : <span>No slot available</span>
                    }</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button 
                   ></button>
                    <label htmlFor="booking-modal" 
                     onClick={()=>setTreatment(service)}
                     disabled={slots.length === 0} 
                     className="btn btn-secondary text-white bg-gradient-to-r from-secondary to-from-primary"
                     
                    >Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default Service;