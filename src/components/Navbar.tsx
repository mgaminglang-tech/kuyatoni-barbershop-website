import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Clock } from 'lucide-react';
import { NAV_LINKS, SHOP_INFO } from '../data/barberData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md py-3 shadow-[0_4px_24px_rgba(0,0,0,0.7)] border-b border-[#B8925E]/20'
          : 'bg-gradient-to-b from-[#111111]/90 via-[#111111]/40 to-transparent py-4 border-b border-[#B8925E]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name - Editorial Style */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex-shrink-0">
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center p-[5px] transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: '#F5F1E8',
                  border: '1px solid rgba(184, 146, 94, 0.45)',
                }}
              >
                <img
                  src="/images/haircuts/logo.png"
                  alt="Kuya Toni Barber House Logo"
                  width="60"
                  height="60"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#B8925E] font-bold text-xl tracking-tighter group-hover:text-[#E9E1D3] transition-colors">
                KUYA TONI
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A6A6A6] group-hover:text-[#E9E1D3] transition-colors -mt-1">
                Barber House
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Editorial Spacing */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] uppercase tracking-widest text-[#A6A6A6]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-1 hover:text-[#B8925E] transition-colors relative group font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B8925E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Desktop CTA: Message on Facebook */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SHOP_INFO.messengerLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-facebook-cta"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8925E] text-[#111111] font-bold text-[11px] uppercase tracking-widest hover:bg-[#E9E1D3] transition-colors cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Message on Facebook</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SHOP_INFO.messengerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-sm bg-[#B8925E] text-[#111111]"
              aria-label="Message on Facebook"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-sm text-[#F7F7F7] hover:text-[#B8925E] hover:bg-[#1B1B1B] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#161616] border-b border-[#2A2A2A] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-sm text-sm uppercase tracking-[0.14em] text-[#E9E1D3] hover:bg-[#1F1F1F] hover:text-[#B8925E] transition-colors font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#B8925E]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2A2A2A] space-y-2.5">
            <a
              href={SHOP_INFO.messengerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#B8925E] text-[#111111] font-semibold text-xs uppercase tracking-[0.14em]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on Facebook</span>
            </a>
            <div className="flex items-center justify-center gap-4 text-xs text-[#A6A6A6] pt-1">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B8925E]" />
                Walk-ins Welcome
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#B8925E]" />
                {SHOP_INFO.phonePlaceholder}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
