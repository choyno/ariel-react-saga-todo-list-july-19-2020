import { put, call } from 'redux-saga/effects'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { GET_TODOS } from './todoTypes';
import { queries } from './todoQueries';

import useQuery from '../../../hooks/useQuery';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function* getTodosReq(data) {
  return yield call(useQuery, queries.GET_TODOS, data);
}

// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* getTodos(action) {
  try {
    const { data: { todos } } = yield call(getTodosReq, action.payload);
    yield put({ type: `${GET_TODOS}_SUCCESS`, payload: todos })
  } catch(e) {
    yield put({ type: `${GET_TODOS}_FAIL`, payload: e.response })
  }
}


