/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Globe, Menu, X, Landmark, AlertTriangle } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  lang: 'UZ' | 'RU' | 'EN';
  setLang: (l: 'UZ' | 'RU' | 'EN') => void;
}

export default function Navbar({ activeSection, setActiveSection, lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Update time + open state
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      // Mall is open 10:00 - 23:00
      setIsOpenNow(hours >= 10 && hours < 23);

      const timeString = now.toLocaleTimeString('uz-UZ', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const menuItems = [
    { id: 'hero', uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' },
    { id: 'shops', uz: 'Do\'konlar', ru: 'Магазины', en: 'Shops' },
    { id: 'map', uz: 'Interaktiv Xarita', ru: 'Интерактивная Карта', en: 'Interactive Plan' },
    { id: 'cinema', uz: 'Kinoteatr', ru: 'Кинотеатр', en: 'Cinema' },
    { id: 'events', uz: 'Yangiliklar', ru: 'Новости', en: 'News & Events' },
    { id: 'contact', uz: 'Fikr-mulohaza', ru: 'Отзывы и Контакты', en: 'Feedback & Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100/40 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            id="nav-logo"
          >
            <BrandLogo className="h-9 w-9" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" id="nav-desktop-links">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-link-${item.id}`}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:text-amber-800 ${
                  activeSection === item.id
                    ? 'text-amber-850 bg-amber-50 border border-gold-400/50 shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {lang === 'UZ' ? item.uz : lang === 'RU' ? item.ru : item.en}
              </button>
            ))}
          </div>

          {/* Right utility links */}
          <div className="hidden md:flex items-center space-x-4" id="nav-utilities">
            {/* Open / Closed indicator */}
            <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 py-1.5 px-3.5 rounded-full text-xs font-display">
              <span className={`h-2 w-2 rounded-full map-marker-pulse ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span className={isOpenNow ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                {isOpenNow 
                  ? (lang === 'UZ' ? 'OCHIQ • 23:00 gacha' : lang === 'RU' ? 'ОТКРЫТО • до 23:00' : 'OPEN • until 23:00')
                  : (lang === 'UZ' ? 'YOPILGAN • 10:00 da ochiladi' : lang === 'RU' ? 'ЗАКРЫТО • Откроется в 10:00' : 'CLOSED • Opens at 10:00')
                }
              </span>
              <span className="text-slate-500 font-mono">| {currentTime}</span>
            </div>

            {/* Warning Dialog Button */}
            <button
              onClick={() => setInfoModalOpen(true)}
              className="flex items-center justify-center p-2 rounded-full border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-700 transition-all duration-300 cursor-pointer"
              title={lang === 'UZ' ? "Loyiha haqida ogohlantirish" : lang === 'RU' ? "О проекте" : "Project Status Notice"}
            >
              <AlertTriangle size={15} />
            </button>

            {/* Language switch */}
            <div className="flex bg-slate-50 border border-slate-205 p-0.5 rounded-full" id="nav-lang-switch">
              <button
                onClick={() => setLang('UZ')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                  lang === 'UZ' ? 'bg-gold-500 text-slate-950 shadow-xs' : 'text-slate-650 hover:text-slate-950'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang('RU')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                  lang === 'RU' ? 'bg-gold-500 text-slate-950 shadow-xs' : 'text-slate-650 hover:text-slate-950'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                  lang === 'EN' ? 'bg-gold-500 text-slate-950 shadow-xs' : 'text-slate-650 hover:text-slate-950'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3" id="nav-mobile-trigger">
            {/* Unofficial Info Warning trigger in front of the menu */}
            <button
              onClick={() => setInfoModalOpen(true)}
              className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:text-amber-300 active:scale-95 rounded-lg transition-transform"
              title={lang === 'UZ' ? "Loyiha holati" : lang === 'RU' ? "Статус проекта" : "Project Status"}
            >
              <AlertTriangle size={16} className="animate-pulse" />
            </button>

            {/* Quick language toggle for mobile too - cycles UZ -> RU -> EN */}
            <button
              onClick={() => {
                const order: ('UZ' | 'RU' | 'EN')[] = ['UZ', 'RU', 'EN'];
                const nextIdx = (order.indexOf(lang) + 1) % order.length;
                setLang(order[nextIdx]);
              }}
              className="px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-amber-800 text-xs font-bold rounded-lg cursor-pointer"
            >
              {lang}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-955 hover:bg-slate-100 focus:outline-none transition-all duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>
    </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-lg animate-fade-in" id="nav-mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2 border-t border-slate-200 bg-white shadow-lg">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-5 py-3.5 rounded-xl text-base font-bold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-amber-850 bg-slate-50 border-l-4 border-gold-400 pl-6'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {lang === 'UZ' ? item.uz : lang === 'RU' ? item.ru : item.en}
              </button>
            ))}

            <div className="pt-6 border-t border-slate-150 mt-4 space-y-4 px-4">
              <div className="flex items-center space-x-3 text-slate-600 text-xs">
                <Clock size={16} className="text-gold-600" />
                <span>
                  {lang === 'UZ' ? 'Har kuni: 10:00 - 23:00' : lang === 'RU' ? 'Ежедневно: 10:00 - 23:00' : 'Every day: 10:00 - 23:00'}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 text-xs">
                <MapPin size={16} className="text-gold-600" />
                <span>
                  {lang === 'UZ' ? 'Toshkent, Sharaf Rashidov shoh ko\'chasi, 1A' : lang === 'RU' ? 'Ташкент, пр-т Шарафа Рашидова, 1А' : 'Tashkent, Sharaf Rashidov Ave, 1A'}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 text-xs">
                <Phone size={16} className="text-gold-600" />
                <span>+998 (71) 201-11-11</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <div className={`inline-block h-2 w-2 rounded-full mr-2 ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                <span className={`text-xs ${isOpenNow ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}`}>
                  {isOpenNow 
                    ? (lang === 'UZ' ? 'Hozir ochiq' : lang === 'RU' ? 'Сейчас открыто' : 'Now open') 
                    : (lang === 'UZ' ? 'Hozir yopiq' : lang === 'RU' ? 'Сейчас закрыто' : 'Now closed')
                  }
                </span>
                <span className="text-slate-500 font-mono text-xs ml-2">• {currentTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Unofficial Disclaimer Informational Modal Popup */}
      {infoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in"
          id="unofficial-disclaimer-modal"
        >
          <div className="bg-white border border-slate-205 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-scale-up">
            
            <button
              onClick={() => setInfoModalOpen(false)}
              className="absolute top-5 right-5 p-2 bg-slate-50 hover:bg-slate-100 text-slate-650 hover:text-slate-955 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-700 py-1.5 px-3 rounded-lg text-xs font-display font-medium">
                <AlertTriangle size={15} />
                <span>{lang === 'UZ' ? 'NORASMIY SAYT KONTSEPTI' : lang === 'RU' ? 'НЕОФИЦИАЛЬНАЯ ДЕМО-ВЕРСИЯ' : 'UNOFFICIAL CONCEPT DEMO'}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-serif font-extrabold text-slate-900 leading-tight">
                {lang === 'UZ' 
                  ? 'Tashkent City Mall (Norasmiy Demo)' 
                  : lang === 'RU' 
                    ? 'Tashkent City Mall (Неофициальная демо)' 
                    : 'Tashkent City Mall (Unofficial Demo)'}
              </h2>

              <div className="h-[1px] bg-slate-150 my-2" />

              <p className="text-slate-605 text-xs sm:text-sm leading-relaxed p-4 bg-slate-50 border border-slate-150 rounded-2xl font-sans">
                {lang === 'UZ' 
                  ? "Ushbu veb-sayt faqat o'quv va portfel loyihasi sifatida yaratilgan bo'lib, Tashkent City Mall ma'muriyatiga aloqador emas. Saytdagi barcha kino chiptalari va buyurtmalar simulyatsiya qilingan (haqiqiy to'lov tizimi mavjud emas va haqiqiy chiptalar berilmaydi)." 
                  : lang === 'RU' 
                    ? "Данный веб-сайт создан исключительно в демонстрационных целях как концептуальный портфолио-проект и не связан с официальными структурами молла. Все процессы бронирования билетов имитированы (реальные покупки и транзакции не совершаются)." 
                    : "This platform is an independent design prototype built for demonstration and educational purposes. Kinoplex ticket bookings, maps, and information represented are fully simulated under this concept-demonstration, with no real-world transactions processed."}
              </p>

              <div className="pt-2 flex items-center justify-end">
                <button 
                  onClick={() => setInfoModalOpen(false)}
                  className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  {lang === 'UZ' ? 'Tushunarli' : lang === 'RU' ? 'Понятно' : 'Understood'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
