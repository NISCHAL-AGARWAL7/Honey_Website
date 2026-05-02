import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text(); // 🔥 IMPORTANT
    console.error("🔥 FULL API ERROR:", text);
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const data: Product[] = await res.json();
  return data;
}