/** @format */

import React, { useContext } from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { CartContext } from "../context/CartContext";

const CardDetail = () => {
  const { cart, quantityIncrement, quantityDecrement, deleteCart } = useContext(CartContext);

  const hisoblashJami = () => {
    let umumiySumma = 0;
    for (let item of cart) {
      umumiySumma += item.quantity * item.price;
    }
    return umumiySumma;
  };

  const oraliqSumma = hisoblashJami();
  const yetkazibBerishNarxi = oraliqSumma > 1000 ? 0 : 50;
  const yakuniySumma = oraliqSumma + yetkazibBerishNarxi;

  return (
    <div>
      <div className="carditems">
        <div className="cartitems-format-main">
          <p>Mahsulotlar</p>
          <p>Nomi</p>
          <p>Narxi</p>
          <p>Soni</p>
          <p>Jami</p>
          <p>O'chirish</p>
        </div>
        <hr />
        <div>
          {cart.map((card) => (
            <div key={card.id} className="cartitems-format cartitems-format-main">
              <img src={card.img} alt="" />
              <p>{card.name}</p>
              <p>${card.price}</p>
              <div
                className="cartitems-quantity"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <button onClick={() => quantityDecrement(card.id)}> - </button>
                {card.quantity}
                <button onClick={() => quantityIncrement(card.id)}> + </button>
              </div>
              <p>${card.quantity * card.price}</p>
              <div onClick={() => deleteCart(card.id)}>
                <img src={remove_icon} className="cartitems-remove-icon" alt="" />
              </div>
            </div>
          ))}
          <hr />
        </div>
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Savatcha Jami</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Oraliq Jami</p>
                <p>${oraliqSumma}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Yetkazib Berish Narxi</p>
                <p>${yetkazibBerishNarxi > 0 ? "50" : "Bepul"}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Yakuniy Jami</h3>
                <h3>${yakuniySumma}</h3>
              </div>
            </div>
            <button>XARIDNI YAKUNLASH</button>
          </div>
          <div className="cartitems-promocode">
            <p>Agar promo kodingiz bo'lsa, bu yerga kiriting</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo kod" />
              <button>Yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
