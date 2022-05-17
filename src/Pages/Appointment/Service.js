import React from 'react';

const Service = ({service,setTreatment}) => {
    const {slots,} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{service.name}</h2>
                <p>{
                    slots.length > 0 
                    ? <span>{slots[0]}</span>
                    : <span>No slot available</span>
                    }</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button 
                   ></button>
                    <label for="booking-modal" 
                     onClick={()=>setTreatment(service)}
                     disabled={slots.length === 0} className="btn btn-secondary"
                    >Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default Service;