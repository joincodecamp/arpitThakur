
import './App.css';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";
import About from './about'
import Project from './project'

function App() {
  return (

    <div className="App">
    <Header/>
    
      <Routes>
        <Route path="/"element={< Navbar/>} />
        <Route path="/home"element={< Navbar/>} />
        <Route path="/about"element={< About/>}/>
        <Route path="/project"element={<Project/>}/>
      </Routes>
    
  
   

  
    </div>
  );
}

export default App;
