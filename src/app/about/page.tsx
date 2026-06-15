import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind Organic Herbs & Honey — our commitment to purity, sustainable beekeeping, and bringing nature's finest honey to your home.",
  openGraph: {
    title: "Our Story | Organic Herbs & Honey",
    description:
      "Discover the story behind Organic Herbs & Honey — our commitment to purity, sustainable beekeeping, and bringing nature's finest honey to your home.",
  },
};

const zigzagItems = [
  {
    title: "Jamun Honey",
    subtitle: "Naturally Rich & Antioxidant-Packed",
    description:
      "Harvested from the nectar of Jamun (Java Plum) blossoms, this dark, robust honey is cherished in Ayurveda for its unique earthy flavor and potent antioxidant properties. Sourced from pristine forests where Jamun trees bloom wild, every spoonful carries the rich heritage of Indian traditional wellness.",
    image: "/jamun-flavour.jpg",
    imageAlt: "Jamun Honey",
  },
  {
    title: "Eucalyptus Honey",
    subtitle: "Crisp, Cool & Soothing",
    description:
      "With its distinctively fresh, camphor-like aroma and bold flavor, Eucalyptus honey is a favorite for those seeking respiratory wellness and natural immune support. Gathered from the nectar of eucalyptus blossoms in carefully maintained apiaries, this honey offers a unique taste of Australia's native flora — now lovingly produced in India.",
    image: "/eucalyptus-flavour.jpg",
    imageAlt: "Eucalyptus Honey",
  },
  {
    title: "Multi Floral Honey",
    subtitle: "A Symphony of Wild Blossoms",
    description:
      "Also known as 'Wildflower Honey', this golden variety is created when bees collect nectar from a diverse range of wildflowers and blossoms. The result is a beautifully complex flavor profile — sweet, tangy, and floral all at once. It's nature's own blend, varying subtly with each season and region.",
    image: "/multi-floral-flavour.jpg",
    imageAlt: "Multi Floral Honey",
  },
  {
    title: "Cider Honey",
    subtitle: "Light, Sweet & Delicate",
    description:
      "Cider honey, derived from apple orchard blossoms, carries a light golden hue and a delicate, fruity sweetness that sets it apart. Its mild flavor makes it a perfect everyday honey — wonderful in teas, on pancakes, or simply by the spoonful. A true taste of orchard-fresh goodness.",
    image: "/cider-flavour.jpg",
    imageAlt: "Cider Honey",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ──────── HERO / INTRO ──────── */}
      <section className="relative overflow-hidden pt-8 sm:pt-10 md:pt-16 pb-20 md:pb-28">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/honey-bg.png"
            alt=""
            fill
            className="object-cover opacity-30 dark:opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Our Story
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Nature&apos;s Finest,{" "}
            <span className="text-gradient-gold italic">Delivered Pure</span>
          </h1>

          <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-center">
            <p>
              At <strong className="text-foreground">Organic Herbs &amp; Honey</strong>, we believe nature offers the
              purest form of nourishment, and our mission is to bring that purity
              directly to your home. Built on a passion for delivering 100%
              natural, premium-quality honey, we carefully source honey from
              trusted beekeepers and select the finest varieties including Jamun,
              Eucalyptus, Multi Floral, and Cider Honey.
            </p>
            <p>
              Every jar reflects our commitment to purity, authenticity, and
              quality, with no added sugar, no harmful processing, and complete
              trust backed by FSSAI registration. Our journey began with a simple
              vision — to help people experience honey in its most natural and
              wholesome form while promoting sustainable beekeeping and healthier
              living.
            </p>
            <p>
              With <strong className="text-foreground">Organic Herbs &amp; Honey</strong>, you don&apos;t simply
              consume honey — you experience nature&apos;s finest golden treasure,
              crafted with purity and care.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "100%", label: "Pure & Natural" },
              { value: "FSSAI", label: "Certified" },
              { value: "4+", label: "Premium Varieties" },
              { value: "0%", label: "Added Sugar" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base">
              <Link href="/products">
                Explore Our Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────── DIVIDER ──────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ──────── ZIG-ZAG SECTIONS ──────── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-4">
              Our Premium Varieties
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Explore Our <span className="text-gradient-gold">Honey Collection</span>
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {zigzagItems.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16 lg:gap-24`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
                    {/* Decorative border glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    {/* Gold border */}
                    <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 pointer-events-none z-10" />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary/70">
                    <span className="w-6 h-px bg-primary/40" />
                    Variety {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-primary/80">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>

                  {/* Key highlights */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {["100% Pure", "No Additives", "Premium Quality", "Lab Tested"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary"
                        >
                          <Leaf className="w-3 h-3" />
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── COMMITMENT CTA ──────── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/[0.03]" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c99c33' fill-opacity='1'%3E%3Cpath d='M36 34v-4l-2-1.5-2-1.5-2 1.5-2 1.5v4l2 1.5 2 1.5 2-1.5 2-1.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Commitment
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
            Pure. Natural. <span className="text-gradient-gold italic">Trusted.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Every jar of our honey is FSSAI-registered, lab-tested, and packed with the goodness nature intended.
            No sugar, no syrups, no shortcuts — just pure, raw honey as it should be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-base">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
