import React from "react";
import "./style.css";

export default function TodoListItems({ item, onCheckboxChange, removeItem }) {
  return (
    <ul className="todo-ulist">
      <li>
        <span>
          <input type="checkbox" onChange={onCheckboxChange} />
        </span>
        {item}
        <span>
          <button onClick={removeItem}>X</button>
        </span>
      </li>
    </ul>
  );
}
