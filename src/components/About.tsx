import React from 'react';
import { Scissors, Smile, TrendingUp, Armchair, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ABOUT_HIGHLIGHTS, SHOP_INFO } from '../data/barberData';
import { LogoEmblem } from './LogoEmblem';

export const About: React.FC = () => {
  const iconMap = [
    <Scissors key="1" className="w-5 h-5 text-[#B8925E]" />,
    <Smile key="2" className="w-5 h-5 text-[#B8925E]" />,
    <TrendingUp key="3" className="w-5 h-5 text-[#B8925E]" />,
    <Armchair key="4" className="w-5 h-5 text-[#B8925E]" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#1B1B1B] relative overflow-hidden border-t border-b border-[#242424]">
      {/* Decorative background subtle accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8925E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Emblem & Visual Atmosphere - Editorial Aesthetic */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 sm:p-10 rounded-sm bg-[#141414] border-l-4 border-[#B8925E] border-t border-r border-b border-white/5 relative shadow-2xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background: 'linear-gradient(45deg, #B8925E 0%, transparent 100%)',
              }}
            />

            <span className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#B8925E] font-semibold mb-4 z-10 text-center">
              EST. 2023 • MARIVELES, BATAAN
            </span>

            <div className="my-2 z-10">
              <LogoEmblem size="lg" showTextBelow={true} />
            </div>

            <div className="w-24 h-[1px] bg-[#B8925E]/30 my-6 z-10" />

            <p className="text-[11px] uppercase tracking-[0.25em] text-[#A6A6A6] font-medium z-10">
              Experience Modern Grooming Excellence
            </p>
            <p className="text-xs text-[#E9E1D3]/80 mt-2 italic font-serif z-10">
              "Dedicated to the craft of traditional and modern barbering."
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 w-full grid grid-cols-2 gap-4 text-center z-10">
              <div>
                <span className="font-serif text-2xl font-bold text-[#E9E1D3] block italic">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-[#A6A6A6]">Walk-in Friendly</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#B8925E] block italic">Master</span>
                <span className="text-[10px] uppercase tracking-widest text-[#A6A6A6]">Barber Craft</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Highlight List */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[#B8925E] text-xs uppercase tracking-[0.4em] font-semibold">
                  OUR PHILOSOPHY
                </span>
                <span className="w-8 h-[1px] bg-[#B8925E]/40" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E9E1D3] tracking-tight">
                About <span className="italic font-bold text-[#F7F7F7]">Kuya Toni</span> Barber House
              </h2>
            </div>

            {/* Warm and professional introduction paragraph */}
            <div className="space-y-4 text-base sm:text-lg text-[#A6A6A6] leading-relaxed">
              <p>
                Welcome to <strong className="text-[#E9E1D3] font-semibold">Kuya Toni Barber House</strong>, your premier local barbershop where genuine Filipino hospitality meets contemporary grooming precision. We believe a great haircut isn't just about sharp lines—it’s about walking out of the chair carrying genuine confidence.
              </p>
              <p className="text-[#A6A6A6]/90">
                Our shop focuses on clean cuts, fresh fades, comfortable service, and helping every customer look and feel their absolute best. Whether you are dropping in for your regular weekly lineup, an executive taper, or a trendsetting textured crop, Kuya Toni provides a relaxed, unhurried atmosphere rooted in craft and respect.
              </p>
            </div>

            {/* Small Highlight List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_HIGHLIGHTS.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-sm bg-[#151515] border border-[#262626] hover:border-[#B8925E]/40 transition-colors group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-sm bg-[#1E1E1E] group-hover:bg-[#252525] border border-[#B8925E]/20 transition-colors flex-shrink-0 mt-0.5">
                      {iconMap[index]}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[#F7F7F7] tracking-wide group-hover:text-[#E9E1D3] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A6A6A6] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance Banner */}
            <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#141414] border-l-2 border-[#B8925E] text-xs sm:text-sm text-[#A6A6A6]">
              <ShieldCheck className="w-5 h-5 text-[#B8925E] flex-shrink-0" />
              <span>
                Committed to sterilized tools, fresh capes for every client, and a welcoming neighborhood vibe.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
