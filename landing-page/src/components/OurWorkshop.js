import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reflection from '../img/reflection.png';
import resources from '../img/resources.png';
import implementation from '../img/implementation.png';


export class OurWorkshop extends Component {
    render() {
        return(
            <div className='our-workshop'>
                <Container>
                    <Row>
                        <h2 className='section-title'>Our Workshop</h2>
                    </Row>
                    <Row>
                        <Col className='reflection'>
                            <img src={reflection} alt="cartoon character looking in the mirror"/>
                            <p>Self awareness and Reflection</p>
                        </Col>
                        <Col className='resources'>
                            <img src={resources} alt="cartoon character surrounded by tools"/>
                            <p>Skills and Resources</p>
                        </Col>
                        <Col className='implementation'>
                            <img src={implementation} alt="cartoon character holding a pencil"/>
                            <p>Implementation and Practice</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default OurWorkshop;