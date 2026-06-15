import { getProductsFromNotion } from "@/lib/notion";

import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  return getProductsFromNotion();
}