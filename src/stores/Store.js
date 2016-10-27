import { EventEmitter } from 'events';
// import moment from 'moment';
import AppDispatcher from '../AppDispatcher';

let _clients;
let _properties;
let _availableProperties;
let _details;

class Store extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {

        case 'ALL_CLIENTS':
          _clients = action.payload.data;
          this.emit('CHANGE');
          break;

        case 'GOT_DETAILS':
          _details = action.payload.data;
          this.emit('CHANGE');
          break;

        case 'ALL_PROPERTIES':
          _properties = action.payload.data;
          _availableProperties = [];
          console.log('_properties: ', _properties);
          _properties.forEach((property) => {
            if (property.available === true) {
              _availableProperties.unshift(property);
            }
          });
          _availableProperties = [..._availableProperties];
          console.log('_availableProperties: ', _availableProperties);

          this.emit('CHANGE');
          break;

        default:
          console.log('INVALID_ACTION_TYPE');
          break;
      }
    });
  }

  startListening(callback) {
    this.on('CHANGE', callback);
  }

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  }

  getClients() {
    return _clients;
  }

  getProperties() {
    return _properties;
  }

  getAvailableProperties() {
    return _availableProperties;
  }

  getDetails() {
    return _details;
  }
}

export default new Store();
