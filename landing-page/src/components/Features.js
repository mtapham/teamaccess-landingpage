import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Features extends Component {
    render() {
        return(
            <div className='features'>
                <Container>
                    <Row>
                        <h2 className='title'>Features</h2>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Features;