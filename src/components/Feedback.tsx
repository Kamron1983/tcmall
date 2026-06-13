/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Landmark, ChevronDown, ChevronUp, Send, CheckCircle2, Navigation } from 'lucide-react';

interface FeedbackProps {
  lang: 'UZ' | 'RU' | 'EN';
}

const FAQS = [
  {
    q_uz: 'Savdo markazi qaysi vaqt oraliqlarida ishlaydi?',
    q_ru: 'Какой график работы у торгового центра?',
    q_en: 'What are the mall working hours?',
    a_uz: 'Tashkent City Mall haftaning har kunida soat 10:00 dan 22:00 gacha ochiq. Korzinka supermarketimiz soat 08:00 dan 23:00 gacha, Cinematica kinoteatrimiz esa soat 10:00 dan tunda 01:00 gacha mijozlarimiz kutib oladi.',
    a_ru: 'Tashkent City Mall открыт ежедневно с 10:00 до 22:00. Наш супермаркет Korzinka работает с 08:00 до 23:00, а кинотеатр Cinematica принимает гостей с 10:00 до 01:00 ночи.',
    a_en: 'Tashkent City Mall is open daily from 10:00 AM to 10:00 PM. Our Korzinka supermarket is open from 08:00 AM to 11:00 PM, while Cinematica IMAX welcomes guests from 10:00 AM until 01:00 AM.'
  },
  {
    q_uz: 'Avtoturargoh mavjudmi va u bepulmi?',
    q_ru: 'Есть ли парковка и сколько она стоит?',
    q_en: 'Is there parking available and is it free?',
    a_uz: 'Ha, markazimizning 2 qavatli er osti avtoturargohi 2500 dan ortiq mashinalar uchun mo\'ljallangan. Dastlabki 2 soat butunlay bepul va undan keyingi har bir soat uchun 5,000 so\'m to\'lov belgilanadi.',
    a_ru: 'Да, у нас имеется 2-уровневый подземный паркинг более чем на 2500 мест. Первые 2 часа парковки абсолютно бесплатны, далее стоимость составляет 5 000 сум за каждый последующий час.',
    a_en: 'Yes, our 2-level underground parking holds over 2,500 spaces. The first 2 hours are completely free, and each subsequent hour is priced at 5,000 UZS.'
  },
  {
    q_uz: 'Qanday jamoat transportlarida yetib kelish qulay?',
    q_ru: 'Как добраться на общественном транспорте?',
    q_en: 'Which public transport routes can I take?',
    a_uz: 'Eng qulay usul - Toshkent metrosining "Alisher Navoiy" yoki "O\'zbekiston" bekatlaridan chiqish. Shuningdek, 1A, 24, 51, va 97-sonli avtobuslar markazimiz yaqinidagi beshta bekatda to\'xtab o\'tishadi.',
    a_ru: 'Удобнее всего добираться на метро - станции «Алишер Навои» или «Узбекистан» находятся в шаговой доступности. Также рядом проходят автобусные маршруты 1А, 24, 51 и 97.',
    a_en: 'The most convenient route is via Tashkent Subway/Metro - "Alisher Navoiy" or "O\'zbekiston" stations are within a brief walking distance. Several bus lines including 1A, 24, 51, and 97 also stop directly nearby.'
  },
  {
    q_uz: 'Markaz ichida do\'kon yoki kiosk arendaga olish tartibi qanday?',
    q_ru: 'Как арендовать торговую площадь или островок?',
    q_en: 'How can I lease a retail store or commercial island?',
    a_uz: 'Arenda olish yoki hamkorlik loyihalari bo\'yicha takliflarni quyidagi contact formamiz yoki lease@tashkentcitymall.uz elektron pochtamiz orqali sadoqat bo\'limiga yo\'naltirishingiz mumkin.',
    a_ru: 'Для получения условий аренды торговых площадей или островков отправьте заявку через контактную форму ниже или напишите нам на почту lease@tashkentcitymall.uz.',
    a_en: 'For details regarding space leasing, customized kiosks, or advertising partnerships, please submit the contact form below or contact us via lease@tashkentcitymall.uz directly.'
  }
];

