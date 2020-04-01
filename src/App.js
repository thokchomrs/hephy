import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import GalleriesPage from './pages/Galleries';
import ServicesPage from './pages/Services';
import logo from './images/logo.png'
import Slidingmain from './components/slidingmain'



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Rajesh Love',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ],
            home: {

            },
            about: {
                title: 'Be Relentless',
                //subTitle: 'Projects the make a difference',
                text: 'Checkout my rajesh belowCheckout my rajesh belowCheckout my rajesh belowCheckout my rajesh belowCheckout my rajesh belowCheckout my rajesh belowCheckout my rajesh below'
            },
            contact: {
                title: 'Let\'s Talk'
            },
            services: {
                title: 'Services'
            },
            galleries: {
                title: 'Galleries'
            },
        }
    }
    render() {
        return (
            <div className=" site-bg">
                <Router>
                    {/*header Menu Bar*/}
                    <div className="">
                        <Navbar bg="transparent" expand="lg">
                            <Navbar.Brand>
                                <div>
                                    <img src={logo} alt="logo" width="200" />
                                    {/*   <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> */}
                                </div>
                            </Navbar.Brand>

                            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="ml-auto">
                                    <Link className="nav-link" to="/">Home</Link>
                                    <Link className="nav-link" to="/about">About</Link>
                                    <Link className="nav-link" to="/services">Services</Link>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                    <Link className="nav-link" to="/galleries">Galleries</Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    {/*Slider Bar*/}
                    <Slidingmain />
                    <div style={{ paddingTop: 50 }}>
                        <Route  path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}  className="container-full"/>
                        <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
                        <Route path="/services" render={() => <ServicesPage title={this.state.services.title} />} />
                        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                        <Route path="/galleries" render={() => <GalleriesPage title={this.state.galleries.title} />} />
                        <Footer />
                    </div>

                </Router >
            </div>
        );
    }
}

export default App;
