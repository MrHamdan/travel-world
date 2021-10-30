import React from 'react';
import { useForm } from "react-hook-form";
import './AddANewService.css'

const AddANewService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://intense-beach-32982.herokuapp.com/addService", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    alert('New Location Has Been Added!');
                    reset();
                }
            })
        console.log(data)
    };
    return (
        <div className="container border-4 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add A New Location</h1>
                <input
                    {...register("title")}
                    placeholder="title"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("location")}
                    placeholder="location"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("description")}
                    placeholder="Description"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("price")}
                    placeholder="price"
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("img", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 w-100"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddANewService;