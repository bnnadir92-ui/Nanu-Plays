import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const CtaBand: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#19162E] text-[#FFFDF8] dark:bg-[#161226] p-8 sm:p-14 lg:p-18 text-center overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-2xl">
          {/* Decorative ambient color dots */}
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#6D5BF0] opacity-40 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#1FBDB0] opacity-30 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[#FF5A43] opacity-20 blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-4 h-4 text-[#1FBDB0]" />
              <span>Direct Authorized Channel</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
              Go stock up on something real
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-lg leading-relaxed">
              Browse the shelf, check the paperwork yourself, and buy knowing exactly where it came from. Fast delivery, 100% genuine keys.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#shelf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF5A43] hover:bg-[#FFBF29] hover:text-[#19162E] text-white font-bold text-base transition-all shadow-lg active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Browse the shelf</span>
              </a>

              <a
                href={getWhatsAppUrl("Hi Sparkshelf! I'd like to ask for a custom price on digital products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all border border-white/15"
              >
                <span>Direct WhatsApp Desk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
