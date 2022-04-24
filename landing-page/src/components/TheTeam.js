import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mariam from '../img/mariam.png';
import swaleha from '../img/swaleha.jpeg';
import michelle from '../img/michelle.jpeg';
import jenny from '../img/jenny.jpeg';


export class TheTeam extends Component {
    render() {
        return(
            <div className='the-team'>
                <Container>
                    <Row>
                        <h2 className='section-title'>Team Members</h2>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} xl={3}>
                            <img src={mariam} alt="Mariam Khan"/>
                            <p>Mariam Khan - UI/UX Designer</p>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <img src={swaleha} alt="Swaleha Masude"/>
                            <p>Swaleha Masude - Visual Designer + Software Engineer</p>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <img src={michelle} alt="Michelle Pham"/>
                            <p>Michelle Pham - Software Engineer</p>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <img src={jenny} alt="Jenny Sun"/>
                            <p>Jenny Sun - Project Management + Research</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TheTeam;