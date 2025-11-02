import { useState } from "react";
import ProductCard from "./ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const ProductGrid = ({ products, loading, showFilters, setShowFilters }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState("RECOMMENDED");

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground">Loading products...</p>
      </div>
    );
  }
  

  return (
    <div className="flex-1">
      <div className="border-b border-border px-4 py-4 flex items-center justify-between">
        <div className="">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between text-[#888792] w-full text-sm font-medium"
        >
          <span>{showFilters ? "HIDE FILTER" : "SHOW FILTER"}</span>
        </button>
      </div>
        <div className="flex items-center gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="text-sm text-black hover:text-muted-foreground transition-colors flex items-center gap-1 border-none focus:ring-0 bg-transparent w-auto p-0 h-auto">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RECOMMENDED">RECOMMENDED</SelectItem>
              <SelectItem value="NEWEST FIRST">NEWEST FIRST</SelectItem>
              <SelectItem value="POPULAR">POPULAR</SelectItem>
              <SelectItem value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</SelectItem>
              <SelectItem value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="p-3">
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ${
            showFilters ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
