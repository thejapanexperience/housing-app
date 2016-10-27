import ServerActions from './actions/ServerActions';
// import socket from './socket-init'
import axios from 'axios';

const API = {

  getAllClients() {
    axios.get('http://localhost:8000/api/clients')
    .then((res) => {
      ServerActions.getAllClients(res.data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  },

  getClientDetails(id) {
    axios.get(`http://localhost:8000/api/clients/${id}`)
    .then((res) => {
      ServerActions.gotDetails(res.data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  },

  getPropertyDetails(id) {
    axios.get(`http://localhost:8000/api/properties/${id}`)
    .then((res) => {
      ServerActions.gotDetails(res.data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  },

  getAllProperties() {
    axios.get('http://localhost:8000/api/properties')
    .then((res) => {
      ServerActions.getAllProperties(res.data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  },

  newClient(client) {
    axios.post('http://localhost:8000/api/clients', { client })
      .then((res) => {
        ServerActions.getAllClients(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },

  newProperty(property) {
    axios.post('http://localhost:8000/api/properties', { property })
      .then((res) => {
        ServerActions.getAllProperties(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },

  editClient(client) {
    axios.put('http://localhost:8000/api/clients', { client })
      .then((res) => {
        ServerActions.getAllClients(res.data);
        axios.get('http://localhost:8000/api/properties')
      .then((res) => {
        ServerActions.getAllProperties(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
      });
  },

  editClientProperty(client, propertyId) {
    if (client.propertys) {
      console.log('add property to client');
      axios.put('http://localhost:8000/api/clients/addproperty', { client, propertyId })
      .then((res) => {
        ServerActions.getAllClients(res.data);
        return axios.get('http://localhost:8000/api/properties')
        .then((res) => {
          ServerActions.getAllProperties(res.data);
        })
        .catch((err) => {
          console.error('ERROR:', err);
        });
      });
    } else {
      console.log('remove property from client');
      axios.put('http://localhost:8000/api/clients/removeproperty', { client, propertyId })
      .then((res) => {
        ServerActions.getAllClients(res.data);
        return axios.get('http://localhost:8000/api/properties')
        .then((res) => {
          ServerActions.getAllProperties(res.data);
        })
        .catch((err) => {
          console.error('ERROR:', err);
        });
      });
    }
    client.propertyId = propertyId;
    console.log('client: ', client);
  },

  editProperty(id) {
    axios.put(`http://localhost:8000/api/properties/${id}`)
      .then((res) => {
        ServerActions.getAllProperties(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },

  deleteClient(id) {
    axios.delete(`http://localhost:8000/api/clients/${id}`)
      .then((res) => {
        ServerActions.getAllClients(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },

  deleteProperty(id) {
    axios.delete(`http://localhost:8000/api/properties/${id}`)
      .then((res) => {
        ServerActions.getAllProperties(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },


};

export default API;
