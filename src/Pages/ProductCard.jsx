import { userContext } from "./Context/UserContext";
import { cartContext } from "./Context/CartContext";
import { useContext } from "react";
import "./css/ProductCard.css";

export default function ProductCard({ product, username }) {
  const { cart, setCart } = useContext(cartContext);
  const count = cart.filter((p) => p.id === product.id).length;
  const { user } = useContext(userContext);

  function addToCart() {
    if (!user.isAuthenticated) {
      alert(`Пожалуйста, войдите в систему, чтобы добавить товар в корзину. ${username}`);
      return;
    } else {
      setCart((prev) => [...prev, product]);
    }
  }

  function removeFromCart() {
    if (!user.isAuthenticated) {
      alert("Пожалуйста, войдите в систему, чтобы удалить товар из корзины.");
      return;
    } else {
      setCart((prev) => {
        const index = prev.findIndex((p) => p.id === product.id);
        if (index === -1) return prev;
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      });
    }
  }

  return (
    <article className="pc-card">
      <div className="pc-card__media">
        <img
          className="pc-card__image"
          src={product.image}
          alt={product.name}
        />
        <div className="pc-card__overlay" />
      </div>

      <div className="pc-card__body">
        <h2 className="pc-card__title">{product.name}</h2>

        <div className="pc-card__price-row">
          <span className="pc-card__price">
            {product.price.toLocaleString("ru-RU")}
          </span>
          <span className="pc-card__currency">₽</span>
        </div>

        <div className="pc-card__stepper">
          <button className="pc-card__step" onClick={removeFromCart}>
            −
          </button>
          <span className="pc-card__step-count">
            {count > 0 ? `${count} в корзине` : "Добавить"}
          </span>
          <button className="pc-card__step" onClick={addToCart}>
            +
          </button>
        </div>

        <p className="pc-card__count">
          В корзине: <strong>{count}</strong>
        </p>
      </div>
    </article>
  );
}
