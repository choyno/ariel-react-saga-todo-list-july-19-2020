import React, { useState } from 'react';

const TodoForm = () => {

  const [todo, setTodo ] = useState({title: "", description: ""});
  const { title, description } = todo;

  const handleTodoItem = (key,value) => {
    setTodo({
      ...todo,
      [key]: value
    });
  }

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if(title) {
    }
  }

  return (
    <>
    <h3> TODO FORM</h3>

    <form className="todo-form" onSubmit={handleSubmitTodo}>
      <label className="todo-label"> Title </label>
      <input id="" name="title"
             value={title} style={{width: "100%"}}
             onChange={(e) => handleTodoItem('title', e.target.value)}
            />
      <br/>
      <br/>
      <label className="todo-label"> Description </label>
      <textarea id="" name="description"
          value={description} style={{width: "100%"}}
          onChange={(e) => handleTodoItem('description', e.target.value)}
        />

      <button className="todo-button">SUBMIT</button>
    </form>
    </>
  )
}

export default TodoForm;


