import React, { useState } from 'react';
import { Sparkles, Eye, X, Check, HelpCircle } from 'lucide-react';
import { TRENDING_CUTS, SHOP_INFO } from '../data/barberData';
import { TrendingCut } from '../types';

export const TrendingCuts: React.FC = () => {
  const [selectedCut, setSelectedCut] = useState<TrendingCut | null>(null);

  return (
    <section id="trending-cuts" className="py-20 lg:py-28 bg-[#161616] relative overflow-hidden border-t border-b border-[#242424]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#B8925E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8925E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#B8925E]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8925E]">
              CURATED STYLES
            </span>
            <span className="w-8 h-[1px] bg-[#B8925E]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E9E1D3] tracking-tight">
            Trending <span className="italic font-bold text-[#F7F7F7]">Haircuts</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A6A6A6] font-normal max-w-lg mx-auto leading-relaxed">
            Popular haircut styles you can get at Kuya Toni Barber House
          </p>

          <div className="w-12 h-[1px] bg-[#B8925E]/40 mx-auto mt-4" />
        </div>

        {/* 6 Haircut Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {TRENDING_CUTS.map((cut) => (
            <div
              key={cut.id}
              onClick={() => setSelectedCut(cut)}
              className="group cursor-pointer relative rounded-md overflow-hidden bg-[#111111] border border-[#2B2B2B] hover:border-[#B8925E] transition-all duration-300 shadow-xl hover:shadow-[0_16px_36px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Image Frame with Aspect Ratio 1:1 matching user upload */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#141414]">
                <img
                  src={cut.imageUrl}
                  alt={`${cut.name} haircut style at Kuya Toni Barber House`}
                  width="400"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                />

                {/* Subtle vignette shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* View Details Hover Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#111111]/90 backdrop-blur-sm border border-[#B8925E] text-[10px] uppercase font-semibold text-[#E9E1D3] tracking-wider">
                    <Eye className="w-3 h-3 text-[#B8925E]" />
                    Style Details
                  </span>
                </div>
              </div>

              {/* Exact Re-creation of the Signature Bottom Plaque from the uploaded images */}
              <div className="bg-[#111111] px-5 py-5 border-t border-[#222222] relative z-10 flex flex-col items-center text-center">
                {/* Top Gold Rule with Diamond Notch */}
                <div className="w-full flex items-center justify-center gap-2 mb-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B8925E]/60 to-[#B8925E]" />
                  <span className="text-[#B8925E] text-[8px] transform rotate-45">◇</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B8925E]/60 to-[#B8925E]" />
                </div>

                {/* Haircut Name */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.14em] text-[#E9E1D3] group-hover:text-white transition-colors uppercase">
                  {cut.name}
                </h3>

                {/* Bottom Gold Rule with Diamond Notch */}
                <div className="w-full flex items-center justify-center gap-2 mt-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B8925E]/60 to-[#B8925E]" />
                  <span className="text-[#B8925E] text-[8px] transform rotate-45">◇</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B8925E]/60 to-[#B8925E]" />
                </div>

                {/* Quick 1-line styling tagline */}
                <p className="text-xs text-[#A6A6A6] mt-2 font-normal line-clamp-1">
                  {cut.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Guidance Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#A6A6A6] max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#B8925E] flex-shrink-0" />
          <span>
            Not sure which cut fits your hair texture or face shape? Just show any of these photos to Kuya Toni when you sit in the chair!
          </span>
        </div>
      </div>

      {/* Style Details Modal */}
      {selectedCut && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCut(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#181818] border border-[#B8925E]/60 rounded-lg overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCut(null)}
              aria-label="Close style details modal"
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#A6A6A6] hover:text-[#F7F7F7] hover:bg-[#252525] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B8925E] font-medium">
                Kuya Toni Style Guide
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F7F7] uppercase tracking-wide">
                {selectedCut.name}
              </h3>
              <p className="text-sm text-[#A6A6A6] italic">
                "{selectedCut.tagline}"
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative aspect-square max-w-[300px] mx-auto rounded-md overflow-hidden border border-[#B8925E]/40 bg-[#111111]">
              <img
                src={selectedCut.imageUrl}
                alt={`${selectedCut.name} haircut style preview`}
                width="300"
                height="300"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.04]"
              />
            </div>

            {/* Description & Recommendations */}
            <div className="space-y-3 text-sm text-[#A6A6A6] bg-[#121212] p-4 rounded-sm border border-[#252525]">
              <p className="text-[#E9E1D3] leading-relaxed">
                {selectedCut.description}
              </p>
              <div className="pt-2 border-t border-[#222222] space-y-1.5 text-xs">
                <div>
                  <span className="text-[#B8925E] font-semibold uppercase tracking-wider">Best For: </span>
                  <span className="text-[#F7F7F7]">{selectedCut.bestFor}</span>
                </div>
                <div>
                  <span className="text-[#B8925E] font-semibold uppercase tracking-wider">Styling & Upkeep: </span>
                  <span className="text-[#F7F7F7]">{selectedCut.maintenance}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Callout */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#A6A6A6]">
                Available as walk-in request
              </span>
              <button
                onClick={() => setSelectedCut(null)}
                className="px-5 py-2 rounded-sm bg-[#B8925E] hover:bg-[#C8A36E] text-[#111111] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
