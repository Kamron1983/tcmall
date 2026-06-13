/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shop, Movie, MallEvent, Review, NewsArticle } from './types';

export const SHOPS: Shop[] = [
  {
    id: 'zara',
    name: 'ZARA',
    category: 'fashion',
    floor: 2,
    logo: 'ZR',
    image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&w=600&q=80',
    description: 'Ispaniyaning dunyoga mashhur brendi bo\'lib, u har doim yangi moda tendensiyalari va kiyim-kechaklarini barcha uchun taqdim etadi. Erkaklar kiyimlari, Ayollar kiyimlari, Aksessuarlar.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-21',
    website: 'https://zara.com',
    rating: 4.8,
    featured: true,
    coordinates: { x: 12, y: 15, width: 14, height: 18 }
  },
  {
    id: 'adidas',
    name: 'ADIDAS',
    category: 'fashion',
    floor: 2,
    logo: 'ADI',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
    description: 'Sport kiyimlari va poyabzallarining afsonaviy brendi. Sport tovarlari va faol hayot tarzi uchun mukammal sifat.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-30',
    website: 'https://adidas.com',
    rating: 4.7,
    featured: true,
    coordinates: { x: 30, y: 15, width: 12, height: 15 }
  },
  {
    id: 'stradivarius',
    name: 'STRADIVARIUS',
    category: 'fashion',
    floor: 2,
    logo: 'STR',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80',
    description: 'Erkaklar kiyimlari, Ayollar kiyimlari va Bolalar kiyimlari. Zamonaviy ohanglar, nafis chiziqlar va yorqin uslub.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-31',
    website: 'https://stradivarius.com',
    rating: 4.6,
    coordinates: { x: 45, y: 15, width: 15, height: 18 }
  },
  {
    id: 'massimo_dutti',
    name: 'MASSIMO DUTTI',
    category: 'fashion',
    floor: 2,
    logo: 'MD',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    description: 'Erkaklar kiyimlari, Ayollar kiyimlari, Bolalar kiyimlari. Klassik kiyimlar va yuqori sifatli materiallar.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-25',
    website: 'https://massimodutti.com',
    rating: 4.7,
    coordinates: { x: 15, y: 55, width: 12, height: 14 }
  },
  {
    id: 'bershka',
    name: 'BERSHKA',
    category: 'fashion',
    floor: 2,
    logo: 'BSK',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80',
    description: 'Ayollar kiyimlari, Erkaklar kiyimlari va qulay Poyabzallar. Yoshlar ko\'cha modasining yetakchi yo\'nalishi.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-22',
    website: 'https://bershka.com',
    rating: 4.6,
    featured: true,
    coordinates: { x: 65, y: 15, width: 18, height: 18 }
  },
  {
    id: '7saber_parfyum',
    name: '7SABER Parfyum',
    category: 'services',
    floor: 2,
    logo: '7S',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    description: 'Parfyumeriya va yuqori sifatli kosmetika brendi. O\'zining betakror va uzoq saqlanuvchi iforlari bilan mashhur.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-40',
    rating: 4.5,
    coordinates: { x: 15, y: 20, width: 15, height: 15 }
  },
  {
    id: 'yaroqlik',
    name: 'YAROQLIK',
    category: 'services',
    floor: 4,
    logo: 'YR',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    description: 'Sog\'liqni saqlash, professional fitness jixozlari va wellness xizmatlari. 4-qavatdagi eng katta sport klubi.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-50',
    rating: 4.8,
    coordinates: { x: 35, y: 20, width: 14, height: 15 }
  },
  {
    id: 'sky_park',
    name: 'SKY PARK',
    category: 'entertainment',
    floor: 4,
    logo: 'SP',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    description: 'Ko\'ngilochar ko\'p tarmoqli istirohat bog\'i va zamonaviy bolalar o\'yingohi. Tramplinlar, emulyatorlar va sarguzashtlar dunyosi.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-55',
    rating: 4.9,
    featured: true,
    coordinates: { x: 52, y: 20, width: 10, height: 15 }
  },
  {
    id: 'kinoteatr_shop',
    name: 'KINOTEATR',
    category: 'entertainment',
    floor: 4,
    logo: '🍿',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
    description: 'Cinematica Multiplex ultra-premium kinoteatri. IMAX 3D va Dolby Atmos ovoz tizimli zallari bilan kino olami mo\'jizasi.',
    workingHours: '10:00 - 01:00',
    phone: '+998 (71) 201-11-20',
    rating: 4.9,
    coordinates: { x: 65, y: 20, width: 12, height: 15 }
  },
  {
    id: 'korzinka',
    name: 'Korzinka Supermarket',
    category: 'services',
    floor: 0,
    logo: '🛒',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    description: 'Oziq-ovqat mahsulotlari, har kungi pishiriqlar, yangi uzilgan mevalar va maishiy tovarlar savdosi.',
    workingHours: '08:00 - 23:00',
    phone: '+998 (78) 140-14-14',
    website: 'https://korzinka.uz',
    rating: 4.8,
    featured: true,
    coordinates: { x: 10, y: 35, width: 22, height: 35 }
  },
  {
    id: 'calvin_klein',
    name: 'Calvin Klein',
    category: 'fashion',
    floor: 1,
    logo: 'CK',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
    description: 'Premium darajadagi minimalistik kiyim-kechak, jinsi va parfyumeriya buyumlari.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 201-11-24',
    website: 'https://calvinklein.us',
    rating: 4.9,
    coordinates: { x: 35, y: 55, width: 12, height: 14 }
  },
  {
    id: 'bellissimo',
    name: 'Bellissimo Pizza',
    category: 'food',
    floor: 2,
    logo: '🍕',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    description: 'O\'zbekistondagi eng yetakchi va tezkor pitseriyalar tarmog\'i. Issiqqina, pishloqli ajoyib pitsalar.',
    workingHours: '10:00 - 23:00',
    phone: '+998 (71) 203-22-22',
    rating: 4.6,
    coordinates: { x: 75, y: 55, width: 12, height: 14 }
  }
];

