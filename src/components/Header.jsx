/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
          <h2 id="ww">FakeShop</h2>
        </Link>
        <Link to={`/add`}>Add product</Link>
        <Link to={`cardDetail`}>
          <AiOutlineShoppingCart className="shopCard" />
          <div className="shopCardCount">
            <p>{cart.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
