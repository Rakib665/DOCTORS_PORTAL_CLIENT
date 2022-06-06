import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingModal, refetch, setDeletingModal}) => {
    const {name,email} = deletingModal
    const handleDelete = () =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method: 'DELETE',
            headers: {
             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
 
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`Doctor ${name} is deleted`)
                setDeletingModal(null)
                refetch()
            }
        })
 
     }
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure for delete {name}</h3>
                    <div class="modal-action">
                    <button onClick={()=>handleDelete()} class="btn btn-error">Delete</button>

                        <label for="delete-confirm-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;