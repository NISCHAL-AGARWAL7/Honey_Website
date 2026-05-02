import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getProducts } from "@/services/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <style>{`
  .button-wrapper::before {
    animation: spin-gradient 4s linear infinite;
  }

  @keyframes spin-gradient {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`}</style>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/honey-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-30 dark:opacity-20 scale-105 animate-float"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
              100% Pure & Organic
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-8 animate-fade-in-up stagger-1 drop-shadow-sm">
            Nature's Purest <br /> 
            <span className="text-gradient-gold italic pr-2">Essence</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up stagger-2 font-light leading-relaxed">
            Discover our premium collection of raw honey, pure shilajit, and natural wellness products sourced directly from the earth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up stagger-3">

  {/* 🔥 Animated Gradient Button */}
  <div className="button-wrapper relative inline-block p-[2px] rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#C99C33,_#C99C3330,_#C99C33)]">
    
    <Button
      asChild
      size="lg"
      className="relative z-10 rounded-full px-10 h-14 text-lg bg-black text-white shadow-[0_0_30px_rgba(201,156,51,0.2)] hover:shadow-[0_0_40px_rgba(201,156,51,0.4)]"
    >
      <Link href="/products">Shop Collection</Link>
    </Button>

  </div>

  {/* Secondary Button (same as before) */}
  <Button
    asChild
    variant="outline"
    size="lg"
    className="rounded-full px-10 h-14 text-lg glass-panel hover:bg-primary/10"
  >
    <Link href="#about">Our Story</Link>
  </Button>

</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 skew-y-2 transform -translate-y-12 z-0" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-panel p-10 rounded-3xl flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Leaf className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">100% Organic</h3>
                <p className="text-muted-foreground leading-relaxed">Sourced from untouched natural environments with zero additives.</p>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Lab Tested</h3>
                <p className="text-muted-foreground leading-relaxed">Every batch is rigorously tested for purity and authenticity.</p>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">Carefully extracted to preserve all natural enzymes and nutrients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Selection</h2>
              <p className="text-muted-foreground">Our most loved natural products.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-muted-foreground col-span-full text-center py-12">No products found. Please check Notion API.</p>
            )}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Honey", "Shilajit", "Herbs", "Wellness"].map((category) => (
              <Link 
                key={category} 
                href={`/products?category=${category}`}
                className="px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-foreground font-medium"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}