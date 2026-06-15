import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducts } from "@/services/getProducts";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://auranaturals.com";

  // Truncate description to ~150 chars for clean OG/Twitter snippets
  const truncate = (str: string, max = 150) =>
    str.length > max ? str.slice(0, max).trimEnd() + "…" : str;

  const seoDescription = `${product.name} - ${truncate(product.description, 150)}`;

  return {
    title: product.name,
    description: seoDescription,
    openGraph: {
      title: `${product.name} | Organic Herbs & Honey`,
      description: seoDescription,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      url: `${baseUrl}/products/${product.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Organic Herbs & Honey`,
      description: seoDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7017379969";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "organicherbsandhoney@gmail.com";

  // Dynamic WhatsApp Link Generation
  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order:\n\nProduct: ${product.name}\nLink: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://auranaturals.com'}/products/${product.id}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Dynamic Email Link Generation
  const emailSubject = encodeURIComponent(`Order Request: ${product.name}`);
  const emailBody = encodeURIComponent(
    `Hello Organic Herbs & Honey team,\n\nI would like to place an order for the following product:\n\nProduct: ${product.name}\n\nPlease let me know the next steps for payment and delivery.\n\nThank you.`
  );
  const emailUrl = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="container mx-auto px-4 pt-4 pb-12">
      <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Product Image */}
        <div className="relative aspect-[4/5] lg:aspect-square bg-muted rounded-3xl overflow-hidden shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-8">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>

          </div>

          <div className="prose prose-neutral dark:prose-invert">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" /> Key Benefits
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                100% Pure and Natural
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Sustainably Sourced
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Lab Tested for Purity
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
