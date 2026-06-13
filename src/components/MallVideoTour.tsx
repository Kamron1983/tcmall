/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, Film, Calendar, Eye, Sparkles, Tv, RotateCcw, ExternalLink, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

interface MallVideoTourProps {
  lang: 'UZ' | 'RU' | 'EN';
}

const VIDEO_LIST = [
  {
    id: 'vid1',
    youtubeId: 'E_9W66r9HK8', // Walkthrough and grand tour of the mall
    label_uz: 'Moll bo\'ylab sayohat',
    label_ru: 'Видео-обзор молла',
    label_en: 'Interior Architectural Tour',
    duration: '12:45'
  },
  {
    id: 'vid2',
    youtubeId: 'CV8mHzOzYll', // Music fountain show and exterior grand opening
    label_uz: 'Yorqin favvoralar shousi',
    label_ru: 'Шоу поющих фонтанов',
    label_en: 'Musical Fountain Show',
    duration: '5:10'
  },
  {
    id: 'vid3',
    youtubeId: 'R_IK7to05qE', // Grand Opening and brand highlights
    label_uz: 'Katta ochilish marosimi',
    label_ru: 'Грандиозное открытие',
    label_en: 'Grand Opening Highlights',
    duration: '8:30'
  }
];

const GALLERY_LIST = [
  {
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
    title_uz: 'Markaziy Atrium',
    title_ru: 'Центральный Атриум',
    title_en: 'Central Grand Atrium',
    desc_uz: 'Mollning asosiy zalidagi ajoyib oyna gumbaz maydoni va yuqori darajadagi hashamatli dizayni.',
    desc_ru: 'Потрясающий стеклянный купол и праздничное освещение главного зала молла.',
    desc_en: 'Breath-taking central skylight dome highlighting our ultra-modern shopping alleys.'
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    title_uz: 'Musiqiy Rang-barang Favvora',
    title_ru: 'Музыкальный Поющий Фонтан',
    title_en: 'Sync Musical Fountain',
    desc_uz: 'Tashkent City bog\'idagi ajoyib musiqiy va yorug\'lik favvoralari shousi.',
    desc_ru: 'Красочное шоу поющих фонтанов непосредственно перед центральным входом.',
    desc_en: 'Legendary synchronized water dynamic choreography right outside the front plaza.'
  },
  {
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80',
    title_uz: 'Premium Do\'konlar Galereyasi',
    title_ru: 'Галерея Премиум Брендов',
    title_en: 'Elite Fashion Gallery',
    desc_uz: 'Jahon miqyosidagi yetakchi hashamatli modalar va kiyim-kechak do\'konlari shinam ko\'chalari.',
    desc_ru: 'Изысканные дизайнерские улочки ведущих мировых и премиальных брендов.',
    desc_en: 'Stunning designer alleys featuring global luxury brands and fine lifestyle boutiques.'
  },
  {
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    title_uz: 'Cinemax IMAX Premium Zali',
    title_ru: 'Мультиплекс Кинотеатр IMAX',
    title_en: 'Cinemax IMAX Premium Theater',
    desc_uz: 'Eng so\'nggi ovoz tizimi va dunyo andozalariga mos keluvchi dabdabali tomosha zallari.',
    desc_ru: 'Современные лазерные проекторы и премиальные кресла для максимального погружения.',
    desc_en: 'State-of-the-art cinematic IMAX units with custom immersive layout and audio design.'
  }
];

