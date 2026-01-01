import Navbar from "../components/public/Navbar";
import ProductCard from "../components/public/ProductCard";
import Footer from "../components/public/Footer";

const products = [
  {
    id: 1,
    name: "Hydrating Facial Wash",
    price: 75000,
    image: "https://images.pexels.com/photos/3737615/pexels-photo-3737615.jpeg"
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    price: 120000,
    image: "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg"
  },
  {
    id: 3,
    name: "Moisturizing Cream",
    price: 95000,
    image: "https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg"
  }
];

export default function UserPage() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: 20, padding: 20 }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}
