import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
//import './CheckoutForm.css'

const CheckoutForm = ({ total, pay }) => {
    console.log(total)

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (total > 0) {
            axiosSecure.post('/create-payment-intent', { total })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [total, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            //console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                selectedId: pay._id,
                className: pay.className,
                classId: pay.classId,
                instructorName: pay.instructorName,
                payImage: pay.image,
                total,
                date: new Date(),


            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Payment Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'

                        })
                    }
                })
        }



    }
    return (
        <>
            <div className=" container lg:container mx-auto lg:mx-auto  lg:px-40 ">
                <form className="w-full lg:m-4 border border-indigo-600 py-8 px-8" onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-info btn-sm mt-8 w-full
                    " type="submit"
                        disabled={!stripe || !clientSecret || processing}
                    >
                        Pay
                    </button>
                </form>
                {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
                {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
            </div>
        </>
    );
};

export default CheckoutForm;