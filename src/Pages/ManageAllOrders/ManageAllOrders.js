import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);



    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDelete, isUpdated])



    const handleDelete = id => {
        console.log(id, 'deleted');
        const proceed = window.confirm('Are you sure you want to cancle this user order?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete Successful!')
                        setIsDelete(!isDelete);
                    }
                    else {
                        setIsDelete(false);
                    }
                })
        }
    }


    const handleUpdate = id => {
        const updatedStatus = {
            status: 'approved'
        }
        axios.put(`http://localhost:5000/orders/${id}`, {
            status: 'approved'
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Approved! Status updated")
                    setIsUpdated(true);
                }
            })
    }


    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className="p-4">Manage Your Booking</h1>
                        {!orders && (<div className="text-center">
                            <div className="spinner-grow text-danger text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>)}
                        <div className='p-4'>
                            <table className="mx-auto table table-light table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Order</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.map(order => <tr key={order._id}>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>From : {order.from} <br /> To: {order.to}</td>
                                        <td>{order.status}</td>
                                        <td><button onClick={() => handleUpdate(order._id)} className="btn btn-success m-1">Update</button>
                                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger my-1">Delete</button></td>
                                    </tr>)}

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;