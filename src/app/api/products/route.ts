import { NextResponse } from "next/server";
import { getProductsFromNotion } from "@/lib/notion";

export async function GET() {
  try {
    const products = await getProductsFromNotion();
    return NextResponse.json(products);
  } catch (error) {
    console.error("API Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
