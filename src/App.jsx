import ProductCard from './ProductCard';
import './ProductCard.css';

const products = [
  {
    id: 1,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Moscow%2C_Zeekr_001%2C_Aug_2025_30.jpg/960px-Moscow%2C_Zeekr_001%2C_Aug_2025_30.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    name: 'Zeekr 001',
    price: 4290000,
  },
  {
    id: 2,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_Zeekr_007_%D0%BD%D0%B0_%D0%9C%D0%B0%D0%BA%D0%B0%D1%82%D0%B0%D0%B5%D0%B2%D0%B0.jpg/960px-%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_Zeekr_007_%D0%BD%D0%B0_%D0%9C%D0%B0%D0%BA%D0%B0%D1%82%D0%B0%D0%B5%D0%B2%D0%B0.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    name: 'Zeekr 007',
    price: 3890000,
  },
  {
    id: 3,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Moscow%2C_Zeekr_X%2C_Aug_2025_04.jpg/960px-Moscow%2C_Zeekr_X%2C_Aug_2025_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    name: 'Zeekr X',
    price: 2990000,
  },
  {
    id: 4,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Zeekr_009_01_China_2023-04-17.jpg/960px-Zeekr_009_01_China_2023-04-17.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    name: 'Zeekr 009',
    price: 5490000,
  },
  {
    id: 5,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Zeekr_Mix_005.jpg/960px-Zeekr_Mix_005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    name: 'Zeekr Mix',
    price: 3490000,
  },
  {
    id: 6,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Zeekr_7X_003.jpg/960px-Zeekr_7X_003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    name: 'Zeekr 7X',
    price: 4690000,
  },
];
export default function App() {
  return (
    <div className="products-grid">
      {products.map((p, i) => (
        <div key={p.id} style={{ animationDelay: `${i * 0.08}s` }}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}