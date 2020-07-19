// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_TODOS } from './todoTypes';


const INITIAL_STATE = {
  todos: [],
  process: false,
  updating: false
}

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_TODOS:
      // Perform action
      return state;
    case `${GET_TODOS}_SUCCESS`:
      // Perform action
      return {
        todos: action.payload,
        processing: false,
        updating: false
      }
    case `${GET_TODOS}_FAIL`:
      // Perform action
      return state;
    default: return state;
  }
}

