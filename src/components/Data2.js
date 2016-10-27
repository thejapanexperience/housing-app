import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
// import moment from 'moment';
// import socket from '../socket-init';
import Store from '../stores/Store';
import ToAPIActions from '../actions/ToAPIActions';

export default class Data2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: false,
      properties: false,
    };
    this._onChange = this._onChange.bind(this);
    this._seeDetails = this._seeDetails.bind(this);
    this._deleteProperty = this._deleteProperty.bind(this);
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
      clients: Store.getClients(),
      properties: Store.getProperties(),
    });
  }

  _seeDetails(id) {
    console.log('id: ', id);
    ToAPIActions.getPropertyDetails(id);
  }

  _deleteProperty(id) {
    console.log('id: ', id);
    ToAPIActions.deleteProperty(id);
  }

  render() {
    const { clients, properties } = this.state;
    let propertiesHTML;

    if (!properties) {
      console.log('no properties');
      propertiesHTML = <h1>There are no properties</h1>;
    } else if (properties) {
      console.log('properties: ', properties);
      propertiesHTML =
        (<table className="table">
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Property Address</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => {
              return (

                <tr key={property._id}>
                  <td>{property.name}</td>
                  <td>{property.address}</td>
                  <td><button className="btn" onClick={() => this._deleteProperty(property._id)}>Delete Property</button></td>
                  <td><Link to="/details"><button className="btn" onClick={() => this._seeDetails(property._id)}>Details</button></Link></td>
                </tr>

              );
            })}
          </tbody>
        </table>);
    }

    return (
      <div className="container">
        {propertiesHTML}
      </div>
      );
  }
  }
