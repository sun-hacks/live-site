import React, { Component } from 'react';
import './styles.css';
import {Grid, Row, Col} from 'react-bootstrap';
import agjunctionLogo from './sponsors/agjunction.svg';
import amazonLogo from './sponsors/amazon.png'; 
import amexLogo from './sponsors/amex.png';
import githubLogo from './sponsors/github.png';
import godaddyLogo from './sponsors/godaddy.png';
import googleLogo from './sponsors/google.png';
import performancesoftwareLogo from './sponsors/performancesoftware.png'; 
import slalomLogo from './sponsors/slalom.png'; 
import stickermuleLogo from './sponsors/sticker-mule.png';
import ticketmasterLogo from './sponsors/ticketmaster.png'; 
import workivaLogo from './sponsors/workiva.png';

class Sponsors extends Component {

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Sponsors</h1>
        <div style={{backgroundColor: "white", overflowY: "scroll", width: "95%", height: "350px", marginLeft: "auto", marginRight:"auto"}}> 
          <Grid>
            <Row className="sponsor-row planet">
                <Col sm={12}><a className="col-sm-12" href="https://amazon.com/" target="_blank"><img className="logo" src={amazonLogo} alt="Amazon Tempe Software Development Centers" style={{marginTop: "50px"}} /></a></Col>
            </Row>
            <Row className="sponsor-row moon">
                <Col smOffset={2} sm={4}> 
                  <a href="https://www.godaddy.com" target="_blank"><img className="logo" src={godaddyLogo} style={{maxHeight: "60px"}} alt="GoDaddy" /></a>
                </Col> 
                <Col className="col-sm-4"> 
                  <a href="https://jobs.americanexpress.com/" target="_blank"><img className="logo" src={amexLogo} alt="American Express" style={{maxHeight: "80px"}} /></a>
                </Col>
            </Row>
            <Row className="sponsor-row asteroid">
                <Col sm={4}><a href="https://www.workiva.com/" target="_blank"><img className="logo" src={workivaLogo} alt="Workiva" style={{marginTop: "20px"}} /></a></Col>
                <Col sm={4}><a href="https://cloud.google.com/" target="_blank"><img className="logo" src={googleLogo} alt="Google Cloud" style={{marginTop: "20px"}} /></a></Col>
                <Col sm={4}><a href="https://www.slalom.com/" target="_blank"><img className="logo" src={slalomLogo} alt="Slalom" style={{marginTop: "20px"}} /></a></Col>
            </Row>
            <Row className="sponsor-row comet">
                <Col sm={4}><a href="http://www.agjunction.com/" target="_blank"><img className="logo" src={agjunctionLogo} alt="AgJunciton" style={{marginTop: "50px"}} /></a></Col>
                <Col sm={4}><a href="http://www.github.com/" target="_blank"><img className="logo" src={githubLogo} alt="Github" style={{marginTop: "30px", maxHeight: "30px"}} /></a></Col>
                <Col sm={4}><a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank"><img className="logo" src={stickermuleLogo} alt="Sticker Mule" style={{marginTop: "20px:", maxHeight: "55px"}} /></a></Col>
                <Col smOffset={0} sm={4}><a href="https://www.psware.com/" target="_blank"><img className="logo" src={performancesoftwareLogo} alt="Performance Software" /></a></Col>
                <Col sm={4}><a href="https://jobs.ticketmaster.com/" target="_blank"><img className="logo" src={ticketmasterLogo} alt="Ticket Master" style={{maxHeight: "25px", marginTop: "50px"}} /></a></Col>
            </Row>
            <br/>
            <p className="plain" style={{textAlign: "center"}}>
            Thank you so much to our sponsors who help make sunhacks possible! <br/>Interested in sponsoring? Please email <a href="mailto://industry@sunhacks.io">industry@sunhacks.io</a>
            </p>
          </Grid>
        </div>
      </div>
    ); 
  }
}

export default Sponsors;