export const MOVIES: Movie[] = [
  {
    id: 'xolop_3',
    title: 'Xolop 3',
    genre: 'Komediya / Sarguzasht',
    duration: '1s 58m',
    rating: '12+',
    ratingScore: 4.7,
    image: 'https://images.unsplash.com/photo-1542204172-e7052809a1a4?auto=format&fit=crop&q=80&w=600',
    languages: ['RU', 'UZ'],
    showtimesByDay: {
      today: ['11:00', '13:30', '16:00', '19:15', '21:45', '23:30'],
      tomorrow: ['12:00', '14:30', '17:15', '20:00', '22:30']
    }
  },
  {
    id: 'scary_movie_6',
    title: 'Ochen strashnoe kino 6',
    genre: 'Parodiya / Komediya',
    duration: '1s 35m',
    rating: '18+',
    ratingScore: 4.4,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['12:30', '15:15', '18:00', '20:45', '23:15'],
      tomorrow: ['11:30', '14:15', '17:00', '19:45', '22:45']
    }
  },
  {
    id: 'zveryutsiya',
    title: 'Зверюция',
    genre: 'Multfilm / Oila',
    duration: '1s 40m',
    rating: '6+',
    ratingScore: 4.6,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    languages: ['RU', 'UZB'],
    showtimesByDay: {
      today: ['10:30', '12:45', '15:00', '17:15'],
      tomorrow: ['11:00', '13:15', '15:30', '17:45']
    }
  },
  {
    id: 'trolli',
    title: 'Trolli ochiladi',
    genre: 'Animatsiya / Muzikl',
    duration: '1s 32m',
    rating: '6+',
    ratingScore: 4.5,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
    languages: ['UZB', 'RU'],
    showtimesByDay: {
      today: ['10:00', '12:00', '14:00', '16:00'],
      tomorrow: ['10:30', '12:30', '14:35', '16:40']
    }
  },
  {
    id: 'shkola_zverey',
    title: 'Shkola magicheskix zverey. Xraniteli chuda',
    genre: 'Sehr / Sarguzasht',
    duration: '1s 48m',
    rating: '6+',
    ratingScore: 4.7,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['11:15', '14:45', '18:15'],
      tomorrow: ['12:15', '15:45', '19:15']
    }
  },
  {
    id: 'vlasteliny',
    title: 'Vlasteliny veselennoy',
    genre: 'Fantastika / Jangari',
    duration: '2s 05m',
    rating: '12+',
    ratingScore: 4.8,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    languages: ['RU', 'EN'],
    showtimesByDay: {
      today: ['15:00', '18:30', '22:00'],
      tomorrow: ['14:00', '18:00', '21:40']
    }
  },
  {
    id: 'scary_movie_6_eng',
    title: 'Qo\'rqinchli film 6 (ENG)',
    genre: 'Komediya / Parodiya',
    duration: '1s 35m',
    rating: '18+',
    ratingScore: 4.3,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=600',
    languages: ['EN'],
    showtimesByDay: {
      today: ['21:00', '23:30'],
      tomorrow: ['22:15', '00:30']
    }
  },
  {
    id: 'momo',
    title: 'Momo',
    genre: 'Triller / Qo\'rqinchli',
    duration: '1s 42m',
    rating: '12+',
    ratingScore: 4.1,
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600',
    languages: ['RU', 'UZB'],
    showtimesByDay: {
      today: ['17:00', '20:15', '22:45'],
      tomorrow: ['16:30', '19:45', '22:00']
    }
  },
  {
    id: 'shkola_volshebnikov',
    title: 'Shkola volshebnikov',
    genre: 'Fantaziya / Bolalar',
    duration: '1s 38m',
    rating: '6+',
    ratingScore: 4.5,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['10:45', '13:00', '15:15'],
      tomorrow: ['11:30', '13:50', '16:10']
    }
  },
  {
    id: 'orqa_xonalar',
    title: 'Orqa xonalar (INGL. + RUS. sub.)',
    genre: 'Sirlilik / Qo\'rqinchli',
    duration: '1s 45m',
    rating: '18+',
    ratingScore: 4.8,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    languages: ['EN', 'RU'],
    showtimesByDay: {
      today: ['20:00', '22:30', '00:30'],
      tomorrow: ['21:00', '23:15']
    }
  },
  {
    id: 'zakulise',
    title: 'Zakulise realnosti',
    genre: 'Drama / Sirlilik',
    duration: '2s 10m',
    rating: '18+',
    ratingScore: 4.6,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['14:30', '17:45', '21:00'],
      tomorrow: ['13:45', '17:00', '20:15']
    }
  },
  {
    id: 'yolovchi',
    title: 'Yo\'lovchi',
    genre: 'Triller / Triller',
    duration: '1s 50m',
    rating: '18+',
    ratingScore: 4.4,
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=600',
    languages: ['UZB', 'RU'],
    showtimesByDay: {
      today: ['18:30', '20:50', '23:10'],
      tomorrow: ['19:15', '21:30', '23:45']
    }
  },
  {
    id: 'lagmon',
    title: 'Lag\'mon ( UZB )',
    genre: 'Oila / Komediya',
    duration: '1s 16m',
    rating: '6+',
    ratingScore: 4.7,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600',
    languages: ['UZB'],
    showtimesByDay: {
      today: ['11:30', '13:15', '15:00', '16:45'],
      tomorrow: ['10:45', '12:30', '14:15', '16:00']
    }
  },
  {
    id: 'och_dengizlar',
    title: 'Och rangli dengizlar',
    genre: 'Hujjatli / Tabiat',
    duration: '1s 25m',
    rating: '18+',
    ratingScore: 4.5,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['13:00', '16:30', '20:00'],
      tomorrow: ['12:30', '15:45', '19:00']
    }
  },
  {
    id: 'mandalorets',
    title: 'Mandalorets va Grogu',
    genre: 'Kosmik / Jangari',
    duration: '2s 15m',
    rating: '12+',
    ratingScore: 4.9,
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=600',
    languages: ['UZB', 'RU', 'EN'],
    showtimesByDay: {
      today: ['12:00', '14:45', '17:30', '20:15', '23:00'],
      tomorrow: ['11:00', '13:45', '16:30', '19:15', '22:00']
    }
  },
  {
    id: 'ovechki',
    title: 'Sledstvie vedut ovechki',
    genre: 'Animatsiya / Detektiv',
    duration: '1s 22m',
    rating: '14+',
    ratingScore: 4.2,
    image: 'https://images.unsplash.com/photo-1484712401471-05c7215a64be?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['10:00', '12:30', '15:10'],
      tomorrow: ['10:15', '12:45', '15:20']
    }
  },
  {
    id: 'prada_2',
    title: 'Dyavol nosit Prada 2',
    genre: 'Drama / Moda',
    duration: '1s 58m',
    rating: '16+',
    ratingScore: 4.8,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
    languages: ['EN', 'RU'],
    showtimesByDay: {
      today: ['14:00', '18:15', '21:30'],
      tomorrow: ['15:35', '19:00', '22:15']
    }
  },
  {
    id: 'michael',
    title: 'Maykl',
    genre: 'Biografiya / Muzika / Drama',
    duration: '2s 42m',
    rating: '12+',
    ratingScore: 4.9,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600',
    languages: ['RU', 'EN'],
    showtimesByDay: {
      today: ['13:00', '16:45', '20:30', '23:45'],
      tomorrow: ['12:00', '15:45', '19:30', '23:00']
    }
  },
  {
    id: 'nelegal',
    title: 'Nelegal. Meksika orqali',
    genre: 'Drama / Action',
    duration: '1s 55m',
    rating: '18+',
    ratingScore: 4.5,
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600',
    languages: ['RU'],
    showtimesByDay: {
      today: ['18:00', '20:45', '23:30'],
      tomorrow: ['19:00', '21:30', '23:55']
    }
  }
];

