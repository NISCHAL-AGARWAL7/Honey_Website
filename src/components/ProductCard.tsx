import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/5] mb-5 
      border border-border/40 
      group-hover:border-primary/30 
      group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
      transition-all duration-500">

        {/* IMAGE */}
        <Image
  src={product.image || "/placeholder.png"}
  alt={product.name || "Product image"}
  fill
  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
/>

        {/* SOFT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* TOP BADGE */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center rounded-full 
          bg-background/80 backdrop-blur-md 
          px-3 py-1 text-[10px] font-medium tracking-widest uppercase 
          text-foreground border border-border shadow-sm">
            {product.category}
          </span>
        </div>

        {/* HOVER CTA */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center 
        opacity-0 translate-y-4 
        group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-500 z-10">

          <span className="text-xs font-semibold tracking-widest uppercase 
          text-primary 
          bg-background/90 backdrop-blur-md 
          px-6 py-2 rounded-full 
          border border-primary/20 
          shadow-md 
          group-hover:shadow-lg">
            Explore Details
          </span>
        </div>

        {/* PREMIUM LIGHT EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
          <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-b from-white/10 via-transparent to-transparent rotate-6" />
        </div>

      </div>

      {/* TEXT */}
      <div className="space-y-1.5 px-1 text-center">

        <h3 className="font-semibold text-lg leading-tight text-foreground 
        group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-muted-foreground font-medium text-sm tracking-wide">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

      </div>

    </Link>
  );
}