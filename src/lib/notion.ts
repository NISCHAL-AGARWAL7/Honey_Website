import { Client } from "@notionhq/client";
import { Product } from "@/types";

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Mock data fallback if environment variables are not set
const MOCK_PRODUCTS: Product[] = [
  {
    id: "mock-1",
    name: "Pure Wild Forest Honey",
    price: 499,
    category: "Honey",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "Sourced from the deep forests, our raw honey is 100% pure and unprocessed. Rich in antioxidants and natural enzymes.",
  },
  {
    id: "mock-2",
    name: "Himalayan Shilajit Resin",
    price: 1299,
    category: "Shilajit",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "Premium grade pure Shilajit sourced from high altitudes of the Himalayas. Boosts energy, stamina, and overall vitality.",
  },
  {
    id: "mock-3",
    name: "Organic Acacia Honey",
    price: 599,
    category: "Honey",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "Light in color and mild in flavor, perfect for sweetening teas and desserts without altering their taste.",
  },
  {
    id: "mock-4",
    name: "Ashwagandha Root Powder",
    price: 349,
    category: "Herbs",
    image: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
    description: "An ancient medicinal herb that helps manage stress and anxiety while boosting brain function.",
  }
];

export async function getProductsFromNotion(): Promise<Product[]> {
  if (!process.env.NOTION_API_KEY || !databaseId) {
    console.warn("Missing Notion API Key or Database ID. Using mock data.");
    return MOCK_PRODUCTS;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
    });

    const products = response.results.map((page: any) => {
      // Safely extract properties handling potential undefined values
      const properties = page.properties;
      
      const name = properties.Name?.title?.[0]?.plain_text || "Unknown Product";
      const price = properties.Price?.number || 0;
      const category = properties.Category?.select?.name || "Uncategorized";
      const image = properties.Image?.url || "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg";
      const description = properties.Description?.rich_text?.[0]?.plain_text || "No description available.";

      return {
        id: page.id,
        name,
        price,
        category,
        image,
        description,
      };
    });

    return products;
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    // Fallback to mock data on error so UI doesn't completely break
    return MOCK_PRODUCTS;
  }
}
