import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookService.css'


const BookService = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();

    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://intense-beach-32982.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookingInfo = {
            ...data,
            status: 'pending'
        };
        console.log(bookingInfo);
        axios.post('https://intense-beach-32982.herokuapp.com/order', bookingInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Order Successful. Visit My Orders for update.');
                    reset();
                }
            })
    };


    return (
        <div>
            <div>
                <h1 className="text-design pt-5 pb-5">Here's Full Detail's Of {service?.title}.</h1>
                <div className="border-4 mb-3 mx-2">
                    <div className="row g-0">
                        <div>
                            <h3 className="card-title text-design py-3">{service?.title}</h3>
                            <h6 className="card-text container">{service?.description}</h6>
                            <h5 className="card-text"><small className="text-muted">{service?.location}</small></h5>
                            <span className="fs-5">Price: $ {service?.price}</span>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <img src={service?.img} className="img-fluid pt-5 rounded" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">

                                <div>
                                    <form className="rounded-3xl container mx-2" onSubmit={handleSubmit(onSubmit)}>
                                        <h1>Booking Informations. <i class="fas fa-info-circle"></i></h1>

                                        <label htmlFor="">Name:</label>
                                        <input defaultValue={user?.displayName} {...register("name")} />


                                        <label htmlFor="">Email:</label>
                                        <input defaultValue={user?.email} {...register("email", { required: true })} />

                                        <label htmlFor="">Contact No:</label>
                                        <input  {...register("number", { required: true })} />

                                        <label htmlFor="">From:</label>
                                        <input  {...register("from", { required: true })} />

                                        <label htmlFor="">To:</label>
                                        <input  {...register("to", { required: true })} />

                                        <label htmlFor="">Date:</label>
                                        <input {...register("date", { required: true })} type="date" className="" />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" value="Order" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;