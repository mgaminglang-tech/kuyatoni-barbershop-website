import React from 'react';
import { Scissors, Sparkles, MessageCircle } from 'lucide-react';
import { SERVICES_LIST, SHOP_INFO } from '../data/barberData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#B8925E]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8925E]">
              SIGNATURE SERVICES
            </span>
            <span className="w-8 h-[1px] bg-[#B8925E]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E9E1D3] tracking-tight">
            Barbershop <span className="italic font-bold text-[#F7F7F7]">Services</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A6A6A6] font-normal max-w-lg mx-auto leading-relaxed">
            Clean and professional cuts tailored to your unique head shape, style preference, and lifestyle.
          </p>

          <div className="w-12 h-[1px] bg-[#B8925E]/40 mx-auto mt-4" />
        </div>

        {/* Services Grid (6 Services) - Editorial Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="relative p-6 rounded-sm bg-[#1B1B1B] border border-white/5 hover:border-[#B8925E]/50 transition-all duration-300 group hover:-translate-y-0.5 shadow-lg flex flex-col justify-between"
            >
              {/* Top Row: Number & Title */}
              <div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-3">
                  <span className="text-[#B8925E] text-xs font-serif italic">0{SERVICES_LIST.indexOf(service) + 1}</span>
                  <h3 className="text-sm font-bold tracking-wide text-[#F7F7F7] group-hover:text-[#E9E1D3] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Short 1-line description - Editorial Italic */}
                <p className="text-xs text-[#A6A6A6] italic font-serif leading-relaxed line-clamp-2 min-h-[36px]">
                  {service.description}
                </p>
              </div>

              {/* Bottom Row: Duration & Walk-in badge */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#777777]">
                <span>Approx. {service.duration}</span>
                <span className="text-[#B8925E] font-medium">{service.badge || 'Walk-in Ready'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Walk-in Reassurance Footer */}
        <div className="mt-14 p-6 rounded-sm bg-[#161616] border border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Sparkles className="w-5 h-5 text-[#B8925E] flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#E9E1D3]">
                No complicated booking required
              </p>
              <p className="text-xs text-[#A6A6A6]">
                Walk-ins are welcomed on a first-come, first-served basis. Have questions about a style?
              </p>
            </div>
          </div>
          <a
            href={SHOP_INFO.messengerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#222222] hover:bg-[#B8925E] hover:text-[#111111] text-[#E9E1D3] text-xs font-semibold uppercase tracking-wider border border-[#B8925E]/40 transition-all flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask via Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};
