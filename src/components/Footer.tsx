import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@auranaturals.com";

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/20">
                <Image 
                  src="/logo.png" 
                  alt="Aura Naturals Logo" 
                  fill 
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Aura <span className="text-primary font-normal">Naturals</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Premium natural products sourced directly from the earth. We believe in the healing power of nature.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-primary transition-colors">Shop All</Link>
              <Link href="/products?category=Honey" className="hover:text-primary transition-colors">Premium Honey</Link>
              <Link href="/products?category=Shilajit" className="hover:text-primary transition-colors">Pure Shilajit</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Camera className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
            <div className="text-sm text-muted-foreground pt-2">
              <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aura Naturals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}