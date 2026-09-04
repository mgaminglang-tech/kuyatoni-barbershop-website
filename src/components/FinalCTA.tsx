import React from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO } from '../data/barberData';
import { LogoEmblem } from './LogoEmblem';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#111111] relative overflow-hidden border-t border-[#242424]">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B8925E]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Brand Crest */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#B8925E]/40 flex items-center justify-center p-2 shadow-inner">
            <LogoEmblem size="sm" />
          </div>
        </div>

        {/* Small Eyebrow Label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B8925E]/40" />
          <span className="text-xs uppercase tracking-[0.4em] text-[#B8925E] font-semibold">
            WALK IN ANY DAY
          </span>
          <span className="w-8 h-[1px] bg-[#B8925E]/40" />
        </div>

        {/* Big Bold Headline - Editorial Serif */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#E9E1D3] tracking-tight leading-tight">
          Ready for a <span className="italic font-bold text-[#F7F7F7]">Fresh Cut?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#A6A6A6] max-w-lg mx-auto font-normal leading-relaxed">
          Visit Kuya Toni Barber House or message us on Facebook today.
        </p>

        {/* Action Buttons - Editorial Minimal Precision */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SHOP_INFO.messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-facebook-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#B8925E] hover:bg-[#E9E1D3] text-[#111111] text-[11px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4 stroke-[2.5]" />
            <span>Message on Facebook</span>
          </a>

          <a
            href="tel:+639393319224"
            id="final-cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-[#B8925E] text-[#B8925E] hover:bg-[#B8925E] hover:text-[#111111] text-[11px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Reassurances */}
        <div className="mt-8 pt-6 border-t border-[#222222] flex flex-wrap items-center justify-center gap-6 text-xs text-[#A6A6A6]">
          <span className="flex items-center gap-1.5 text-[#E9E1D3]/80">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8925E]" />
            No appointment required
          </span>
          <span className="flex items-center gap-1.5 text-[#E9E1D3]/80">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8925E]" />
            Sterilized equipment
          </span>
          <span className="flex items-center gap-1.5 text-[#E9E1D3]/80">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8925E]" />
            Fair transparent pricing
          </span>
        </div>
      </div>
    </section>
  );
};
