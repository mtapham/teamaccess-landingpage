import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <Container>
                    <Row>
                        <p>Copyright &copy; 2022 CONNEC<span class="underline">TA</span></p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;