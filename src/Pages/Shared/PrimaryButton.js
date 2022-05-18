import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary bg-gradient-to-r from-secondary to-from-primary text-white font-bold">{children}</button>
        </div>
    );
};

export default PrimaryButton;