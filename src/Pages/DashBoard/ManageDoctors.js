import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingModal, setDeletingModal] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={index}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingModal={setDeletingModal}
                            ></DoctorRow>)
                        }


                    </tbody>
                </table>
            </div>
            {deletingModal && <DeleteConfirmModal
                deletingModal={deletingModal}
                refetch={refetch}
                setDeletingModal={setDeletingModal}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;