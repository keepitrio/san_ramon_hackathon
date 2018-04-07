import actions from '../actions/actionTypes';
import shortid from 'shortid';

export default function(state = {}, action) {
  const { requestId, userId, title, items, message } = action;

  switch (action.type) {
    case actions.CREATE_REQUEST:
      let newRequestId = shortid.generate();
      return  state.requests.concat({ newRequestId, userId, title, items, message });

    case actions.EDIT_REQUEST:
      let editedRequest = { title, items, message };
      return Object.assign({}, state, {
        requests: state.requests.map(request => request.requestId === requestId ? Object.assign({}, request, editedRequest) : request);
      });

    case actions.DELETE_REQUEST:
      return state.requests.filter(request => {
        request.requestId !== requestId
      });

    default:
      return state;
  }
}