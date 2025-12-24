const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="brand">{product.brand}</p>
      <p>{product.description}</p>
      <p className="price">
        Rp {Number(product.price).toLocaleString()}
      </p>
      <button>Beli</button>
    </div>
  );
};

export default ProductCard;
