"use client";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleAddToCart = () => {
    addItem(product);
    router.push("/cart");
  };

  return (
    <Button size="lg" className="w-full sm:w-auto flex-1 gap-2" onClick={handleAddToCart}>
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </Button>
  );
}
