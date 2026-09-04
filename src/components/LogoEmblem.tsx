import React from 'react';

interface LogoEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTextBelow?: boolean;
}

export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  className = '',
  size = 'md',
  showTextBelow = false,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-28 h-28 sm:w-32 sm:h-32',
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 240 240"
        className={`${sizeMap[size]} transition-transform duration-300`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9E1D3" />
            <stop offset="40%" stopColor="#B8925E" />
            <stop offset="100%" stopColor="#8A6538" />
          </linearGradient>
          <linearGradient id="goldBorder" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C8A36E" />
            <stop offset="50%" stopColor="#B8925E" />
            <stop offset="100%" stopColor="#7A5628" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring with double gold border */}
        <circle cx="120" cy="120" r="112" fill="#111111" stroke="url(#goldBorder)" strokeWidth="3" />
        <circle cx="120" cy="120" r="105" fill="#171717" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="120" cy="120" r="98" fill="#141414" stroke="url(#goldBorder)" strokeWidth="1" />

        {/* Top Barber Pole finial & cylinder */}
        <g transform="translate(120, 48)">
          <circle cx="0" cy="-14" r="8" fill="url(#goldGrad)" />
          <rect x="-8" y="-6" width="16" height="4" rx="2" fill="url(#goldBorder)" />
          {/* Pole body */}
          <rect x="-7" y="-2" width="14" height="48" rx="2" fill="#1A1A1A" stroke="url(#goldBorder)" strokeWidth="1" />
          {/* Diagonal stripes */}
          <path d="M-6 4 L6 -2" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
          <path d="M-6 16 L6 10" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
          <path d="M-6 28 L6 22" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
          <path d="M-6 40 L6 34" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
          <rect x="-8" y="46" width="16" height="4" rx="2" fill="url(#goldBorder)" />
        </g>

        {/* Left Clipper tool */}
        <g transform="translate(68, 62) rotate(-16)">
          <rect x="-9" y="-2" width="18" height="34" rx="4" fill="#1E1E1E" stroke="url(#goldBorder)" strokeWidth="1.5" />
          {/* Clipper blade teeth */}
          <rect x="-7" y="-8" width="14" height="6" rx="1" fill="url(#goldGrad)" />
          <line x1="-5" y1="-8" x2="-5" y2="-2" stroke="#111111" strokeWidth="1" />
          <line x1="-2" y1="-8" x2="-2" y2="-2" stroke="#111111" strokeWidth="1" />
          <line x1="1" y1="-8" x2="1" y2="-2" stroke="#111111" strokeWidth="1" />
          <line x1="4" y1="-8" x2="4" y2="-2" stroke="#111111" strokeWidth="1" />
          {/* KT Seal */}
          <circle cx="0" cy="14" r="5" fill="#111111" stroke="url(#goldGrad)" strokeWidth="1" />
          <text x="0" y="16.5" fill="url(#goldGrad)" fontSize="5.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">KT</text>
        </g>

        {/* Right Straight Razor tool */}
        <g transform="translate(172, 62) rotate(16)">
          {/* Handle */}
          <path d="M-4 6 C-5 18 -2 32 4 40 C7 38 7 24 4 12 Z" fill="#1A1A1A" stroke="url(#goldBorder)" strokeWidth="1.5" />
          {/* Blade extending out */}
          <path d="M-3 6 C-10 -8 -16 -20 -18 -28 L-10 -24 C-7 -14 -2 -2 0 4 Z" fill="url(#goldGrad)" stroke="url(#goldBorder)" strokeWidth="1" />
          {/* KT Seal on handle */}
          <circle cx="3" cy="24" r="4.5" fill="#111111" stroke="url(#goldGrad)" strokeWidth="0.8" />
          <text x="3" y="26" fill="url(#goldGrad)" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">KT</text>
        </g>

        {/* Main Center Banner Plaque */}
        <path
          d="M 22 118 L 40 102 L 200 102 L 218 118 L 202 138 L 38 138 Z"
          fill="#111111"
          stroke="url(#goldBorder)"
          strokeWidth="2"
        />
        <path
          d="M 28 118 L 43 106 L 197 106 L 212 118 L 199 134 L 41 134 Z"
          fill="#161616"
          stroke="url(#goldGrad)"
          strokeWidth="1"
        />

        {/* KUYA TONI Text */}
        <text
          x="120"
          y="126"
          fill="#F7F7F7"
          fontSize="20"
          fontFamily="'Cinzel', serif"
          fontWeight="800"
          letterSpacing="2"
          textAnchor="middle"
        >
          KUYA TONI
        </text>

        {/* Lower Banner: BARBER HOUSE */}
        <text
          x="120"
          y="154"
          fill="url(#goldGrad)"
          fontSize="10"
          fontFamily="'Cinzel', serif"
          fontWeight="700"
          letterSpacing="4"
          textAnchor="middle"
        >
          BARBER HOUSE
        </text>

        {/* Small 5-pointed star */}
        <polygon
          points="120,162 122,166 126,166 123,169 124,173 120,170 116,173 117,169 114,166 118,166"
          fill="url(#goldGrad)"
        />

        {/* Premium Grooming flourish script */}
        <text
          x="120"
          y="184"
          fill="#E9E1D3"
          fontSize="9.5"
          fontFamily="serif"
          fontStyle="italic"
          letterSpacing="1"
          textAnchor="middle"
        >
          — Premium Grooming —
        </text>

        {/* Crossed Gold Scissors at Bottom */}
        <g transform="translate(120, 202)">
          {/* Pivot screw */}
          <circle cx="0" cy="0" r="2" fill="url(#goldGrad)" />
          {/* Blade 1 & Finger ring */}
          <line x1="-12" y1="-14" x2="10" y2="12" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="14" cy="16" r="4.5" fill="none" stroke="url(#goldGrad)" strokeWidth="1.6" />
          {/* Blade 2 & Finger ring */}
          <line x1="12" y1="-14" x2="-10" y2="12" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="-14" cy="16" r="4.5" fill="none" stroke="url(#goldGrad)" strokeWidth="1.6" />
        </g>
      </svg>

      {showTextBelow && (
        <div className="mt-2 text-center">
          <span className="block font-display text-sm sm:text-base font-bold tracking-[0.18em] text-[#F7F7F7]">
            KUYA TONI
          </span>
          <span className="block font-display text-[10px] sm:text-xs tracking-[0.25em] text-[#B8925E]">
            BARBER HOUSE
          </span>
        </div>
      )}
    </div>
  );
};
