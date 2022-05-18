import React from 'react';


const InfoCard = ({ img, bgClass,cardTitle }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl pl-4 ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p>Click the button to listen on Spotify app.</p>

            </div>
        </div>
    );
};

export default InfoCard;