import API from '../API';
import AppDispatcher from '../AppDispatcher';

const NormalActions = {
  chooseBoard(board) {
    AppDispatcher.dispatch({
      type: 'SELECTED_BOARD',
      payload: { board },
    });
  },
};

export default NormalActions;
