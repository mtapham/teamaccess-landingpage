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
                            <img src={mariam} alt="Mariam Khan" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/mariam-khan-6a7005144/', '_blank');}}/>
                            <p>Mariam Khan - UI/UX Designer</p>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <img src={swaleha} alt="Swaleha Masude" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/swaleha-masude-60b521180/', '_blank');}}/>
                            <p>Swaleha Masude - Visual Designer</p>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <img src={michelle} alt="Michelle Pham" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/michelletapham/', '_blank');}}/>
                            <p>Michelle Pham - Software Engineer</p>
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                            <img src={jenny} alt="Jenny Sun" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/sun-jenny/', '_blank');}}/>
                            <p>Jenny Sun - Project Management + Research</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TheTeam;