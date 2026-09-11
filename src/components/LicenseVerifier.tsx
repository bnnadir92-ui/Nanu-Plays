import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SAMPLE_VERIFICATION_KEYS } from '../data/mockData';
import { VerificationResult } from '../types';
import { ShieldCheck, Search, CheckCircle2, Lock, FileText, Sparkles, Copy, Check } from 'lucide-react';

export const LicenseVerifier: React.FC = () => {
  const [inputCode, setInputCode] = useState<string>('SPARK-8921-NX');
  const [result, setResult] = useState<VerificationResult | null>(
    SAMPLE_VERIFICATION_KEYS['SPARK-8921-NX']
  );
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleVerify = (codeToTest?: string) => {
    const code = (codeToTest || inputCode).trim().toUpperCase();
    setIsVerifying(true);

    setTimeout(() => {
      if (SAMPLE_VERIFICATION_KEYS[code]) {
        setResult(SAMPLE_VERIFICATION_KEYS[code]);
      } else if (code.startsWith('SPARK-') && code.length >= 8) {
        setResult({
          code,
          status: 'verified',
          productName: 'Official Digital License (Direct Channel)',
          issuedTo: `Sparkshelf Client Ref: #${code.slice(-4)}`,
          issueDate: 'Current Active Term',
          licensedVendor: 'Authorized Distributor Global Partner Network',
          hash: `SHA256: ${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`
        });
      } else {
        setResult({
          code: code || 'UNKNOWN',
          status: 'invalid',
          productName: 'Record Not Found in Sparkshelf Central Registry',
          issuedTo: 'Unregistered',
          issueDate: 'N/A',
          licensedVendor: 'Unverified Vendor',
          hash: '0000000000000000000000000000000000000000000000000000000000000000'
        });
      }
      setIsVerifying(false);
    }, 400);
  };

  const copyHash = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="verify" className="py-20 bg-white dark:bg-[#0E0B1A] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1FBDB0]/15 text-[#1FBDB0] text-xs font-semibold mb-3 font-display">
            <Lock className="w-3.5 h-3.5" />
            Transparent Audit Trail
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#19162E] dark:text-[#F8F7FC] tracking-tight">
            Official License Authenticity Checker
          </h2>
          <p className="mt-3 text-base text-[#19162E]/75 dark:text-[#F8F7FC]/70">
            Every file and account key sold on Sparkshelf includes a tamper-proof verification reference. Enter any Sparkshelf key or test a sample below to inspect manufacturer paperwork.
          </p>
        </div>

        {/* Verifier Container */}
        <div className="max-w-2xl mx-auto bg-[#FFFDF8] dark:bg-[#161226] rounded-3xl p-6 sm:p-8 border-2 border-black/10 dark:border-white/10 shadow-lg">
          {/* Input & Action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#19162E]/40 dark:text-[#F8F7FC]/40" />
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="e.g. SPARK-8921-NX"
                aria-label="License verification code"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-[#1E1933] border border-black/15 dark:border-white/15 text-sm sm:text-base font-mono uppercase tracking-wider text-[#19162E] dark:text-[#F8F7FC] focus:outline-hidden focus:ring-2 focus:ring-[#1FBDB0]"
              />
            </div>
            <button
              type="button"
              onClick={() => handleVerify()}
              disabled={isVerifying}
              className="px-6 py-3 rounded-2xl bg-[#1FBDB0] text-white font-semibold text-sm sm:text-base hover:bg-[#1aa398] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              {isVerifying ? (
                <span>Auditing...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Check Status</span>
                </>
              )}
            </button>
          </div>

          {/* Quick sample chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#19162E]/60 dark:text-[#F8F7FC]/60">Try sample:</span>
            {Object.keys(SAMPLE_VERIFICATION_KEYS).map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => {
                  setInputCode(sample);
                  handleVerify(sample);
                }}
                className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 font-mono text-[#FF5A43] dark:text-[#FF7A66] transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>

          {/* Verification Result Card */}
          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={result.code}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className={`mt-6 p-5 sm:p-6 rounded-2xl border-2 ${
                  result.status === 'verified'
                    ? 'bg-[#1FBDB0]/10 border-[#1FBDB0]/40 text-[#19162E] dark:text-[#F8F7FC]'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      result.status === 'verified' ? 'bg-[#1FBDB0] text-white' : 'bg-rose-500 text-white'
                    }`}>
                      {result.status === 'verified' ? <Check className="w-4 h-4 stroke-[3]" /> : '!'}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider">
                        {result.status === 'verified' ? 'Authentic License Verified' : 'Unregistered Key'}
                      </span>
                      <div className="font-mono text-sm font-semibold">{result.code}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white dark:bg-[#1E1933] shadow-xs">
                    {result.status === 'verified' ? 'Active & Sourced' : 'Status: Unknown'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-3 border-t border-black/10 dark:border-white/10">
                  <div>
                    <span className="opacity-60 block">Allocated Item:</span>
                    <strong className="text-sm font-medium">{result.productName}</strong>
                  </div>
                  <div>
                    <span className="opacity-60 block">Authorized Vendor:</span>
                    <strong className="text-sm font-medium">{result.licensedVendor}</strong>
                  </div>
                  <div>
                    <span className="opacity-60 block">Issued To:</span>
                    <strong className="text-sm font-medium">{result.issuedTo}</strong>
                  </div>
                  <div>
                    <span className="opacity-60 block">Active Since:</span>
                    <strong className="text-sm font-medium">{result.issueDate}</strong>
                  </div>
                </div>

                {result.status === 'verified' && (
                  <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono opacity-80 overflow-hidden">
                    <div className="truncate max-w-sm">
                      {result.hash}
                    </div>
                    <button
                      type="button"
                      onClick={() => copyHash(result.hash)}
                      className="inline-flex items-center gap-1 text-[#0d9488] dark:text-[#2dd4bf] hover:underline font-sans font-semibold cursor-pointer shrink-0"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied Hash' : 'Copy Hash'}</span>
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
