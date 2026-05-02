"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  const items = useCartStore((state) => state.items);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Story", href: "/#about" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between rounded-full px-6 transition-all duration-500
      ${
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-2xl border border-border shadow-xl"
          : "py-3 bg-background/40 backdrop-blur-xl border border-border/40"
      }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-full overflow-hidden border border-border">
              <Image src="/logo.png" alt="logo" fill className="object-cover" />
            </div>

            <span className="text-lg font-semibold text-foreground group-hover:text-primary transition">
              Organic Herbs <span className="text-primary font-light"> & Honey </span>
            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative overflow-hidden h-6 group px-1"
                >
                  {/* TOP TEXT */}
                  <span
                    className={`block transition-transform duration-500 ease-in-out
          ${isActive ? "-translate-y-full text-foreground" : "text-muted-foreground group-hover:-translate-y-full group-hover:text-foreground"}`}
                  >
                    {item.name}
                  </span>

                  {/* BOTTOM TEXT */}
                  <span
                    className={`block absolute top-full left-0 transition-transform duration-500 ease-in-out
          ${isActive ? "-translate-y-full text-primary" : "text-muted-foreground group-hover:-translate-y-full group-hover:text-primary"}`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Cart Icon */}
            <Link href="/cart" className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {mounted && cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-primary-foreground bg-primary rounded-full -translate-y-1/4 translate-x-1/4">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-muted-foreground cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div
            className="flex flex-col items-center gap-5 py-6 rounded-2xl 
      bg-background/80 backdrop-blur-2xl border border-border shadow-xl"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground"
              >
                {item.name}
              </Link>
            ))}

            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
