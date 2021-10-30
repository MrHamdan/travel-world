import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import './Home.css'

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
                <div className="text-center py-5">
                    <h1 className="text-design3">Here's Our Popular Services</h1>
                    <h4 className="text-design2">Here you can find our most poular services. There are many more services in the course section you can explore more services here.</h4>
                </div>
                {services.length === 0 ?
                    <Spinner animation="border" variant="info" />
                    :
                    <div id="travellocations" className="row row-cols-1 row-cols-md-3 p-5">
                        {/* Show services */}
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>}
                <div>

                </div>
            </div>
            <div className="choose__us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">
                <Fade left>
                    <div>
                        <img src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg" alt="" />
                    </div>
                </Fade>
                <div>
                    <Fade right>
                        <Row xs={1} md={2} className="g-4">

                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://images.all-free-download.com/images/graphiclarge/travel_the_journey_of_picture_167829.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://nearmetrade.com/local/public/vendor/hotel%20bareilly4.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://st3.depositphotos.com/5392356/12764/i/600/depositphotos_127649128-stock-photo-group-led-by-tour-guide.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://www.intelastel.com/wp-content/uploads/2021/04/help-desk-scaled-652x435.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
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
        </div>
    );
};

export default Home;