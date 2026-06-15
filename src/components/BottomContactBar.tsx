"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function BottomContactBar() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7017379969";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-[56px] shadow-[0_-2px_12px_rgba(0,0,0,0.12)]">
      {/* CALL NOW — Left half */}
      <a
        href={`tel:${whatsappNumber}`}
        className="flex flex-1 items-center justify-center gap-2.5 bg-[#D4AF37] text-white font-semibold text-sm sm:text-base tracking-wide transition active:bg-[#C49E30]"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>CALL NOW</span>
      </a>

      {/* WHATSAPP — Right half */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2.5 bg-[#f5f0e8] dark:bg-[#2a2520] text-[#1a1a1a] dark:text-[#f0e8dc] font-semibold text-sm sm:text-base tracking-wide transition active:bg-[#ede5d8] dark:active:bg-[#221e1a]"
      >
        <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>ORDER ON WHATSAPP</span>
      </a>
    </div>
  );
}
