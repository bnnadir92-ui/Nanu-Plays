import React from 'react';
import { motion } from 'motion/react';
import { Handshake, FileCheck, Zap, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'We sign directly with the maker',
      desc: 'Every brand on the shelf has a written supply agreement with us — zero unauthorized resellers, zero side channels or stolen credentials.',
      icon: Handshake,
      color: '#FF5A43',
      bgClass: 'bg-[#FF5A43]',
      tag: 'Direct Contracts'
    },
    {
      num: '02',
      title: 'Each listing carries its paperwork',
      desc: 'Inspect real license terms and distributor authorizations upfront. No mystery keys, no surprise account revocations.',
      icon: FileCheck,
      color: '#FFBF29',
      bgClass: 'bg-[#FFBF29]',
      tag: 'Cryptographic Proof'
    },
    {
      num: '03',
      title: 'Delivered the moment you confirm',
      desc: 'Activation keys, private seat logins, and certificates land in your WhatsApp chat or inbox in minutes — most within 60 seconds.',
      icon: Zap,
      color: '#1FBDB0',
      bgClass: 'bg-[#1FBDB0]',
      tag: '< 60s Delivery'
    },
  ];

  return (
    <section id="how" className="py-20 sm:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FF5A43] font-display">
              Transparency First
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#19162E] dark:text-[#F8F7FC] mt-2 tracking-tight">
              How the sourcing works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#19162E]/75 dark:text-[#F8F7FC]/70 leading-relaxed">
              The short version of why nothing on Sparkshelf is a grey-market copy, expired student trial, or hacked account.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              <div className="font-display font-semibold text-sm text-[#19162E] dark:text-[#F8F7FC]">
                Sparkshelf Lifetime Guarantee
              </div>
              <p className="text-xs text-[#19162E]/70 dark:text-[#F8F7FC]/65 mt-1 leading-relaxed">
                If an official license key fails to register or experiences issues during its active warranty, we provide an immediate replacement or full refund.
              </p>
              <a
                href={getWhatsAppUrl("Hi Sparkshelf! How do you guarantee the software licenses?")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A43] hover:underline"
              >
                <span>Chat with our compliance desk</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Step Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#161226] border-2 border-black/10 dark:border-white/10 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className={`w-12 h-12 rounded-2xl ${step.bgClass} flex items-center justify-center text-white shrink-0 shadow-md`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-[#19162E]/40 dark:text-[#F8F7FC]/40">
                        STEP {step.num}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#19162E] dark:text-[#F8F7FC]">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#19162E] dark:text-[#F8F7FC]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#19162E]/75 dark:text-[#F8F7FC]/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
