import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button class="btn btn-primary bg-gradient-to-r from-cyan-500 to-cyan-230 text-white font-bold">{children}</button>
        </div>
    );
};

export default PrimaryButton;