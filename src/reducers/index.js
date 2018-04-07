import { combineReducers } from 'redux';
import ChecklistReducer from "./checklistReducer";

const rootReducer = combineReducers({
  checklist: ChecklistReducer,
});

export default rootReducer;
