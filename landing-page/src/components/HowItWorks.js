import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class HowItWorks extends Component {
    render() {
        return(
            <div className='how-it-works'>
                <div className='contents'>
                    <Container>
                        <Row>
                            <h2 className='section-title'>How CONNECTA Works</h2>
                        </Row>
                        <Row>
                            <Col>
                                <Card border="light">
                                    <Card.Body>Faculty connects teaching assistants with CONNEC<span class="underline">TA</span></Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light">
                                    <Card.Body>Complete 1-hour modules over three days</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light">
                                    <Card.Body>Implement new skills and resources in teaching style/curriculum</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="light">
                                    <Card.Body>Feel prepare in your role and positively impact the experience of your students</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default HowItWorks;