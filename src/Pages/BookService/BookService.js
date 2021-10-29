import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookService.css'


const BookService = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [singleServices, setSingleServices] = useState([]);

    const [singleService, setSingleService] = useState({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setSingleServices(data));
    }, []);

    useEffect(() => {
        const singleDetail = singleServices.find(
            (employee) => employee._id === serviceId
        );
        setSingleService(singleDetail);
    }, [singleServices]);

    return (
        <div>
            <div>
                <h1 className="text-design pt-5 pb-5">Here's Full Detail's Of Our {singleService?.title} Service.</h1>
                <div className="border-4 mb-3 mx-2">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={singleService?.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{singleService?.title}</h5>
                                <p className="card-text">{singleService?.description}</p>
                                <p className="card-text"><small className="text-muted">{singleService?.location}</small></p>
                                <span>Price: $ {singleService?.price}</span>
                                <div>
                                    <form className="rounded-3xl container mx-2" onSubmit={handleSubmit(onSubmit)}>
                                        <h1>Booking Info.</h1>
                                        {/* register your input into the hook by invoking the "register" function */}
                                        <label htmlFor="inputName">Name:</label>
                                        <input defaultValue={user?.displayName} {...register("name")} />

                                        {/* include validation with required or other standard HTML validation rules */}
                                        <label htmlFor="inputEmail">Email:</label>
                                        <input defaultValue={user?.email} {...register("email", { required: true })} />
                                        {/* errors will return when field validation fails  */}
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