/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NEWS } from '../data';
import { NewsArticle } from '../types';
import { Calendar, ArrowRight, X, Newspaper, Clock, Search, ExternalLink } from 'lucide-react';

interface NewsSectionProps {
  lang: 'UZ' | 'RU' | 'EN';
}

export default function NewsSection({ lang }: NewsSectionProps) {
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sorter / Filter
  const filteredNews = NEWS.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const featuredNews = NEWS[0]; // Set the latest one as featured

  return (
    <section id="news-section" className="py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 text-gold-650 text-sm font-display tracking-widest uppercase mb-3">
              <Newspaper size={16} />
              <span>{lang === 'UZ' ? 'YANGILIKLAR' : lang === 'RU' ? 'НОВОСТИ МАРКЕТА' : 'MALL NEWS & BLOG'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'UZ' ? 'So\'nggi xabarlar va voqealar' : lang === 'RU' ? 'Последние новости' : 'Latest Stories & Updates'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {lang === 'UZ' 
                ? 'Tashkent City Mall hayotidagi barcha yirik islohotlar, yutuqlar va bayram xabarlaridan birinchilardan bo\'lib xabardor bo\'ling.'
                : lang === 'RU'
                  ? 'Будьте в курсе всех ключевых событий, достижений и праздничных новостей из жизни Tashkent City Mall.'
                  : 'Be the first to learn about major achievements, grand openings, and festive announcements.'}
            </p>
          </div>
 
          {/* Quick inline search for articles */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
            <input
              type="text"
              placeholder={lang === 'UZ' ? 'Yangiliklarni qidirish...' : lang === 'RU' ? 'Поиск новостей...' : 'Search articles...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-905 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-gold-600 transition-colors font-sans"
            />
          </div>
        </div>

        {/* Featured Big news banner */}
        {searchTerm === '' && featuredNews && (
          <div 
            onClick={() => setSelectedNews(featuredNews)}
            className="mb-12 group bg-white border border-slate-200 hover:border-gold-500/20 rounded-3xl overflow-hidden cursor-pointer grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="lg:col-span-7 bg-gradient-to-br from-slate-50/50 to-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-display font-black tracking-widest bg-gold-500 text-slate-950 px-2.5 py-1 rounded-md uppercase">
                  {lang === 'UZ' ? 'Eng so\'nggi xabar' : lang === 'RU' ? 'Важное сегодня' : 'Featured Story'}
                </span>
                <div className="flex items-center space-x-2 text-xs text-slate-500 font-display">
                  <Calendar size={13} className="text-gold-600" />
                  <span>{featuredNews.date}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>2 min read</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-extrabold text-slate-900 leading-tight group-hover:text-gold-650 transition-colors duration-300">
                  {featuredNews.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {featuredNews.description}
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-2 text-xs font-display font-bold text-gold-600 group-hover:text-gold-500 transition-colors">
                <span>{lang === 'UZ' ? 'Batafsil o\'qish' : lang === 'RU' ? 'Читать полностью' : 'Read Article Details'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto min-h-[220px] bg-slate-100 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-white/10 to-white/80 z-10" />
              {/* Geometric pattern instead of standard banner */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.06)_0,transparent_100%)] animate-pulse-slow" />
              <div className="relative z-20 text-center p-6 flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gold-600 mb-3 group-hover:scale-105 transition-transform shadow-xs">
                  <Newspaper size={28} />
                </div>
                <span className="font-serif text-sm font-bold text-slate-700 tracking-wider">TASHKENT CITY MALL TV</span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="news-articles-grid">
          {filteredNews.slice(searchTerm === '' ? 1 : 0).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="group bg-white border border-slate-200 hover:border-gold-500/25 p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between hover:shadow-md transform hover:-translate-y-0.5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-display">
                  <Calendar size={12} className="text-gold-600" />
                  <span>{item.date}</span>
                </div>
                
                <h4 className="text-slate-900 font-serif font-bold text-base line-clamp-2 leading-snug group-hover:text-gold-650 transition-colors duration-300">
                  {item.title}
                </h4>
                
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-display font-medium text-slate-500 group-hover:text-gold-600 transition-colors">
                <span>{lang === 'UZ' ? 'Yangiliklar' : lang === 'RU' ? 'Новости' : 'Press Release'}</span>
                <span className="flex items-center space-x-0.5 group-hover:underline">
                  <span>{lang === 'UZ' ? 'Ko\'rish' : lang === 'RU' ? 'Смотреть' : 'View'}</span>
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}

          {filteredNews.length === 0 && (
            <div className="col-span-full py-12 text-center text-xs sm:text-sm text-slate-500 font-display font-semibold">
              {lang === 'UZ' ? 'Mutanosib yangiliklar topilmadi.' : lang === 'RU' ? 'Новости по запросу не найдены.' : 'No news articles match your query.'}
            </div>
          )}
        </div>

        {/* Detailed News dialog modal popup box */}
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in" id="news-details-modal">
            <div className="bg-white border border-slate-202 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-scale-up">
              
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-505 hover:text-slate-900 rounded-full transition-colors z-10 cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="space-y-4">
                
                <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs text-gold-700 font-display font-bold uppercase tracking-wider bg-gold-400/10 border border-gold-500/20 py-1 px-2.5 rounded-lg">
                  <Newspaper size={12} className="mr-0.5" />
                  <span>{lang === 'UZ' ? 'Matbuot xizmati' : lang === 'RU' ? 'Пресс-релиз' : 'Official Press'}</span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-500 font-display">
                  <Calendar size={13} className="text-gold-600 animate-pulse" />
                  <span className="font-semibold">{selectedNews.date}</span>
                  <span>•</span>
                  <span>Source: Tashkent City Mall Management</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-extrabold text-slate-900 leading-snug pt-1">
                  {selectedNews.title}
                </h3>

                <div className="h-[1px] bg-slate-150 my-4" />

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans whitespace-pre-line p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  {selectedNews.description}
                </p>

                <div className="pt-4 flex items-center justify-between text-xs text-slate-500 font-display border-t border-slate-150">
                  <span className="flex items-center animate-pulse">
                    🏢 Verification Code: TCM-{selectedNews.id.toUpperCase()}
                  </span>
                  <button 
                    onClick={() => setSelectedNews(null)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    {lang === 'UZ' ? 'Yopish' : lang === 'RU' ? 'Закрыть' : 'Dismiss'}
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
