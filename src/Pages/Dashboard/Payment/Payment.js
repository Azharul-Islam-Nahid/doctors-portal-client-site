import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl mb-2">Payment for {booking?.treatment}</h2>
            <p className="text-xl">Please pay<strong className='text-green-800'>${booking?.price}</strong> for your appointment on {booking?.appointmentDate} at {booking?.slot}.</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;