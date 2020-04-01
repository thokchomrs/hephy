import React, { Component } from 'react';
//import Homepart1 from '../components/homepart1';
//import ServiceCom1 from '../components/servicecom1'
//import testcard from '../images/testcard.jpg'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import threedcard from '../images/threedcard.jpg'
import eventcard from '../images/eventcard.jpg'
import decocard from '../images/decocard.jpg'
import promoaddcard from '../images/promoaddcard.jpg'
import festcard from '../images/festcard.jpg'
import Example from '../components/modalgallery'

import Example1 from '../components/modalgary2'
import Threed from '../pages/test'


class Home extends Component {
    constructor() {
        super()
        this.state = { show: false }
    }
    threedModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (

            <div className="container" >
                {/*   <div >
                <img src={testcard} className="testmargin" alt="testcard" width="1105" />
                 <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> 
            </div>*/}

                <Container>
                    < Threed show={this.state.show} />
                    <Row>
                        <Col style={{ padding: 0, width: 219 }}>
                            <Card style={{ width: '14rem', height: '23rem' }}>
                                <Card.Img variant="top" src={threedcard} />
                                <Card.Header style={{ textAlign: "center", backgroundColor: "#e0741b", color: "white" }}> 3D DESIGN</Card.Header>

                                <Card.Body style={{ backgroundColor: "#fff567" }}>


                                    <Card.Text>
                                        We at Hephy, have the finest Designer to make 3d models out of your desired material.
                             </Card.Text>
                                    <Button variant="primary" onClick={() => { this.threedModal() }}>Read more</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col style={{ padding: 0, width: 219 }}>
                            <Card style={{ width: '14rem', height: '23rem' }}>
                                <Card.Img variant="top" src={eventcard} />
                                <Card.Header style={{ textAlign: "center", backgroundColor: "#d15950", color: "white" }}> EVENT </Card.Header>

                                <Card.Body style={{ backgroundColor: "#feece6" }}>

                                    <Card.Text>
                                        Right from employee birthday parties to culture events, we like to add that something extra to the Event to make it grand.
                             </Card.Text>
                                    <Button variant="primary" >Read more</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col style={{ padding: 0, width: 219 }}>
                            <Card style={{ width: '14rem', height: '23rem' }}>
                                <Card.Img variant="top" src={decocard} />
                                <Card.Header style={{ textAlign: "center", backgroundColor: "#dc6372", color: "white" }}>DECORATION</Card.Header>

                                <Card.Body style={{ backgroundColor: "#fff0f5" }}>

                                    <Card.Text>
                                        At hephy, we understand the emotions of parents and their joy when their Children get married.
                             </Card.Text>
                                    <Button variant="primary">Read more</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col style={{ padding: 0, width: 219 }}>
                            <Card style={{ width: '14rem', height: '23rem' }}>
                                <Card.Img variant="top" src={promoaddcard} />
                                <Card.Header style={{ textAlign: "center", backgroundColor: "#31986b", color: "white" }}>PROMO & ADDS</Card.Header>

                                <Card.Body style={{ backgroundColor: "#b7fbf3" }}>


                                    <Card.Text>
                                        Rather focusing on specific product or services, we focus on your brand as a whole. It enables to increase your growth in many ways.
                             </Card.Text>
                                    <Button variant="primary">Read more</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col style={{ padding: 0, width: 219 }}>
                            <Card style={{ width: '14rem', height: '23rem' }}>
                                <Card.Img variant="top" src={festcard} />
                                <Card.Header style={{ textAlign: "center", backgroundColor: "#3d7867", color: "white" }}>FEST</Card.Header>

                                <Card.Body style={{ backgroundColor: "#cff6f2" }}>


                                    <Card.Text>
                                        We provide School and College Events. While organizing events, we provide proper arrangements for everything.
                             </Card.Text>
                                    <Button variant="primary">Read more</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/*   <div>
                <div className="hero-text">
                    <ServiceCom1 className="ser-com-width" />

                </div>

            </div>*/}
                <div className="container" style={{ paddingTop: 60, paddingBottom: 60 }}>
                    <div style={{ textAlign: "center", color: "black", fontSize: 26, paddingTop: 10 }}>We have come up with our range of</div>
                    <div style={{ textAlign: "center", color: "red", fontSize: 40, paddingTop: 10 }}>Gifts, Merchandise, Trophies & Awards</div>
                    <div style={{ textAlign: "center", color: "black", fontSize: 26, paddingTop: 10 }}>all customized to suit the various needs of yours</div>
                </div>
                <div style={{ textAlign: "center", color: "Black", fontSize: 40, paddingTop: 10 }}>Galleries</div>
                <div style={{ paddingTop: 50, justifyContent: "center", alignItems: "center", display: "flex", }}>

                    <div style={{ margin: 0, textAlign: "center", color: "white", fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingRight: 10, paddingLeft: 10, width: 120, backgroundColor: "#e0741b" }}>3D Design</div>
                </div>
                <div style={{ paddingTop: 50, justifyContent: "center", alignItems: "center", display: "flex", }}>
                    <Row>
                        <Col>  <Example /></Col>
                        <Col><Example1 /> </Col>
                        <Col><Example1 /></Col>
                    </Row>
                </div>





            </div>


        )
    }


}
export default Home;