import ProductCard from "./ProductCard";

export default function Home(props) {
  return (
    <div className="products-grid">
      {props.products.map((p, i) => (
        <div key={p.id} style={{ animationDelay: `${i * 0.08}s` }}>
          <ProductCard product={p } username = {props.username} />
        </div>
      ))}
    </div>
  );
}