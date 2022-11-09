import { useEffect, useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const getTasks = () => {};
  useEffect(() => {
    getTasks();
  }, []);
  const addTodo = () => {
    setTodoList([...todoList, todoValue]);
    setTodoValue("");
  };

  const deleteItem = (id) => {
    let filteredTodo = todoList.filter((item, index) => index !== id);
    setTodoList(filteredTodo);
  };
  return (
    <div className="container">
      <div className="w-100">
        <input
          type="text"
          placeholder="할일을 입력하세요"
          onChange={(event) => setTodoValue(event.target.value)}
          className="input-box"
          value={todoValue}
        />
        <button onClick={addTodo} className="button-add">
          추가
        </button>
      </div>

      <TodoBoard todoList={todoList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
