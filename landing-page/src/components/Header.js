import React, {Component} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../img/connecta-logo.png';
import browser from '../img/browser.png';

export class App extends Component {
  render() {
    return (
        <div className="app-header">
          <Container>
            <Row>
            <Col lg={3}/>
              <Col lg={6}>
                <Row>
                    <img className="logo" src={logo} alt="ConnecTA Logo"/>
                </Row>
                <Row className="description">
                    <h1 className="title">CONNEC<span class="underline">TA</span></h1>
                    <p>A workshop to equip teaching assistants with training tools to foster belonging and inclusion in the classroom.</p>
                    <button class="button-74" role="button" onClick={(e) => { e.preventDefault(); window.open('https://connecta-access-it.web.app/', '_blank');}}>Enter CONNECTA</button>
                </Row>
              </Col>
              <Col lg={3}/>
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
        </div>
    );
  }
}

export default App;
