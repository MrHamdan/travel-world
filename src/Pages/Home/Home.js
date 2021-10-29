import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
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
                <div id="services" className="row row-cols-1 row-cols-md-3 p-5">
                    {/* Show services */}
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5 pb-5 pt-5">
                    <div className="card mb-3 mx-2" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-2" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 mx-2" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose__us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">
                <div>
                    <img src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg" alt="" />
                </div>
                <div className="choose__us__container">
                    <div>
                        <span className="text-left text-design fw-bolder fs-2">Why Choose Us</span>
                        <h1>We Always Provide The Best <br /> Services</h1>
                        <h5>To be a renowned organization at the leading edge of Medicine, <br /> providing quality healthcare to meet our nation's aspirations.</h5>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 ml-8 container">
                        <div>
                            <h2>Qualified Doctors</h2>
                            <h6>MediCare Health Center aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK quality center in the Middle East. </h6>
                        </div>
                        <div>
                            <h2>Emergency Departments</h2>
                            <h6>Emergency department became commonly used when emergency medicine was recognized as a medical specialty, and hospitals and medical centres developed departments.</h6>
                        </div>
                        <div>
                            <h2>Excellent Services</h2>
                            <h6>Clinical excellence must be the priority for any health care service provider. MediCare health center ensures the best healthcare service comprise of professional.</h6>
                        </div>
                        <div>
                            <h2>Great Infrastructure</h2>
                            <h6>MediCare has 3 buildings on both sides of the Panthapath Main Road, connected by an over bridge. The hospital with more than 6 lac square feet.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;