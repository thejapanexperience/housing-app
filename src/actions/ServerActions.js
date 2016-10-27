import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  getAllClients(data) {
    AppDispatcher.dispatch({
      type: 'ALL_CLIENTS',
      payload: { data },
    });
  },

  getAllProperties(data) {
    AppDispatcher.dispatch({
      type: 'ALL_PROPERTIES',
      payload: { data },
    });
  },

  gotDetails(data) {
    AppDispatcher.dispatch({
      type: 'GOT_DETAILS',
      payload: { data },
    });
  },
};
export default ServerActions;
