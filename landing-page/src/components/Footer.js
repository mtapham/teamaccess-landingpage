import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ischool from '../img/ischool.png';

export class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <Container>
                    <Row>
                        <Col>
                            <img src={ischool} alt="information school logo"/>
                        </Col>
                        <Col>
                            <p>Copyright &copy; 2022 CONNEC<span class="underline">TA</span></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;