export const EVENTS: MallEvent[] = [
  {
    id: 'event_1',
    title: 'Yulduz Usmanova Jonli Konserti',
    description: 'Bizning markazning tantanalar maydonida O\'zbekiston Xalq Artisti Yulduz Usmanovaning eng hursandchilikka to\'la va bepul konsert dasturi barcha mehmonlar uchun!',
    date: '15 Iyun, 2026',
    time: '19:00',
    location: 'Central Plaza (1-etaj)',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1000',
    category: 'concert'
  },
  {
    id: 'event_2',
    title: 'Bolalar Uchun Shok-Shou',
    description: 'Megatransformatorlar jangi, kimyoviy ko\'pikli ilmiy tajribalar va animatorlar ishtirokidagi qiziqarli sovg\'ali tanlovlar mamlakatimiz kichiriylari uchun.',
    date: 'Har shanba va yakshanba',
    time: '14:00 - 17:00',
    location: 'Kids Arena (3-etaj)',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000',
    category: 'kids'
  },
  {
    id: 'event_3',
    title: 'Maxsus Pazandachilik Master-klassi',
    description: 'Fransiyalik mashhur oshpazlar Paul kafesida chinakam milliy va yevropa uchrashuvi shirinliklari hamda pizza pishirish darsini o\'tkazishadi. Ishtirok etish oldindan ro\'yxat bilan.',
    date: '22 Iyun, 2026',
    time: '16:00',
    location: 'Paul Café maydoni',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000',
    category: 'masterclass'
  },
  {
    id: 'event_4',
    title: 'Tashkent City Mall - Katta Yozgi Aksiya!',
    description: 'Hamkor kiyim do\'konlarida 70% gacha yozgi chegirmalar hamda chekdagi minimal 500,000 so\'mlik xarid egasiga yangi elektromobil yutib olish imkoniyati!',
    date: '1 Iyul gacha',
    time: 'Butun kun',
    location: 'Barcha do\'konlar',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000',
    category: 'promo'
  }
];

