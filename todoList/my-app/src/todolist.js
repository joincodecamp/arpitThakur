
import { useState } from "react";

const Todolist = () => {
  const [inputVal, setInputVal] = useState("");
  const[hashtag,setHashtag] = useState("");

  const [todos, setTodo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos)
  

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = todos.filter((todos) => {
        return todos.text.toLowerCase().startsWith(keyword.toLowerCase());
        
      })
      setFilteredTodos(results);
    } else {
      setFilteredTodos(todos);
     
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const currentTodos = todos;
    currentTodos.push({text: inputVal, hashtag: hashtag});

    setTodo(currentTodos);
    // setItemCopy(currentTodos);
    setInputVal('');
    setHashtag('');
    
  };
  
  const filterList = (tag) => {
    console.log(tag)
 
    if (tag !== '') {
      const results = todos.filter((todos) => {
        return todos.hashtag === tag;
        
      })
      setFilteredTodos(results);
    } else {
      setFilteredTodos(todos);
     
    }
    
}


  return (
    <div className="app-container" id="taskList">
    <h1 className="app-header">TO DO LIST</h1>
    <div className="add-task"> 
      <form>
      <input type ="search"onChange={filter}
        ></input>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="task-input"
        />
        <br />
        <input type ="tag"placeholder="Tag"value={hashtag}onChange={(e)=>setHashtag(e.target.value)}></input><br/>
        <button onClick={handleSubmit} className="submit-task">
          Submit
        </button>
       
      </form>
    </div>
    <ul className="task-list">
      {filteredTodos.map((todo, index) => {
        return (
          <li className="task-list-item" v-for="task in tasks" key={index}>
            <label className="task-list-item-label">
              <span>{todo.text}</span>
            </label>
            <label className="task-list-item-label">
              <span onClick={() => filterList(todo.hashtag)}>{todo.hashtag}</span>
            </label>
            
          </li>
        );
      })}
    </ul>
  </div>
  )
    }

export default Todolist
