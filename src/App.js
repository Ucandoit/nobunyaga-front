import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Dashboard from './components/dashboard';
import Cats from './components/cats';
import Skills from './components/skills';
import './App.css';

class App extends Component {
  render() {
    return (<Router>
      <div className="App">
        <Navbar collapseOnSelect="collapseOnSelect">
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <a>Nobunyaga</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/cats">
                <NavItem eventKey={1}>Cats</NavItem>
              </LinkContainer>
              <LinkContainer to="/skills">
                <NavItem eventKey={2}>Skills</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact="exact" path="/" component={Dashboard}/>
        <Route path="/cats" component={Cats}/>
        <Route path="/skills" component={Skills}/>

        <div>Developed by @Ucandoit - v0.0.1</div>
      </div>
    </Router>);
  }
}

export default App;
