import React, { Component } from 'react';
// import uuid from 'uuid';
// import { Link } from 'react-router';

import ToAPIActions from '../actions/ToAPIActions';
import Store from '../stores/Store';

export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._onChange = this._onChange.bind(this);
    this._newClient = this._newClient.bind(this);
    this._newProperty = this._newProperty.bind(this);
  }

  componentWillMount() {
    Store.startListening(this._onChange);
  }

  componentWillUnmount() {
    Store.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({

    });
  }

  _newClient() {
    const { clientFirstName, clientLastName, clientEmail, clientPhone } = this.refs;
    const client = {
      name: {
        first: clientFirstName.value,
        last: clientLastName.value,
      },
      email: clientEmail.value,
      phone: clientPhone.value,
    };
    ToAPIActions.newClient(client);
  }

  _newProperty() {
    const { propertyName, propertyAddress, propertyRentalPrice } = this.refs;
    const property = {
      name: propertyName.value,
      address: propertyAddress.value,
      price: propertyRentalPrice.value,
      available: true,
    };
    ToAPIActions.newProperty(property);
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Add a client</h1>
        <div className="container">
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-xs-2 col-form-label">First Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" defaultValue="Richard" ref="clientFirstName" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-xs-2 col-form-label">Last Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="search" defaultValue="Mands" ref="clientLastName" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-email-input" className="col-xs-2 col-form-label">Email</label>
            <div className="col-xs-10">
              <input className="form-control" type="email" defaultValue="thejapanexperience@gmail.com" ref="clientEmail" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-url-input" className="col-xs-2 col-form-label">Phone Number</label>
            <div className="col-xs-10">
              <input className="form-control" type="number" defaultValue="01912902903" ref="clientPhone" />
            </div>
            <br />
            <br />
            <br />
            <div className="col-xs-12">
              <button className="btn btn-block" onClick={() => this._newClient()}>Submit Client</button>
            </div>
          </div>
        </div>
        <hr />
        <h1>Add a property</h1>
        <div className="container">
          <div className="form-group row">
            <label htmlFor="example-text-input" className="col-xs-2 col-form-label">Property Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" defaultValue="Number 9" ref="propertyName" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-search-input" className="col-xs-2 col-form-label">Property Address</label>
            <div className="col-xs-10">
              <input className="form-control" type="search" defaultValue="Helena Avenue, Whitley Bay, Tyne and Wear" ref="propertyAddress" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-email-input" className="col-xs-2 col-form-label">Monthly Rental Price</label>
            <div className="col-xs-10">
              <input className="form-control" type="number" defaultValue="2000" ref="propertyRentalPrice" />
            </div>
          </div>
          <br />
          <div className="col-xs-12">
            <button className="btn btn-block" onClick={() => this._newProperty()}>Submit Property</button>
          </div>
        </div>
      </div>
    );
  }
}
