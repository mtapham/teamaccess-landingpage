import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import howitworks from '../img/howitworks.png';

export class HowItWorks extends Component {
    render() {
        return(
            <div className='how-it-works'>
                <Container>
                    <Row>
                        <h2 className='section-title'>How CONNEC<span class="underline">TA</span> Works</h2>
                    </Row>
                    <Row>
                        <img src={howitworks} alt="CONNECTA User Story"/>
                        <p>A simplified user story for teaching assistants interacting with CONNECTA</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HowItWorks;