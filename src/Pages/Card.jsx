import { useContext } from "react";
import { cartContext } from "./Context/CartContext";
import "./css/Card.css";

export default function Cart() {
  const { cart, setCart } = useContext(cartContext);

  function removeItem(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из каталога</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Корзина</h1>

      <ul className="cart__list">
        {cart.map((item, index) => (
          <li key={index} className="cart__item">
            <img src={item.image} alt={item.name} className="cart__img" />
            <div className="cart__info">
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()} ₽</p>
            </div>
            <button
              className="cart__remove"
              onClick={() => removeItem(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <div className="cart__footer">
        <h2>Итого: {total.toLocaleString()} ₽</h2>
        <button className="cart__clear" onClick={clearCart}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}