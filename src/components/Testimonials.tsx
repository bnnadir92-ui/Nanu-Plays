import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_EN, TESTIMONIALS_AR } from '../data/mockData';
import { Star, ShieldCheck, MessageSquareQuote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'all' | 'en' | 'ar'>('all');

  return (
    <section id="voices" className="py-20 sm:py-28 bg-[#FFF4DE]/40 dark:bg-[#120F20] border-y border-black/10 dark:border-white/10 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D5BF0]/15 text-[#6D5BF0] dark:text-[#9B8CFF] text-xs font-semibold mb-3 font-display">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Verified Buyer Feedback
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#19162E] dark:text-[#F8F7FC] tracking-tight">
            What people say after they buy
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#19162E]/75 dark:text-[#F8F7FC]/70">
            Real feedback from verified purchasers across international and MENA regions.
          </p>

          {/* Language filter pills */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10">
            <button
              type="button"
              onClick={() => setActiveLang('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeLang === 'all'
                  ? 'bg-[#19162E] text-white dark:bg-[#F8F7FC] dark:text-[#19162E] shadow-xs'
                  : 'text-[#19162E]/70 dark:text-[#F8F7FC]/70'
              }`}
            >
              All Reviews (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveLang('en')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeLang === 'en'
                  ? 'bg-[#19162E] text-white dark:bg-[#F8F7FC] dark:text-[#19162E] shadow-xs'
                  : 'text-[#19162E]/70 dark:text-[#F8F7FC]/70'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setActiveLang('ar')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeLang === 'ar'
                  ? 'bg-[#19162E] text-white dark:bg-[#F8F7FC] dark:text-[#19162E] shadow-xs'
                  : 'text-[#19162E]/70 dark:text-[#F8F7FC]/70'
              }`}
            >
              العربية (Arabic)
            </button>
          </div>
        </div>

        {/* English Reviews */}
        {(activeLang === 'all' || activeLang === 'en') && (
          <div className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_EN.map((item, idx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl p-7 bg-white dark:bg-[#1A152E] border-2 border-black/10 dark:border-white/10 shadow-xs flex flex-col justify-between relative"
                >
                  {/* Rating Stars */}
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFBF29] text-[#FFBF29]" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-[#19162E]/85 dark:text-[#F8F7FC]/85 leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm shrink-0 shadow-xs"
                      style={{ backgroundColor: item.avatarBg }}
                    >
                      {item.initials}
                    </div>

                    <div>
                      <div className="font-display font-bold text-sm text-[#19162E] dark:text-[#F8F7FC] flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#1FBDB0]" />
                      </div>
                      <div className="text-xs text-[#19162E]/60 dark:text-[#F8F7FC]/60">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Arabic Reviews with genuine RTL Layout */}
        {(activeLang === 'all' || activeLang === 'ar') && (
          <div className="mt-8" dir="rtl" lang="ar">
            <div className="text-right mb-6">
              <h3 className="font-display font-bold text-2xl text-[#19162E] dark:text-[#F8F7FC]">
                آراء عملائنا في العالم العربي
              </h3>
              <p className="text-xs sm:text-sm text-[#19162E]/70 dark:text-[#F8F7FC]/70 mt-1">
                تجارب حقيقية لعملاء معتمدين عبر منصة واتساب والتسليم الفوري
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_AR.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl p-7 bg-[#FFFDF8] dark:bg-[#1A152E] border-2 border-black/10 dark:border-white/10 shadow-xs flex flex-col justify-between text-right"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4 justify-end">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFBF29] text-[#FFBF29]" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-[#19162E]/85 dark:text-[#F8F7FC]/85 leading-relaxed font-sans font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-xs shrink-0 shadow-xs"
                        style={{ backgroundColor: item.avatarBg }}
                      >
                        {item.initials}
                      </div>

                      <div>
                        <div className="font-bold text-sm text-[#19162E] dark:text-[#F8F7FC] flex items-center gap-1.5">
                          <span>{item.author}</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-[#1FBDB0]" />
                        </div>
                        <div className="text-xs text-[#19162E]/60 dark:text-[#F8F7FC]/60">
                          {item.role}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1FBDB0]/15 text-[#0d9488] dark:text-[#2dd4bf]">
                      مشتري موثق
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
