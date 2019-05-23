import * as type from '../action/type'
import { combineReducers } from 'redux';
function todos(state = {}, action) {
  switch (action.type) {
    case type.HOME:
      return Object.assign({}, state, {
          text: action.text,
          completed: false
      })
    case type.SET_HOME:
        return Object.assign({}, state, {
          text: action.text,
          completed: false
      })
    default:
      return state
  }
}
function visibleTode(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case type.VISIBLE_TODO:
      return action.show
    default:
      return state
  }
}

export default combineReducers({
  todos,
  visibleTode
});