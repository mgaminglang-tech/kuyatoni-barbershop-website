import React from 'react';
import { Phone, MessageCircle, ArrowUp, Scissors } from 'lucide-react';
import { NAV_LINKS, SHOP_INFO, BUSINESS_HOURS } from '../data/barberData';
import { LogoEmblem } from './LogoEmblem';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#A6A6A6] border-t border-[#B8925E]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#181818] border border-[#B8925E]/40 flex items-center justify-center">
                <LogoEmblem size="sm" />
              </div>
              <div>
                <span className="text-[#B8925E] font-bold text-lg tracking-tighter block">
                  KUYA TONI
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A6A6A6] block -mt-1">
                  Barber House
                </span>
              </div>
            </div>

            <p className="font-serif text-sm italic tracking-wider text-[#E9E1D3]">
              "Modern Grooming Excellence"
            </p>

            <p className="text-xs text-[#888888] leading-relaxed max-w-sm">
              Your neighborhood destination for sharp fades, timeless scissor work, clean beard lineups, and comfortable walk-in barbering.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SHOP_INFO.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#1A1A1A] hover:bg-[#B8925E] hover:text-[#111111] text-[#E9E1D3] flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook Page"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+639393319224"
                className="w-8 h-8 rounded-sm bg-[#1A1A1A] hover:bg-[#B8925E] hover:text-[#111111] text-[#E9E1D3] flex items-center justify-center transition-colors border border-white/10"
                aria-label="Call shop"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E9E1D3]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#B8925E] transition-colors inline-block py-0.5 text-[11px] uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E9E1D3]">
              Shop Hours
            </h3>
            <div className="space-y-2 text-xs">
              {BUSINESS_HOURS.map((slot) => (
                <div key={slot.days} className="flex flex-col">
                  <span className="text-[#F7F7F7] text-[11px] uppercase tracking-wider">{slot.days}</span>
                  <span className="text-[#B8925E] font-mono text-xs">{slot.hours}</span>
                </div>
              ))}
              <p className="text-[10px] text-[#777777] pt-1 uppercase tracking-wider">
                Walk-ins welcomed without prior booking.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#E9E1D3]">
              Location & Phone
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[#777777] block text-[10px] uppercase tracking-wider">Phone:</span>
                <a
                  href="tel:+639393319224"
                  className="text-[#E9E1D3] hover:text-[#B8925E] transition-colors font-mono"
                >
                  {SHOP_INFO.phonePlaceholder}
                </a>
              </div>
              <div>
                <span className="text-[#777777] block text-[10px] uppercase tracking-wider">Location:</span>
                <span className="text-[#E9E1D3] block text-xs">Sisiman, Mariveles, Bataan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Bar matching Design HTML */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-[#777777]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#B8925E] uppercase tracking-widest mb-0.5">Experience</span>
              <span className="text-xs font-serif italic text-[#E9E1D3]">Modern Grooming Excellence</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-[#B8925E] uppercase tracking-widest mb-0.5">Location</span>
              <span className="text-xs text-[#A6A6A6]">Sisiman, Mariveles, Bataan</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <span className="text-[#A6A6A6] tracking-tighter uppercase opacity-50 text-[10px] text-left">
              © {new Date().getFullYear()} Kuya Toni Barber House • All Rights Reserved
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#1A1A1A] hover:bg-[#B8925E] hover:text-[#111111] text-[#E9E1D3] transition-colors border border-white/10 flex-shrink-0"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
