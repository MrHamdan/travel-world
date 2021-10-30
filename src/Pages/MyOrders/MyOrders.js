import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    const [isDelete, setDelete] = useState(false);


    useEffect(() => {
        fetch(`https://intense-beach-32982.herokuapp.com/myorders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));

    }, [isDelete, user.email]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Cancel Your Order ! Are you sure?');
        if (proceed) {
            fetch(`https://intense-beach-32982.herokuapp.com/deleteOrders/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert('Your Order Has Been Deleted')
                        setDelete(!isDelete);
                    } else {
                        setDelete(false);
                    }
                });
        }

    };


    return (
        <div>
            {
                orders.map((user) => (
                    <Card key={user._id} className="container" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{user.number}</Card.Subtitle>
                            <Card.Text>
                                {user.from} To {user.to}
                            </Card.Text>
                            <p>Date: {user.date}</p>
                            <p>Status: {user.status}</p>
                            <Button onClick={() => handleDelete(user._id)} variant="danger">DELETE</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div >
    );
};

export default MyOrders;