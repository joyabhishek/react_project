import React from 'react';
import products from "./vschoolProducts"
import Product from "./Product"


function App(){
  
  let prodComs = products.map(function(product) {
    //console.log(product);
    return(
    <Product 
    key = {product.id}
    name =  {product.name}
    price = {product.price}
    description = {product.description} 
    />)
  })
  
  
  return (
    <div>{prodComs}</div>
    )
}

export default App