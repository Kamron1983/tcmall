/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ShoppingBag, Clapperboard, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: 'UZ' | 'RU' | 'EN';
  setActiveSection: (sec: string) => void;
}

const BACKGROUNDS = [
  {
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1600',
    subtitle_uz: 'Hashamat • Sifat • Moda',
    subtitle_ru: 'Роскошь • Качество • Мода',
    subtitle_en: 'Luxury • Quality • Fashion',
    title_uz: 'Toshkentning eng ulkan savdo markazi',
    title_ru: 'Крупнейший торговый центр Ташкента',
    title_en: 'Tashkent\'s Largest Shopping Mall',
    desc_uz: 'Dunyoga mashhur kiyim brendlari, eksklyuziv butiklar va mukammal xizmat ko\'rsatish muhiti sizni kutmoqda.',
    desc_ru: 'Мировые бренды одежды, эксклюзивные бутики и идеальная атмосфера шопинга ждут вас.',
    desc_en: 'World-famous clothing brands, exclusive boutiques, and a perfect shopping atmosphere await you.',
    badge_uz: 'Yangi Mavsum Kolleksiyasi',
    badge_ru: 'Новая Коллекция Сезона',
    badge_en: 'New Season Collection'
  },
  {
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1600',
    subtitle_uz: 'Dolby Atmos • IMAX • Premium',
    subtitle_ru: 'Dolby Atmos • IMAX • Премиум',
    subtitle_en: 'Dolby Atmos • IMAX • Premium',
    title_uz: 'Kino olamining eng yuqori cho\'qqisi',
    title_ru: 'Вершина киноискусства в IMAX',
    title_en: 'The Ultimate Cinema Experience',
    desc_uz: 'Cinematica kinoteatrida eng so\'nggi premyeralarni misli ko\'rilmagan tasvir va atrof-muhit tovush tizimi bilan his eting.',
    desc_ru: 'Испытайте новейшие кинопремьеры в кинотеатре Cinematica с непревзойденной картинкой и звуком Dolby.',
    desc_en: 'Experience the latest movie premieres at Cinematica with unparalleled visuals and audio precision.',
    badge_uz: 'Haftalik Premyeralar',
    badge_ru: 'Премьеры Недели',
    badge_en: 'Premieres of the Week'
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600',
    subtitle_uz: 'Shinam • Mazali • Turli-tuman',
    subtitle_ru: 'Уют • Вкус • Разнообразие',
    subtitle_en: 'Cozy • Flavor • Variety',
    title_uz: 'Gastro-sayohat va shinam kafelar',
    title_ru: 'Гастрономическое путешествие',
    title_en: 'A Rich Gastronomic Journey',
    desc_uz: 'Fransuz pishiriqlaridan tortib, eng tezkor mazali pitsalargacha - 30 dan ortiq restoranlar food-kortida.',
    desc_ru: 'От изысканной французской выпечки до сочной итальянской пиццы - более 30 ресторанов на фуд-корте.',
    desc_en: 'From exquisite French pastries to hot artisanal pizza - over 30 options on our food court.',
    badge_uz: 'Gourmet Food Zone',
    badge_ru: 'Зона высокой кухни',
    badge_en: 'Gourmet Dining District'
  }
];

