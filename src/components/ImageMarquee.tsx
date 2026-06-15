"use client";

import Image from "next/image";

const marqueeImages = [
  { src: "/cider-honey.jpg", alt: "Cider Honey" },
  { src: "/eucalyptus-honey.jpg", alt: "Eucalyptus Honey" },
  { src: "/jamun-honey.jpg", alt: "Jamun Honey" },
  { src: "/multi-floral-honey.jpg", alt: "Multi Floral Honey" },
  { src: "/cider-flavour.jpg", alt: "Cider Flavour" },
  { src: "/eucalyptus-flavour.jpg", alt: "Eucalyptus Flavour" },
  { src: "/jamun-flavour.jpg", alt: "Jamun Flavour" },
  { src: "/multi-floral-flavour.jpg", alt: "Multi Floral Flavour" },
  { src: "/fssai.jpg", alt: "FSSAI Certified" },
];

export function ImageMarquee() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <style>{`
        .marquee-inner {
          animation: marquee-scroll 22s linear infinite;
          will-change: transform;
        }
        .marquee-container:hover .marquee-inner {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive speed - slower on mobile */
        @media (max-width: 640px) {
          .marquee-inner {
            animation-duration: 28s;
          }
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner {
            animation: none;
          }
        }
      `}</style>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      {/* Honeycomb decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c99c33' fill-opacity='1'%3E%3Cpath d='M36 34v-4l-2-1.5-2-1.5-2 1.5-2 1.5v4l2 1.5 2 1.5 2-1.5 2-1.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top decorative divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Section heading */}
      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-4">
          Discover Our Range
        </span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Our Premium <span className="text-gradient-gold">Collection</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Harvested with care from nature&apos;s finest sources &mdash; each jar brings pure wellness to your table
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-container relative z-10 w-full overflow-hidden" aria-hidden="true">
        <div className="marquee-inner flex">
          {[...marqueeImages, ...marqueeImages].map((img, i) => (
            <div
              key={i}
              className="relative w-[240px] h-[280px] sm:w-[280px] sm:h-[320px] md:w-[320px] md:h-[380px] flex-shrink-0 mr-5 sm:mr-6 rounded-2xl overflow-hidden border border-border/30 shadow-lg shadow-primary/5 group/card"
            >
              {/* Honey gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              <Image
                src={img.src}
                alt={img.alt}
                fill
                draggable={false}
                className="object-cover transition-all duration-700 ease-out group-hover/card:scale-110 select-none"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              {/* Label text on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out z-20">
                <p className="text-white font-semibold text-sm sm:text-base tracking-wide drop-shadow-sm">
                  {img.alt}
                </p>
                <p className="text-white/70 text-xs mt-1 tracking-wide">Premium Natural Product</p>
              </div>

              {/* Gold accent border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/card:border-primary/50 transition-all duration-500 pointer-events-none z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
