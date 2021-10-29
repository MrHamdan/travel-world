import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.PNG'
import banner2 from '../../images/banner2.PNG'
import banner3 from '../../images/banner3.PNG'


const Banner = () => {
    return (
        <div>
            <div className="custom-bg d-flex align-items-center">
                <p className="text-style container">MediCare Health Center <br />We Provide One Of The Best Health Care Services All Over The World <br /><Button className=" mx-auto" variant="danger">Take A Tour</Button></p>
            </div>

            <div className="carousel-design mx-auto">
                <h1 className="text-design mt-5 mb-5">Here Are Some Interesting Images Of MediCare Health Center</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;