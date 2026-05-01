import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/40 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-4 transition-all duration-300">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-[1.5px] border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-500 group-hover:border-primary/60 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              <Image 
                src="/logo.png" 
                alt="Aura Naturals Logo" 
                fill 
                className="object-cover"
                sizes="48px"
              />
            </div>
            <span className="text-2xl font-medium tracking-tight text-foreground hidden sm:inline-block transition-colors group-hover:text-primary">
              Aura <span className="font-light text-primary group-hover:text-foreground transition-colors">Naturals</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide font-medium">
            <Link href="/" className="relative text-muted-foreground hover:text-foreground transition-colors py-2 group">
              Home
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/products" className="relative text-muted-foreground hover:text-foreground transition-colors py-2 group">
              Shop All
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <Link href="/#about" className="relative text-muted-foreground hover:text-foreground transition-colors py-2 group">
              Our Story
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}