export default function Feedback({ lang }: FeedbackProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('+998 ');
  const [formSubject, setFormSubject] = useState('marketing');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Keep prefix +998
    if (val.startsWith('+998 ')) {
      setFormPhone(val);
    } else {
      setFormPhone('+998 ');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');

    // Quick regex validation for uzb number length (+998 XX XXX XX XX -> total 13 digits like +998909005050 or formatted)
    const numericPart = formPhone.replace(/\D/g, '');
    if (numericPart.length < 12) {
      setPhoneError(lang === 'UZ' ? 'Iltimos, telefon raqamingizni to\'liq kiriting!' : lang === 'RU' ? 'Введите корректный номер телефона!' : 'Please enter your complete phone number!');
      return;
    }

    // Set submitted layout
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormName('');
    setFormPhone('+998 ');
    setFormSubject('marketing');
    setFormMessage('');
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQs list block */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-gold-650 text-sm font-display tracking-widest uppercase mb-3">
              <Landmark size={16} />
              <span>{lang === 'UZ' ? 'KO\'P SO\'RALADIGAN SAVOLLAR' : lang === 'RU' ? 'FAQ • ВОПРОСЫ И ОТВЕТЫ' : 'FREQUENTLY ASKED QUESTIONS'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'UZ' ? 'Savollaringiz bormi?' : lang === 'RU' ? 'Часто задаваемые вопросы' : 'Have a Question?'}
            </h2>
          </div>

          <div className="space-y-4" id="feedback-faqs">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left font-display font-semibold text-slate-850 hover:text-gold-605 transition-colors text-sm sm:text-base cursor-pointer"
                    id={`faq-btn-${idx}`}
                  >
                    <span>{lang === 'UZ' ? faq.q_uz : lang === 'RU' ? faq.q_ru : faq.q_en}</span>
                    {isOpen ? <ChevronUp size={18} className="text-gold-600" /> : <ChevronDown size={18} className="text-slate-450" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-200/60 animate-fade-in">
                      {lang === 'UZ' ? faq.a_uz : lang === 'RU' ? faq.a_ru : faq.a_en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact info grid & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-slate-200">
          
          {/* L-Grid: Dynamic maps sketch & Info items */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'UZ' ? 'Ma\'lumotlar markazi' : lang === 'RU' ? 'Контактный центр' : 'Information desk'}
              </h3>
              <p className="text-slate-650 text-sm leading-relaxed font-sans">
                {lang === 'UZ'
                  ? 'Sizda tijorat, reklamalar yoki markazimiz xizmati bo\'yicha qo\'shimcha takliflar bormi? Biz bilan bog\'laning, sadoqat jamoamiz xushmuomala javob beradi.'
                  : lang === 'RU'
                    ? 'Свяжитесь с управляющей компанией по маркетинговым вопросам, аренде площадей или для отправки отзывов.'
                    : 'Have business proposals, media ads, or requests regarding mall spaces? Reach out directly and our managers will respond promptly.'}
              </p>
            </div>

            <div className="space-y-4.5 text-xs sm:text-sm text-slate-700" id="feedback-info">
              
              <div className="flex items-start space-x-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
                <MapPin className="text-gold-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-display">{lang === 'UZ' ? 'Manzil' : lang === 'RU' ? 'Адрес' : 'Address'}</p>
                  <p className="font-medium mt-1">
                    {lang === 'UZ' || lang === 'RU'
                      ? 'Toshkent shahar, Sharaf Rashidov shoh ko\'chasi, 1A (Yunusobod tumani)'
                      : '1A Sharaf Rashidov Avenue, Yunusabad district, Tashkent city, Uzbekistan'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
                <Phone className="text-gold-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-display">{lang === 'UZ' ? 'Telefon raqam' : lang === 'RU' ? 'Телефон' : 'Phone Line'}</p>
                  <a href="tel:+998712011111" className="font-medium mt-1 hover:text-gold-600 transition-colors block">
                    +998 (71) 201-11-11
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
                <Mail className="text-gold-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-display">{lang === 'UZ' ? 'Elektron pochta' : lang === 'RU' ? 'Электронная почта' : 'Email address'}</p>
                  <a href="mailto:info@tashkentcitymall.uz" className="font-medium mt-1 hover:text-gold-600 transition-colors block break-all">
                    info@tashkentcitymall.uz
                  </a>
                </div>
              </div>

            </div>

            {/* Custom vector stylized schematic mini-map of Tashkent City block area (purely beautiful visual markup) */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 relative overflow-hidden flex flex-col items-center shadow-xs">
              <div className="w-full flex items-center justify-between text-xs text-slate-500 mb-3 font-display">
                <span>🚘 {lang === 'UZ' ? 'Oson ulanish xaritasi' : lang === 'RU' ? 'Карта проезда' : 'Driving Access Directions'}</span>
                <span className="text-gold-600 font-bold flex items-center">
                  <Navigation size={12} className="mr-1" />
                  Alisher Navoiy Metro
                </span>
              </div>

              {/* Vector schema map markup */}
              <div className="w-full aspect-video bg-white border border-slate-150 rounded-2xl relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                
                {/* Simulated avenues lines */}
                <div className="absolute top-1/2 inset-x-0 h-4 bg-slate-100/60 border-y border-dashed border-slate-200 -translate-y-1/2 rotate-12" />
                <div className="absolute left-1/3 inset-y-0 w-4 bg-slate-100/60 border-x border-dashed border-slate-200 -translate-x-1/2 -rotate-12" />
                
                <div className="absolute bottom-10 left-6 text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-150 shadow-3xs">
                  {lang === 'UZ' || lang === 'RU' ? 'Chorsu Bozori' : 'Chorsu Bazaar'}
                </div>
                <div className="absolute top-10 right-6 text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-150 shadow-3xs">
                  {lang === 'UZ' || lang === 'RU' ? 'Mustaqillik Maydoni' : 'Amir Temur Square'}
                </div>

                {/* Main Tashkent City Mall glow pin */}
                <div className="absolute top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <span className="h-5 w-5 rounded-full bg-gold-500 flex items-center justify-center text-slate-950 font-black font-display text-[9px] map-marker-pulse shadow-md shadow-gold-500/30">
                    T
                  </span>
                  <span className="bg-slate-900 border border-gold-500/20 text-white font-serif font-black text-[9px] sm:text-[11px] rounded-lg py-1 px-2.5 mt-2 shadow-lg tracking-wider uppercase text-center whitespace-nowrap">
                    Tashkent City Mall
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* R-Grid: Form submission panel */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 border border-slate-200 rounded-3xl shadow-sm" id="feedback-form-container">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5" id="feedback-contact-form">
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 font-display font-semibold uppercase tracking-wider">{lang === 'UZ' ? 'Ism-sharifingiz' : lang === 'RU' ? 'Ваше Имя' : 'Your Full Name'}</label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'UZ' ? 'Iltimos, ismingizni kiriting...' : lang === 'RU' ? 'Иван Иванов' : 'Enter your name...'}
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold-600 font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-500 font-display font-semibold uppercase tracking-wider">{lang === 'UZ' ? 'Telefon raqam' : lang === 'RU' ? 'Номер Телефона' : 'Phone Number'}</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={handlePhoneChange}
                      placeholder="+998 90 123-45-67"
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold-600 font-mono font-bold"
                    />
                    {phoneError && <p className="text-rose-600 text-xs mt-1 font-medium">{phoneError}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-500 font-display font-semibold uppercase tracking-wider">{lang === 'UZ' ? 'Murojaat turi' : lang === 'RU' ? 'Тип обращения' : 'Inquiry Type'}</label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full bg-white border border-slate-200 text-gold-600 font-bold rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold-600 hover:border-gold-500/35 transition-colors cursor-pointer"
                    >
                      <option value="marketing">{lang === 'UZ' ? 'Tijorat va Reklama' : lang === 'RU' ? 'Реклама и Маркетинг' : 'Marketing & Ad Proposals'}</option>
                      <option value="lease">{lang === 'UZ' ? 'Do\'kon ijarasi (Arenda)' : lang === 'RU' ? 'Аренда помещений' : 'Retail Space Leasing'}</option>
                      <option value="feedback">{lang === 'UZ' ? 'Fikr va shikoyat' : lang === 'RU' ? 'Предложение и Отзыв' : 'General Help & Feedback'}</option>
                      <option value="jobs">{lang === 'UZ' ? 'Karyera va Vakansiyalar' : lang === 'RU' ? 'Вакансии и Карьера' : 'Careers & Vacancies'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-500 font-display font-semibold uppercase tracking-wider">{lang === 'UZ' ? 'Xat / Murojaat matni' : lang === 'RU' ? 'Сообщение' : 'Message Text'}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={lang === 'UZ' ? 'Taklifingizni barcha tafsilotlari bilan batafsil yozib qoldiring...' : lang === 'RU' ? 'Текст вашего обращения...' : 'Describe your inquiries or suggestions here...'}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold-600 placeholder-slate-400 font-sans leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-display font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
                  id="feedback-form-submit"
                >
                  <Send size={15} />
                  <span>{lang === 'UZ' ? 'MUROJAATNI YUBORISH' : lang === 'RU' ? 'ОТПРАВИТЬ ОБРАЩЕНИЕ' : 'SUBMIT CONTACT REQUEST'}</span>
                </button>
              </form>
            ) : (
              // Beautiful Custom confirmation receipt
              <div className="p-4.5 text-center space-y-5 animate-fade-in flex flex-col items-center justify-center min-h-[380px]">
                
                <div className="bg-emerald-500/10 p-5 rounded-full text-emerald-600 border border-emerald-500/20">
                  <CheckCircle2 size={44} />
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-600 font-display font-black text-lg uppercase tracking-wider">
                    {lang === 'UZ' ? 'MUROJAAT QABUL QILINDI!' : lang === 'RU' ? 'ОБРАЩЕНИЕ ОТПРАВЛЕНО!' : 'INQUIRY SUBMITTED SUCCESSFULLY!'}
                  </h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    {lang === 'UZ'
                      ? `Hurmatli ${formName}, sizning arizangiz muvaffaqiyatli qabul qilindi. Hamkorlik bo'limimiz mutaxassislari tez fursatda siz bog'langan raqam orqali aloqaga chiqishadi.`
                      : lang === 'RU'
                        ? `Уважаемый(ая) ${formName}, ваше обращение успешно отправлено. Наши менеджеры рассмотрят его и свяжутся с вами в ближайшее время.`
                        : `Dear ${formName}, your contact inquiry has been logged. Our administration team will review your message details and follow up on the provided contact number shortly.`}
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-slate-200 rounded-2xl w-full max-w-xs text-left text-xs font-mono space-y-1 text-slate-600">
                  <p><span className="text-slate-500">{lang === 'UZ' ? 'Mavzu:' : lang === 'RU' ? 'Тема:' : 'Topic:'}</span> <span className="text-slate-900 font-semibold">{formSubject.toUpperCase()}</span></p>
                  <p><span className="text-slate-500">{lang === 'UZ' ? 'Tel:' : lang === 'RU' ? 'Тел:' : 'Tel:'}</span> <span className="text-slate-900 font-semibold">{formPhone}</span></p>
                  <p><span className="text-slate-500">{lang === 'UZ' ? 'Stat:' : lang === 'RU' ? 'Статус:' : 'Status:'}</span> <span className="text-emerald-600 font-semibold font-sans">{lang === 'UZ' ? 'Ko\'rib chiqilmoqda' : lang === 'RU' ? 'На рассмотрении' : 'Under Review'}</span></p>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-display font-bold uppercase transition-colors cursor-pointer"
                >
                  {lang === 'UZ' ? 'Yangi murojaat yuborish' : lang === 'RU' ? 'Написать ещё' : 'Send Another Message'}
                </button>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
