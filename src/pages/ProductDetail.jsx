/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { addCart } = useContext(CartContext);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { product } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = product.find((prod) => prod.id === Number(id));
    if (!foundProduct) {
      navigate("*");
    } else {
      setSelectedProduct(foundProduct);
    }
  }, [id, product, navigate]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }
  const handleSubmitCart = () => {
    addCart(selectedProduct);
  };

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              {/* <img
                className="ui fluid image"
                src="https://istyle.hr/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pink_pdp_image_position-1__en-us_1_1.jpg"
                alt="product"
              /> */}
              <img src={selectedProduct.img} alt="" />
            </div>
            <div className="column rp">
              <h1>{selectedProduct.name}</h1>
              <h2>
                <div className="ui teal tag label">$ {selectedProduct.price}</div>
              </h2>
              <h3 className="ui brown block header">{selectedProduct.category}</h3>
              <p>{selectedProduct.desctription}</p>
              <div className="ui vertical animated button">
                <div className="content" onClick={handleSubmitCart}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
