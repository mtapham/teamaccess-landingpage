import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import ProblemStatement from './components/ProblemStatement';
import ValueProposition from './components/ValueProposition';
import OurWorkshop from './components/OurWorkshop';
import HowItWorks from './components/HowItWorks';
import TheTeam from './components/TheTeam';
import EnterWebsite from './components/EnterWebsite';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <main>
          <ProblemStatement/>
          <ValueProposition/>
          <OurWorkshop/>
          <HowItWorks/>
          <TheTeam/>
          {/* <ProjectStatus/> */}
        </main>
        <hr className="divider"/>
        <EnterWebsite/>
        <Footer/>
      </div>
    );
  }
}

export default App;
