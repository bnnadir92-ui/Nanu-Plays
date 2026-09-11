import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../data/mockData';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed right-4 sm:right-6 bottom-5 sm:bottom-6 z-50 flex items-end gap-2.5">
      {/* Interactive Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-3 bg-white dark:bg-[#1A162D] text-[#19162E] dark:text-[#F8F7FC] px-4 py-2.5 rounded-2xl shadow-xl border border-black/10 dark:border-white/10 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              <strong>Online Desk:</strong> Ask for instant pricing or help
            </span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-[#19162E]/40 dark:text-[#F8F7FC]/40 hover:text-black dark:hover:text-white ml-1 p-0.5"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={getWhatsAppUrl("Hi Sparkshelf! I'm on the website and would like to order or ask a question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/50 focus-visible:ring-3 focus-visible:ring-[#25D366] focus-visible:outline-hidden transition-all group"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.9s0 .3-.2.5c-.1.2-.3.3-.4.5-.2.2-.3.3-.1.6.2.4.8 1.3 1.8 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.9c.2.1.4.2.4.4.1.5-.1 1.3-.6 1.7-.5.5-1.5.9-2.7.5-1.6-.5-3.5-1.5-5-3s-2.5-3.3-3-4.9c-.4-1.2 0-2.2.5-2.7z"
            fill="#fff"
          />
        </svg>

        {/* Pulse Indicator */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white dark:border-[#1A162D]"></span>
        </span>
      </motion.a>
    </div>
  );
};
