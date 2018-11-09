import React, { Component } from 'react';
import './styles.css';


class Links extends Component {

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Important Links!</h1>
        <a className="linkbutton" target="_blank" href="http://links.sunhacks.io/slack">Join our slack!</a>
        <br />
        <a className="linkbutton" target="_blank" href="http://links.sunhacks.io/devpost">Devpost!</a>
      </div>
    ); 
  }
}

export default Links;