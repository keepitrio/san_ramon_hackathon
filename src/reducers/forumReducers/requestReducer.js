import actions from '../../actions/actionTypes';
import shortid from 'shortid';

export default function(state = {requests: []}, action) {
  const { requestId, userId, title, items, message } = action;

  switch (action.type) {
    case actions.CREATE_REQUEST:
      let newRequests = state.requests.concat({ newRequestId, userId, title, items, message });
      localStorage.setItem("requests", JSON.stringify(newRequests));
      return  newRequests;

    case actions.EDIT_REQUEST:
      let editedRequest = { title, items, message };
      return Object.assign({}, state, {
        requests: state.requests.map(request => request.requestId === requestId ? Object.assign({}, request, editedRequest) : request)
      });

    case actions.DELETE_REQUEST:
      return state.requests.filter(request => {
        request.requestId !== requestId
      });

    case actions.FETCH_REQUESTS:
      if (localStorage.requests) {
        return JSON.parse(localStorage.requests)
      } else {
        return "There are no requests";
      }

    default:
      return state;
  }
}
