import React from "react";

const TodoItem = ({ item, index, deleteItem }) => {
  return (
    <div className="todo-item">
      {item}
      <div>
        <button className="button-delete" onClick={() => deleteItem(index)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
