import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const navKeys = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLang = i18n.language;
  const resumeUrl = currentLang === 'tr' ? '/cv-tr.pdf' : '/cv.pdf';

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'tr' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-md border-b-2 border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - RPG pixel style */}
          <motion.a
            href="#home"
            className="font-pixel text-xs text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;DA /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1">
            <div className="w-24 shrink-0" />
            <div className="flex items-center gap-8 mx-auto">
              {navKeys.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="font-mono text-sm text-gray-400 hover:text-primary transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-primary mr-1">{String(index).padStart(2, '0')}.</span>
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
            {/* Language Toggle & Resume */}
            <div className="flex items-center gap-4 ml-4 shrink-0">
              <button
                onClick={toggleLanguage}
                className="font-pixel text-[8px] flex items-center gap-1.5 cursor-pointer px-2 py-1 border border-gray-700/50 hover:border-primary/50 transition-colors"
              >
                <span className={currentLang === 'en' ? 'text-primary' : 'text-gray-500'}>EN</span>
                <span className="text-gray-600">|</span>
                <span className={currentLang === 'tr' ? 'text-primary' : 'text-gray-500'}>TR</span>
              </button>
              <motion.a
                href={resumeUrl}
                target="_blank"
                className="relative px-4 py-2 border-2 border-primary text-primary font-pixel text-[8px] hover:bg-primary/10 transition-all overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Sparkle particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
                    style={{
                      left: `${15 + i * 18}%`,
                      top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(168,85,247,0.15) 50%, transparent 60%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                />
                <span className="relative z-10">{t('nav.resume')}</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-md border-b-2 border-primary/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navKeys.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="block font-mono text-gray-400 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-primary mr-2">{String(index).padStart(2, '0')}.</span>
                  {t(item.key)}
                </motion.a>
              ))}
              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                <button
                  onClick={toggleLanguage}
                  className="font-pixel text-[8px] flex items-center gap-1.5 cursor-pointer px-2 py-1 border border-gray-700/50"
                >
                  <span className={currentLang === 'en' ? 'text-primary' : 'text-gray-500'}>EN</span>
                  <span className="text-gray-600">|</span>
                  <span className={currentLang === 'tr' ? 'text-primary' : 'text-gray-500'}>TR</span>
                </button>
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  className="relative px-4 py-2 border-2 border-primary text-primary font-pixel text-[8px] hover:bg-primary/10 transition-all overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
                      style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                    />
                  ))}
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(168,85,247,0.15) 50%, transparent 60%)' }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                  />
                  <span className="relative z-10">{t('nav.resume')}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
