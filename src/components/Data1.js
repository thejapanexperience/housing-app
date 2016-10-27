import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
// import moment from 'moment';
// import socket from '../socket-init';
import Store from '../stores/Store';
import ToAPIActions from '../actions/ToAPIActions';

export default class Data1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: false,
      properties: false,
    };
    this._onChange = this._onChange.bind(this);
    this._bindProperty = this._bindProperty.bind(this);
    this._unbindProperty = this._unbindProperty.bind(this);
    this._seeDetails = this._seeDetails.bind(this);
    this._deleteClient = this._deleteClient.bind(this);
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
      properties: Store.getAvailableProperties(),
    });
  }

  _bindProperty(client) {
    const { propertyId } = this.refs;
    client.propertys = propertyId.value;
    ToAPIActions.editClientProperty(client, propertyId.value);
  }

  _unbindProperty(client) {
    const propertyId = client.propertys;
    client.propertys = null;
    ToAPIActions.editClientProperty(client, propertyId);
  }

  _seeDetails(id) {
    console.log('id: ', id);
    ToAPIActions.getClientDetails(id);
  }

  _deleteClient(id) {
    console.log('id: ', id);
    ToAPIActions.deleteClient(id);
  }

  render() {
    const { clients, properties } = this.state;
    let clientsHTML;
    let propertyDropdown;

    if (!properties) {
      console.log('no properties');
      propertyDropdown =
      (<select className="form-control">
        <option disabled selected value> Choose a property</option>
      </select>);
    } else {
      console.log('properties: ', properties);
      propertyDropdown =
      (<select className="form-control" ref="propertyId">
        {properties.map((property) => {
          return (
            <option key={property._id} value={property._id}>
              {property.name} {property.address}. Rental Price: ${property.price}
            </option>
          );
        })}
      </select>);
    }

    if (!clients) {
      console.log('no clients');
      clientsHTML = <h1>There are no clients</h1>;
    } else if (clients) {
      clientsHTML =
        (<table className="table">
          <thead>
            <tr>
              <th>Client Name</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) =>

              {
              if (!client.propertys) {
                return (
                  <tr key={client._id}>
                    <td>{client.name.first} <span /> {client.name.last}</td>
                    <td>{propertyDropdown}</td>
                    <td><button className="btn" onClick={() => this._bindProperty(client)}>Add Property</button></td>
                    <td><button className="btn" onClick={() => this._deleteClient(client._id)}>Delete Client</button></td>
                    <td><Link to="/details"><button className="btn" onClick={() => this._seeDetails(client._id)}>Details</button></Link></td>
                  </tr>
                  );
              } else if (client.propertys) {
                return (
                  <tr key={client._id}>
                    <td>{client.name.first} <span /> {client.name.last}</td>
                    <td>{client.propertys}</td>
                    <td><button className="btn" onClick={() => this._unbindProperty(client)}>Remove Property</button></td>
                    <td><button className="btn" onClick={() => this._deleteClient(client._id)}>Delete Client</button></td>
                    <td><Link to="/details"><button className="btn" onClick={() => this._seeDetails(client._id)}>Details</button></Link></td>
                  </tr>
                  );
              } }

            )}
          </tbody>
        </table>);
    }

    return (
      <div className="container">
        {clientsHTML}
      </div>
      );
  }
  }
