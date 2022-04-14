import React, { useState } from "react";
import Todos from "../components/Todos";

function Home() {
  const [textInput, setTextInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [deleteAll, setDeleteAll] = useState(false);

  const TodoText = (e) => {
    setTextInput(e.target.value);
  };
  const addNewTodo = () => {
    if (textInput) {
      const currDate = new Date();
      const newTodo = {
        id: todoItems.length,
        title: textInput,
        createTime: `created at : ${currDate.toLocaleDateString()} , ${currDate.toLocaleTimeString()}`,
        check: false,
      };
      setTodoItems([...todoItems, newTodo]);
      setTextInput("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodo = todoItems.filter((item) => {
      return item.id !== id;
    });

    setTodoItems(updatedTodo);
  };

  const handleEdit = () => {
    console.log(editItem);
    const TempTodo = [];
    todoItems.forEach((item) => {
      if (item.id == editItem.id) {
        item.title = textInput;
        TempTodo.push(item);
      } else {
        TempTodo.push(item);
      }
    });

    setTodoItems(TempTodo);
    setIsUpdate(false);
    setTextInput("");
  };

  const updateBtn = (id, text) => {
    setIsUpdate(true);
    setTextInput(text);
    setEditItem({ id, text });
  };

  const handleCheckBox = (id, value) => {
    const TempTodo = [];
    todoItems.forEach((item) => {
      if (item.id == id) {
        item.check = !value;
        console.log("sdffsdfs", item.id, id, value, item);
        TempTodo.push(item);
      } else {
        TempTodo.push(item);
      }
    });
    console.log("dfsdfsdfsdf", TempTodo);
    setTodoItems(TempTodo);
  };

  console.log("todddd", todoItems);

  return (
    <div>
      <h1 style={{ background: "#ccc", padding: "10px" }}>Todo app</h1>
      <div style={{ background: "#ccc", height: 500, width: 500, padding: 10 }}>
        <div>
          <input
            type={"text"}
            value={textInput}
            style={{
              width: "80%",
              height: "30px",
            }}
            onChange={(e) => TodoText(e)}
          />
          {isUpdate ? (
            <button
              style={{ width: "18%", height: "35px" }}
              onClick={handleEdit}
            >
              update
            </button>
          ) : (
            <button
              style={{ width: "18%", height: "35px" }}
              onClick={addNewTodo}
            >
              add
            </button>
          )}
        </div>
        {todoItems?.map((item) => {
          return (
            <Todos
              item={item}
              key={item.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isUpdate={isUpdate}
              updateBtn={updateBtn}
              handleCheckBox={handleCheckBox}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
