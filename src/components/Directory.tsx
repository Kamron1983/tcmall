/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SHOPS, MOCK_REVIEWS } from '../data';
import { Shop, Review } from '../types';
import { Search, Sparkles, Star, Phone, Globe, Clock, MessageSquare, X, CornerDownRight, Play } from 'lucide-react';

interface DirectoryProps {
  lang: 'UZ' | 'RU' | 'EN';
  selectedShop: Shop | null;
  setSelectedShop: (shop: Shop | null) => void;
}

export default function Directory({ lang, selectedShop, setSelectedShop }: DirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFloorFilter, setActiveFloorFilter] = useState<string>('all');
  const [reviewsByShop, setReviewsByShop] = useState<Record<string, Review[]>>({});
  
  // Custom new review state
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewSubmitMessage, setReviewSubmitMessage] = useState('');

  const categories = [
    { id: 'all', uz: 'Barchasi', ru: 'Все категории', en: 'All' },
    { id: 'fashion', uz: 'Kiyim & Moda', ru: 'Одежда и Мода', en: 'Fashion & Apparel' },
    { id: 'tech', uz: 'Texnologiya', ru: 'Техника', en: 'Technology' },
    { id: 'food', uz: 'Kafe & Restoran', ru: 'Кафе и Рестораны', en: 'Food & Drinks' },
    { id: 'entertainment', uz: 'Ko\'ngilochar', ru: 'Развлечения', en: 'Entertainment' },
    { id: 'kids', uz: 'Bolalar uchun', ru: 'Детский мир', en: 'Kids Land' },
    { id: 'services', uz: 'Xizmatlar', ru: 'Услуги и Банк', en: 'Services' },
  ];

  // Filtering logic
  const filteredShops = SHOPS.filter((shop) => {
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          shop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || shop.category === activeCategory;
    
    let matchesFloor = true;
    if (activeFloorFilter !== 'all') {
      matchesFloor = shop.floor.toString() === activeFloorFilter;
    }

    return matchesSearch && matchesCategory && matchesFloor;
  });

  // Get or initialize reviews for current shop
  const getReviewsForShop = (shopId: string): Review[] => {
    if (reviewsByShop[shopId]) {
      return reviewsByShop[shopId];
    }
    // Return universal mock reviews initially
    return MOCK_REVIEWS;
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedShop) return;
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) {
      setReviewSubmitMessage(
        lang === 'UZ' 
          ? 'Iltimos, ismingiz va fikringizni yozing!' 
          : lang === 'RU' 
            ? 'Пожалуйста, заполните имя и отзыв!' 
            : 'Please enter your name and comment!'
      );
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      userName: newReviewAuthor,
      rating: newReviewRating,
      comment: newReviewComment,
      date: lang === 'UZ' ? 'Hozigina' : lang === 'RU' ? 'Только что' : 'Just now'
    };

    const currentShopReviews = getReviewsForShop(selectedShop.id);
    setReviewsByShop({
      ...reviewsByShop,
      [selectedShop.id]: [newReview, ...currentShopReviews]
    });

    setNewReviewAuthor('');
    setNewReviewComment('');
    setNewReviewRating(5);
    setReviewSubmitMessage(
      lang === 'UZ' 
        ? 'Tashakkur! Fikringiz qabul qilindi.' 
        : lang === 'RU' 
          ? 'Спасибо! Ваш отзыв добавлен.' 
          : 'Thank you! Your feedback has been accepted.'
    );
    
    setTimeout(() => {
      setReviewSubmitMessage('');
    }, 4000);
  };

  return (
    <section id="shops" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-gold-600 text-sm font-display tracking-wider uppercase mb-3">
              <Sparkles size={16} />
              <span>{lang === 'UZ' ? 'BRENDLAR KATALOGI' : lang === 'RU' ? 'КАТАЛОГ БРЕНДОВ' : 'BRANDS CATALOGUE'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'UZ' ? 'Do\'konlar va Xizmatlar' : lang === 'RU' ? 'Магазины и Услуги' : 'Shops & Services'}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {lang === 'UZ' 
                ? 'Tashkent City Mall hududidagi barcha jahon va milliy brendlar bilan tanishing' 
                : lang === 'RU' 
                  ? 'Познакомьтесь со всеми мировыми и национальными брендами в торговом центре'
                  : 'Explore all world-famous and local brands inside Tashkent City Mall'}
            </p>
          </div>

          {/* Floor selection filters for catalog */}
          <div className="flex bg-slate-50 border border-slate-202 p-1.5 rounded-2xl flex-wrap gap-1" id="shops-floor-bar">
            {['all', '0', '1', '2', '4'].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFloorFilter(f)}
                className={`px-3 py-2 rounded-xl text-xs font-display font-semibold transition-all duration-300 cursor-pointer ${
                  activeFloorFilter === f
                    ? 'bg-gold-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {f === 'all' 
                  ? (lang === 'UZ' ? 'Hamma Qavat' : lang === 'RU' ? 'Все этажи' : 'All Floors')
                  : (lang === 'UZ' ? `${f}-qavat` : lang === 'RU' ? `${f}-этаж` : `Floor ${f}`)
                }
              </button>
            ))}
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-6 mb-10" id="shops-search-filter-container">
          
          {/* Search box row */}
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder={lang === 'UZ' ? 'Do\'kon nomini yozing (masalan, Zara, Korzinka)...' : lang === 'RU' ? 'Поиск магазина (например, Zara)...' : 'Search shops (e.g., Zara, Korzinka)...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-white rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-gold-500 transition-colors duration-200 placeholder-slate-500 font-sans"
              id="shops-search-input"
            />
          </div>

          {/* Scrollable Categories List */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-thin" id="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-4.5 rounded-full text-xs font-display font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-850'
                }`}
              >
                {lang === 'UZ' ? cat.uz : lang === 'RU' ? cat.ru : cat.en}
              </button>
            ))}
          </div>

        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="shops-grid">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop) => (
              <div
                key={shop.id}
                onClick={() => setSelectedShop(shop)}
                id={`shop-card-${shop.id}`}
                className="group bg-white rounded-2xl border border-slate-200/70 hover:border-gold-500/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full transform hover:-translate-y-1 shadow-sm hover:shadow-md select-none"
              >
                
                {/* Card Banner Image of Brand */}
                {shop.image && (
                  <div className="h-44 w-full overflow-hidden relative border-b border-slate-150 shrink-0">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-black/10" />
                    
                    {/* Floating Level & Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-display font-bold uppercase tracking-wider text-slate-900 bg-white/95 border border-slate-200 py-1 px-2.5 rounded-md backdrop-blur-sm shadow-xs">
                        {lang === 'UZ' 
                          ? categories.find((c) => c.id === shop.category)?.uz 
                          : lang === 'RU' 
                            ? categories.find((c) => c.id === shop.category)?.ru 
                            : categories.find((c) => c.id === shop.category)?.en}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center space-x-1.5 text-xs text-white bg-slate-900/80 hover:bg-slate-800 py-1 px-2 rounded-md font-display font-bold backdrop-blur-sm">
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      <span>{shop.rating}</span>
                    </div>
                  </div>
                )}

                {/* Main Shop Detail Block */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="h-10 w-10 min-w-[40px] rounded-xl bg-slate-50 border border-slate-205 font-display font-extrabold text-xs flex items-center justify-center text-slate-850 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300 shadow-xs">
                        {shop.logo}
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-bold group-hover:text-amber-800 transition-colors uppercase text-sm leading-tight">
                          {shop.name}
                        </h3>
                        <p className="text-[10px] font-display text-slate-500 uppercase mt-0.5 tracking-wider">
                          {shop.floor === 0 
                            ? (lang === 'UZ' ? '0-Qavat (Ground)' : lang === 'RU' ? '0-Этаж (Цоколь)' : 'Ground Floor') 
                            : (lang === 'UZ' ? `${shop.floor}-qavat` : lang === 'RU' ? `${shop.floor}-этаж` : `Floor ${shop.floor}`)}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-650 text-xs line-clamp-2 leading-relaxed h-8">
                      {shop.description}
                    </p>
                  </div>

                  {/* Actions / Info footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-slate-550">
                      <Clock size={12} className="text-slate-400" />
                      <span>{shop.workingHours}</span>
                    </div>

                    <button className="text-xs font-display font-semibold text-slate-600 group-hover:text-amber-800 transition-colors flex items-center justify-center cursor-pointer">
                      {lang === 'UZ' ? 'Batafsil' : lang === 'RU' ? 'Подробнее' : 'Details'}
                      <Play size={8} className="ml-1 fill-current hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center" id="no-search-results">
              <p className="text-slate-500 font-sans text-lg">
                {lang === 'UZ' ? 'Ushbu kalit bo\'yicha birorta do\'kon topilmadi.' : lang === 'RU' ? 'Магазины не найдены по вашему запросу.' : 'No shops found matching your search query.'}
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); setActiveFloorFilter('all'); }}
                className="mt-4 px-5 py-2.5 bg-slate-100 text-amber-850 border border-slate-205 hover:bg-slate-200 transition-colors rounded-xl font-display text-sm font-semibold whitespace-nowrap cursor-pointer"
              >
                {lang === 'UZ' ? 'Filtrlarni tozalash' : lang === 'RU' ? 'Сбросить фильтры' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>

        {/* Stateful Detailed Shop Modal Section */}
        {selectedShop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-md animate-fade-in" id="shop-details-modal">
            
            {/* Modal Box */}
            <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              {/* Close pin */}
              <button
                onClick={() => { setSelectedShop(null); setReviewSubmitMessage(''); }}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-colors z-10 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Modal Banner Area */}
              {selectedShop.image && (
                <div className="h-52 w-full overflow-hidden relative border-b border-slate-200 shrink-0">
                  <img
                    src={selectedShop.image}
                    alt={selectedShop.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-85" />
                </div>
              )}

              <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/60">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
                  <div className="h-16 w-16 bg-white border-2 border-slate-200 font-display font-black text-xl text-gold-600 flex items-center justify-center rounded-2xl shrink-0 shadow-sm">
                    {selectedShop.logo}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-2xl font-serif font-bold text-slate-900 uppercase">{selectedShop.name}</h2>
                      {selectedShop.featured && (
                        <span className="bg-amber-100 text-amber-700 text-[9px] font-display uppercase tracking-widest font-extrabold border border-amber-200 px-2 py-0.5 rounded-md">
                          Premium
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-slate-500 capitalize mt-1 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-gold-500 mr-2" />
                      {lang === 'UZ' 
                        ? categories.find((c) => c.id === selectedShop.category)?.uz 
                        : lang === 'RU' 
                          ? categories.find((c) => c.id === selectedShop.category)?.ru 
                          : categories.find((c) => c.id === selectedShop.category)?.en}
                      <span className="mx-2 text-slate-300">|</span>
                      {selectedShop.floor === 0 
                        ? (lang === 'UZ' ? '0-Qavat (Supermarket)' : lang === 'RU' ? '0-Этаж (Супермаркет)' : 'Ground Floor') 
                        : (lang === 'UZ' ? `${selectedShop.floor}-qavat` : lang === 'RU' ? `${selectedShop.floor}-этаж` : `Floor ${selectedShop.floor}`)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs text-slate-400 uppercase tracking-wider font-display font-bold mb-2">
                    {lang === 'UZ' ? 'Brend haqida maqola' : lang === 'RU' ? 'О бренде' : 'About BRAND'}
                  </h4>
                  <div className="p-4.5 bg-slate-50 border border-slate-150 rounded-2xl">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {selectedShop.description}
                    </p>
                  </div>
                </div>

                {/* Contact information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 border border-slate-200 rounded-2xl">
                  
                  <div className="flex items-center space-x-3 text-slate-700 text-sm">
                    <Clock size={16} className="text-gold-600 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">{lang === 'UZ' ? 'Ish vaqti' : lang === 'RU' ? 'Часы работы' : 'Hours'}</p>
                      <p className="font-semibold text-slate-800">{selectedShop.workingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-slate-700 text-sm">
                    <Phone size={16} className="text-gold-600 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">{lang === 'UZ' ? 'Telefon' : lang === 'RU' ? 'Телефон' : 'Phone'}</p>
                      <a href={`tel:${selectedShop.phone}`} className="font-semibold text-slate-800 hover:text-gold-600 transition-colors">
                        {selectedShop.phone}
                      </a>
                    </div>
                  </div>

                  {selectedShop.website && (
                    <div className="flex items-center space-x-3 text-slate-700 text-sm sm:col-span-2 border-t border-slate-200 pt-3 mt-1">
                      <Globe size={16} className="text-gold-600 shrink-0" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase">{lang === 'UZ' ? 'Veb-sayt' : lang === 'RU' ? 'Веб-сайт' : 'Website'}</p>
                        <a 
                          href={selectedShop.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          referrerPolicy="no-referrer"
                          className="font-semibold text-gold-600 hover:text-gold-500 transition-colors break-all"
                        >
                          {selectedShop.website}
                        </a>
                      </div>
                    </div>
                  )}

                </div>

                {/* Sub-Interactive Reviews section */}
                <div className="border-t border-slate-200 pt-6">
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MessageSquare size={16} className="text-gold-600" />
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
                        {lang === 'UZ' ? 'Tashrif buyuruvchilar fikri' : lang === 'RU' ? 'Отзывы посетителей' : 'Visitor Reviews'}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-1 font-bold text-slate-700 text-sm bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      <span>{selectedShop.rating}</span>
                    </div>
                  </div>

                  {/* Comments scroll area */}
                  <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-2 mb-6 shadow-inner rounded-xl" id="modal-reviews-list">
                    {getReviewsForShop(selectedShop.id).map((rev) => (
                      <div key={rev.id} className="bg-slate-50 p-4 border border-slate-150 rounded-xl space-y-1.5 text-xs sm:text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-800">{rev.userName}</span>
                          <div className="flex items-center space-x-1.5 text-slate-500 font-mono text-xs">
                            <Star size={12} className="fill-amber-400 text-amber-400" />
                            <span>{rev.rating}</span>
                            <span>•</span>
                            <span className="text-[10px]">{rev.date}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed italic">"{rev.comment}"</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Form */}
                  <form onSubmit={handleAddReview} className="bg-slate-50 p-4.5 border border-slate-150 rounded-2xl space-y-3.5">
                    <h5 className="text-slate-800 text-xs font-bold font-display uppercase tracking-wider">
                      {lang === 'UZ' ? 'Shaxsiy fikringizni yozib qoldiring' : lang === 'RU' ? 'Оставить свой отзыв' : 'Leave your feedback'}
                    </h5>

                    {reviewSubmitMessage && (
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl font-medium">
                        {reviewSubmitMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500 uppercase tracking-wide font-display font-medium">
                          {lang === 'UZ' ? 'Ismingiz' : lang === 'RU' ? 'Ваше имя' : 'Your name'}
                        </label>
                        <input
                           type="text"
                           required
                           placeholder={lang === 'UZ' ? 'Ism sharifingiz' : lang === 'RU' ? 'Ваше имя' : 'Your Name'}
                           value={newReviewAuthor}
                           onChange={(e) => setNewReviewAuthor(e.target.value)}
                           className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-gold-600"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500 uppercase tracking-wide font-display font-medium">
                          {lang === 'UZ' ? 'Sifat bahosi' : lang === 'RU' ? 'Оценка качества' : 'Rating Score'}
                        </label>
                        <select
                          value={newReviewRating}
                          onChange={(e) => setNewReviewRating(Number(e.target.value))}
                          className="w-full bg-white border border-slate-200 text-gold-600 rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:border-gold-500 font-bold cursor-pointer"
                        >
                          <option value="5">⭐⭐⭐⭐⭐ (5 / 5)</option>
                          <option value="4">⭐⭐⭐⭐ (4 / 5)</option>
                          <option value="3">⭐⭐⭐ (3 / 5)</option>
                          <option value="2">⭐⭐ (2 / 5)</option>
                          <option value="1">⭐ (1 / 5)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase tracking-wide font-display font-medium">
                        {lang === 'UZ' ? 'Fikr-mulohaza' : lang === 'RU' ? 'Отзыв' : 'Your review'}
                      </label>
                      <textarea
                        required
                        placeholder={lang === 'UZ' ? 'Ushbu do\'kon xizmatlari sizga yoqdimi? Nimalarni yaxshilasa bo\'ladi...' : lang === 'RU' ? 'Чем вам понравился этот магазин?' : 'Did you like this brand? What could be improved?...'}
                        rows={2}
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-gold-500 placeholder-slate-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 py-3 rounded-xl text-xs font-display font-bold uppercase transition-all duration-300 shadow-md cursor-pointer"
                    >
                      {lang === 'UZ' ? 'Fikrni yuborish' : lang === 'RU' ? 'Отправить отзыв' : 'Submit Review'}
                    </button>
                  </form>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
