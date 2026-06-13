/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MallMap from './components/MallMap';
import Directory from './components/Directory';
import CinemaSection from './components/CinemaSection';
import EventsSection from './components/EventsSection';
import Feedback from './components/Feedback';
import BrandLogo from './components/BrandLogo';
import NewsSection from './components/NewsSection';
import MallVideoTour from './components/MallVideoTour';
import { Shop } from './types';
import { ArrowUp, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [lang, setLang] = useState<'UZ' | 'RU' | 'EN'>('UZ');
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // IntersectionObserver to auto-update active navbar links on scroll
  useEffect(() => {
    const sections = ['hero', 'shops', 'map', 'cinema', 'events', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -20px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll listener for top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle shop select on the map -> open it directly in the catalog
  const handleMapShopSelect = (shop: Shop) => {
    setSelectedShop(shop);
    const directoryElement = document.getElementById('shops');
    if (directoryElement) {
      directoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen text-slate-850 font-sans selection:bg-gold-500 selection:text-slate-950">
      
      {/* Universal header navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Container blocks */}
      <main>
        
        {/* Hero Area */}
        <Hero 
          lang={lang} 
          setActiveSection={setActiveSection} 
        />

        {/* Cinematic Virtual Video tour of the complex */}
        <MallVideoTour lang={lang} />

        {/* Catalog list area */}
        <Directory 
          lang={lang} 
          selectedShop={selectedShop} 
          setSelectedShop={setSelectedShop} 
        />

        {/* Blueprint Map layout area */}
        <MallMap 
          lang={lang} 
          onShopSelect={handleMapShopSelect} 
        />

        {/* Cinematica seating booking IMAX area */}
        <CinemaSection 
          lang={lang} 
        />

        {/* Advertising events and promotions registration area */}
        <EventsSection 
          lang={lang} 
        />

        {/* Latest news updates & press releases */}
        <NewsSection lang={lang} />

        {/* FAQs list accordion and Contact form validation */}
        <Feedback 
          lang={lang} 
        />

      </main>

      {/* Beautiful High-end Footer */}
      <footer className="bg-slate-50 border-t border-slate-250/60 py-16 text-xs sm:text-sm text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Brand graphic */}
          <div className="flex flex-col items-center space-y-3">
            <BrandLogo showText={false} className="h-11 w-11" />
            <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 tracking-widest uppercase">
              TASHKENT CITY MALL
            </h3>
            <p className="text-slate-600 max-w-sm mx-auto leading-relaxed text-[11px] sm:text-xs">
              {lang === 'UZ'
                ? 'Hashamat doirasi va daho ko\'ngilochar muhiti Toshkent markazida. Harlahza shinamlik va quvonch siz ila.'
                : lang === 'RU'
                  ? 'Совершенное пространство роскоши, шопинга и развлечений в самом сердце столицы.'
                  : 'An exceptional space of luxury, shopping, and entertainment in the heart of the capital.'}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center space-x-4.5" id="footer-socials">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              referrerPolicy="no-referrer"
              className="p-3 bg-white hover:bg-gold-500 hover:text-slate-950 text-slate-600 border border-slate-200 rounded-full transition-all duration-300 shadow-xs"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              referrerPolicy="no-referrer"
              className="p-3 bg-white hover:bg-gold-500 hover:text-slate-950 text-slate-600 border border-slate-200 rounded-full transition-all duration-300 shadow-xs"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Telegram"
              className="p-3 bg-white hover:bg-gold-500 hover:text-slate-950 text-slate-600 border border-slate-200 rounded-full transition-all duration-300 shadow-xs"
            >
              {/* Custom elegant Telegram vector pointer */}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.88 7.97-3.41 3.79-1.55 4.57-1.82 5.09-1.83.11.01.37.04.54.17.14.12.18.28.19.39-.01.07.01.22-.01.29z"/>
              </svg>
            </a>
          </div>

          {/* Copyright rules */}
          <div className="text-[11px] text-slate-600 space-y-1.5">
            <p>© {new Date().getFullYear()} TASHKENT CITY MALL & ENTERTAINMENT. {lang === 'UZ' ? 'Barcha huquqlar saqlangan.' : lang === 'RU' ? 'Все права защищены.' : 'All rights reserved.'}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-slate-700">Tashkent City Center, Sharaf Rashidov Ave 1A, Republic of Uzbekistan</p>
          </div>

        </div>
      </footer>

      {/* Floating back-to-top circular controller */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-gold-500 hover:bg-gold-400 text-slate-950 rounded-full shadow-lg shadow-gold-500/10 cursor-pointer transform hover:-translate-y-0.5 transition-all duration-300 animate-bounce-slow"
          aria-label={lang === 'UZ' ? 'Yuqoriga qaytish' : lang === 'RU' ? 'Наверх' : 'Back to top'}
          id="back-to-top-btn"
        >
          <ArrowUp size={18} className="font-black" />
        </button>
      )}

    </div>
  );
}
