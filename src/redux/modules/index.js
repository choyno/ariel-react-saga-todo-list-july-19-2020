import { combineReducers } from 'redux'
// reducerImports   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import todo from './todo/todoReducer'
import age from './age/ageReducer'

const reducer = combineReducers({
  todo,
  age,
});

export default reducer

