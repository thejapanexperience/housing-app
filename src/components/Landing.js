import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landing" className="container jumbotron">
        <h1>Richard's Housing App</h1>
        <p>Manage Your Property Portfolio</p>
        <Link to="/adddata"><p><button className="btn btn-lg" href="#" role="button">Get Started</button></p></Link>
      </div>
    );
  }
}
