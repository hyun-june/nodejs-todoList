import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteItem, toggleComplete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList && todoList.length > 0 ? (
        todoList.map((item, index) => <TodoItem />)
      ) : (
        <h1>There is no item in the List </h1>
      )}
    </div>
  );
};

export default TodoBoard;
