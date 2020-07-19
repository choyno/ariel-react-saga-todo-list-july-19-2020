import React, { useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

import useTodo from '../hooks/useTodo';
import { useDispatch } from 'react-redux';

const TodoList = () => {

  const dispatch = useDispatch();

  const { getTodos } = useTodo();
  const { todos } = getTodos || {}

  useEffect(() => {
    console.log(todos);
  },[ todos ]);

  useEffect(() => {
    getTodos({isDeleted: false});
  },[ dispatch ]);

  return (
    <>
      hello
    </>
  )
}

export default TodoList;
