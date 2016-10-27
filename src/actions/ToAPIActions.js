import API from '../API';
// import AppDispatcher from '../AppDispatcher';

const ToAPIActions = {
  newClient: API.newClient,
  newProperty: API.newProperty,
  getAllClients: API.getAllClients,
  getAllProperties: API.getAllProperties,
  editClientProperty: API.editClientProperty,
  editProperty: API.editProperty,
  deleteClient: API.deleteClient,
  deleteProperty: API.deleteProperty,
  getClientDetails: API.getClientDetails,
  getPropertyDetails: API.getPropertyDetails,
};

export default ToAPIActions;
