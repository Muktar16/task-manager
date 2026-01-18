

export default function Header({ cartCount }) {
  return <h2>Cart Items: {cartCount}</h2>;
}

export function ProductCard({ onAddToCart }) {
  return (
    <div>
      <h3>iPhone 15</h3>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

