"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddToCart = (e: any) => {
    e.preventDefault(); // ❗ link navigation rokega
    e.stopPropagation();

    setIsLoading(true);

    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      description: product.description,
    });

    // Fake loading delay to give a professional click feedback
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">

      <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">

        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover"
          unoptimized
        />

        {/* ADD TO CART */}
        <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 px-3 sm:px-0 flex justify-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Button 
            onClick={handleAddToCart} 
            isLoading={isLoading}
            className="w-full sm:w-auto shadow-lg"
          >
            Add to Cart
          </Button>
        </div>

      </div>

      <div className="text-center mt-2">
        <h3>{product.name}</h3>
      </div>

    </Link>
  );
}