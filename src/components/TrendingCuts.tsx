import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Download, Check } from 'lucide-react';
import { TRENDING_CUTS, KIDS_CUTS } from '../data/barberData';
import { TrendingCut, HaircutAudience } from '../types';

const CATEGORIES = [
  { label: 'ALL', value: 'ALL' },
  { label: 'CLEAN & CLASSIC', value: 'Clean & Classic' },
  { label: 'FADES', value: 'Fades' },
  { label: 'TEXTURED', value: 'Textured' },
  { label: 'LONGER STYLES', value: 'Longer Styles' },
];

// Helper to derive clean uppercase style metadata
const getStyleMetadata = (cut: TrendingCut) => {
  if (cut.tags && cut.tags.length > 0) {
    return cut.tags.join(' • ');
  }
  const category = cut.category ? cut.category.toUpperCase() : 'CLASSIC';
  let upkeep = 'LOW MAINTENANCE';
  const m = (cut.maintenance || '').toLowerCase();
  if (m.includes('zero')) {
    upkeep = 'ZERO EFFORT';
  } else if (m.includes('low maintenance') || m.includes('very low') || m.startsWith('low')) {
    upkeep = 'LOW MAINTENANCE';
  } else if (m.includes('high')) {
    upkeep = 'CLASSIC FINISH';
  } else if (m.includes('medium')) {
    upkeep = 'DAILY STYLING';
  }
  return `${category} • ${upkeep}`;
};

