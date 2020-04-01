import React, {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'



class Threed extends Component {

    render() {
        return (
            <div>
                {/*<Button onClick= {() => {this.threedModal()}}>
                    rajesh
        </Button>*/} 
                <Modal  show={this.props.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>MY popup</Modal.Header>
                    <Modal.Body>Rajesh modal done</Modal.Body>
                    <Modal.Footer><Button onClick= {() => {this.handleModal()}}> close </Button></Modal.Footer>
                </Modal>
            </div>
        )
    }

}
export default Threed