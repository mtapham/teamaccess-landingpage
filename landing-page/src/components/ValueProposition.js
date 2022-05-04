import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import valueproposition from '../img/value-proposition.png';

export class ValueProposition extends Component {
    render() {
        return(
            <div className='value-proposition'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <img className="value-proposition-img" src={valueproposition} alt="mascot climbing up stairs to lightbulb" />
                        </Col>
                        <Col lg={1}/>
                        <Col lg={8} className='proposition'>
                            <h2 className='section-title'>Value Proposition</h2>
                            <p>
                                CONNECTA will supplement teaching assistants with the
                                necessary training and resources needed to provide the
                                best experience for their students. Our workshop will
                                influence the approaches, teaching styles, and understandings of teaching assistants.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ValueProposition;