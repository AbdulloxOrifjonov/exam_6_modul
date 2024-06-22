/** @format */

import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function AddProduct() {
  const { product, addProduct, deleteProducts } = useContext(ProductContext);

  const [prod, setProd] = useState({
    name: "",
    price: 0,
    desctription: "",
    category: "",
    img: undefined,
  });

  const deleteProduct = (id) => {
    deleteProducts(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(prod);
    console.log(e);
    console.log(prod);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>AddProduct page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a product name ?"
            onChange={(e) => setProd({ ...prod, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter a price ?"
            onChange={(e) => setProd({ ...prod, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter a desctription ?"
            onChange={(e) => setProd({ ...prod, desctription: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter a category ?"
            onChange={(e) => setProd({ ...prod, category: e.target.value })}
          />
          <input
            type="url"
            placeholder="Enter a Image ?"
            onChange={(e) => setProd({ ...prod, img: e.target.value })}
          />
          <button>Submit</button>
        </form>
      </div>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {product.map((prod) => (
          <div className="ui link cards" key={prod.id}>
            <div className="card">
              <div className="image">
                <img src={prod.img} alt="" />
              </div>
              <div className="content">
                <div className="header">{prod.name}</div>
                <div className="meta price">$ {prod.price}</div>
                <div className="meta">{prod.category}</div>
              </div>
              <div className="custom_btns">
                <button
                  onClick={() => deleteProduct(prod.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    border: "1px solid red",
                    borderRadius: "10px",
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    margin: "10px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddProduct;
