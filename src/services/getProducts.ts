import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  // Using an absolute URL is required for fetch in Server Components
  // in Next.js when targeting our own API route.
  // We determine the base URL using standard headers or env var.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
  try {
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store", // Ensure we fetch fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getProducts service:", error);
    return [];
  }
}