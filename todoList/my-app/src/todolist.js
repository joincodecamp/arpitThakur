import { useEffect, useState } from "react";

const Todolist = () => {
  const [inputVal, setInputVal] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [id, setId] = useState("");
  const [btn, setBtn] = useState({
    type: "Submit",
  });
  const [todos, setTodo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

 async function handleDeleteClick(index) {
    console.log("edit");
    await fetch(`http://localhost:7000/delete_todo/${index}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        dataFromapi();
        setInputVal("");
        setHashtag("");
        setBtn((btn) => {
          return {
            ...btn,
            type: "Submit",
          };
        });
      })
      .catch(() => {
        // setItemCopy(currentTodos);
        setInputVal("");
        setHashtag("");
      });

    // const removeItem = todos.filter((todo) => {

    //   return todo.id !== id;

    // });
    // console.log("removeItemremoveItem",removeItem)
    // setTodo(removeItem);
  }

  // useEffect(() => {
  //   console.log(filteredTodos);
  // },[filteredTodos]);

  const handleEditClick = (index, user_id) => {
    console.log(filteredTodos[index])
    setInputVal(filteredTodos[index].content);
    setId(user_id);
    setBtn((btn) => {
      return {
        ...btn,
        type: "Edit",
      };
    });  
    // setTodo({ ...todos, text: e.target.value});
  };

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = todos.filter((todos) => {
        return todos.content.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFilteredTodos([...results]);
    } else {
      setFilteredTodos([...todos]);
    }
  };

  useEffect(() => {
    dataFromapi();
  }, []);
  async function dataFromapi() {
    await fetch("http://localhost:7000/get_todo", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setFilteredTodos([...data.savedTodo]);
        // setTodo(data.savedTodo);
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  switch (btn.type) {
    case "Submit":
      addTodo();
      break;
      case "Edit":
      editTodo();
        break; 
        case "DEl":
      deleteTodo();
        break;
    default:
      break;
  }
  };
  const editTodo = async () => {
    console.log("edit");
    await fetch(`http://localhost:7000/edit_todo/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        content: inputVal,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        dataFromapi();
        setInputVal("");
        setHashtag("");
        setBtn((btn) => {
          return {
            ...btn,
            type: "Submit",
          };
        });
      })
      .catch(() => {
        // setItemCopy(currentTodos);
        setInputVal("");
        setHashtag("");
      });
  };
  const deleteTodo = async (index) => {
   
  };
 
  const addTodo = async () => {
    const currentTodos = todos;
    await fetch("http://localhost:7000/add_todo", {
      method: "POST",
      body: JSON.stringify({
        content: inputVal,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        dataFromapi();
        setInputVal("");
        setHashtag("");
      })
      .catch(() => {
        setTodo(currentTodos);
        // setItemCopy(currentTodos);
        setInputVal("");
        setHashtag("");
      });
  };
  const filterList = (tag) => {
    console.log(tag);

    if (tag !== "") {
      const results = todos.filter((todos) => {
        return todos.hashtag === tag;
      });
      setFilteredTodos([...results]);
    } else {
      setFilteredTodos([...todos]);
    }
  };

  return (
    <div className="app-container" id="taskList">
      <h1 className="app-header">TO DO LIST</h1>
      <div className="add-task">
        <form>
          <input
            type="search"
            onChange={filter}
            placeholder="Search tasks here"
          ></input>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="task-input"
            placeholder="Add a task"
          />
          <br />
          <input
            type="tag"
            placeholder="Tags"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
          ></input>
          <br />
          <button onClick={handleSubmit} className="submit-task">
            {btn.type}
          </button>
        </form>
      </div>
      <ul className="task-list">
        {filteredTodos.map((todo, index) => {
          return (
            <li className="task-list-item" v-for="task in tasks" key={index}>
              <label className="task-list-item-label">{todo.content}</label>
              <label className="task-list-item-label">
                <span onClick={() => filterList(todo.hashtag)}>
                  {todo.hashtag}
                </span>
                <button onClick={(e) => handleEditClick(index, todo._id)}>
                  Edit
                </button>
                <button onClick={(e) => handleDeleteClick(todo._id)}>
                  Delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;
