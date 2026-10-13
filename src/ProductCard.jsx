import { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const [corzina, setCorzina] = useState([]);

    function addToCart() {
        setCorzina(prev => [...prev, product]);
    }

    return (
        <article className="pc-card">
            <div className="pc-card__shine" />

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
                    <span className="pc-card__price">{product.price.toLocaleString('ru-RU')}</span>
                    <span className="pc-card__currency">₽</span>
                </div>

                <button className="pc-card__button" onClick={addToCart}>
                    <span className="pc-card__button-label">Добавить в корзину</span>
                    <span>→</span>
                </button>

                <p className="pc-card__count">
                    В корзине: <strong>{corzina.length}</strong>
                </p>
            </div>
        </article>
    );
}