export default function MallVideoTour({ lang }: MallVideoTourProps) {
  const [activeVideo, setActiveVideo] = useState(VIDEO_LIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerMode, setPlayerMode] = useState<'video' | 'gallery'>('video');
  const [galleryIndex, setGalleryIndex] = useState(0);

  const prevSlide = () => {
    setGalleryIndex((prev) => (prev === 0 ? GALLERY_LIST.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setGalleryIndex((prev) => (prev === GALLERY_LIST.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="mall-video-tour" className="py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout grid containing header and player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: text and selection column */}
          <div className="lg:col-span-5 space-y-6 lg:max-w-md">
            <div className="inline-flex items-center space-x-2 text-gold-700 text-sm font-display tracking-widest uppercase">
              <Film size={16} className="text-gold-600 animate-pulse" />
              <span>{lang === 'UZ' ? 'KINO-SAYOHAT • MULTIMEDIALAR' : lang === 'RU' ? 'ВИДЕО ТУР • МУЛЬТИМЕДИА' : 'CINEMATIC TV • VIRTUAL TOUR'}</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'UZ' ? 'Siti Mollning sehli va ulug\'vorligi' : lang === 'RU' ? 'Исследуйте молл на видео' : 'Step Inside Tashkent City Mall'}
            </h2>
            
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              {lang === 'UZ'
                ? 'Hashamatli interyer dizayni, shinam yorug\'lik, musiqiy gumbazlar va butun shaharni lol qoldirgan yorug\'lik favvoralarini yuqori sifatli materiallarimiz orqali his qiling.'
                : lang === 'RU'
                  ? 'Почувствуйте уникальную роскошную атмосферу нашего торгового центра. Посмотрите архитектурный дизайн, интерьеры бутиков и знаменитое фонтанное шоу онлайн.'
                  : 'Experience the premium luxury design of Tashkent\'s center stage. Check out high-resolution drone footages, grand opening reels, and the legendary music fountains.'}
            </p>

            {/* Mode Switch Tab Selector */}
            <div className="flex bg-slate-100 border border-slate-200 p-1.5 rounded-2xl max-w-sm">
              <button
                onClick={() => {
                  setPlayerMode('video');
                  setIsPlaying(false);
                }}
                className={`flex-1 text-center py-2 px-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  playerMode === 'video'
                    ? 'bg-gold-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-550 hover:text-slate-900'
                }`}
              >
                🎥 {lang === 'UZ' ? 'Video Player' : lang === 'RU' ? 'Видео-тур' : 'Video Player'}
              </button>
              <button
                onClick={() => setPlayerMode('gallery')}
                className={`flex-1 text-center py-2 px-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  playerMode === 'gallery'
                    ? 'bg-gold-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-555 hover:text-slate-900'
                }`}
              >
                📸 {lang === 'UZ' ? 'Foto Sayohat' : lang === 'RU' ? 'Фото-экскурсия' : 'Virtual Photos'}
              </button>
            </div>
            
            {playerMode === 'video' ? (
              /* Video Selection list */
              <div className="space-y-3 pt-1" id="video-playlist">
                {VIDEO_LIST.map((vid) => {
                  const isActive = vid.id === activeVideo.id;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => {
                        setActiveVideo(vid);
                        setIsPlaying(true);
                      }}
                      className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-gold-50 border-gold-500/30 text-gold-700 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-655 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`h-8 w-8 rounded-xl flex items-center justify-center border transition-all ${
                          isActive ? 'bg-gold-500 text-slate-950 border-gold-400' : 'bg-white border-slate-200 text-slate-400'
                        }`}>
                          <Play size={12} className={isActive ? 'fill-current ml-0.5' : ''} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-[240px]">
                            {lang === 'UZ' ? vid.label_uz : lang === 'RU' ? vid.label_ru : vid.label_en}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono mt-0.5">{lang === 'UZ' ? 'Tomi: ' : lang === 'RU' ? 'Длительность: ' : 'Length: '}{vid.duration}</span>
                        </div>
                      </div>
                      {isActive && <span className="text-[9px] bg-gold-405/20 text-gold-700 py-0.5 px-2 rounded-md font-mono uppercase tracking-wider font-bold">Playing</span>}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Gallery Selector indicators in text format */
              <div className="space-y-3 pt-1">
                {GALLERY_LIST.map((item, idx) => {
                  const isActive = idx === galleryIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-gold-50 border-gold-500/30 text-gold-700 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-slate-400">{idx + 1}.</span>
                        <span className="text-xs sm:text-sm font-semibold">
                          {lang === 'UZ' ? item.title_uz : lang === 'RU' ? item.title_ru : item.title_en}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right panel: majestic custom responsive player or smart gallery */}
          <div className="lg:col-span-7" id="video-wrapper">
            {playerMode === 'video' ? (
              /* Video Player Mode */
              <div>
                <div className="relative aspect-[16/9] w-full bg-slate-900 border border-slate-200 rounded-3xl overflow-hidden shadow-lg group">
                  
                  {/* Golden gradient ambient borders */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-purple-500/5 z-0" />

                  {!isPlaying ? (
                    /* Cover screen before playing */
                    <div 
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center cursor-pointer p-6 animate-fade-in"
                    >
                      {/* Decorative background visual placeholder */}
                      <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] z-0" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0,transparent_70%)] z-0" />

                      {/* Centered play button layout */}
                      <div className="relative z-10 flex flex-col items-center space-y-4">
                        <button className="h-16 w-16 bg-gold-500 hover:bg-gold-400 text-slate-950 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30 transform hover:scale-110 active:scale-95 transition-all duration-300">
                          <Play size={24} className="fill-current ml-1" />
                        </button>
                        
                        <div className="space-y-1">
                          <p className="text-white font-serif font-bold text-base uppercase tracking-wider px-4">
                            {lang === 'UZ' ? activeVideo.label_uz : lang === 'RU' ? activeVideo.label_ru : activeVideo.label_en}
                          </p>
                          <p className="text-[11px] text-slate-300 font-display flex items-center justify-center space-x-1">
                            <Tv size={12} className="text-gold-400" />
                            <span>{lang === 'UZ' ? 'Toshkent Siti Moll rasmiy video sayohatini ko\'rish' : lang === 'RU' ? 'Смотреть официальный тур по молу' : 'Watch official high-definition tour'}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Real YouTube Frame Embed */}
                  {isPlaying && (
                    <iframe
                      className="w-full h-full relative z-10"
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title="Tashkent City Mall Cinema Tour Player"
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}

                </div>

                {/* Sub player credits & Fallback Help notice */}
                <div className="mt-4 space-y-3 font-display">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-slate-505 px-2">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1.5 font-semibold text-slate-600">
                        <Sparkles size={11} className="text-gold-600" />
                        <span>{lang === 'UZ' ? 'Sifat: 1080p Ultra-HD' : lang === 'RU' ? 'Качество: 1080p Full-HD' : 'Quality: 1080p Full-HD'}</span>
                      </span>
                      
                      <a 
                        href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gold-700 hover:text-gold-600 hover:underline transition-colors cursor-pointer font-bold bg-gold-400/10 px-2 py-1 rounded border border-gold-450/20"
                      >
                        <ExternalLink size={11} />
                        <span>
                          {lang === 'UZ' 
                            ? 'YouTube-da ochish ↗' 
                            : lang === 'RU' 
                              ? 'Открыть в YouTube ↗' 
                              : 'Open in YouTube ↗'}
                        </span>
                      </a>
                    </div>
                    {isPlaying && (
                      <button 
                        onClick={() => setIsPlaying(false)}
                        className="flex items-center space-x-1 self-start sm:self-auto bg-slate-50 border border-slate-255 text-slate-500 hover:text-slate-900 px-2.5 py-1 rounded-md transition-all cursor-pointer"
                      >
                        <RotateCcw size={10} />
                        <span>{lang === 'UZ' ? 'Qayta yuklash' : lang === 'RU' ? 'Сбросить' : 'Reset Player'}</span>
                      </button>
                    )}
                  </div>

                  {/* Friendly hint box */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-3 text-slate-600 text-[11px] leading-relaxed shadow-3xs">
                    <AlertCircle size={14} className="text-gold-650 shrink-0 mt-0.5" />
                    <p>
                      {lang === 'UZ' 
                        ? 'Agar sizda internet tezligi pastligi yoki brauzer taqiqlari sababli YouTube pleer ochilmayotgan bo\'lsa, yuqoridagi sariq "YouTube-da ochish" tugmasini bosing yoki "Foto Sayohat" tugmasini bosing!' 
                        : lang === 'RU' 
                          ? 'Если из-за ограничений браузера или медленного интернета плеер не загружается — нажмите на кнопку "Открыть в YouTube" или переключите на режим "Фото-экскурсия" выше!' 
                          : 'If school, corporate firewalls, or browser sandboxing blocks YouTube player loading, click the gold "Open in YouTube" button or switch to the alternative "Virtual Photos" tab!'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* High fidelity alternative Virtual Photos Gallery Mode */
              <div className="animate-fade-in text-slate-100">
                <div className="relative aspect-[16/9] w-full bg-slate-900 border border-slate-20- rounded-3xl overflow-hidden shadow-lg group">
                  {/* Photo slide */}
                  <img 
                    src={GALLERY_LIST[galleryIndex].image} 
                    alt={lang === 'UZ' ? GALLERY_LIST[galleryIndex].title_uz : GALLERY_LIST[galleryIndex].title_en} 
                    className="w-full h-full object-cover select-none transition-all duration-700 ease-out scale-100 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-0" />

                  {/* Arrow controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/90 border border-slate-200 text-slate-800 hover:text-gold-650 rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 bg-white/90 border border-slate-200 text-slate-800 hover:text-gold-650 rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10 space-y-1">
                    <span className="text-[9px] bg-gold-400/20 text-gold-400 font-bold py-0.5 px-2 rounded font-mono uppercase tracking-wider">
                      {lang === 'UZ' ? 'FOTO-SAYOHAT KONTSEPTI' : lang === 'RU' ? 'ФОТОШЕДЕВР' : 'VIRTUAL PHOTO EXHIBITION'}
                    </span>
                    <h3 className="text-sm sm:text-lg font-serif font-extrabold text-white">
                      {lang === 'UZ' 
                        ? GALLERY_LIST[galleryIndex].title_uz 
                        : lang === 'RU' 
                          ? GALLERY_LIST[galleryIndex].title_ru 
                          : GALLERY_LIST[galleryIndex].title_en}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-305 max-w-xl leading-relaxed">
                      {lang === 'UZ' 
                        ? GALLERY_LIST[galleryIndex].desc_uz 
                        : lang === 'RU' 
                          ? GALLERY_LIST[galleryIndex].desc_ru 
                          : GALLERY_LIST[galleryIndex].desc_en}
                    </p>
                  </div>

                  {/* Dots Indicator Overlay */}
                  <div className="absolute top-4 right-4 z-10 flex space-x-1.5 bg-slate-950/70 border border-slate-800 px-2.5 py-1.5 rounded-full scale-90 sm:scale-100">
                    {GALLERY_LIST.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === galleryIndex ? 'w-4 bg-gold-500' : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                        }`}
                        title={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Sub-gallery attributes */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 px-2 font-display">
                  <span className="flex items-center space-x-1">
                    <Eye size={11} className="text-slate-400" />
                    <span>{lang === 'UZ' ? `Katalog: ${galleryIndex + 1}/${GALLERY_LIST.length}` : lang === 'RU' ? `Каталог: ${galleryIndex + 1}/${GALLERY_LIST.length}` : `Catalog: ${galleryIndex + 1}/${GALLERY_LIST.length}`}</span>
                  </span>
                  
                  <span className="text-slate-500 italic">
                    {lang === 'UZ' ? 'Foydalanish: Tugmalarni bosing' : lang === 'RU' ? 'Управление: Кликайте стрелки' : 'Tip: Click arrows to slide'}
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
