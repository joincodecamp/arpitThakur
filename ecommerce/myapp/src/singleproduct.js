import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singleproduct = () => {

  const parms = useParams();
  const id = parms.id;


  const [product, setProduct] = useState([]);
  //const [copy, setCopy] = useState([]);

  useEffect(() => {
    products();
  }, []);

  const products = async () => {
    
    const fet = await fetch(`https://fakestoreapi.com/products/${id}`);
    const set = await fet.json();
    setProduct(set);
    //setCopy(set);
  };


  

  return (
    <div>
      <div class="container">
        <div class="row">
        
            <div className="col-md-3">
              <img src={product.image} className="img-fluid" alt={product.title}
              />
              <p>{product.title}</p>
            </div>
          
        </div>
      </div>

    </div>
  )
}

export default Singleproduct