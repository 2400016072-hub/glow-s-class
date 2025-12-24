import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const products = useProducts();

  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
