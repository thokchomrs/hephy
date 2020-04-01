import React, { Component } from 'react';
//import Homepart1 from '../components/homepart1';
import Content from '../components/content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import bootstrap from 'react-bootstrap';


class Contact extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailsent: null,
        };
    }
    handlchange = (event => {
        console.log(event);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value })
    })
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            emailsent: false,

        })
    }

    render() {
        return (
            <div>
                {/*<Homepart1 title={this.props.title} />*/}
                <Content>
                    <div style={{ textAlign: "center", paddingBottom: 50 }}>
                        <h3>Let's Talk</h3>

                    </div>
                    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", }}>
                        <Form onSubmit={this.handleSubmit} style={{ width: 500 }}>
                            <Form.Group controlId="fullname">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" id="full-name" value={this.state.name} onChange={this.handlchange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" id="email" value={this.state.email} onChange={this.handlchange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Write message" name="message" id="message" rows="3" value={this.state.message} onChange={this.handlchange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Button variant="info" className="mb-2" size="sm" type="submit" value={this.state.disabled}>Sent</Button>
                            {this.state.emailsent === true && <p className="d-inline success-msg">E-mail Sent</p>}
                            {this.state.emailsent === false && <p className="d-inline err-msg">E-mail not Sent</p>}
                        </Form>
                    </div>
                </Content>
            </div >
        )
    }
}
export default Contact;