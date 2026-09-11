import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SUBSCRIPTIONS, getWhatsAppUrl } from '../data/mockData';
import { BrandIcon } from './BrandIcons';
import { Check, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export const SubscriptionCards: React.FC = () => {
  const [activePlanSelection, setActivePlanSelection] = useState<Record<string, string>>({
    'sub-netflix': '1 Month',
    'sub-canva': '1 Year',
    'sub-capcut': '1 Year',
    'sub-gemini': '1 Month',
    'sub-spotify': '6 Months',
    'sub-figma': '3 Months',
    'sub-chatgpt': '1 Month',
    'sub-youtube': '6 Months'
  });

  const handlePlanChange = (subId: string, plan: string) => {
    setActivePlanSelection(prev => ({ ...prev, [subId]: plan }));
  };

  return (
    <section id="subs" className="py-20 bg-[#FFF4DE]/50 dark:bg-[#131022] border-y border-black/10 dark:border-white/10 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A43]/15 text-[#FF5A43] text-xs font-semibold mb-3 font-display">
            <Sparkles className="w-3.5 h-3.5" />
            Most Requested Accounts
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#19162E] dark:text-[#F8F7FC] tracking-tight">
            Popular subscriptions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#19162E]/75 dark:text-[#F8F7FC]/70">
            Private profile access and full invites for the apps people ask us for most. Instant setup on your device with guaranteed replacement coverage.
          </p>
        </div>

        {/* Subscription Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBSCRIPTIONS.map((item) => {
            const currentPlan = activePlanSelection[item.id] || item.planOptions[0];
            const inquiryMsg = `Hi Sparkshelf! I'd like to order ${item.name} (${currentPlan} plan). What is the price and payment options?`;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-white dark:bg-[#1A162D] border-2 border-black/10 dark:border-white/10 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Brand top accent glow */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 opacity-80"
                  style={{ backgroundColor: item.accentColor }}
                />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center p-3 shadow-inner">
                      <BrandIcon type={item.iconType} className="w-8 h-8" />
                    </div>
                    <span 
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10 uppercase tracking-wider"
                      style={{ 
                        backgroundColor: `${item.accentColor}18`,
                        color: item.accentColor 
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-[#19162E] dark:text-[#F8F7FC]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#19162E]/70 dark:text-[#F8F7FC]/65 leading-relaxed min-h-[56px]">
                    {item.description}
                  </p>

                  {/* Duration Plan Picker */}
                  <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10">
                    <span className="text-[11px] font-semibold text-[#19162E]/50 dark:text-[#F8F7FC]/50 uppercase tracking-wider block mb-1.5">
                      Select Plan
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.planOptions.map((plan) => (
                        <button
                          key={plan}
                          type="button"
                          onClick={() => handlePlanChange(item.id, plan)}
                          className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all ${
                            currentPlan === plan
                              ? 'bg-[#19162E] text-white dark:bg-[#F8F7FC] dark:text-[#19162E] font-semibold shadow-xs'
                              : 'bg-black/5 dark:bg-white/5 text-[#19162E]/70 dark:text-[#F8F7FC]/70 hover:bg-black/10 dark:hover:bg-white/10'
                          }`}
                        >
                          {plan}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#19162E]/80 dark:text-[#F8F7FC]/80">
                        <Check className="w-3.5 h-3.5 text-[#1FBDB0] shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action & Pricing */}
                <div className="mt-6 pt-4 border-t border-dashed border-black/15 dark:border-white/15 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-semibold text-[#19162E]/50 dark:text-[#F8F7FC]/50">
                      Sparkshelf Price
                    </span>
                    <span className="text-xs font-bold text-[#E0442D] dark:text-[#FF7A66]">
                      {item.priceDisplay}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(inquiryMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] active:scale-95 transition-all shadow-xs"
                    title={`Inquire about ${item.name}`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.5 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.9s0 .3-.2.5c-.1.2-.3.3-.4.5-.2.2-.3.3-.1.6.2.4.8 1.3 1.8 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.8.9c.2.1.4.2.4.4.1.5-.1 1.3-.6 1.7-.5.5-1.5.9-2.7.5-1.6-.5-3.5-1.5-5-3s-2.5-3.3-3-4.9c-.4-1.2 0-2.2.5-2.7z"
                        fill="#fff"
                      />
                    </svg>
                    <span>Ask ({currentPlan})</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner inside subs */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#181429] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1FBDB0]/15 text-[#1FBDB0] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm sm:text-base text-[#19162E] dark:text-[#F8F7FC]">
                Don't see your favorite software or subscription?
              </h4>
              <p className="text-xs sm:text-sm text-[#19162E]/65 dark:text-[#F8F7FC]/65">
                We stock over 200+ specialized licenses on request (GitHub Copilot, Adobe, JetBrains, Midjourney, Duolingo, etc.).
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Hello! Do you have custom software or apps not listed on the website?")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#19162E] dark:bg-[#F8F7FC] text-white dark:text-[#19162E] text-xs sm:text-sm font-semibold hover:bg-[#FF5A43] dark:hover:bg-[#FF5A43] dark:hover:text-white transition-colors"
          >
            Request Custom Product
          </a>
        </div>
      </div>
    </section>
  );
};