export const TrendingCuts: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState<HaircutAudience>('men');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Touch swipe state for mobile modal
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Download feedback state
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Current collection catalog (18 Men's styles or 12 Kids' styles)
  const currentCatalog = activeCollection === 'men' ? TRENDING_CUTS : KIDS_CUTS;

  // Filter cuts by category in Men's mode
  const filteredCuts = activeCollection === 'men' && selectedCategory !== 'ALL'
    ? TRENDING_CUTS.filter((cut) => cut.category === selectedCategory)
    : currentCatalog;

  // Show 6 cards initially when not expanded
  const visibleCuts = isExpanded ? filteredCuts : filteredCuts.slice(0, 6);

  // Currently active cut in modal (cycles strictly within the active collection)
  const activeCut: TrendingCut | null = currentIndex !== null ? currentCatalog[currentIndex] : null;

  // Handle collection switcher (MEN'S STYLES <-> KIDS' CUTS)
  const handleCollectionChange = (collection: HaircutAudience) => {
    if (collection === activeCollection) return;
    setActiveCollection(collection);
    setIsExpanded(false);
    setSelectedCategory('ALL');
    setCurrentIndex(null);
  };

  // Reset download state when active cut changes or modal closes
  useEffect(() => {
    setDownloadSuccess(false);
  }, [currentIndex]);

  // Download currently displayed haircut image
  const handleDownload = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeCut) return;

    try {
      const response = await fetch(activeCut.imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      const cleanName = activeCut.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      link.download = `${cleanName}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

      setDownloadSuccess(true);
      const timer = setTimeout(() => {
        setDownloadSuccess(false);
      }, 1800);
      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Failed to download haircut image', err);
    }
  };

  // Modal navigation handlers - cycles strictly through current catalog
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev !== null ? (prev - 1 + currentCatalog.length) % currentCatalog.length : 0));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev !== null ? (prev + 1) % currentCatalog.length : 0));
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handleCardClick = (cut: TrendingCut) => {
    const index = currentCatalog.findIndex((c) => c.id === cut.id);
    setCurrentIndex(index >= 0 ? index : 0);
  };

  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const section = document.getElementById('trending-cuts');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsExpanded(true);
    }
  };

  // Keyboard controls: Escape to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, currentCatalog.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (currentIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [currentIndex]);

  // Touch handlers for swipe navigation on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section id="trending-cuts" className="py-20 lg:py-28 bg-[#161616] relative overflow-hidden border-t border-b border-[#242424]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#B8925E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8925E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collection Switcher: MEN'S STYLES | KIDS' CUTS */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-10 max-w-sm mx-auto px-2" role="tablist" aria-label="Haircut collections">
          <button
            role="tab"
            aria-selected={activeCollection === 'men'}
            aria-controls="haircuts-catalog-grid"
            onClick={() => handleCollectionChange('men')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] transition-all duration-200 border ${
              activeCollection === 'men'
                ? 'bg-[#B8925E] text-[#111111] border-[#B8925E] shadow-sm'
                : 'bg-[#141414] text-[#A6A6A6] border-[#2A2A2A] hover:border-[#B8925E]/50 hover:text-[#E9E1D3]'
            }`}
          >
            MEN'S STYLES
          </button>
          <button
            role="tab"
            aria-selected={activeCollection === 'kids'}
            aria-controls="haircuts-catalog-grid"
            onClick={() => handleCollectionChange('kids')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] transition-all duration-200 border ${
              activeCollection === 'kids'
                ? 'bg-[#B8925E] text-[#111111] border-[#B8925E] shadow-sm'
                : 'bg-[#141414] text-[#A6A6A6] border-[#2A2A2A] hover:border-[#B8925E]/50 hover:text-[#E9E1D3]'
            }`}
          >
            KIDS' CUTS
          </button>
        </div>

        {/* Section Header Copy */}
        {activeCollection === 'kids' ? (
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#B8925E]/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8925E]">
                KIDS STYLE GUIDE
              </span>
              <span className="w-8 h-[1px] bg-[#B8925E]/40" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E9E1D3] tracking-tight">
              Fresh Cuts <span className="italic font-bold text-[#F7F7F7]">For The Little Ones.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A6A6A6] font-normal max-w-lg mx-auto leading-relaxed">
              Clean, comfortable, and stylish haircut ideas for younger clients.
            </p>

            <div className="w-12 h-[1px] bg-[#B8925E]/40 mx-auto mt-4" />
          </div>
        ) : (
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
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
              Explore popular styles and find the look you want to show Kuya Toni.
            </p>

            <div className="w-12 h-[1px] bg-[#B8925E]/40 mx-auto mt-4" />
          </div>
        )}

        {/* Category Filters for Men's Styles */}
        {activeCollection === 'men' && (
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 max-w-3xl mx-auto px-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#B8925E] text-[#111111] font-bold border-[#B8925E] shadow-sm'
                      : 'bg-[#121212] text-[#A6A6A6] border-[#2B2B2B] hover:border-[#B8925E]/50 hover:text-[#E9E1D3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Haircut Grid */}
        <div id="haircuts-catalog-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {visibleCuts.map((cut, idx) => {
            const cutIndex = currentCatalog.findIndex((c) => c.id === cut.id);
            const cutNumber = String(cutIndex >= 0 ? cutIndex + 1 : idx + 1).padStart(2, '0');
            const styleMetadata = getStyleMetadata(cut);

            return (
              <div
                key={cut.id}
                onClick={() => handleCardClick(cut)}
                className="group cursor-pointer relative rounded-md overflow-hidden bg-[#111111] border border-[#2B2B2B] hover:border-[#B8925E]/70 transition-all duration-300 shadow-xl hover:shadow-[0_16px_36px_rgba(0,0,0,0.8)] flex flex-col h-full"
              >
                {/* Fixed Image Container with overflow: hidden - crops baked title banner at bottom */}
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#141414]">
                  <img
                    src={cut.imageUrl}
                    alt={`${cut.name} haircut style at Kuya Toni Barber House`}
                    width="400"
                    height="320"
                    loading={idx < 6 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transform group-hover:scale-[1.03] transition-transform duration-500 origin-top"
                  />

                  {/* Subtle vignette shadow to blend into the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/20 opacity-50 group-hover:opacity-30 transition-opacity pointer-events-none" />
                </div>

                {/* Editorial Card Content */}
                <div className="bg-[#111111] p-5 sm:p-6 flex flex-col flex-1 justify-between border-t border-[#202020] text-left">
                  <div>
                    {/* Haircut Number: small, muted gold, uppercase */}
                    <span className="text-[11px] font-mono font-semibold tracking-[0.25em] text-[#B8925E] uppercase block mb-1.5">
                      {cutNumber}
                    </span>

                    {/* Haircut Name: strong display / serif font as main H3 */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.08em] text-[#E9E1D3] group-hover:text-white transition-colors uppercase leading-tight">
                      {cut.name}
                    </h3>

                    {/* Single subtle gold divider */}
                    <div className="w-8 h-[1px] bg-[#B8925E]/40 my-3 sm:my-3.5" />

                    {/* Short Description: small muted text */}
                    <p className="text-xs sm:text-sm text-[#A6A6A6] font-normal leading-relaxed">
                      {cut.description}
                    </p>
                  </div>

                  {/* Bottom Metadata & Interactive View Style */}
                  <div className="mt-5 pt-3.5 border-t border-[#1E1E1E] space-y-2">
                    {/* Style Metadata: small uppercase letter-spacing */}
                    <div className="text-[10px] font-medium tracking-[0.22em] text-[#888888] uppercase">
                      {styleMetadata}
                    </div>

                    {/* View Style: subtle gold interactive text, shifts slightly right on hover */}
                    <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#B8925E] group-hover:text-[#D4AF37] transition-colors">
                      <span>VIEW STYLE</span>
                      <span className="ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / Show Less Button */}
        {filteredCuts.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleToggleExpand}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm border border-[#B8925E] bg-[#141414] hover:bg-[#B8925E] text-[#E9E1D3] hover:text-[#111111] font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-xl hover:shadow-[0_8px_24px_rgba(184,146,94,0.25)] group"
            >
              <span>
                {isExpanded
                  ? 'SHOW LESS'
                  : activeCollection === 'kids'
                  ? "VIEW MORE KIDS' CUTS"
                  : 'VIEW MORE HAIRCUTS'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Client Guidance Note */}
        <div className="mt-14 text-center text-xs sm:text-sm text-[#A6A6A6] max-w-2xl mx-auto flex items-center justify-center gap-2 px-4">
          <Sparkles className="w-4 h-4 text-[#B8925E] flex-shrink-0" />
          <span>
            {activeCollection === 'kids'
              ? 'Browse the styles, save your favorite, and show Kuya Toni the cut you prefer.'
              : 'Not sure which cut fits you? Browse the styles and show Kuya Toni the look you prefer.'}
          </span>
        </div>
      </div>

      {/* Interactive Lightbox / Modal Viewer */}
      {activeCut && currentIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCut.name} Haircut Viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl lg:max-w-5xl bg-[#111111] border border-[#B8925E]/50 rounded-lg overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Accessible Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close hairstyle viewer"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-[#181818]/90 hover:bg-[#B8925E] text-[#A6A6A6] hover:text-[#111111] border border-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8925E]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body: Desktop 2-column layout / Mobile stacked */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch overflow-hidden">
              {/* Left Column: Large Haircut Image */}
              <div className="md:col-span-6 bg-[#0B0B0B] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative border-b md:border-b-0 md:border-r border-[#242424]">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src={activeCut.imageUrl}
                    alt={`${activeCut.name} haircut style style reference`}
                    width="500"
                    height="500"
                    referrerPolicy="no-referrer"
                    className="max-h-[42vh] sm:max-h-[48vh] md:max-h-[60vh] w-auto max-w-full object-contain rounded filter contrast-[1.04]"
                  />

                  {/* Download Image Button */}
                  <div className="absolute top-3 right-14 sm:top-3.5 sm:right-3.5 z-10 flex items-center gap-2">
                    {downloadSuccess && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161616]/95 border border-[#B8925E]/70 text-[11px] font-semibold uppercase tracking-wider text-[#E9E1D3] shadow-lg animate-in fade-in duration-200 pointer-events-none">
                        <Check className="w-3.5 h-3.5 text-[#B8925E]" />
                        Style saved
                      </span>
                    )}

                    <button
                      onClick={handleDownload}
                      aria-label={`Download ${activeCut.name} hairstyle reference`}
                      title="Download this style"
                      className="w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#111111]/85 hover:bg-[#1C1C1C] backdrop-blur-sm border border-[#B8925E]/60 hover:border-[#B8925E] text-[#E9E1D3] hover:text-[#B8925E] transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B8925E]"
                    >
                      {downloadSuccess ? (
                        <Check className="w-4 h-4 text-[#B8925E]" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-3 text-[10px] text-[#777777] font-mono tracking-widest uppercase text-center">
                  STYLE {String(currentIndex + 1).padStart(2, '0')} / {String(currentCatalog.length).padStart(2, '0')}
                </div>
              </div>

              {/* Right Column: Haircut Information & Controls */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#141414] max-h-[50vh] md:max-h-[70vh]">
                <div>
                  {/* Style Reference Tag & Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-sm bg-[#B8925E]/15 border border-[#B8925E]/50 text-[#B8925E] text-[10px] tracking-[0.2em] font-semibold uppercase">
                      STYLE REFERENCE
                    </span>
                    {activeCut.category && (
                      <span className="px-2 py-0.5 text-[10px] text-[#A6A6A6] border border-[#2B2B2B] rounded-sm uppercase tracking-wider">
                        {activeCut.category}
                      </span>
                    )}
                  </div>

                  {/* Haircut Name */}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F7F7] uppercase tracking-wide">
                    {activeCut.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-[#B8925E] italic mt-1 font-serif">
                    "{activeCut.tagline}"
                  </p>

                  {/* Natural Short Description */}
                  <p className="text-sm sm:text-base text-[#E9E1D3] leading-relaxed mt-4">
                    {activeCut.description}
                  </p>

                  {/* Style Details */}
                  <div className="mt-4 p-3.5 bg-[#0D0D0D] rounded border border-[#242424] space-y-2 text-xs">
                    <div>
                      <span className="text-[#B8925E] font-semibold uppercase tracking-wider">Best For: </span>
                      <span className="text-[#F7F7F7]">{activeCut.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-[#B8925E] font-semibold uppercase tracking-wider">Styling & Upkeep: </span>
                      <span className="text-[#F7F7F7]">{activeCut.maintenance}</span>
                    </div>
                  </div>

                  {/* Prompt Helper Callout */}
                  <div className="mt-5 p-4 rounded bg-[#1A1A1A] border-l-2 border-[#B8925E] flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#B8925E] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#B8925E]">
                        Like this cut?
                      </p>
                      <p className="text-sm text-[#F7F7F7] mt-0.5 font-medium">
                        {activeCollection === 'kids'
                          ? 'Save it and show this style to Kuya Toni.'
                          : 'Show this style to Kuya Toni.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="pt-6 border-t border-[#242424] mt-6">
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={handlePrev}
                      className="flex-1 py-2.5 px-3 sm:px-4 rounded border border-[#333333] hover:border-[#B8925E] bg-[#1A1A1A] hover:bg-[#222222] text-[#E9E1D3] hover:text-[#B8925E] text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#B8925E]"
                      aria-label="Previous haircut style"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      PREVIOUS
                    </button>
                    <span className="text-[11px] text-[#888888] font-mono tracking-widest px-1">
                      {currentIndex + 1} / {currentCatalog.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="flex-1 py-2.5 px-3 sm:px-4 rounded bg-[#B8925E] hover:bg-[#C8A36E] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-1.5 shadow-md focus:outline-none focus:ring-1 focus:ring-white"
                      aria-label="Next haircut style"
                    >
                      NEXT
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[10px] text-[#666666] text-center mt-2.5 hidden sm:block">
                    Use <kbd className="px-1 py-0.5 bg-[#222222] rounded text-[#888888]">←</kbd> / <kbd className="px-1 py-0.5 bg-[#222222] rounded text-[#888888]">→</kbd> arrow keys to browse • <kbd className="px-1 py-0.5 bg-[#222222] rounded text-[#888888]">Esc</kbd> to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