export default function Hero({ lang, setActiveSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BACKGROUNDS.length) % BACKGROUNDS.length);
  };

  const handleActionClick = (targetId: string) => {
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Slides */}
      {BACKGROUNDS.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-white z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70 z-10" />
          <img
            src={bg.image}
            alt="Mall slide representation"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-gold-450/10 border border-gold-500/30 text-gold-700 px-3 py-1.5 rounded-full text-xs font-display tracking-wider uppercase" id="hero-badge">
              <Sparkles size={14} className="animate-spin-slow text-gold-600" />
              <span>
                {lang === 'UZ' 
                  ? BACKGROUNDS[currentSlide].badge_uz 
                  : lang === 'RU' 
                    ? BACKGROUNDS[currentSlide].badge_ru 
                    : BACKGROUNDS[currentSlide].badge_en}
              </span>
            </div>

            {/* Subtitle */}
            <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-600" id="hero-subtitle">
              {lang === 'UZ' 
                ? BACKGROUNDS[currentSlide].subtitle_uz 
                : lang === 'RU' 
                  ? BACKGROUNDS[currentSlide].subtitle_ru 
                  : BACKGROUNDS[currentSlide].subtitle_en}
            </p>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]" id="hero-title">
              {lang === 'UZ' 
                ? BACKGROUNDS[currentSlide].title_uz 
                : lang === 'RU' 
                  ? BACKGROUNDS[currentSlide].title_ru 
                  : BACKGROUNDS[currentSlide].title_en}
            </h1>

            {/* Description */}
            <p className="text-slate-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed" id="hero-desc">
              {lang === 'UZ' 
                ? BACKGROUNDS[currentSlide].desc_uz 
                : lang === 'RU' 
                  ? BACKGROUNDS[currentSlide].desc_ru 
                  : BACKGROUNDS[currentSlide].desc_en}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" id="hero-cta-buttons">
              <button
                onClick={() => handleActionClick('shops')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-display font-bold rounded-xl shadow-lg shadow-gold-500/20 transform hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wider uppercase animate-pulse-subtle"
                id="hero-cta-shops"
              >
                {lang === 'UZ' ? 'Do\'kon sayohati' : lang === 'RU' ? 'За покупками' : 'Go Shopping'}
                <ShoppingBag size={16} className="inline-block ml-2 -mt-0.5" />
              </button>

              <button
                onClick={() => handleActionClick('map')}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-display font-semibold rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wider uppercase shadow-xs cursor-pointer"
                id="hero-cta-map"
              >
                {lang === 'UZ' ? 'Xaritalar' : lang === 'RU' ? 'Карта этажей' : 'Floor Plans'}
              </button>
            </div>

          </div>

          {/* Quick Informational Bento Widgets (Visual side panel) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full" id="hero-widgets">
            
            {/* Widget 1: Brands Counts */}
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-slate-150 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group select-none shadow-xs">
              <div className="bg-slate-50 p-3 rounded-xl mb-3 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors duration-300 text-gold-600">
                <ShoppingBag size={20} />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">150+</span>
              <span className="text-xs text-slate-500 font-sans mt-1">
                {lang === 'UZ' ? 'Modali do\'konlar' : lang === 'RU' ? 'Брендов одежды' : 'Fashion Brands'}
              </span>
            </div>

            {/* Widget 2: IMAX Movies */}
            <div 
              onClick={() => handleActionClick('cinema')}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-slate-150 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer select-none shadow-xs"
            >
              <div className="bg-slate-50 p-3 rounded-xl mb-3 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors duration-300 text-gold-600">
                <Clapperboard size={20} />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">IMAX</span>
              <span className="text-xs text-slate-500 font-sans mt-1">
                {lang === 'UZ' ? 'Dolby Atmos kino' : lang === 'RU' ? 'Кинотеатр Dolby' : 'Dolby Surround Cinema'}
              </span>
            </div>

            {/* Widget 3: Ice Arena */}
            <div 
              onClick={() => handleActionClick('shops')}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-slate-150 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer select-none shadow-xs"
            >
              <div className="bg-slate-50 p-3 rounded-xl mb-3 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors duration-300 text-gold-600">
                <Award size={20} />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Ice Rink</span>
              <span className="text-xs text-slate-500 font-sans mt-1">
                {lang === 'UZ' ? 'Doimiy muz arenalari' : lang === 'RU' ? 'Ледовый комплекс' : 'Premium Ice Arena'}
              </span>
            </div>

            {/* Widget 4: Events Promo Banner */}
            <div 
              onClick={() => handleActionClick('events')}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-slate-150 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer select-none shadow-xs"
            >
              <div className="bg-slate-50 p-3 rounded-xl mb-3 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors duration-300 text-gold-600">
                <Calendar size={20} />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">70%</span>
              <span className="text-xs text-slate-500 font-sans mt-1">
                {lang === 'UZ' ? 'Katta yozgi aksiya' : lang === 'RU' ? 'Летние скидки' : 'Huge Summer Promo'}
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Manual Slider Navigation Arrows */}
      <div className="absolute bottom-10 right-4 sm:right-10 z-30 flex items-center space-x-2" id="hero-slider-arrows">
        <button
          onClick={prevSlide}
          className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-full text-slate-850 shadow-sm transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-full text-slate-850 shadow-sm transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Indicators / Progress bars */}
      <div className="absolute bottom-12 left-4 sm:left-10 z-30 flex items-center space-x-1.5" id="hero-slider-dots">
        {BACKGROUNDS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-[4px] rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-gold-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
