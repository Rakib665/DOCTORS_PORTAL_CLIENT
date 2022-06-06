import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor,index,refetch,setDeletingModal }) => {
    const { name, img, specialization,email} = doctor

   
    return (
        <tr>
            <td>{index + 1}</td>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialization}</td>
            <td>
            <label onClick={()=> setDeletingModal(doctor)} for="delete-confirm-modal" class="btn btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;