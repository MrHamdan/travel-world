import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import './Home.css'
import Contact from '../Contact/Contact';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://intense-beach-32982.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="home">
            <Router>
                <Banner></Banner>
            </Router>

            <div className="container mt-5">
                <div className="text-center">
                    <h1 className="text-design3">Most Visited & Popular Travel Locations</h1>
                    <h5 className="">There are so many amazing places around the globe to see, we couldn't possibly include them all in just one list. But, these breathtaking destinations are definitely worth bumping to the top of your travel bucket list–whether you're looking to relax on a beach, get off the grid or explore a city.</h5>
                </div>
                {services.length === 0 ?
                    <Spinner animation="border" variant="info" />
                    :

                    <div id="travellocations" className="row row-cols-1 row-cols-md-3 pb-5">
                        {/* Show services */}
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>

                }
                <div>

                </div>
            </div>
            <h1 className="py-5">About Us</h1>
            <div id="about" className="about-us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">
                <Fade left>
                    <div>
                        <img className=" rounded" src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                </Fade>
                <div>
                    <Fade right>
                        <Row xs={1} md={2} className="g-4 pt-2 px-2 container mx-auto">

                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://images.all-free-download.com/images/graphiclarge/travel_the_journey_of_picture_167829.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Safe & Comfortable Journey</Card.Title>
                                        <Card.Text>
                                            Have a very safe and comfortable journey with us we always provide the best experience
                                            for our customers and fullfil their desire.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://nearmetrade.com/local/public/vendor/hotel%20bareilly4.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Luxurious Hotels</Card.Title>
                                        <Card.Text>
                                            You will get luxurious hotel and special home made foods made by our
                                            special chefs and your food is going to serve to your room.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://st3.depositphotos.com/5392356/12764/i/600/depositphotos_127649128-stock-photo-group-led-by-tour-guide.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Travel Guide</Card.Title>
                                        <Card.Text>
                                            Our Travel guides familiarize people with the history, functions, and customs of a particular region or establishment.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://www.intelastel.com/wp-content/uploads/2021/04/help-desk-scaled-652x435.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Our Dedicated Support</Card.Title>
                                        <Card.Text>
                                            We have a dedicated support team working on travel matters and ensures that our customers will have no issues while travelling with us.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Fade>
                </div>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
            <div>
                <div className="py-5"><h1>Contact</h1></div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;