import { getProducts } from "@/services/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";
import { Product } from "@/types";

export const dynamic = 'force-dynamic';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const sp = await searchParams;
  const category = typeof sp.category === 'string' ? sp.category : undefined;
  const search = typeof sp.search === 'string' ? sp.search : undefined;

  let products = await getProducts();

  if (category) {
    products = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    products = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));
  }

  const allProducts = await getProducts();
  const categories = Array.from(new Set(allProducts.map((p) => p.category)));

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url("/honey-bg.png")' }}
    >
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-[2px]"></div>
      
      {/* ✅ FIX: pt-24 added to push content below fixed navbar */}
      <div className="container mx-auto px-4 pt-24 pb-12 lg:pt-28 lg:pb-24 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Shop All</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our complete collection of natural, earth-sourced premium products.
            </p>
          </div>
          
          <div className="w-full md:max-w-xs">
            <form className="relative" action="/products" method="GET">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                name="search"
                placeholder="Search products..."
                defaultValue={search}
                className="w-full rounded-full border border-border bg-background py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              {category && <input type="hidden" name="category" value={category} />}
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Categories</h3>
              <div className="space-y-2">
                <a 
                  href="/products" 
                  className={`block text-sm transition-colors ${!category ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  All Products
                </a>
                {categories.map((c) => (
                  <a 
                    key={c}
                    href={`/products?category=${encodeURIComponent(c)}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                    className={`block text-sm transition-colors ${category === c ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-muted/30 rounded-2xl border border-dashed border-border">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters.</p>
                <a href="/products" className="inline-block mt-4 text-primary hover:underline">Clear all filters</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}