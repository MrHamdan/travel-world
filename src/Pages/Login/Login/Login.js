import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    const location = useLocation();

    const history = useHistory();

    const redirect_uri = location.state?.from || '/';

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title className="fs-1 pb-3">Login With</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-4">Google Account</Card.Subtitle>
                    <Card.Text>

                    </Card.Text>
                    <Card.Link href="#"><Button className="mb-5 fw-bolder fs-5 text-white" variant="danger" onClick={signInUsingGoogle}>Google Sign In <FontAwesomeIcon icon={faGooglePlusG} /></Button></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Login;