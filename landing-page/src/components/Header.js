import React, {Component} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import logo from '../img/connecta-logo.png';
import browser from '../img/workshop-preview.png';

export class App extends Component {
  render() {
    return (
        <header className="app-header">
          <Container>
            <Row>
              <Col>
                <Row>
                    <img className="logo" src={logo} alt="ConnecTA Logo"/>
                </Row>
                <Row>
                    <h1 className="title">CONNEC<span class="underline">TA</span></h1>
                    <p>A workshop to equip teaching assistants with training tools to foster belonging and inclusion in the classroom.</p>
                    <Button className="btn" variant="outline-primary" onClick={(e) => { e.preventDefault(); window.location.href='http://google.com';}}>
                      Enter CONNECTA
                    </Button>
                </Row>
              </Col>
              <Col>
                <img className="browser" src={browser} alt="workshop preview"/>
              </Col>
            </Row>
            <Row>
            {/* Code Credit to Yurij Rightblog.ru*/}
              <Col/>
              <Col>
                <div class="mouse_scroll">
                  <div class="mouse">
                    <div class="wheel"></div>
                  </div>
                  <div>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                  </div>
                </div>
              </Col>
              <Col/>

            </Row>
          </Container>
        </header>
    );
  }
}

export default App;
