import React, { useState, useEffect } from 'react';

import {delay } from 'redux-saga/effects'

import useTodo from '../hooks/useTodo';
import { useDispatch } from 'react-redux';

const TodoList = () => {

  const dispatch = useDispatch();

  const { todos:getTodosList, getTodos } = useTodo();
  const { todos, processing } = getTodosList || []
  const [process, setProcess] = useState(processing);

  useEffect(() => {
    setProcess(processing);
  },[ getTodosList, getTodos, processing ]);

  useEffect(() => {
    setProcess(true);
    getTodos({isDeleted: false });
  },[ dispatch ]);

  return (
    <div>
      <h1> MY TO DO LIST </h1>
      { process ? "LOADING....." : '' }
     <hr/>
      { !process && todos.map((todo) => (
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
