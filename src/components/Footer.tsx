import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7017379969";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@auranaturals.com";

  return (
    <footer className="mt-20 border-t border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border shadow-sm">
                <Image src="/logo.png" alt="logo" fill className="object-cover" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Aura <span className="text-primary font-light">Naturals</span>
              </h3>
            </div>

            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Premium natural products sourced directly from the earth. 
              Crafted for purity, wellness, and a healthier lifestyle.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-2">

  <a
    href="https://instagram.com"
    target="_blank"
    className="p-2 rounded-full border border-border 
    text-muted-foreground hover:text-pink-500 
    hover:border-pink-500/40 hover:bg-pink-500/10
    transition-all duration-300 hover:scale-110"
  >
    <FaInstagram className="h-4 w-4" />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    className="p-2 rounded-full border border-border 
    text-muted-foreground hover:text-blue-500 
    hover:border-blue-500/40 hover:bg-blue-500/10
    transition-all duration-300 hover:scale-110"
  >
    <FaFacebookF className="h-4 w-4" />
  </a>

  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    className="p-2 rounded-full border border-border 
    text-muted-foreground hover:text-green-500 
    hover:border-green-500/40 hover:bg-green-500/10
    transition-all duration-300 hover:scale-110"
  >
    <FaWhatsapp className="h-4 w-4" />
  </a>

</div>
          </div>

          {/* LINKS */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-foreground">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-2 text-sm">
              {[
                { name: "Shop All", href: "/products" },
                { name: "Premium Honey", href: "/products?category=Honey" },
                { name: "Pure Shilajit", href: "/products?category=Shilajit" }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-foreground">
              Contact
            </h4>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiMail className="h-4 w-4" />
              <a href={`mailto:${contactEmail}`} className="hover:text-primary transition">
                {contactEmail}
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaWhatsapp className="h-4 w-4" />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="hover:text-primary transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <p>© {new Date().getFullYear()} Aura Naturals</p>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary transition">Privacy</Link>
            <Link href="#" className="hover:text-primary transition">Terms</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}