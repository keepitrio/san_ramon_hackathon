import { combineReducers } from 'redux';
import RequestReducer from './forumReducers/requestReducer';
import OfferReducer from './forumReducers/offerReducer';

const rootReducer = combineReducers({
  requests: RequestReducer,
  offers: OfferReducer
});

export default rootReducer;
