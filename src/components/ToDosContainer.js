import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import {connect} from "react-redux"

function ToDosContainer({dispatch, state}) {
  
  const [inputText, setInputText] = useState("");

  const formSubmitted = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      dispatch({type: "addItem", payload: inputText});
      setInputText("");
    }
  };

  const toDos = state.filter(item => item.done===false)

  const todosItem = toDos.map((task) => {
    return (
      /* we need key because map made a new array and we need unique keys for this new items in new array */
      <ToDoItem
        key={task.id}
        taskProps={task}
      />
    );
  });

  return (
    <div className="todos-container">
      {/* onSubmit use in form!not in input */}
      <form className="todo-form" onSubmit={formSubmitted}>
        <label className="input-item">
          <input
            type="text"
            name="todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {todosItem}
      </div>
    </div>
  );
}
const MapsStateToProps = (state) => ({state})
export default connect(MapsStateToProps) (ToDosContainer)