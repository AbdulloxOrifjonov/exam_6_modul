/** @format */

import React, { createContext, useState } from "react";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);

  const addProduct = (newProduct) => {
    console.log(newProduct);
    setProduct([...product, { ...newProduct, id: product.length }]);
    console.dir(product);
  };


  return (
    <ProductContext.Provider value={{ addProduct, product }}>{children}</ProductContext.Provider>
  );
}

export default ProductContextProvider;
export { ProductContext };
