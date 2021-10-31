import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Reviews.css'
const Reviews = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <div className="d-flex align-items-center">
                                <div className="col-6">
                                    <img
                                        className="d-block w-100 rounded-pill"
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                        alt="First slide"
                                    /></div>
                                <div className="col-6">
                                    <h3>Niko Valik</h3>
                                    <article>One of the best travel experience i have ever had highly,</article>
                                    <article>recomanded very effordable and safe and confortable journy,</article>
                                    <article>they provide one of the best experience for their customer</article>
                                    <span className="fs-5"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <div className="d-flex align-items-center">
                                <div className="col-6">
                                    <img
                                        className="d-block w-100 rounded-pill"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                        alt="First slide"
                                    /></div>
                                <div className="col-6">
                                    <h3>Olivia James</h3>
                                    <article>One of the best travel experience i have ever had highly,</article>
                                    <article>recommended very affordable and safe and comfortable journey,</article>
                                    <article>they provide one of the best experience for their customer</article>
                                    <span className="fs-5"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <div className="d-flex align-items-center">
                                <div className="col-6">
                                    <img
                                        className="d-block w-100 rounded-pill"
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                                        alt="First slide"
                                    /></div>
                                <div className="col-6">
                                    <h3>Ben Domor</h3>
                                    <article>One of the best travel experience i have ever had highly,</article>
                                    <article>recomanded very effordable and safe and confortable journy,</article>
                                    <article>they provide one of the best experience for their customer</article>
                                    <span className="fs-5"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reviews;