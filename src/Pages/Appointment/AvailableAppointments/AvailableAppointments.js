import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('ServiceAppointments.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
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
                selectedDate={selectedDate}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;