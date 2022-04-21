import React, { Component } from 'react'; //import React Component
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export class Footer extends Component {
    render() {
        return(
            <footer>
                <Container>
                    <Row>
                        <h3 className='title'>Team Access</h3>
                    </Row>
                    <Row>
                        <h4 className='title'>Links</h4>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;