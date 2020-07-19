import { combineReducers } from 'redux'
// reducerImports   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import todos from './todo/todoReducer'
import age from './age/ageReducer'

const reducer = combineReducers({
  todos,
  age,
});

export default reducer

