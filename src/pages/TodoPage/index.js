import React, { useState } from "react";
import TodoListFrame from "../../components/TodoListFrame";
import TodoListItems from "../../components/TodoListItems";
import "./style.css";

export default function TodoPage() {
  const [todoItems, setTodoItems] = useState([]);
  const [addItem, setAddItem] = useState({});
  const uniqid = require("uniqid");

  const handleChange = e => {
    const name = e.target.value;
    const done = false;
    const id = uniqid();
    const newItem = { name, done };
    setAddItem(newItem);
  };

  const addFunction = () => {
    const newList = [...todoItems, addItem];
    setTodoItems(newList);
  };

  const onCheckboxChange = name => {
    setTodoItems(
      todoItems.map(item => {
        if (item.name === name) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  const removeItem = name => {
    const newList = todoItems.filter(item => item.name !== name);
    setTodoItems(newList);
  };
  return (
    <div className="todo-list-board">
      <TodoListFrame
        handleChange={handleChange}
        addFunction={() => addFunction()}
      >
        {todoItems.map(item => {
          return (
            <TodoListItems
              item={item.name}
              key={uniqid(item.name.substring(0, 2))}
              done={item.done}
              onCheckboxChange={() => onCheckboxChange(item.name)}
              removeItem={() => removeItem(item.name)}
            />
          );
        })}
      </TodoListFrame>
    </div>
  );
}
