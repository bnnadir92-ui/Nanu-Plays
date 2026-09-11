import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Sparkles, Key, Zap } from 'lucide-react';

export const OfficialSealGraphic: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] mx-auto flex items-center justify-center select-none">
      {/* Outer subtle pulsed decorative ring */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-2 rounded-full border-2 border-dashed border-[#FF5A43]/40 dark:border-[#FF5A43]/30 pointer-events-none"
      />

      {/* Rotating orbit with dashed tick marks */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 340 340"
        fill="none"
      >
        <circle
          cx="170"
          cy="170"
          r="160"
          stroke="currentColor"
          className="text-[#19162E]/25 dark:text-white/20"
          strokeWidth="2"
          strokeDasharray="4 12"
          strokeLinecap="round"
        />
        <circle
          cx="170"
          cy="10"
          r="5"
          fill="#FF5A43"
        />
        <circle
          cx="170"
          cy="330"
          r="5"
          fill="#1FBDB0"
        />
        <circle
          cx="10"
          cy="170"
          r="5"
          fill="#FFBF29"
        />
        <circle
          cx="330"
          cy="170"
          r="5"
          fill="#6D5BF0"
        />
      </motion.svg>

      {/* Main Core Seal with subtle gradient & drop shadow */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 w-[68%] aspect-square rounded-full bg-gradient-to-br from-[#FF5A43] via-[#E8432A] to-[#C9331C] p-3 shadow-2xl shadow-[#FF5A43]/40 dark:shadow-[#FF5A43]/20 flex items-center justify-center cursor-default"
      >
        {/* Inner dotted boundary */}
        <div className="w-full h-full rounded-full border-2 border-dashed border-white/60 flex flex-col items-center justify-center text-center p-4 text-white relative overflow-hidden">
          {/* Subtle light sweep reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-2 shadow-inner">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <strong className="font-display text-xl sm:text-2xl font-bold tracking-tight leading-tight">
            Official<br />Supplier
          </strong>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase opacity-90 mt-1 bg-white/15 px-2.5 py-0.5 rounded-full">
            Authorized &amp; Verified
          </span>
          <span className="text-[9px] opacity-75 mt-1">2026 Direct Source</span>
        </div>
      </motion.div>

      {/* Floating Vibrant Chip 1: Verified (Top Left) */}
      <motion.div
        animate={{ y: [-4, 5, -4], rotate: [-10, -7, -10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1 left-2 sm:left-4 z-20 bg-[#FFBF29] text-[#19162E] p-3 rounded-2xl shadow-lg shadow-[#FFBF29]/40 flex items-center gap-2 font-display font-semibold text-xs border border-white/40"
      >
        <div className="w-6 h-6 rounded-lg bg-[#19162E] flex items-center justify-center text-white">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <span className="hidden sm:inline">100% Genuine</span>
      </motion.div>

      {/* Floating Vibrant Chip 2: Speed (Bottom Left) */}
      <motion.div
        animate={{ y: [4, -5, 4], rotate: [8, 11, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-2 -left-3 sm:left-0 z-20 bg-[#1FBDB0] text-white p-3 rounded-2xl shadow-lg shadow-[#1FBDB0]/40 flex items-center gap-2 font-display font-semibold text-xs border border-white/30"
      >
        <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white">
          <Zap className="w-3.5 h-3.5 fill-current" />
        </div>
        <span>60s Delivery</span>
      </motion.div>

      {/* Floating Vibrant Chip 3: Legal Warranty (Bottom Right) */}
      <motion.div
        animate={{ y: [-5, 4, -5], rotate: [-6, -3, -6] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute -bottom-2 right-2 sm:right-4 z-20 bg-[#6D5BF0] text-white p-3 rounded-2xl shadow-lg shadow-[#6D5BF0]/40 flex items-center gap-2 font-display font-semibold text-xs border border-white/30"
      >
        <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white">
          <Key className="w-3.5 h-3.5" />
        </div>
        <span>Direct Keys</span>
      </motion.div>

      {/* Floating Sparkle Chip (Top Right) */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-2 sm:right-6 z-20 w-8 h-8 rounded-xl bg-white dark:bg-[#1F1A37] shadow-md flex items-center justify-center text-[#FF5A43] border border-black/5 dark:border-white/10"
      >
        <Sparkles className="w-4 h-4 fill-current" />
      </motion.div>
    </div>
  );
};
