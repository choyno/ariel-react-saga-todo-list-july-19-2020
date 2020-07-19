import React, { useState } from 'react';

const TodoForm = () => {

  const [title, setTitle ] = useState();
  const [description, setDescription ] = useState();

  return (
    <>
    <h3> TODO FORM</h3>
    <label className="todo-label"> Title </label>
    <input id="" name="title" value={title} style={{width: "100%"}}/>
    <br/>
    <br/>
    <label className="todo-label"> Description </label>
    <textarea id="" name="description" value={title} style={{width: "100%"}}/>
    </>
  )
}

export default TodoForm;


