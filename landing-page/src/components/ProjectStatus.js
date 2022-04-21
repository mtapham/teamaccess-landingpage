import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ProjectStatus extends Component {
    render() {
        return(
            <div className='project-status'>
                <Container>
                    <Row>
                        <Col/>
                        <Col>
                            <h2 className='title'>Project Status</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProjectStatus;