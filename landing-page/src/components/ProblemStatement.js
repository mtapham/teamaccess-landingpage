import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ProblemStatement extends Component {
    render() {
        return(
            <div className='problem-overview'>
                <Container>
                    <Row>
                        <Col className="overview" md={7} lg={8}>
                            <h2 className='section-title'>Problem Overview</h2>
                            <p>
                                Women of color students are a marginalized identity
                                within the field of STEM spaces. In understanding
                                how we can better support WOC students in educational
                                settings, we can turn to teaching assistants. TAs play 
                                a direct, vital role in providing encouragement and empowerment
                                to help students strive in pursuing the tech field.
                            </p>
                        </Col>
                        <Col className="stats" md={5} lg={4}>
                            <h2 className='section-title'>Did you know?</h2>
                            <h2 className='stat-title'>&lt; 5%</h2>
                            <p className='stat-detail'>insert statistic here</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProblemStatement;