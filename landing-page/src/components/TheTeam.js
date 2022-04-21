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
                        <h2 className='section-title'>Team Access</h2>
                        <br/>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        <Col>
                            <img src={mariam} alt="Mariam Khan"/>
                            <br/>
                            <p>Mariam Khan - UI/UX Designer</p>
                        </Col>
                        <Col>
                            <img src={swaleha} alt="Swaleha Masude"/>
                            <br/>
                            <p>Swaleha Masude - Visual Designer + Software Engineer</p>
                        </Col>
                        <Col>
                            <img src={michelle} alt="Michelle Pham"/>
                            <br/>
                            <p>Michelle Pham - Software Engineer</p>
                        </Col>
                        <Col>
                            <img src={jenny} alt="Jenny Sun"/>
                            <br/>
                            <p>Jenny Sun - Project Management + Research</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TheTeam;