/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
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
            <p>0</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
