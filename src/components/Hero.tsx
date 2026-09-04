import React from 'react';
import { MessageCircle, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO } from '../data/barberData';
import { LogoEmblem } from './LogoEmblem';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#111111]"
    >
      {/* Ambient background lighting and luxury texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B8925E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#B8925E]/8 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{
            backgroundImage: `radial-gradient(#E9E1D3 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left z-10">
            {/* Editorial Badge */}
            <div className="flex items-center gap-3">
              <span className="text-[#B8925E] text-xs uppercase tracking-[0.4em] font-semibold">
                EST. 2023
              </span>
              <span className="w-8 h-[1px] bg-[#B8925E]/40" />
              <span className="text-[#A6A6A6] text-[10px] uppercase tracking-[0.25em]">
                Craft Barbering
              </span>
            </div>

            {/* Main Headline - Editorial Serif Italic */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[0.95] text-[#E9E1D3] italic font-normal tracking-tight">
                Sharp Cuts.<br />
                Clean Style.<br />
                <span className="text-[#F7F7F7] not-italic font-bold font-serif">
                  Real Confidence.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-[#A6A6A6] text-sm sm:text-base max-w-md leading-relaxed font-normal">
              Quality barber services, fresh fades, and trending cuts at Kuya Toni Barber House. Your local destination for precision and style.
            </p>

            {/* Call to Actions - Editorial Minimal Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                id="hero-view-services-btn"
                className="border border-[#B8925E] text-[#B8925E] px-6 py-2.5 uppercase text-[10px] sm:text-[11px] tracking-widest font-bold hover:bg-[#B8925E] hover:text-[#111111] transition-colors cursor-pointer"
              >
                View Services
              </a>

              <a
                href={SHOP_INFO.messengerLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-facebook-btn"
                className="bg-[#B8925E] text-[#111111] px-6 py-2.5 uppercase text-[10px] sm:text-[11px] tracking-widest font-bold hover:bg-[#E9E1D3] transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Message on Facebook</span>
              </a>

              <span className="text-[10px] text-[#A6A6A6] italic uppercase tracking-wider block sm:inline">
                Walk-ins Welcome
              </span>
            </div>

            {/* Editorial Philosophy Box */}
            <div className="mt-8 pt-6 border-t border-[#B8925E]/15 space-y-2">
              <h3 className="text-[#E9E1D3] text-xs uppercase tracking-[0.25em] font-semibold">
                Our Philosophy
              </h3>
              <p className="text-xs sm:text-[13px] text-[#A6A6A6] leading-relaxed italic font-serif">
                "Dedicated to delivering clean, stylish, and confidence-boosting cuts. We focus on quality, consistency, and a welcoming customer experience for every man who walks through our doors."
              </p>
            </div>
          </div>

          {/* Right Column: Featured Barber Card with Editorial Border & Accent */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="w-full max-w-[420px] bg-[#1B1B1B] border-l-4 border-[#B8925E] p-5 sm:p-6 flex flex-col relative overflow-hidden shadow-2xl border-t border-r border-b border-white/5">
              {/* Subtle 45deg gold gradient sheen from Design HTML */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, #B8925E 0%, transparent 100%)',
                }}
              />

              <div className="flex items-center justify-between mb-4 z-10">
                <span className="text-[10px] text-[#B8925E] uppercase tracking-widest font-semibold">
                  Featured Barber
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#A6A6A6] bg-[#111111] px-2 py-0.5 border border-white/5">
                  Walk-ins Open
                </span>
              </div>

              {/* Main Barber Portrait Frame */}
              <div className="relative aspect-[4/5] bg-[#151515] border border-white/10 overflow-hidden z-10">
                <img
                  src={SHOP_INFO.portraitUrl}
                  alt="Kuya Toni - Master Barber & Founder"
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
                    Founder & Lead Stylist
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#111111] border border-[#B8925E]/50 flex items-center justify-center p-1">
                  <LogoEmblem size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
