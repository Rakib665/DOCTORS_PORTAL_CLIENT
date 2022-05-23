import React from 'react';

const UseRow = ({user}) => {
    const {email} = user
    return (
        <tr>
        <td>{email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    );
};

export default UseRow;