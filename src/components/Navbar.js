import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
require('bootstrap-loader');

export default class Navbar extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <Link to="/"><div className="col-sm-3"><button className="btn btn-lg btn-block" href="#">Home</button></div></Link>
          <Link to="/adddata"><div className="col-sm-3"><button className="btn btn-lg btn-block" href="#">Input Tenants and Properties Data</button></div></Link>
          <Link to="/manageclients"><div className="col-sm-3"><button className="btn btn-lg btn-block" href="#">Manage Clients</button></div></Link>
          <Link to="/manageproperties"><div className="col-sm-3"><button className="btn btn-lg btn-block" href="#">Manage Properties</button></div></Link>
        </div>
      </div>
        );
  }
}
