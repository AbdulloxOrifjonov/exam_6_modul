/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Card = () => {
  const { product } = useContext(ProductContext);

  return (
    <>
      {product.map((prod) => (
        <div className="four wide column" key={prod.id}>
          <Link to={`/${prod.id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={prod.img} alt="" />
                </div>
                <div className="content">
                  <div className="header">{prod.name}</div>
                  <div className="meta price">$ {prod.price}</div>
                  <div className="meta">{prod.category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
