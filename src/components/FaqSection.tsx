import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, getWhatsAppUrl } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1FBDB0]/15 text-[#1FBDB0] text-xs font-semibold mb-3 font-display">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#19162E] dark:text-[#F8F7FC] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base text-[#19162E]/75 dark:text-[#F8F7FC]/70">
            Everything you need to know about deliveries, payment options, and license verification.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-black/10 dark:border-white/10 bg-white dark:bg-[#181429] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-[#19162E] dark:text-[#F8F7FC] hover:text-[#FF5A43] dark:hover:text-[#FF7A66] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[#19162E] dark:text-[#F8F7FC]"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#19162E]/75 dark:text-[#F8F7FC]/70 leading-relaxed border-t border-black/5 dark:border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FFF4DE] dark:bg-[#1E1933] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-semibold text-base text-[#19162E] dark:text-[#F8F7FC]">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs sm:text-sm text-[#19162E]/70 dark:text-[#F8F7FC]/70 mt-0.5">
              Our team responds on WhatsApp within minutes during operational hours.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Sparkshelf! I have a question about digital licensing:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20ba59] active:scale-95 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
