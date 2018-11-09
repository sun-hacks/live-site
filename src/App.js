import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './styles.css';
import logo from "./logo-text-white.png";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Schedule from './schedule.js';
import Sponsors from './sponsors.js';
import Links from './links.js';


const HomePage = () => (
  <div class="logocontainer">
    <img class="logo" src={logo} alt="Sun Hacks" />
    <h1>#sunhacks2018 live site</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="background">
        <Navbar> 
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>sunhacks</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              <NavItem eventKey={1} href="#"><Link to='/sponsors' className="headerlink">sponsors</Link></NavItem>
              <NavItem eventKey={2} href="#"><Link to='/schedule' className="headerlink">schedule</Link></NavItem>
              <NavItem eventKey={3} href="http://links.sunhacks.io" target="_blank"><a className="headerlink">links</a></NavItem>
              <NavItem eventKey={4} href="http://links.sunhacks.io/slack" target="_blank"><a className="headerlink">slack</a></NavItem>
              <NavItem eventKey={5} href="http://links.sunhacks.io/devpost" target="_blank"><a className="headerlink">devpost</a></NavItem>
              <NavItem eventKey={6} href="http://live.sunhacks.io/sunhacks_map.pdf" target="_blank"><a className="headerlink">map</a></NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/sponsors' component={Sponsors} />
            <Route path='/links' component={Links} />
        </Switch>
        <footer style={{'paddingTop': '30px'}} className="footertext"> 
          <a href="https://www.facebook.com/sunhacksofficial/" target="_blank">
            <i className="fa fa-facebook-square"></i>
          </a> 
          <a href="https://twitter.com/sun_hacks" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/sunhacksofficial/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="mailto:team@sunhacks.io">
            <i className="fa fa-envelope"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
