import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {


    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-site.vercel.app/getAppointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }

    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <p className='font-bold text-center text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                selectedDate={selectedDate}
                refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;