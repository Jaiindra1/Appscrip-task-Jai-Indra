import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard = ({ title, image, price }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden bg-muted mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-sm uppercase tracking-tight">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </h3>
        <p className="text-xs text-muted-foreground">
          <a href="#" className="underline hover:no-underline">
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-medium">${price}</p>
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-0"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
