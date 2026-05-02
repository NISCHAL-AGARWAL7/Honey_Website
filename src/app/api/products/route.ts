import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: "NOTION_API_KEY missing" }, { status: 500 });
  }

  if (!process.env.NOTION_DB_ID) {
    return NextResponse.json({ error: "NOTION_DB_ID missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      console.error("❌ Notion API Error:", err);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    const data = await response.json();

    const products = data.results.map((item: any) => {
  // Image structure dekho
  console.log("🖼️ Image field:", JSON.stringify(item.properties.Image, null, 2));
  
  return {
    id: item.id,
    name: item.properties.Name?.title?.[0]?.plain_text || "",
    price: item.properties.Price?.number || 0,
    category: item.properties.Category?.select?.name || "",
    image: item.properties.Image?.url || 
       item.properties.Image?.files?.[0]?.file?.url || 
       item.properties.Image?.files?.[0]?.external?.url || "",
    description: item.properties.Description?.rich_text?.[0]?.plain_text || "",
  };
});

    return NextResponse.json(products);
  } catch (error: any) {
    console.error("❌ Error:", error?.message || error);
    return NextResponse.json({ error: error?.message || "Failed" }, { status: 500 });
  }
}