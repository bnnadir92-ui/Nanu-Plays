import React from 'react';
import { PARTNER_BRANDS } from '../data/mockData';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-7 border-y border-black/10 dark:border-white/10 bg-[#FFF4DE]/40 dark:bg-[#161224]/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-sm font-medium text-[#19162E]/80 dark:text-[#F8F7FC]/80 max-w-md text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-[#1FBDB0]/20 text-[#0e7490] dark:text-[#1FBDB0] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span>
              Sourcing agreements on file with every brand carried — backed by real digital authorization certificates.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-display font-semibold text-sm sm:text-base text-[#19162E]/60 dark:text-[#F8F7FC]/50 select-none">
            {PARTNER_BRANDS.map((brand) => (
              <span
                key={brand}
                className="hover:text-[#FF5A43] transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
