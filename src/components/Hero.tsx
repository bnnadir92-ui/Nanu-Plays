import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowDown, Sparkles, ExternalLink, Zap, Clock, Star } from 'lucide-react';
import { OfficialSealGraphic } from './VibrantIllustrations';
import { getWhatsAppUrl } from '../data/mockData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 overflow-hidden">
      {/* Subtle background ambient glow for dark mode and light mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FF5A43]/10 via-[#FFBF29]/10 to-[#6D5BF0]/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Verified Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1FBDB0]/10 dark:bg-[#1FBDB0]/20 border border-[#1FBDB0]/30 text-xs sm:text-sm font-semibold text-[#0f766e] dark:text-[#2dd4bf] mb-6 shadow-xs"
            >
              <span className="w-5 h-5 rounded-full bg-[#1FBDB0] flex items-center justify-center text-white">
                <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>Verified official digital supplier</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#1FBDB0]/60" />
              <span className="hidden sm:inline-block text-[11px] opacity-80">100% Genuine Licenses</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#19162E] dark:text-[#F8F7FC] tracking-tight leading-[1.08] max-w-xl"
            >
              Your one stop for{' '}
              <span className="text-[#FF5A43] underline decoration-wavy decoration-[#FF5A43]/30 underline-offset-4">real</span>,{' '}
              <span className="text-[#6D5BF0] dark:text-[#9B8CFF]">licensed</span> digital goods
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 text-base sm:text-lg text-[#19162E]/75 dark:text-[#F8F7FC]/75 leading-relaxed max-w-xl"
            >
              Software licenses, streaming subscriptions, Canva Pro, and design kits — sourced directly from makers and authorized channels with real paperwork. Zero grey-market keys, zero expired accounts.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#shelf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#19162E] dark:bg-[#F8F7FC] text-[#FFFDF8] dark:text-[#19162E] font-semibold text-base hover:bg-[#FF5A43] dark:hover:bg-[#FF5A43] dark:hover:text-white transition-all shadow-md active:scale-95"
              >
                <span>Browse the shelf</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#verify"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-black/5 dark:bg-white/10 text-[#19162E] dark:text-[#F8F7FC] font-semibold text-base hover:bg-black/10 dark:hover:bg-white/15 transition-all border border-black/10 dark:border-white/15"
              >
                <Sparkles className="w-4 h-4 text-[#FFBF29]" />
                <span>Verify License</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello Sparkshelf! Can you send me the latest price list?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#16a34a] dark:text-[#4ade80] hover:underline pt-1"
              >
                <span>Chat live on WhatsApp for instant quote</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Proof Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 sm:mt-12 pt-8 border-t border-black/10 dark:border-white/10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
            >
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#19162E] dark:text-[#F8F7FC] flex items-center">
                  1,200+
                </div>
                <div className="text-xs sm:text-sm text-[#19162E]/65 dark:text-[#F8F7FC]/65 font-medium mt-0.5">
                  orders delivered
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#19162E] dark:text-[#F8F7FC] flex items-center">
                  38
                </div>
                <div className="text-xs sm:text-sm text-[#19162E]/65 dark:text-[#F8F7FC]/65 font-medium mt-0.5">
                  brand partners
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#19162E] dark:text-[#F8F7FC] flex items-center gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFBF29] text-[#FFBF29]" />
                </div>
                <div className="text-xs sm:text-sm text-[#19162E]/65 dark:text-[#F8F7FC]/65 font-medium mt-0.5">
                  buyer rating
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Vibrant Official Seal & Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <OfficialSealGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
