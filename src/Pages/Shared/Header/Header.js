import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <div className="d-flex align-items-center">
                        <div>
                            <Navbar.Brand as={Link} to="/home"><img className="logo mt-4" src={logo} alt="" /></Navbar.Brand>
                        </div>
                        <div className="mx-3">
                            <span className="travel-text mx-2">Travel</span><span className="world-text">World</span>
                        </div>
                    </div>
                    <div>
                        <Navbar.Toggle className="navbar-toggler navbar-toggler-right bg-light" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse bg="light" id="basic-navbar-nav">
                            <Nav className="me-auto align-items-center">
                                <Nav.Link as={HashLink} to="/home#home" ><button className="link-color p-2 rounded">Home</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#locations"><button className="link-color p-2 rounded">Locations</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#about" className="mx-2"><button className="link-color p-2 rounded">About</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#contact" className="mx-2"><button className="link-color p-2 rounded">Contact</button></Nav.Link>
                                {user?.email ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Booking Menu
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to="/myorders" className="mb-2">My Booking</Dropdown.Item>
                                            <Dropdown.Item as={Link}
                                                to="/manageallorders" className="mb-2">Manage All Booking</Dropdown.Item>
                                            <Dropdown.Item as={Link}
                                                to="/addanewservice" className="mb-2">Add A New Location</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    :
                                    <></>
                                }
                                {user?.email ?
                                    <button className="mx-2 px-4 logout-btn-color p-2 rounded" onClick={logOut}>LogOut</button>
                                    :
                                    <NavLink to="/login" className="mx-2"><button className="mx-2 px-4 login-btn-color p-2 rounded">LogIn</button></NavLink>}
                                <Navbar.Text className="text-black mx-3">
                                    Logged in as : <a className="text-black" href="#login">{user.email}</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;