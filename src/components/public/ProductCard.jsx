export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 15, width: 220 }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => console.log("Beli produk:", product.name)}
      >
        Beli via WhatsApp
      </button>
    </div>
  );
}
