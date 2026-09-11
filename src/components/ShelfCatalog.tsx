import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, getWhatsAppUrl } from '../data/mockData';
import { 
  Key, 
  GraduationCap, 
  LayoutGrid, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Search, 
  Clock, 
  ExternalLink,
  CheckCircle,
  Tag
} from 'lucide-react';

export const ShelfCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'software', label: 'Software & OS' },
    { id: 'courses', label: 'Courses & Guides' },
    { id: 'templates', label: 'Templates & UI' },
    { id: 'subscriptions', label: 'Bundles' },
    { id: 'dev', label: 'Dev Tools' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const getIcon = (badgeIcon: string) => {
    switch (badgeIcon) {
      case 'key':
        return <Key className="w-6 h-6" />;
      case 'graduation-cap':
        return <GraduationCap className="w-6 h-6" />;
      case 'layout-grid':
        return <LayoutGrid className="w-6 h-6" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'zap':
        return <Zap className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="shelf" className="py-20 sm:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FF5A43] font-display">
              Curated Digital Stock
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#19162E] dark:text-[#F8F7FC] mt-1 tracking-tight">
              What's on the shelf today
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#19162E]/75 dark:text-[#F8F7FC]/70">
              Three categories of genuine goods, one strict guarantee: every license key, invite, and certificate ships straight from the source.
            </p>
          </div>

          {/* Instant Client-side Search for Fast Low-Bandwidth Networks */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#19162E]/50 dark:text-[#F8F7FC]/50 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, tools..."
              aria-label="Search catalog products"
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm bg-white dark:bg-[#181429] border border-black/10 dark:border-white/10 text-[#19162E] dark:text-[#F8F7FC] placeholder-[#19162E]/45 dark:placeholder-[#F8F7FC]/45 focus:outline-hidden focus:ring-2 focus:ring-[#FF5A43]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#19162E]/50 dark:text-[#F8F7FC]/50 hover:text-black dark:hover:text-white"
                aria-label="Clear search query"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills with Motion layout */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-[#FF5A43] focus-visible:outline-hidden ${
                  isSelected
                    ? 'bg-[#19162E] text-white dark:bg-[#F8F7FC] dark:text-[#19162E] shadow-sm'
                    : 'bg-black/5 dark:bg-white/5 text-[#19162E]/80 dark:text-[#F8F7FC]/80 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => {
              // Custom tile themes matching original Sparkshelf design aesthetic but enhanced for dark/light modes
              const isSun = idx === 0;
              const isInk = idx === 1;
              const isTeal = idx === 2;
              const isWhite = idx === 3;
              const isGrape = idx === 4;

              let cardBg = 'bg-white dark:bg-[#181429] text-[#19162E] dark:text-[#F8F7FC] border-2 border-black/10 dark:border-white/10';
              let iconBg = 'bg-black/5 dark:bg-white/10 text-[#FF5A43]';
              let tagBg = 'bg-black/5 dark:bg-white/10 text-[#19162E] dark:text-[#F8F7FC]';

              if (isSun) {
                cardBg = 'bg-[#FFBF29] text-[#19162E] border-2 border-amber-400 dark:border-amber-400/40 shadow-md';
                iconBg = 'bg-[#19162E]/15 text-[#19162E]';
                tagBg = 'bg-[#19162E]/10 text-[#19162E]';
              } else if (isInk) {
                cardBg = 'bg-[#19162E] text-white border-2 border-[#19162E] dark:border-purple-900/50 shadow-md';
                iconBg = 'bg-white/15 text-white';
                tagBg = 'bg-white/15 text-white';
              } else if (isTeal) {
                cardBg = 'bg-[#1FBDB0] text-white border-2 border-teal-500 shadow-md';
                iconBg = 'bg-white/20 text-white';
                tagBg = 'bg-white/20 text-white';
              } else if (isGrape) {
                cardBg = 'bg-[#6D5BF0] text-white border-2 border-purple-600 shadow-md';
                iconBg = 'bg-white/20 text-white';
                tagBg = 'bg-white/20 text-white';
              }

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[310px] transition-all relative overflow-hidden group ${cardBg}`}
                >
                  <div>
                    {/* Top row: Icon & Status Tag */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center ${iconBg}`}>
                        {getIcon(product.badgeIcon)}
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${tagBg}`}>
                        {product.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display font-bold text-2xl tracking-tight mb-2.5">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-85">
                      {product.description}
                    </p>
                  </div>

                  {/* Card Footer: Metadata & WhatsApp Order button */}
                  <div className="mt-6 pt-5 border-t border-current/15 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-wider opacity-70">
                        {product.licenseType}
                      </span>
                      <span className="text-xs font-medium opacity-90 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                        {product.deliveryTime}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppUrl(`Hi Sparkshelf! I want to order/inquire about: ${product.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#1fb355] transition-all shadow-xs active:scale-95"
                      title="Order on WhatsApp"
                    >
                      <span>Inquire</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-black/5 dark:bg-white/5 rounded-3xl p-8">
            <Search className="w-8 h-8 text-[#19162E]/40 dark:text-[#F8F7FC]/40 mx-auto mb-3" />
            <h3 className="font-display font-bold text-xl text-[#19162E] dark:text-[#F8F7FC]">
              No products found matching "{searchQuery}"
            </h3>
            <p className="text-sm text-[#19162E]/60 dark:text-[#F8F7FC]/60 mt-1">
              Need a custom software license? Message our desk directly on WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#FF5A43] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
