import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducts } from "@/services/getProducts";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";

export const dynamic = 'force-dynamic';

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
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@auranaturals.com";

  // Dynamic WhatsApp Link Generation
  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nLink: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://auranaturals.com'}/products/${product.id}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Dynamic Email Link Generation
  const emailSubject = encodeURIComponent(`Order Request: ${product.name}`);
  const emailBody = encodeURIComponent(
    `Hello Aura Naturals team,\n\nI would like to place an order for the following product:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\n\nPlease let me know the next steps for payment and delivery.\n\nThank you.`
  );
  const emailUrl = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="container mx-auto px-4 py-12">
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
            <p className="text-2xl font-medium text-muted-foreground">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
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
