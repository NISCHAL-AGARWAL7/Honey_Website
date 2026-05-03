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
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description, // 🔥 ADD THIS
      quantity: 1,
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
        <div className="absolute bottom-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition">
          <Button onClick={handleAddToCart} isLoading={isLoading}>
            Add to Cart
          </Button>
        </div>

      </div>

      <div className="text-center mt-2">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </div>

    </Link>
  );
}