import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function GET() {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DB_ID!,
  });

  const products = response.results.map((item: any) => ({
    id: item.id,
    name: item.properties.Name.title[0]?.plain_text || "",
    price: item.properties.Price.number || 0,
    category: item.properties.Category.select?.name || "",
    image: item.properties.Image.url || "",
    description:
      item.properties.Description.rich_text[0]?.plain_text || "",
  }));

  return Response.json(products);
}