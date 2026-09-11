import React from 'react';
import { Check, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-14 pb-20 border-t border-black/10 dark:border-white/10 bg-[#FFFDF8] dark:bg-[#0C0A15]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-black/5 dark:border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 font-display font-bold text-2xl text-[#19162E] dark:text-[#F8F7FC]">
              <span className="w-8 h-8 rounded-xl bg-[#FF5A43] flex items-center justify-center -rotate-6 shadow-sm">
                <Check className="w-4 h-4 text-white stroke-[3]" />
              </span>
              <span>Sparkshelf</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#19162E]/60 dark:text-[#F8F7FC]/60 max-w-sm">
              Official digital supplier for verified software licenses, creative subscriptions, and developer tools with manufacturer-backed paperwork.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-[#19162E]/70 dark:text-[#F8F7FC]/70">
            <a href="#shelf" className="hover:text-[#FF5A43] transition-colors">
              What we stock
            </a>
            <a href="#subs" className="hover:text-[#FF5A43] transition-colors">
              Subscriptions
            </a>
            <a href="#verify" className="hover:text-[#FF5A43] transition-colors">
              Verify License
            </a>
            <a href="#how" className="hover:text-[#FF5A43] transition-colors">
              How it works
            </a>
            <a href="#voices" className="hover:text-[#FF5A43] transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-[#FF5A43] transition-colors">
              FAQ
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-semibold text-[#19162E] dark:text-[#F8F7FC] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#19162E]/50 dark:text-[#F8F7FC]/50 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1FBDB0]" />
            <span>© 2026 Sparkshelf. All licenses officially verified at source.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={getWhatsAppUrl("Hi Sparkshelf! I'd like to check your terms of service and guarantee.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Warranty Terms
            </a>
            <span>•</span>
            <a 
              href={getWhatsAppUrl("Hi Sparkshelf! What is your privacy policy?")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
