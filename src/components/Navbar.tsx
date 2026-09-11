import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Check, 
  Layers, 
  CreditCard, 
  FileCheck, 
  HelpCircle, 
  MessageSquareQuote, 
  ArrowUpRight 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WHATSAPP_BASE_URL, getWhatsAppUrl } from '../data/mockData';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for elevated navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'What we stock', href: '#shelf', icon: Layers },
    { label: 'Subscriptions', href: '#subs', icon: CreditCard, highlight: true },
    { label: 'License Verification', href: '#verify', icon: FileCheck },
    { label: 'How it works', href: '#how', icon: HelpCircle },
    { label: 'Reviews', href: '#voices', icon: MessageSquareQuote },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF8]/90 dark:bg-[#0C0A15]/90 backdrop-blur-md shadow-xs border-b border-black/5 dark:border-white/10'
            : 'bg-[#FFFDF8] dark:bg-[#0C0A15] border-b border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-display font-bold text-xl sm:text-2xl text-[#19162E] dark:text-[#F8F7FC] group focus-visible:ring-2 focus-visible:ring-[#FF5A43] focus-visible:ring-offset-2 rounded-xl p-1"
            aria-label="Sparkshelf Home"
          >
            <span className="w-9 h-9 rounded-xl bg-[#FF5A43] flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform shadow-md shadow-[#FF5A43]/30">
              <Check className="w-5 h-5 text-white stroke-[3]" />
            </span>
            <span className="tracking-tight">Sparkshelf</span>
            <span className="hidden sm:inline-block text-[10px] font-sans font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#1FBDB0]/15 text-[#11887e] dark:text-[#1FBDB0] border border-[#1FBDB0]/30 ml-1">
              Verified
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#19162E]/75 dark:text-[#F8F7FC]/75 hover:text-[#19162E] dark:hover:text-white transition-colors relative py-1 focus-visible:ring-2 focus-visible:ring-[#FF5A43] focus-visible:outline-hidden rounded-md"
              >
                {link.label}
                {link.highlight && (
                  <span className="absolute -top-1.5 -right-3 w-2 h-2 rounded-full bg-[#FF5A43]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions: Dark Mode, WhatsApp, CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-[#19162E] dark:text-[#F8F7FC] hover:bg-black/10 dark:hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-[#FF5A43] focus-visible:outline-hidden transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-[#FFBF29]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-[#6D5BF0]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={getWhatsAppUrl("Hi Sparkshelf! I'm interested in licensed digital products & subscriptions.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Sparkshelf on WhatsApp"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#25D366]/25 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-hidden"
              title="Support online now"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
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
              {/* Pulsing online status indicator */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#FFFDF8] dark:border-[#0C0A15]"></span>
              </span>
            </a>

            {/* Desktop Shelf CTA Button */}
            <a
              href="#shelf"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#19162E] dark:bg-[#F8F7FC] text-[#FFFDF8] dark:text-[#19162E] font-medium text-sm hover:bg-[#FF5A43] dark:hover:bg-[#FF5A43] dark:hover:text-white transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#FF5A43] focus-visible:outline-hidden"
            >
              <span>Browse Shelf</span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2.5 rounded-xl text-[#19162E] dark:text-[#F8F7FC] hover:bg-black/5 dark:hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#FF5A43] focus-visible:outline-hidden transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with smooth entrance */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-20 z-30 bg-black/40 backdrop-blur-xs lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Container */}
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-20 left-0 right-0 z-40 bg-[#FFFDF8] dark:bg-[#141122] border-b border-black/10 dark:border-white/10 shadow-xl px-5 py-6 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#19162E]/50 dark:text-[#F8F7FC]/50">
                  Quick Navigation
                </div>

                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-xl text-[16px] font-medium text-[#19162E] dark:text-[#F8F7FC] hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center text-[#FF5A43]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span>{link.label}</span>
                      </div>
                      {link.highlight && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FF5A43] text-white">
                          Hot
                        </span>
                      )}
                    </a>
                  );
                })}

                <hr className="my-3 border-black/10 dark:border-white/10" />

                {/* Mobile Actions: WhatsApp Order & Theme */}
                <div className="flex flex-col gap-3 pt-1">
                  <a
                    href={getWhatsAppUrl("Hi Sparkshelf! I'd like to ask about available subscriptions and pricing.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-[15px] shadow-sm active:scale-[0.99] transition-transform"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
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
                    <span>Instant Order via WhatsApp</span>
                  </a>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 mt-1">
                    <span className="text-sm font-medium text-[#19162E] dark:text-[#F8F7FC]">
                      Appearance: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#1E1A34] text-xs font-semibold shadow-xs border border-black/10 dark:border-white/10"
                    >
                      Toggle
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#19162E]/60 dark:text-[#F8F7FC]/60 pt-2 text-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#25D366]"></span>
                    Direct support online • Response within ~5 minutes
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
