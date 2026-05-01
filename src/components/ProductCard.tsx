import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/5] mb-5 border border-transparent group-hover:border-primary/20 group-hover:shadow-2xl transition-all duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center rounded-full glass-panel px-3 py-1 text-xs font-medium text-foreground tracking-wide uppercase shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
          <span className="text-xs font-medium tracking-widest uppercase text-foreground bg-background/90 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            Explore Details
          </span>
        </div>
      </div>
      
      <div className="space-y-1.5 px-1 text-center">
        <h3 className="font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground font-medium text-sm tracking-wide">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}