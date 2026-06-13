/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export default function BrandLogo({ className = "h-9 w-9", showText = true }: BrandLogoProps) {
  return (
    <div className="flex items-center space-x-2.5 select-none group">
      {/* Brand logo SVG rendered with high precision matching the user's uploaded image */}
      <div className="relative bg-white border border-slate-200 p-1.5 rounded-xl text-slate-900 group-hover:border-gold-500/30 transition-all duration-300 shadow-sm">
        <svg 
          viewBox="0 0 100 100" 
          className={`${className} text-slate-900 fill-current transform transition-transform duration-500 group-hover:scale-105`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left half of the "T" monogram */}
          <path d="M 44.5,88 H 49.5 V 42 C 49.5,27 41,19 24,19 H 10 V 34 L 18,19 C 30,19 44.5,26 44.5,42 V 88 Z" />
          {/* Right half of the "T" monogram */}
          <path d="M 55.5,88 H 50.5 V 42 C 50.5,27 59,19 76,19 H 90 V 34 L 82,19 C 70,19 55.5,26 55.5,42 V 88 Z" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-slate-900 group-hover:text-amber-700 transition-colors duration-300 leading-none">
            TASHKENT CITY
          </span>
          <span className="font-display text-[9px] tracking-[0.24em] text-gold-600 font-bold uppercase mt-1 leading-none">
            MALL & ENTERTAINMENT
          </span>
        </div>
      )}
    </div>
  );
}
