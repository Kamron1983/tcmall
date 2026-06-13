/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { EVENTS } from '../data';
import { MallEvent } from '../types';
import { Calendar, MapPin, Clock, Sparkles, X, Gift, CheckCircle } from 'lucide-react';

interface EventsSectionProps {
  lang: 'UZ' | 'RU' | 'EN';
}

export default function EventsSection({ lang }: EventsSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<MallEvent | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [promoCouponCode, setPromoCouponCode] = useState<string | null>(null);

  const handleRegisterEvent = (eventId: string) => {
    if (registeredEvents.includes(eventId)) return;

    // Simulate registration
    setRegisteredEvents([...registeredEvents, eventId]);

    // Generate random dynamic code
    const voucher = 'EV-' + eventId.toUpperCase() + '-' + Math.floor(100 + Math.random() * 900);
    setPromoCouponCode(voucher);
  };

  const isRegistered = (eventId: string) => registeredEvents.includes(eventId);

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'concert': 
        return { label: lang === 'UZ' ? 'Konsert' : lang === 'RU' ? 'Концерт' : 'Concert', style: 'bg-rose-500/10 border-rose-500/20 text-rose-700' };
      case 'kids': 
        return { label: lang === 'UZ' ? 'Bolalar' : lang === 'RU' ? 'Детям' : 'For Kids', style: 'bg-pink-500/10 border-pink-500/20 text-pink-700' };
      case 'masterclass': 
        return { label: lang === 'UZ' ? 'Mahorat darsi' : lang === 'RU' ? 'Мастер-класс' : 'Masterclass', style: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700' };
      case 'promo': 
        return { label: lang === 'UZ' ? 'Aksiya' : lang === 'RU' ? 'Скидки' : 'Special Offer', style: 'bg-amber-500/10 border-amber-500/25 text-amber-850' };
      default: 
        return { label: lang === 'UZ' ? 'Tadbir' : lang === 'RU' ? 'Событие' : 'Event', style: 'bg-blue-500/10 border-blue-500/20 text-blue-700' };
    }
  };

  return (
    <section id="events" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 text-gold-600 text-sm font-display tracking-widest uppercase mb-3">
              <Sparkles size={16} className="animate-pulse" />
              <span>{lang === 'UZ' ? 'TADBIRLAR VA AKSIYALAR' : lang === 'RU' ? 'АКЦИИ И СОБЫТИЯ' : 'EVENTS & SPECIAL DEALS'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'UZ' ? 'Markazdagi qiziqarli hayot' : lang === 'RU' ? 'Яркие события в молле' : 'Exciting Life at the Mall'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {lang === 'UZ' 
                ? 'Bizda har doim qiziqarli! Katta chegirmalar, jonli shou-konsertlar va qiziqarli mahorat darslariga ro\'yxatdan o\'ting'
                : lang === 'RU'
                  ? 'У нас никогда не бывает скучно! Узнайте о грандиозных распродажам, шоу-концертах и зарегистрируйтесь на мастер-классы.'
                  : 'There is always something amazing happening! Register for upcoming high-profile masterclasses, holiday concerts, or redeem exclusive high-saving store discounts.'}
            </p>
          </div>
        </div>

        {/* Events Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="events-grid">
          {EVENTS.map((item) => {
            const catInfo = getCategoryTheme(item.category);
            const registered = isRegistered(item.id);

            return (
              <div
                key={item.id}
                onClick={() => { setSelectedEvent(item); setPromoCouponCode(null); }}
                id={`event-card-${item.id}`}
                className="group bg-slate-50 border border-slate-200 hover:border-gold-500/20 rounded-3xl overflow-hidden cursor-pointer flex flex-col sm:flex-row h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md select-none animate-fade-in"
              >
                {/* Visual Image banner */}
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-l from-slate-50 via-transparent to-transparent z-10 opacity-80" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className={`absolute top-4 left-4 text-[10px] font-display font-bold uppercase tracking-wider py-1 px-2.5 rounded border ${catInfo.style} z-20 shadow-xs`}>
                    {catInfo.label}
                  </span>
                </div>

                {/* Content Details */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Date card overlay */}
                    <div className="flex items-center space-x-2 text-slate-500 text-xs font-display">
                      <Calendar size={13} className="text-gold-600" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-slate-900 font-serif font-bold text-lg leading-snug group-hover:text-amber-805 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-display text-slate-500 truncate max-w-[120px] sm:max-w-none">
                      📍 {item.location}
                    </span>
                    
                    <button className="text-xs font-display font-bold text-gold-600 group-hover:underline pr-1 cursor-pointer">
                      {registered 
                        ? (lang === 'UZ' ? 'Ro\'yxatdan o\'tilgan ✓' : lang === 'RU' ? 'Вы зарегистрированы ✓' : 'Registered ✓') 
                        : (lang === 'UZ' ? 'Ishtirok etish »' : lang === 'RU' ? 'Участвовать »' : 'Participate »')
                      }
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Stateful Event Action Modal Popup Box */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-fade-in" id="event-action-modal">
            
            <div className="bg-white border border-slate-202 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-colors z-10 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                
                <span className={`absolute bottom-4 left-6 text-xs font-display font-bold uppercase tracking-wider py-1 px-2.5 rounded border ${getCategoryTheme(selectedEvent.category).style}`}>
                  {getCategoryTheme(selectedEvent.category).label}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-slate-900 leading-tight">
                    {selectedEvent.title}
                  </h3>
                  
                  {/* Quick timing metadata */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-display">
                    <div className="flex items-center space-x-1">
                      <Calendar size={13} className="text-gold-600" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock size={13} className="text-gold-600" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={13} className="text-gold-600" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-3 font-sans">
                  <h4 className="text-xs text-slate-500 uppercase tracking-wider font-display font-bold">
                    {lang === 'UZ' ? 'Tadbir tavsifi va qoidalari' : lang === 'RU' ? 'Описание события' : 'Event Description & Terms'}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Registration success voucher coupon box */}
                {promoCouponCode && (
                  <div className="p-4.5 bg-slate-50 border border-emerald-500/20 rounded-2xl space-y-2.5 text-center animate-fade-in">
                    <div className="flex items-center justify-center space-x-2 text-emerald-600">
                      <CheckCircle size={18} />
                      <span className="text-xs font-display font-bold uppercase tracking-wide">
                        {lang === 'UZ' ? 'RO\'YXATDAN O\'TILDINGIZ' : lang === 'RU' ? 'РЕГИСТРАЦИЯ УСПЕШНА' : 'REGISTRATION SUCCESSFUL'}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase">{lang === 'UZ' ? 'Sizning elektron taklifnomangiz / kupon kodingiz:' : lang === 'RU' ? 'Код вашего ваучера:' : 'Your Digital Offer/Voucher Code:'}</p>
                      <p className="text-xl font-mono font-black text-gold-600 mt-1 tracking-widest">{promoCouponCode}</p>
                    </div>

                    <p className="text-[10px] text-slate-500 italic font-sans leading-relaxed">
                      {lang === 'UZ' 
                        ? 'Tadbir kuni markaz xodimiga ushbu kupon kodini ko\'rsating. Bepul konsert joylashuviga maxsus o\'tish yo\'lagi ochiladi.'
                        : lang === 'RU'
                          ? 'Предъявите этот промокод на входе или в магазине для получения вашей привилегии в молле.'
                          : 'Show this digital voucher code to the event organizers or participating stores to redeem your exclusive offer.'}
                    </p>
                  </div>
                )}

                {/* Trigger registration button */}
                {!isRegistered(selectedEvent.id) ? (
                  <button
                    onClick={() => handleRegisterEvent(selectedEvent.id)}
                    className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-display font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Gift size={16} />
                    <span>
                      {selectedEvent.category === 'promo'
                        ? (lang === 'UZ' ? 'Chegirma kuponini olish' : lang === 'RU' ? 'Получить промокод' : 'Claim Voucher Offer')
                        : (lang === 'UZ' ? 'Bepul ro\'yxatdan o\'tish' : lang === 'RU' ? 'Зарегистрироваться бесплатно' : 'Get Free Invite Ticket')
                      }
                    </span>
                  </button>
                ) : (
                  !promoCouponCode && (
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-600 font-display font-medium">
                      {lang === 'UZ' ? 'Siz allaqachon ushbu aksiya a\'zosisiz ✓' : lang === 'RU' ? 'Вы уже зарегистрированы на событие ✓' : 'You are already registered ✓'}
                    </div>
                  )
                )}

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
