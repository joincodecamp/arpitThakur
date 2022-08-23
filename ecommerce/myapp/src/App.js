
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Product from './product';
import Singleproduct from './singleproduct'
function App() {
  
  
  return (

    
    <div>
 
   


<Routes>
<Route path="/" element={<Product />} />
<Route path="/product/:id" element={<Singleproduct />} />
  
  </Routes>




     
    </div>
  );
}

export default App;
