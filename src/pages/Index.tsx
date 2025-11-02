import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })  
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-1">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {showFilters && <Filters productCount={products.length} />}
            <ProductGrid
              products={products}
              loading={loading}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
