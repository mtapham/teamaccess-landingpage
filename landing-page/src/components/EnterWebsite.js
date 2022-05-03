import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class EnterWebsite extends Component {
    render() {
        return(
            <div className='enter-connecta'>
                <Container>
                    <Row>
                        <h2 className='section-title'>Prepare for Impact</h2>
                    </Row>
                    <Row>
                        <button class="button-74" role="button" onClick={(e) => { e.preventDefault(); window.open('https://connecta-access-it.web.app/', '_blank');}}>Try CONNECTA Today</button>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default EnterWebsite;