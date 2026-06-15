import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getProducts } from "@/services/getProducts";
import { ProductCard } from "@/components/ProductCard";
import { HeroSection } from "@/components/HeroSection";
import { ImageMarquee } from "@/components/ImageMarquee";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover premium organic honey, shilajit, and natural wellness products at Organic Herbs & Honey. 100% pure, lab tested, and sustainably sourced.",
  openGraph: {
    title: "Organic Herbs & Honey | Premium Honey & Shilajit",
    description:
      "Discover premium organic honey, shilajit, and natural wellness products. 100% pure, lab tested, and sustainably sourced.",
  },
};

export default async function Home() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Animated Hero Section - powered by framer-motion */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 skew-y-2 transform -translate-y-12 z-0" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col items-center text-center space-y-4 md:space-y-6 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Leaf className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">100% Organic</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Sourced from untouched natural environments with zero additives.</p>
              </div>
            </div>
            <div className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col items-center text-center space-y-4 md:space-y-6 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Lab Tested</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Every batch is rigorously tested for purity and authenticity.</p>
              </div>
            </div>
            <div className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col items-center text-center space-y-4 md:space-y-6 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Carefully extracted to preserve all natural enzymes and nutrients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 md:mb-4">Featured Selection</h2>
              <p className="text-muted-foreground text-sm md:text-base">Our most loved natural products.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm md:text-base">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

      {/* Categories */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            {["Honey", "Shilajit", "Herbs", "Wellness"].map((category) => (
              <Link
                key={category}
                href={`/products?category=${category}`}
                className="px-5 py-2 md:px-6 md:py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-foreground font-medium text-sm md:text-base"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Image Marquee */}
      <ImageMarquee />
    </div>
  );
}