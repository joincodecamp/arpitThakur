
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import  About from './about';
import Home from './Home';

function App() {
  
  
  return (

    
    <div>
  <Link to="/">Home</Link>
    <Link to="/about">about</Link>


<Routes>
<Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  </Routes>




     
    </div>
  );
}

export default App;
