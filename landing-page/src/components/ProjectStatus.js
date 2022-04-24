import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class ProjectStatus extends Component {
    render() {
        return(
            <div className='project-status'>
                <Container>
                    <Row>
                        <h2 className='section-title'>Project Status</h2>
                        <p>University of Washington Information School Capstone project for Winter/Spring 2022</p>
                        <p>Development may continue through following capstone groups.</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProjectStatus;