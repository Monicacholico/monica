import React, {Component} from 'react';import {Button} from 'rsuite';
import 'rsuite/styles/less/index.less';
import {Modal, ButtonToolbar } from 'rsuite';




class RSuite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button onClick={this.open}> Open</Button>
                </ButtonToolbar>

                <Modal show={this.state.show} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Ab asperiores aut autem,
                            consectetur consequatur debitis
                            dolore doloribus eaque eius error
                            laborum magnam minima molestias non
                            reiciendis sapiente soluta sunt voluptate.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close} appearance="primary">
                            Ok
                        </Button>
                        <Button onClick={this.close} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default RSuite;