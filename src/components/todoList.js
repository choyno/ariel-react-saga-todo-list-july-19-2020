import React, { useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

import useTodo from '../hooks/useTodo';
import { useDispatch } from 'react-redux';

const TodoList = () => {

  const dispatch = useDispatch();

  const { todos:getTodosList, getTodos } = useTodo();
  const { todos } = getTodosList || []

  useEffect(() => {
    console.log("herer");
    console.log(getTodosList);

  },[ getTodosList, getTodos ]);

  useEffect(() => {
    getTodos({isDeleted: false, process: false});
  },[ dispatch ]);

  return (
    <div>
      <h1> MY TO DO LIST </h1>
     <hr/>
      { todos && todos.map((todo) => (
        <div key={`${todo.id}`}>
           ID: { todo.id } / TITLE:  { todo.title }
          <hr/>
          <br/>
        </div>
      ))}
    </div>
  )
}

export default TodoList;
