import React from 'react';

const Testimonial = ({ review }) => {
    const { description, name, img, city } = review
    return (
        <div className="card w-96 shadow-lg mb-2 ">
            <div className="card-body items-center text-center ">

                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="avatar mt-2">
                        <div className="w-24 rounded-full">
                            <img src={img} />
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <p>{city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Testimonial;