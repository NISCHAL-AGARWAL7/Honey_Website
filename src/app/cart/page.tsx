"use client";

import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, updateQuantity, removeItem } = useCartStore();
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7017379969";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@auranaturals.com";

  const orderDetails = items.map(item => `${item.quantity}x ${item.name} (₹${item.price})`).join('\n');
  const totalMessage = `Total: ₹${totalPrice.toLocaleString("en-IN")}`;

  const whatsappMessage = encodeURIComponent(`Hello, I would like to order:\n\n${orderDetails}\n\n${totalMessage}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(`Order Request`);
  const emailBody = encodeURIComponent(`Hello Aura Naturals team,\n\nI would like to place an order for the following items:\n\n${orderDetails}\n\n${totalMessage}\n\nPlease let me know the next steps for payment and delivery.\n\nThank you.`);
  const emailUrl = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 pt-6 pb-24 flex justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 pt-6 pb-24 text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg" className="w-full">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-6 pb-12 max-w-4xl">
      <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border border-border rounded-2xl bg-card">

              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                {item.image ? (
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    🍯
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">{item.category}</p>
                  </div>
                  <p className="font-medium">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3 bg-muted/50 rounded-full px-2 py-1 border border-border">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-primary transition-colors disabled:opacity-50 cursor-pointer"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-primary transition-colors cursor-pointer"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 transition-colors p-2 cursor-pointer"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6 pb-6 border-b border-border text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Calculated on next step</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="space-y-3">
              <Button asChild size="lg" className="w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full gap-2">
                <a href={emailUrl}>
                  <Mail className="h-5 w-5" />
                  Order via Email
                </a>
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Checkout is completed via WhatsApp or Email to ensure personalized service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}