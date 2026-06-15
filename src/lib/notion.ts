import { Client } from "@notionhq/client";
import { Product } from "@/types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID;

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "fallback-1",
    name: "Pure Wild Forest Honey",
    category: "Honey",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "Sourced from the deep forests, our raw honey is 100% pure and unprocessed.",
  },
  {
    id: "fallback-2",
    name: "Himalayan Shilajit Resin",
    category: "Shilajit",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "Premium grade pure Shilajit sourced from high altitudes of the Himalayas.",
  },
  {
    id: "fallback-3",
    name: "Organic Acacia Honey",
    category: "Honey",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "Light in color and mild in flavor, perfect for sweetening teas and desserts.",
  },
  {
    id: "fallback-4",
    name: "Ashwagandha Root Powder",
    category: "Herbs",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "An ancient medicinal herb that helps manage stress and anxiety.",
  },
];

export async function getProductsFromNotion(): Promise<Product[]> {
  if (!process.env.NOTION_API_KEY || !databaseId) {
    console.warn("⚠️ Missing Notion API Key or Database ID. Using fallback products.");
    return FALLBACK_PRODUCTS;
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    return response.results.map((page: any) => {
      const properties = page.properties;
      const name = properties.Name?.title?.[0]?.plain_text || "Unknown Product";
      const category = properties.Category?.select?.name || "Uncategorized";
      const image = properties.Image?.url || "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg";
      const description = properties.Description?.rich_text?.[0]?.plain_text || "No description available.";

      return {
        id: page.id,
        name,
        category,
        image,
        description,
      };
    });
  } catch (error) {
    console.warn("⚠️ Failed to fetch from Notion. Using fallback products.", error);
    return FALLBACK_PRODUCTS;
  }
}
