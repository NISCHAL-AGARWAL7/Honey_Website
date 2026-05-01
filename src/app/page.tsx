import { getProducts } from "@/services/getProducts";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}