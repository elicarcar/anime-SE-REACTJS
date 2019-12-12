import React from "react";
import "./style.css";

export default function TodoListFrame({
  addFunction,
  handleChange,
  value,
  children
}) {
  return (
    <div className="todolist-frame">
      <span>
        <input
          className="todo-input"
          placeholder="Please add a task"
          value={value}
          onChange={handleChange}
        />
        <button className="add-btn" onClick={addFunction}>
          Add
        </button>
      </span>
      {children}
    </div>
  );
}
