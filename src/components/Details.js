import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

import Store from '../stores/Store';
import ToAPIActions from '../actions/ToAPIActions';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: false,
      properties: false,
      details: Store.getDetails(),
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    Store.startListening(this._onChange);
    ToAPIActions.getAllClients();
    ToAPIActions.getAllProperties();
  }

  componentWillUnmount() {
    Store.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      details: Store.getDetails(),
      properties: Store.getProperties(),
      clients: Store.getClients(),
    });
  }


  render() {
    let { clients, properties, details } = this.state;
    console.log('clients: ', clients);
    console.log('properties: ', properties);
    console.log('details: ', details);
    let detailView;
    if (!details) {
      detailView =
        <div><h1>No Client or Properties</h1></div>;
    } else if (details && details.email && !details.propertys) {
      detailView =
      (<div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Property</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.name.first} {details.name.last}</td>
              <td>{details.email}</td>
              <td>{details.phone}</td>
              <td>This client has no properties</td>
            </tr>
          </tbody>
        </table>
      </div>);
    } else if (details && details.email && details.propertys) {
      detailView =
      (<div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Property</th>
              <th>Monthly Rent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.name.first} {details.name.last}</td>
              <td>{details.email}</td>
              <td>{details.phone}</td>
              <td>{details.propertys.name}{details.propertys.address}</td>
              <td>{details.propertys.price}</td>
            </tr>
          </tbody>
        </table>
      </div>);
    } else if (details && details.address) {
      detailView =
      (<div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Availability</th>
              <th>Monthly Rent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.name}</td>
              <td>{details.address}</td>
              <td>{details.available ? 'Available' : 'Not Available'}</td>
              <td>{details.price}</td>
            </tr>
          </tbody>
        </table>
      </div>);
    }
    return (
      <div className="container">
        <h1>Details</h1>
        {detailView}
      </div>
      );
  }

}
