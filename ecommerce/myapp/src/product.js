import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {


  const [product, setProduct] = useState([]);
  const [copy, setCopy] = useState([]);

  const products = async () => {
    
    const fet = await fetch("https://fakestoreapi.com/products/");
    const set = await fet.json();
    setProduct(set);
    setCopy(set);
  };

  useEffect(() => {
    products();
  }, []);

  const filter = (e) => {
    if (e.target.id === "men's clothing") {
      const newCat = copy.filter(
        (singleProd) => singleProd.category === e.target.id
      );
      setProduct(newCat);
    }
    if (e.target.id === "jewelery") {
      const newCat = copy.filter(
        (singleProd) => singleProd.category === e.target.id
      );
      setProduct(newCat);
    }
    if (e.target.id === "women's clothing") {
      const newCat = copy.filter(
        (singleProd) => singleProd.category === e.target.id
      );
      setProduct(newCat);
    }
    if (e.target.id === "electronics") {
      const newCat = copy.filter(
        (singleProd) => singleProd.category === e.target.id
      );
      setProduct(newCat);
    }
  };

  return (
    <div>
 <h1>Products</h1>
      <button id="electronics" onClick={(e) => filter(e)}>
        Electronics
      </button>
      <button id="jewelery" onClick={(e) => filter(e)}>
        jewellery
      </button>
      <button id="men's clothing" onClick={(e) => filter(e)}>
        men's clothing
      </button>
      <button id="women's clothing" onClick={(e) => filter(e)}>
        women's clothong
      </button>
      <button onClick={()=> setProduct(copy)}>
        Home
      </button>
      <div class="container">
        <div class="row">
          {product.map((item, index) => (
            
            <div className="col-md-3" key={index}>
              <img src={item.image} className="img-fluid" alt={item.title} />
              <Link to={`/product/${item.id}`}>
              <p>{item.title}</p></Link>
            </div>
          
          ))}
        </div>
      </div>

    </div>
  )
}

export default Product