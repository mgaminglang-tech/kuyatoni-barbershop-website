import React from 'react';
import { Award, CheckCircle2, HeartHandshake, Scissors, Sparkles, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/barberData';
import { LogoEmblem } from './LogoEmblem';

export const BarberProfile: React.FC = () => {
  return (
    <section id="barber" className="py-20 lg:py-28 bg-[#111111] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#B8925E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Craft Details - Editorial Aesthetic Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-[400px] bg-[#1B1B1B] border-l-4 border-[#B8925E] p-5 sm:p-6 flex flex-col relative overflow-hidden shadow-2xl border-t border-r border-b border-white/5">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, #B8925E 0%, transparent 100%)',
                }}
              />

              <div className="flex items-center justify-between mb-4 z-10">
                <span className="text-[10px] text-[#B8925E] uppercase tracking-widest font-semibold">
                  Lead Stylist
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#A6A6A6] bg-[#111111] px-2 py-0.5 border border-white/5">
                  Precision Craft
                </span>
              </div>

              {/* Portrait Container */}
              <div className="relative aspect-[4/5] bg-[#151515] border border-white/10 overflow-hidden z-10">
                <img
                  src={SHOP_INFO.portraitUrl}
                  alt="Kuya Toni - Barber House Founder & Lead Stylist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Caption Tag */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between z-10">
                <div>
                  <p className="text-xs text-[#E9E1D3] uppercase tracking-widest font-bold">
                    Kuya Toni • Master Barber
                  </p>
                  <p className="text-[10px] text-[#A6A6A6] tracking-wider mt-0.5">
                    Modern Grooming Excellence
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#111111] border border-[#B8925E]/50 flex items-center justify-center p-1">
                  <LogoEmblem size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[#B8925E] text-xs uppercase tracking-[0.4em] font-semibold">
                  THE CRAFTSMAN
                </span>
                <span className="w-8 h-[1px] bg-[#B8925E]/40" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E9E1D3] tracking-tight">
                Meet <span className="italic font-bold text-[#F7F7F7]">Your Barber</span>
              </h2>
            </div>

            {/* Official Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#E9E1D3] leading-relaxed font-normal">
              {SHOP_INFO.barberBio}
            </p>

            <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
              Every client who sits in Kuya Toni's chair receives dedicated personal attention. Taking time to consult on your hair growth patterns, face symmetry, and styling routine, he makes sure your haircut looks just as crisp days later as it does when you step out of the shop.
            </p>

            {/* Personal Quote Plaque */}
            <div className="p-5 rounded-sm bg-[#181818] border-l-2 border-[#B8925E] space-y-2">
              <p className="text-sm sm:text-base text-[#E9E1D3] italic font-serif">
                "A real barbershop is a cornerstone of the neighborhood. It’s a place to catch up, relax, and leave with a sharp cut and renewed self-confidence."
              </p>
              <span className="block text-xs uppercase tracking-[0.16em] text-[#B8925E] font-semibold">
                — Kuya Toni
              </span>
            </div>

            {/* Craft Credentials Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A6A6A6]">
                <CheckCircle2 className="w-4 h-4 text-[#B8925E] flex-shrink-0" />
                <span>Specialist in Asian & textured hair types</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A6A6A6]">
                <CheckCircle2 className="w-4 h-4 text-[#B8925E] flex-shrink-0" />
                <span>Zero-gap clipper fading & straight razor edge</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A6A6A6]">
                <CheckCircle2 className="w-4 h-4 text-[#B8925E] flex-shrink-0" />
                <span>Patient styling with kids & first-timers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A6A6A6]">
                <CheckCircle2 className="w-4 h-4 text-[#B8925E] flex-shrink-0" />
                <span>Hospitality & friendly conversation</span>
              </div>
            </div>

            {/* Direct Interaction Button */}
            <div className="pt-4">
              <a
                href={SHOP_INFO.messengerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-[#1B1B1B] hover:bg-[#252525] border border-[#B8925E]/60 text-[#E9E1D3] hover:text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#B8925E]" />
                <span>Send a Direct Message to Kuya Toni</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
