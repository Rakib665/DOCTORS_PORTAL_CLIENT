import React from 'react';
import { format } from 'date-fns';


const BookingAppointment = ({ treatment, date }) => {
    const {name,slots} = treatment
    const handleBooking = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        console.log(name,email,phone)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary">Book appointment for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-center'>
                        <input type="text" placeholder="Type here" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                          {
                              slots.map(slot => <option value={slot}> {slot}</option>)
                          }
                        </select>
                        <input type="text" name='name' placeholder="name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="phone num" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingAppointment;