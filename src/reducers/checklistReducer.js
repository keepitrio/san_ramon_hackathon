import { FETCH_CHECKLIST, UPDATE_CHECKLIST} from '../actionCreators';

const initialState = [
  {
    id:1,
    item: "A supply of water (one gallon per person per day). Store water in sealed, unbreakable containers. Identify the storage date and replace every six months.", 
    completed: false
  },
  {
    id:2,
    item: "A supply of non-perishable packaged or canned food and a non-electric can opener.", 
    completed: false
  },
  {
    id:3,
    item: "A change of clothing, rain gear and sturdy shoes.", 
    completed: false
  },
  {
    id:4,
    item: "Blankets or sleeping bags", 
    completed: false
  },
  {
    id:5,
    item: "A first aid kit and prescription medications.", 
    completed: false
  },
  {
    id:6,
    item: "An extra pair of glasses", 
    completed: false
  },
  {
    id:7,
    item: "A battery-powered radio, flashlight and plenty of extra batteries.", 
    completed: false
  },
  {
    id:8,
    item: "Credit cards and cash.", 
    completed: false
  },
  {
    id:9,
    item: "An extra set of car keys.", 
    completed: false
  },
  {
    id:10,
    item: "A list of family physicians.", 
    completed: false
  },
  {
    id:11,
    item: "A list of important family information; the style and serial number of medical devices such as pacemakers.", 
    completed: false
  },
  {
    id:12,
    item: "Special items for infants, elderly or disabled family members.", 
    completed: false
  }
]
export default function(state = initialState, action){
  switch(action.type){
    case FETCH_CHECKLIST:
      return action.payload
    case UPDATE_CHECKLIST: 
      return action.payload
    default: 
      return state; 
  }
}