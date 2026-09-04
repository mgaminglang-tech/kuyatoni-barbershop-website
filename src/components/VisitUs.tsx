import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { SHOP_INFO, BUSINESS_HOURS } from '../data/barberData';

export const VisitUs: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'address' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="visit-us" className="py-20 lg:py-28 bg-[#1B1B1B] relative border-t border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#B8925E]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8925E]">
              VISIT OUR HOUSE
            </span>
            <span className="w-8 h-[1px] bg-[#B8925E]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E9E1D3] tracking-tight">
            Visit <span className="italic font-bold text-[#F7F7F7]">Kuya Toni Barber House</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A6A6A6] font-normal max-w-lg mx-auto leading-relaxed">
            Drop by our shop along Adelfa Street in Sisiman, Mariveles, Bataan for a fresh fade, classic men's haircut, or beard trim. No appointment needed.
          </p>

          <div className="w-12 h-[1px] bg-[#B8925E]/40 mx-auto mt-4" />
        </div>

        {/* 2-Column Content Grid: Details vs Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Business Details & Hours */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 rounded-sm bg-[#141414] border border-[#2A2A2A] hover:border-[#B8925E]/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-sm bg-[#1F1F1F] border border-[#B8925E]/30 flex items-center justify-center flex-shrink-0 text-[#B8925E]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B8925E] block">
                        Address
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#F7F7F7] mt-1">
                        {SHOP_INFO.addressPlaceholder}
                      </p>
                      <p className="text-xs text-[#A6A6A6] mt-0.5">
                        {SHOP_INFO.displayAddress}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(SHOP_INFO.displayAddress, 'address')}
                    className="p-2 text-[#A6A6A6] hover:text-[#B8925E] transition-colors rounded-sm hover:bg-[#1E1E1E]"
                    title="Copy address"
                  >
                    {copiedAddress ? <Check className="w-4 h-4 text-[#B8925E]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-sm bg-[#141414] border border-[#2A2A2A] hover:border-[#B8925E]/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-sm bg-[#1F1F1F] border border-[#B8925E]/30 flex items-center justify-center flex-shrink-0 text-[#B8925E]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B8925E] block">
                        Phone
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#F7F7F7] mt-1">
                        {SHOP_INFO.phonePlaceholder}
                      </p>
                      <p className="text-xs text-[#A6A6A6] mt-0.5">
                        Direct Line: {SHOP_INFO.displayPhone}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(SHOP_INFO.displayPhone, 'phone')}
                    className="p-2 text-[#A6A6A6] hover:text-[#B8925E] transition-colors rounded-sm hover:bg-[#1E1E1E]"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#B8925E]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Facebook Page Card */}
              <div className="p-6 rounded-sm bg-[#141414] border border-[#2A2A2A] hover:border-[#B8925E]/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-sm bg-[#1F1F1F] border border-[#B8925E]/30 flex items-center justify-center flex-shrink-0 text-[#B8925E]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B8925E] block">
                        Facebook Page
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#F7F7F7] mt-1">
                        {SHOP_INFO.facebookLink}
                      </p>
                      <p className="text-xs text-[#A6A6A6] mt-0.5">
                        Official Page: {SHOP_INFO.facebookHandle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={SHOP_INFO.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#A6A6A6] hover:text-[#B8925E] transition-colors rounded-sm hover:bg-[#1E1E1E]"
                    title="Open Facebook Page"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Opening Hours Plaque */}
              <div className="p-6 rounded-sm bg-[#141414] border border-[#2A2A2A]">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#B8925E]" />
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-[#E9E1D3]">
                    Opening Hours
                  </span>
                </div>

                <div className="divide-y divide-[#222222]">
                  {BUSINESS_HOURS.map((slot) => (
                    <div key={slot.days} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#F7F7F7] font-medium">{slot.days}</span>
                      <span className="text-[#B8925E] font-semibold">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="tel:+639393319224"
                id="visit-call-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#B8925E]/60 text-[#E9E1D3] hover:text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#B8925E]" />
                <span>Call Now</span>
              </a>

              <a
                href={SHOP_INFO.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                id="visit-facebook-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#B8925E] hover:bg-[#C8A36E] text-[#111111] text-xs sm:text-sm uppercase tracking-[0.14em] font-bold transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Visit Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Box / Area */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden bg-[#141414] border border-[#2B2B2B] flex flex-col justify-between p-6">
              {/* Decorative Map Pattern Background */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#B8925E 1px, transparent 1px), linear-gradient(to right, #242424 1px, transparent 1px), linear-gradient(to bottom, #242424 1px, transparent 1px)`,
                  backgroundSize: '40px 40px, 80px 80px, 80px 80px',
                }}
              />

              {/* Map Top Header Badge */}
              <div className="relative z-10 flex items-center justify-between bg-[#111111]/90 backdrop-blur-md px-4 py-2.5 rounded-sm border border-[#2A2A2A]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#E9E1D3]">
                    Walk-ins Welcome Today
                  </span>
                </div>
                <span className="text-[11px] text-[#A6A6A6]">
                  Open until 8:00 PM
                </span>
              </div>

              {/* Center Map / Street View & Address Plaque (Option B) */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-5 text-center w-full">
                {/* Street Location Preview Frame */}
                <div className="relative w-full max-w-[380px] aspect-[16/9] rounded-sm overflow-hidden border border-[#B8925E]/40 shadow-xl mb-4 bg-[#111111] group">
                  <img
                    src="/images/shop-location.jpg"
                    alt="Kuya Toni Barber House shop location along Adelfa Street, Brgy. Sisiman, Mariveles, Bataan"
                    width="380"
                    height="214"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-2.5 left-2.5 bg-[#111111]/85 backdrop-blur-sm border border-[#B8925E]/40 text-[#B8925E] text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm font-semibold">
                    Street View & Pin
                  </span>
                </div>

                <div className="bg-[#111111]/95 border border-[#B8925E]/50 px-5 py-3 rounded-sm shadow-xl max-w-xs w-full">
                  <span className="font-display text-sm font-bold text-[#F7F7F7] block tracking-wide">
                    Kuya Toni Barber House
                  </span>
                  <span className="text-xs text-[#A6A6A6] block mt-0.5">
                    {SHOP_INFO.addressPlaceholder}
                  </span>
                  <span className="text-[11px] text-[#B8925E] font-medium block mt-1">
                    Direct walk-in location
                  </span>
                </div>
              </div>

              {/* Map Footer Information */}
              <div className="relative z-10 bg-[#111111]/90 backdrop-blur-md p-4 rounded-sm border border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-[#A6A6A6] text-center sm:text-left">
                  Easy parking available right in front of the shop.
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Adelfa+Street+Sisiman+Mariveles+Bataan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#B8925E] hover:text-[#E9E1D3] font-semibold tracking-wider uppercase transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
