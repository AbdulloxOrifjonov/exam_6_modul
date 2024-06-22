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

  const deleteProducts = (id) => {
    const newProduct = product.filter((prod) => prod.id !== id);
    setProduct(newProduct);
  };

  return (
    <ProductContext.Provider value={{ addProduct, product, deleteProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
export { ProductContext };
