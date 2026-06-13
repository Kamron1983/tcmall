/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MOVIES } from '../data';
import { Movie } from '../types';
import { Clapperboard, Star, Calendar, Armchair, CheckCircle2, QrCode, Ticket, X } from 'lucide-react';

interface CinemaSectionProps {
  lang: 'UZ' | 'RU' | 'EN';
}

export default function CinemaSection({ lang }: CinemaSectionProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeDay, setActiveDay] = useState<'today' | 'tomorrow'>('today');
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const ticketPrice = 65000; // 65,000 UZS standard premium ticket in Tashkent City Mall

  // Reset booking state
  const resetBooking = () => {
    setSelectedShowtime(null);
    setSelectedSeats([]);
    setBookingConfirmed(false);
    setBookingCode('');
  };

  const handleMovieOpen = (movie: Movie) => {
    setSelectedMovie(movie);
    resetBooking();
  };

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleConfirmBooking = () => {
    if (!selectedShowtime || selectedSeats.length === 0) return;
    
    // Generate a random booking code
    const randomCode = 'TCM-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomCode);
    setBookingConfirmed(true);
  };

  // Check if a seat is "occupied" (mocking occupied states based on seat index or coordinates)
  const isOccupiedMock = (row: string, col: number) => {
    const seatId = `${row}-${col}`;
    // Simple deterministic occupied pattern
    return (seatId.charCodeAt(0) + col) % 3 === 0;
  };

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const columns = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section id="cinema" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-gold-600 text-sm font-display tracking-widest uppercase mb-3">
            <Clapperboard size={16} />
            <span>CINEMATICA IMAX MULTIPLEX</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'UZ' ? 'Hozirgi premyera va kinolar' : lang === 'RU' ? 'Премьеры в кинотеатрах' : 'Now Playing & Premieres'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'UZ'
              ? 'Tashkent City Malldagi eng ulkan va zamonaviy kinoteatrimizda Dolby Atmos sifatidagi eng so\'nggi premyeralardan bahramand bo\'ling va qulay o\'rindiqlarni o\'z joyida bron qiling!'
              : lang === 'RU'
                ? 'Наслаждайтесь новейшими фильмами в формате IMAX в нашем кинотеатре Dolby Atmos. Бронируйте любимые места прямо на интерактивной схеме.'
                : 'Experience the latest cinematic releases under crystal-clear sound and fully premium comfortable seating inside Tashkent City Mall multiplex. Reserve your tickets instantly online!'}
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="cinema-movies-grid">
          {MOVIES.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieOpen(movie)}
              id={`movie-card-${movie.id}`}
              className="group bg-slate-50 rounded-2xl border border-slate-200/70 overflow-hidden cursor-pointer hover:border-gold-500/20 transition-all duration-300 transform hover:-translate-y-1 block shadow-md flex flex-col h-full select-none"
            >
              {/* Image wrap */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-60 z-10" />
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Score badge */}
                <span className="absolute top-4 right-4 bg-white/95 border border-slate-201 px-2 py-1 rounded-lg text-xs font-bold text-gold-600 font-display flex items-center space-x-1 z-20 shadow-xs">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  <span>{movie.ratingScore}</span>
                </span>

                {/* Genres */}
                <span className="absolute bottom-4 left-4 text-[11px] font-display font-semibold uppercase tracking-wide text-slate-800 bg-white/95 px-2.5 py-1 rounded-md border border-slate-205 z-20 shadow-xs">
                  {movie.genre}
                </span>
              </div>

              {/* Title descriptions */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-slate-900 font-serif font-bold text-lg leading-snug group-hover:text-amber-805 transition-colors">
                    {movie.title}
                  </h3>
                  
                  <div className="flex items-center space-x-3 mt-2 text-slate-500 text-xs font-display">
                    <span>{movie.duration}</span>
                    <span>•</span>
                    <span className="bg-slate-100 py-0.5 px-2.5 border border-slate-202 rounded-md text-[10px] font-mono font-bold text-slate-600">
                      {movie.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  {/* Lang support */}
                  <div className="flex space-x-1.5" id="movie-lang-badges">
                    {movie.languages.map((lng) => (
                      <span key={lng} className="bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold font-mono py-0.5 px-1.5 rounded">
                        {lng}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-display font-medium text-gold-600 group-hover:underline">
                    {lang === 'UZ' ? 'Seanslar & Chipta' : lang === 'RU' ? 'Купить билет' : 'Showtimes & Tickets'}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Cinematic Booking Seat Overlay Overlay */}
        {selectedMovie && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md overflow-y-auto animate-fade-in" id="cinema-booking-modal">
            
            <div className="bg-white border border-slate-202 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col lg:flex-row">
              
              {/* Close pin button */}
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-colors z-20 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* L-SIDE: Film details & poster */}
              <div className="lg:w-2/5 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-150">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
                    <img src={selectedMovie.image} alt={selectedMovie.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 bg-gold-400 text-slate-950 text-[10px] font-display font-bold px-2 py-0.5 rounded-lg border border-gold-300">
                      IMAX 3D
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-extrabold text-slate-900">{selectedMovie.title}</h3>
                    <p className="text-xs text-slate-500 font-display mt-1">{selectedMovie.genre} | {selectedMovie.duration}</p>
                    
                    {/* Unofficial Simulation disclaimer banner */}
                    <div className="mt-3 p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-[10px] leading-relaxed rounded-xl font-medium font-sans">
                      {lang === 'UZ' 
                        ? '🔴 DIQQAT: Sayt norasmiydir. Bilet sotib olish simulyatsiya qilingan (haqiqiy to\'lov yoki bilet berilmaydi).' 
                        : lang === 'RU' 
                          ? '🔴 ВНИМАНИЕ: Сайт неофициальный. Покупка билетов имитируется, реальная оплата не производится.' 
                          : '🔴 DISCLAIMER: Unofficial concept site. Ticket purchases are simulated only (no actual payment needed/processed).'}
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-700 shadow-3xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'UZ' ? 'Kino zali:' : lang === 'RU' ? 'Кинозал:' : 'Screen / Room:'}</span>
                      <span className="text-slate-805 font-semibold">TCM Premium Hall (Zal-3)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'UZ' ? 'Chipta narxi:' : lang === 'RU' ? 'Цена билета:' : 'Ticket Price:'}</span>
                      <span className="text-slate-805 font-semibold">65 000 UZS ({lang === 'UZ' ? 'bitta o\'rindiq' : lang === 'RU' ? 'за место' : 'per seat'})</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 text-slate-500 text-xs space-y-2">
                  <p>• {lang === 'UZ' ? 'Bron qilingan chiptani seans boshlanishidan 20 daqiqa oldin kassadan oling.' : lang === 'RU' ? 'Пожалуйста, выкупите забронированные билеты за 20 минут до начала сеанса.' : 'Please claim and purchase your reserved tickets at the box office 20 minutes before showtime.'}</p>
                  <p>• {lang === 'UZ' ? 'Kinoteatr yosh filtrlariga rioya qiling!' : lang === 'RU' ? 'Соблюдайте правила возрастного ограничения кинозала.' : 'Adhere strictly to rating and age restrictions defined for this projection.'}</p>
                </div>
              </div>

              {/* R-SIDE: Dynamic Seat selectors, Day toggle, Confirm receipt */}
              <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between" id="cinema-booking-selector-pane">
                
                {!bookingConfirmed ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-slate-900 font-bold font-display text-sm uppercase tracking-wider mb-3">
                        {lang === 'UZ' ? '1. Seans kunini tanlang' : lang === 'RU' ? '1. Выберите день сеанса' : '1. Select Show Date'}
                      </h4>
                      <div className="flex space-x-2.5">
                        <button
                          onClick={() => { setActiveDay('today'); setSelectedShowtime(null); setSelectedSeats([]); }}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-display font-semibold transition-all duration-200 cursor-pointer ${
                            activeDay === 'today'
                              ? 'bg-gold-500 text-slate-950 border-gold-500 shadow-xs font-bold'
                              : 'bg-white border-slate-205 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {lang === 'UZ' ? 'Bugun ' : lang === 'RU' ? 'Сегодня ' : 'Today '} ({(new Date()).toLocaleDateString(lang === 'UZ' ? 'uz-UZ' : lang === 'RU' ? 'ru-RU' : 'en-US', { day: 'numeric', month: 'short' })})
                        </button>
                        <button
                          onClick={() => { setActiveDay('tomorrow'); setSelectedShowtime(null); setSelectedSeats([]); }}
                          className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-display font-semibold transition-all duration-200 cursor-pointer ${
                            activeDay === 'tomorrow'
                              ? 'bg-gold-500 text-slate-950 border-gold-500 shadow-xs font-bold'
                              : 'bg-white border-slate-205 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {lang === 'UZ' ? 'Ertaga ' : lang === 'RU' ? 'Завтра ' : 'Tomorrow '} ({new Date(Date.now() + 86400000).toLocaleDateString(lang === 'UZ' ? 'uz-UZ' : lang === 'RU' ? 'ru-RU' : 'en-US', { day: 'numeric', month: 'short' })})
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-slate-900 font-bold font-display text-sm uppercase tracking-wider mb-3">
                        {lang === 'UZ' ? '2. Seans vaqtini tanlang' : lang === 'RU' ? '2. Выберите время сеанса' : '2. Select Show Time'}
                      </h4>
                      <div className="flex flex-wrap gap-2" id="cinema-booking-times">
                        {selectedMovie.showtimesByDay[activeDay].map((time) => (
                          <button
                            key={time}
                            onClick={() => { setSelectedShowtime(time); setSelectedSeats([]); }}
                            className={`px-3.5 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                              selectedShowtime === time
                                ? 'bg-slate-900 text-white border-slate-900 font-extrabold shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedShowtime && (
                      <div className="animate-fade-in space-y-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <h4 className="text-slate-900 font-bold font-display text-sm uppercase tracking-wider">
                            {lang === 'UZ' ? '3. O\'rindiqlarni tanlang' : lang === 'RU' ? '3. Выберите места в зале' : '3. Choose Seats'}
                          </h4>
                          
                          {/* Legend triggers */}
                          <div className="flex items-center space-x-3.5 text-[10px] sm:text-xs">
                            <div className="flex items-center space-x-1">
                              <span className="h-3 w-3 bg-slate-100 border border-slate-200 rounded" />
                              <span className="text-slate-550">{lang === 'UZ' ? 'Ochiq' : lang === 'RU' ? 'Свободно' : 'Open'}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="h-3 w-3 bg-rose-100 border border-rose-200 rounded animate-none" />
                              <span className="text-slate-550">{lang === 'UZ' ? 'Band' : lang === 'RU' ? 'Занято' : 'Taken'}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="h-3 w-3 bg-gold-400 rounded" />
                              <span className="text-slate-550">{lang === 'UZ' ? 'Tanlandi' : lang === 'RU' ? 'Выбрано' : 'Selected'}</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive screen schematic mapping arch */}
                        <div className="bg-slate-50 border border-slate-150 p-4 sm:p-6 rounded-2xl flex flex-col items-center">
                          
                          {/* Curved cinema Screen */}
                          <div className="w-5/6 h-2 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-full shadow-[0_2px_8px_rgba(212,149,38,0.15)] mb-8 flex items-center justify-center">
                            <span className="text-[8px] tracking-[0.6em] text-slate-800 font-display font-extrabold uppercase -mt-0.5">
                              {lang === 'UZ' ? 'EKRAN' : lang === 'RU' ? 'ЭКРАН' : 'CINEMA SCREEN'}
                            </span>
                          </div>

                          {/* Seating Grid */}
                          <div className="grid grid-cols-10 gap-1.5 w-full max-w-sm" id="cinema-seating-grid">
                            {rows.map((row) =>
                              columns.map((col) => {
                                const seatId = `${row}-${col}`;
                                const occupied = isOccupiedMock(row, col);
                                const selected = selectedSeats.includes(seatId);

                                return (
                                  <button
                                    key={seatId}
                                    disabled={occupied}
                                    onClick={() => handleSeatClick(seatId)}
                                    id={`cinema-seat-${seatId}`}
                                    className={`relative aspect-square rounded text-[8px] sm:text-[9px] font-semibold flex items-center justify-center transition-all ${
                                      occupied
                                        ? 'bg-rose-50 text-rose-300 cursor-not-allowed border border-rose-100/50 shadow-inner'
                                        : selected
                                        ? 'bg-gold-400 text-slate-950 font-black'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 cursor-pointer'
                                    }`}
                                    title={`Row ${row}, Col ${col}`}
                                  >
                                    {row}{col}
                                  </button>
                                );
                              })
                            )}
                          </div>

                        </div>

                        {/* Seats select counts summary */}
                        {selectedSeats.length > 0 && (
                          <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex items-center justify-between text-xs sm:text-sm">
                            <div className="space-y-1">
                              <p className="text-slate-500">
                                {lang === 'UZ' ? 'Tanlangan o\'rindiqlar:' : lang === 'RU' ? 'Выбранные места:' : 'Selected Seats:'}
                              </p>
                              <p className="font-mono text-slate-900 font-bold tracking-wider">
                                {selectedSeats.join(', ')}
                              </p>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="text-slate-505">
                                {lang === 'UZ' ? 'Jami summa:' : lang === 'RU' ? 'Общая стоимость:' : 'Total Cost:'}
                              </p>
                              <p className="font-display font-extrabold text-gold-600 text-base">
                                {(selectedSeats.length * ticketPrice).toLocaleString('uz-UZ')} UZS
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Submit confirm trigger */}
                    <button
                      disabled={!selectedShowtime || selectedSeats.length === 0}
                      onClick={handleConfirmBooking}
                      className={`w-full py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                        selectedShowtime && selectedSeats.length > 0
                          ? 'bg-gold-500 hover:bg-gold-400 text-slate-950 font-black shadow-md cursor-pointer'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                      id="cinema-booking-submit"
                    >
                      {lang === 'UZ' ? 'CHIPTA BAND QILISH' : lang === 'RU' ? 'ЗАБРОНИРОВАТЬ БИЛЕТЫ' : 'BOOK TICKETS NOW'}
                    </button>
                  </div>
                ) : (
                  // Elegant Confirm Virtual Receipt Block
                  <div className="p-4 sm:p-6 bg-slate-50 border border-emerald-500/10 rounded-3xl space-y-6 text-center animate-fade-in flex flex-col items-center justify-center h-full">
                    
                    <div className="bg-emerald-500/10 p-4 border border-emerald-500/20 text-emerald-600 rounded-full">
                      <CheckCircle2 size={36} className="animate-pulse" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-emerald-600 font-display font-bold text-lg uppercase">
                        {lang === 'UZ' ? 'CHIPTA BAND QILINDI!' : lang === 'RU' ? 'БРОНЬ ПОДТВЕРЖДЕНА!' : 'RESERVATION CONFIRMED!'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {lang === 'UZ' 
                          ? 'Chiptangiz muvaffaqiyatli saqlandi va siz uchun bron etib qo\'yildi.' 
                          : lang === 'RU'
                            ? 'Ваш электронный билет сгенерирован и зарезервирован.'
                            : 'Your electronic ticket reservation was successfully stored.'}
                      </p>
                    </div>

                    {/* Virtual Ticket Pass Card decoration layout */}
                    <div className="w-full max-w-sm bg-gradient-to-b from-white via-white to-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden text-left shadow-md">
                      
                      <div className="bg-gold-500/10 p-4 border-b border-dashed border-slate-200 flex justify-between items-center">
                        <span className="font-serif text-sm font-extrabold text-slate-850 tracking-widest uppercase">
                          TCM IMAX TICKET
                        </span>
                        <Ticket size={16} className="text-gold-600" />
                      </div>

                      <div className="p-5 space-y-4 text-xs sm:text-sm text-slate-755">
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase font-display">{lang === 'UZ' ? 'Film nomi' : lang === 'RU' ? 'Фильм' : 'Movie Title'}</p>
                          <p className="text-slate-900 font-serif font-bold text-base leading-none mt-1">{selectedMovie.title}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase font-display">{lang === 'UZ' ? 'Kuni va vaqti' : lang === 'RU' ? 'День и Сеанс' : 'Date & Time'}</p>
                            <p className="text-slate-905 font-bold mt-1">
                              {activeDay === 'today' ? (lang === 'UZ' ? 'Bugun' : lang === 'RU' ? 'Сегодня' : 'Today') : (lang === 'UZ' ? 'Ertaga' : lang === 'RU' ? 'Завтра' : 'Tomorrow')} • {selectedShowtime}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase font-display">{lang === 'UZ' ? 'O\'rindiqlar' : lang === 'RU' ? 'Места' : 'Seats'}</p>
                            <p className="text-slate-905 font-mono font-bold mt-1 tracking-wider">{selectedSeats.join(', ')}</p>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-150 flex justify-between items-center bg-slate-50">
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase">{lang === 'UZ' ? 'Bron kodi' : lang === 'RU' ? 'Код брони' : 'Booking Code'}</p>
                            <p className="text-gold-600 font-mono font-black text-xl tracking-wider">{bookingCode}</p>
                          </div>
                          
                          <QrCode size={40} className="text-slate-600 opacity-80 bg-white p-1 rounded border border-slate-150" />
                        </div>
                      </div>

                    </div>

                    <p className="text-[11px] text-amber-700 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 font-sans leading-relaxed">
                      {lang === 'UZ' 
                        ? `⚠️ DIQQAT: Bu norasmiy simulyatsiya biletidir! Haqiqiy kinoteatrda o'tmaydi. Ushbu kod faqat namunaviy portfel ko'rgazmasi uchun yaratilgan.` 
                        : lang === 'RU'
                          ? `⚠️ ВНИМАНИЕ: Это неофициальный демонстрационный билет! Он не действует в реальном кинотеатре и создан для концепт-демонстрации.`
                          : `⚠️ NOTICE: This is an unofficial simulation ticket! It is invalid at any real cinema and exists solely as a frontend portfolio showcase.`}
                    </p>

                    <button
                      onClick={resetBooking}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-205 rounded-xl text-xs font-display font-bold uppercase transition-colors cursor-pointer"
                    >
                      {lang === 'UZ' ? 'Yangi bilet xarid qilish' : lang === 'RU' ? 'Купить ещё билет' : 'Book Another Ticket'}
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
