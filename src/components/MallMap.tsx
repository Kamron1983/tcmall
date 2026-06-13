/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SHOPS } from '../data';
import { Shop } from '../types';
import { MapPin, Info, Layers, Eye } from 'lucide-react';

interface MallMapProps {
  lang: 'UZ' | 'RU' | 'EN';
  onShopSelect: (shop: Shop) => void;
}

export default function MallMap({ lang, onShopSelect }: MallMapProps) {
  const [activeFloor, setActiveFloor] = useState<0 | 1 | 2 | 4>(1);
  const [hoveredShop, setHoveredShop] = useState<string | null>(null);

  const filteredShops = SHOPS.filter((shop) => shop.floor === activeFloor);

  const floorLabels = {
    0: { uz: '0 - Etaj (Ground)', ru: '0 - Этаж (Цоколь)', en: 'Ground Floor' },
    1: { uz: '1 - Etaj', ru: '1 - Этаж', en: '1st Floor' },
    2: { uz: '2 - Etaj (Food court & Kino)', ru: '2 - Этаж (Фуд-корт и Кино)', en: '2nd Floor (Dining & Cinema)' },
    4: { uz: '4 - Etaj (Sky Park & Fitness)', ru: '4 - Этаж (Развлечения и Спорт)', en: '4th Floor (Sky Park & Gym)' }
  };

  const categoryColors: Record<string, string> = {
    fashion: 'bg-emerald-500/10 border-emerald-500 hover:bg-emerald-500/20 text-emerald-700',
    tech: 'bg-blue-500/10 border-blue-500 hover:bg-blue-500/20 text-blue-700',
    food: 'bg-orange-500/10 border-orange-500 hover:bg-orange-500/20 text-orange-700',
    entertainment: 'bg-purple-500/10 border-purple-500 hover:bg-purple-500/20 text-purple-700',
    kids: 'bg-pink-500/10 border-pink-500 hover:bg-pink-500/20 text-pink-700',
    services: 'bg-teal-500/10 border-teal-500 hover:bg-teal-500/20 text-teal-700',
  };

  return (
    <section id="map" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-gold-600 text-sm font-display tracking-widest uppercase mb-3">
            <Layers size={16} />
            <span>{lang === 'UZ' ? 'INTERAKTIV REJA' : lang === 'RU' ? 'ИНТЕРАКТИВНЫЙ ПЛАН' : 'INTERACTIVE FLOOR PLAN'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'UZ' ? 'Siz qidirayotgan do\'kon qayerda?' : lang === 'RU' ? 'Где находится нужный магазин?' : 'Looking for a Brand?'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'UZ'
              ? 'Etajni tanlang va do\'konlarning joylashuvi bilan interaktiv tanishing. Xaritalar ustiga bosib batafsil ma\'lumotni oling.'
              : lang === 'RU'
                ? 'Выберите этаж и ознакомьтесь с интерактивной схемой. Кликните на магазин для просмотра подробной информации.'
                : 'Select a floor and explore shop locations interactively on the layout blueprint. Click any shop to view its info.'}
          </p>
        </div>

        {/* Floor selectors */}
        <div className="flex justify-center p-1 bg-slate-50 border border-slate-200 rounded-2xl max-w-lg mx-auto mb-10" id="map-floor-selectors">
          {([0, 1, 2, 4] as const).map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className="flex-1 text-center py-3 px-1 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: activeFloor === floor ? '#d97706' : 'transparent',
                color: activeFloor === floor ? '#ffffff' : '#475569'
              }}
            >
              {lang === 'UZ' ? floorLabels[floor].uz : lang === 'RU' ? floorLabels[floor].ru : floorLabels[floor].en}
            </button>
          ))}
        </div>

        {/* Dynamic Mall Blueprint Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint Canvas Graphic Area */}
          <div className="lg:col-span-8 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-150 shadow-xs relative overflow-hidden flex flex-col items-center">
            
            <div className="absolute top-4 left-4 bg-white py-1.5 px-3 rounded-lg border border-slate-200 text-xs text-slate-655 font-display flex items-center space-x-1.5 shadow-xs">
              <Eye size={14} className="text-gold-600" />
              <span>{lang === 'UZ' ? 'Sxematik chizma' : lang === 'RU' ? 'Схематический план' : 'Schematic Layout'}</span>
            </div>

            {/* Central Blueprint Grid Layout */}
            <div className="w-full aspect-[16/10] mt-6 bg-white border border-slate-200 rounded-2xl relative overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Grid Background Matrix lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:4%_6.5%]" />
              
              {/* Central Walkway/Hallway indicators (design visual) */}
              <div className="absolute inset-x-8 h-10 bg-slate-50/75 border-y border-dashed border-slate-200 flex items-center justify-center z-0">
                <span className="text-[10px] tracking-[0.4em] text-slate-450 font-display uppercase font-medium">
                  {lang === 'UZ' ? 'MARKAZIY YO\'LAK' : lang === 'RU' ? 'ЦЕНТРАЛЬНАЯ АЛЛЕЯ' : 'MAIN MALL CORRIDOR'}
                </span>
              </div>
              
              <div className="absolute inset-y-8 w-10 bg-slate-50/75 border-x border-dashed border-slate-200 flex items-center justify-center z-0">
                <span className="text-[10px] tracking-[0.4em] text-slate-450 font-display uppercase rotate-90 whitespace-nowrap font-medium">
                  {lang === 'UZ' ? 'LIFT & ESKALATOR' : lang === 'RU' ? 'ЛИФТ И ЭСКАЛАТОР' : 'LIFT & ESCALATORS'}
                </span>
              </div>

              {/* Plotted Shops on Active Floor */}
              {filteredShops.map((shop) => {
                const isHovered = hoveredShop === shop.id;
                const catColor = categoryColors[shop.category] || categoryColors.fashion;
                
                return (
                  <div
                    key={shop.id}
                    onMouseEnter={() => setHoveredShop(shop.id)}
                    onMouseLeave={() => setHoveredShop(null)}
                    onClick={() => onShopSelect(shop)}
                    id={`map-shop-room-${shop.id}`}
                    className={`absolute rounded-lg border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center p-1.5 z-10 select-none ${catColor} ${
                      isHovered
                        ? 'ring-2 ring-gold-400 scale-[1.03] shadow-lg shadow-gold-500/10 z-20'
                        : 'shadow-xs shadow-slate-100'
                    }`}
                    style={{
                      left: `${shop.coordinates.x}%`,
                      top: `${shop.coordinates.y}%`,
                      width: `${shop.coordinates.width}%`,
                      height: `${shop.coordinates.height}%`,
                    }}
                  >
                    <span className="font-display font-medium text-[10px] sm:text-xs tracking-tight truncate max-w-full text-slate-805">
                      {shop.name}
                    </span>
                    <span className="text-[9px] text-slate-500 font-display uppercase font-semibold scale-90 tracking-wider">
                      {shop.logo}
                    </span>
                    
                    {/* Pulsing indicator pin */}
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-gold-400 map-marker-pulse shadow-sm" />
                  </div>
                );
              })}

            </div>

            {/* Aesthetic Floor Visual Guide */}
            <div className="w-full mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2 text-[10px] sm:text-xs text-slate-600 font-display">
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{lang === 'UZ' ? 'Kiyim, Moda' : lang === 'RU' ? 'Одежда, Мода' : 'Apparel & Fashion'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span>{lang === 'UZ' ? 'Texnika, Gadjet' : lang === 'RU' ? 'Техника, Гаджет' : 'Tech & Gadgets'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span>{lang === 'UZ' ? 'Taomlar, Kafe' : lang === 'RU' ? 'Еда, Кафе' : 'Dining & Cafes'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                <span>{lang === 'UZ' ? 'Ko\'ngilochar' : lang === 'RU' ? 'Развлечения' : 'Entertainment'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                <span>{lang === 'UZ' ? 'Bolalar xonasi' : lang === 'RU' ? 'Детская зона' : 'Kids Zone'}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                <span>{lang === 'UZ' ? 'Xizmatlar' : lang === 'RU' ? 'Услуги и Сервис' : 'Services & Bank'}</span>
              </div>
            </div>

          </div>

          {/* Quick List Reference Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-202 shadow-xs">
              <div className="flex items-center space-x-2 text-gold-600 font-display font-bold text-sm uppercase mb-4">
                <MapPin size={16} />
                <span>{lang === 'UZ' ? 'DO\'KONLAR RO\'YXATI' : lang === 'RU' ? 'СПИСОК НА ЭТАЖЕ' : 'SHOPS ON FLOOR'}</span>
              </div>

              <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-2 animate-fade-in" id="map-sidebar-shops-list">
                {filteredShops.map((shop) => (
                  <div
                    key={shop.id}
                    onMouseEnter={() => setHoveredShop(shop.id)}
                    onMouseLeave={() => setHoveredShop(null)}
                    onClick={() => onShopSelect(shop)}
                    id={`map-sidebar-shop-${shop.id}`}
                    className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      hoveredShop === shop.id
                        ? 'bg-slate-50 border-gold-400/80 translate-x-1 shadow-xs'
                        : 'bg-slate-50/50 border-slate-150 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-white h-9 w-9 rounded-xl flex items-center justify-center font-display font-bold text-xs text-gold-600 border border-slate-200 select-none">
                        {shop.logo}
                      </div>
                      <div>
                        <h4 className="text-slate-900 text-xs sm:text-sm font-semibold">{shop.name}</h4>
                        <p className="text-xs text-slate-500 capitalize">{shop.category}</p>
                      </div>
                    </div>
                    
                    <button className="p-1.5 bg-white border border-slate-200 text-slate-500 rounded-lg hover:text-gold-600 transition-colors cursor-pointer">
                      <Info size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Helpful hint */}
              <div className="mt-4 p-3 bg-slate-50 border border-slate-150 rounded-xl text-center">
                <p className="text-[11px] text-slate-600 italic">
                  {lang === 'UZ' 
                    ? 'Do\'kon ustiga bosing va haqiqiy kontaktlar, soatlar va fikrlarni oling!' 
                    : lang === 'RU'
                      ? 'Кликните на магазин для просмотра контактов, отзывов и часов работы!'
                      : 'Click any shop button to reveal hours, feedback and social links!'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
