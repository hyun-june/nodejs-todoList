import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteItem }) => {
  console.log("Tt", todoList);
  return (
    <div className="w-100">
      <h2>Todo List</h2>
      {todoList.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          index={index}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoBoard;
