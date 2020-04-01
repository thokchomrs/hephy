import React from 'react';
//import Homepart1 from '../components/homepart1';
//import { Content } from 'react-bootstrap/lib/Tab';
//import Content from '../components/content';
import Example from '../components/modalgallery'
import { Row, Col } from 'react-bootstrap';

import Example1 from '../components/modalgary2'

function Galleries(props) {
    return (
        <div>
            <div style={{ textAlign: "center", paddingBottom: 50 }}>
                <h3>Galleries</h3>

            </div>
            <div style={{ paddingBottom: 15, justifyContent: "center", alignItems: "center", display: "flex", }}>

                <div style={{ margin: 0, textAlign: "center", color: "white", fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingRight: 10, paddingLeft: 10, width: 120, backgroundColor: "#e0741b" }}>3D Design</div>
            </div>
            <div style={{ paddingTop: 10, justifyContent: "center", alignItems: "center", display: "flex", }}>
                <Row>
                    <Col><Example /></Col>
                    <Col><Example1 /> </Col>
                    <Col><Example /></Col>
                    <Col><Example1 /></Col>
                </Row>

            </div>
            <div style={{ paddingTop: 50, justifyContent: "center", alignItems: "center", display: "flex", }}>
                <Row>
                    <Col><Example /></Col>
                    <Col><Example1 /> </Col>
                    <Col><Example /></Col>
                    <Col><Example1 /></Col>
                </Row>

            </div>
            <div style={{ paddingTop: 50, justifyContent: "center", alignItems: "center", display: "flex", }}>
                <Row>
                    <Col><Example /></Col>
                    <Col><Example1 /> </Col>
                    <Col><Example /></Col>
                    <Col><Example1 /></Col>
                </Row>

            </div>

            <div style={{ paddingTop: 50, paddingBottom: 5, justifyContent: "center", alignItems: "center", display: "flex", }}>

                <div style={{ margin: 0, textAlign: "center", color: "white", fontSize: 18, paddingTop: 10, paddingBottom: 10, paddingRight: 10, paddingLeft: 10, width: 200, backgroundColor: "#e0741b" }}>Event Management</div>
            </div>
            <div style={{ paddingTop: 20, justifyContent: "center", alignItems: "center", display: "flex", }}>
                <Row>
                    <Col><Example /></Col>
                    <Col><Example1 /> </Col>
                    <Col><Example /></Col>
                    <Col><Example1 /></Col>
                </Row>

            </div>
            <div style={{ paddingTop: 50, justifyContent: "center", alignItems: "center", display: "flex", }}>
                <Row>
                    <Col><Example /></Col>
                    <Col><Example1 /> </Col>
                    <Col><Example /></Col>
                    <Col><Example1 /></Col>
                </Row>

            </div>
            <div style={{ paddingTop: 50, justifyContent: "center", alignItems: "center", display: "flex", }}>
                <Row>
                    <Col><Example /></Col>
                    <Col><Example1 /> </Col>
                    <Col><Example /></Col>
                    <Col><Example1 /></Col>
                </Row>

            </div>
        </div>
    )
}
export default Galleries;