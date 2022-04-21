import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ValueProposition extends Component {
    render() {
        return(
            <div className='value-proposition'>
                <Container>
                    <Row>
                        <Col xs={4}/>
                        <Col xs={8} className='proposition'>
                            <h2 className='section-title'>Value Proposition</h2>
                            <p>
                                Women of color students are a marginalized identity
                                within the field of STEM spaces. In understanding
                                how we can better support WOC students in educational
                                settings, we can turn to teaching assistants. TAs play 
                                a direct, vital role in providing encouragement and empowerment
                                to help students strive in pursuing the tech field.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ValueProposition;