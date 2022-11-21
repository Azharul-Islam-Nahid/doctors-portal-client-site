import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../../Shared/Loading/Loading';

const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null);

    const closeModal = () => {
        setDeleteDoctor(null);
    }



    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://doctors-portal-server-site.vercel.app/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }

        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`https://doctors-portal-server-site.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} removed successfully`)
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="4xl mb-2">Manage Doctor: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr
                                key={doctors._id}
                                value={doctor}
                                className="hover">
                                <th>{i + 1}</th>
                                <td className="w-24 rounded-xl">
                                    <img src={doctor?.image} alt='doctor' />
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.specialty}</td>
                                <td><label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <ConfirmationModal
                    closeModal={closeModal}
                    modalData={deleteDoctor}
                    modalAction={handleDeleteDoctor}
                    actionButtonName='delete'
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteDoctor.name} it can't be undone.`}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;