export const NEWS: NewsArticle[] = [
  {
    id: 'news_1',
    date: '2026-yil 31-mart',
    title: 'Yilning madaniy tadbiri: Botir Zokirovning tug\'ilgan kuni',
    description: 'O\'zbekiston san\'atining buyuk bo\'g\'ini — taniqli xonanda va san\'at arbobi Botir Zokirov xotirasiga bag\'ishlangan yirik madaniy tadbirlar va maxsus musiqiy dasturlar bo\'lib o\'tadi.'
  },
  {
    id: 'news_2',
    date: '2026-yil 17-fevral',
    title: 'Tashkent City Mall’da muqaddas Ramazon oyi boshlandi',
    description: 'Muqaddas oy munosabati bilan markazimizda barcha mehmonlar uchun iftorlik va qulay sharoitlar yaratilgan. Ma\'naviy va iliq uchrashuv maydonchalaridan bahramand bo\'ling.'
  },
  {
    id: 'news_3',
    date: '2026-yil 11-fevral',
    title: 'Ramazon oyi uchun 50% gacha chegirmalar',
    description: 'Eng mashhur jahon va mahalliy brendlar do\'konlarida muqaddas oy davomida oilaviy xaridlar uchun 50 foizgacha maxsus chegirmalar e\'lon qilindi.'
  },
  {
    id: 'news_4',
    date: '2024-yil 30-may',
    title: 'May oyining eng yaxshi yangiliklari tanlovimizni o\'tkazib yubormang!',
    description: 'Biz may oyi davomida barcha sovg\'ali tanlovlarimiz va g\'oliblarimiz ro\'yxatini qayta e\'lon qildik. Ushbu imkoniyatni qo\'ldan boy bermang.'
  },
  {
    id: 'news_5',
    date: '2025-yil 23-dekabr',
    title: 'Tashkent City Mall muz maydonida qishki oqshom!',
    description: 'Chiroyli chiroqlar, bayramona qor parchalari va ajoyib musiqa jo\'rligida haqiqiy muz maydonimizda unutilmas qishki oqshom tomoshalarini tomosha qiling.'
  },
  {
    id: 'news_6',
    date: '2025-yil 11-dekabr',
    title: 'GO\'ZALLIK KUNLARI INGLOTI!',
    description: 'Dunyoga mashhur Inglot kosmetika do\'konida maxsus mahorat darslari, taniqli vizajistlar maslahatlari va eksklyuziv sovg\'alar uchrashuvi.'
  },
  {
    id: 'news_7',
    date: '2025-yil 6-dekabr',
    title: 'Ajoyib fasl: Tashkent City Mall savdo markazida asosiy Rojdestvo archasining yoqilishi!',
    description: 'Katta bayram shodiyonasi boshlandi! Savdo markazimizning markaziy maydonida Toshkentdagi eng mahobatli va yorqin Rojdestvo bayrami archasini tantanali ravishda yoqdik.'
  },
  {
    id: 'news_8',
    date: '2025-yil 3-dekabr',
    title: 'Muhtasham Mavsum: Tashkent City Mall’da ulug‘vorlik fasli',
    description: 'Qishki ulug\'vorlik va nafis bezaklar davri kirib keldi. Ko\'plab xaridlar aksiyasi va fotozonalar bilan uchrashing.'
  },
  {
    id: 'news_9',
    date: '2025-yil 31-oktabr',
    title: "Tashkent City Mall: Embrass 2025 ko'rgazmasida \"Yilning eng yaxshi yutug'i\"",
    description: 'Tashkent City Mall nufuzli Embrass 2025 mukofotlash marosimida O\'zbekiston bo\'yicha yilning eng dadil infratuzilma yutug\'i nominatsiyasida g\'olib chiqdi!'
  },
  {
    id: 'news_10',
    date: '2025-yil 1-sentabr',
    title: '2025-yil 2-sentabrdan boshlab, yozgi mavsum tugashi bilan Tashkent City Mall odatiy ish vaqtiga qaytadi.',
    description: 'Hurmatli tashrif buyuruvchilar, yozgi vaqt rejimi tugashi munosabati bilan markazimiz soat 10:00 dan 23:00 gacha odatiy tartibda o\'z ishini davom ettiradi.'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    userName: 'Olimjon Toirov',
    rating: 5,
    comment: 'Toshkentdagi eng hashamatli va barcha brendlar jamlangan ajoyib joy! Tozaligi va audio-musiqalari judayam yoqadi.',
    date: 'Kecha'
  },
  {
    id: '2',
    userName: 'Madina Ahrorova',
    rating: 5,
    comment: 'Do\'konlar va ovqatlanish joylari mukammal ajratilgan. Xaritasi juda qulay, birinchi marta kelsangayam hamma narsani tez topasan!',
    date: '3 kun oldin'
  },
  {
    id: '3',
    userName: 'Farrux Eshmatov',
    rating: 4,
    comment: 'Kinoteatridagi IMAX ekrani shunchaki daho! Faqat dam olish kunlari mashinalar to\'xtash joyida navbat biroz uzun.',
    date: '1 hafta oldin'
  }
];
