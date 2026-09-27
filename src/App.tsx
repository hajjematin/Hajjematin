/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  ChevronDown,
  Copy,
  Check,
  Building,
  ShieldCheck,
  Instagram,
  ArrowLeft,
  Send,
  MessageCircle,
  Zap,
  Globe2,
  Star,
  BadgeCheck,
  Eye,
  Users,
  BookOpen,
  Calendar,
  X,
  Share2,
  ExternalLink
} from 'lucide-react';
import { articles, Article } from './data/articles';

export default function App() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const phoneNumber = '09104203220';
  const whatsappUrl = `https://wa.me/989104203220?text=${encodeURIComponent(
    'سلام، جهت استعلام، خرید فیش حج عمره و ارسال مدارک پیام می‌دهم.'
  )}`;
  const whatsappTehranUrl = `https://wa.me/989104203220?text=${encodeURIComponent(
    'سلام، متقاضی خرید فیش حج عمره تهران (۲۶ میلیون تومان) هستم. لطفاً راهنمایی بفرمایید.'
  )}`;
  const whatsappCountyUrl = `https://wa.me/989104203220?text=${encodeURIComponent(
    'سلام، متقاضی خرید فیش حج عمره شهرستان (۲۸ میلیون تومان - غیرحضوری) هستم. لطفاً راهنمایی بفرمایید.'
  )}`;
  const baleUrl = 'https://ble.ir/09104203220';

  const reviews = [
    {
      name: 'حاج عبدالحمید ریگی',
      initials: 'ح‌ر',
      location: 'زاهدان (سیستان و بلوچستان)',
      packageType: 'خرید فیش عمره غیرحضوری',
      rating: 5,
      date: 'دیروز',
      text: '«از زاهدان پیام دادم، ابتدا مردد بودم چون فاصله زیاده اما برادران حج متین با کمال صداقت و امانتداری استعلام رو برام فرستادن و همون روز کارم به صورت غیرحضوری حل شد. دستمریزاد.»',
    },
    {
      name: 'کاک فریدون رحمانی',
      initials: 'ف‌ر',
      location: 'سنندج (کردستان)',
      packageType: 'خرید فیش عمره غیرحضوری',
      rating: 5,
      date: '۴ روز پیش',
      text: '«با سلام به برادران متین. مدارک شناسنامه و کارت ملی رو از سنندج در واتساپ فرستادم و بدون نیاز به یک قدم رفت‌وآمد کل مراحل اداری فیش عمره انجام شد. بسیار منصف و متعهد هستید.»',
    },
    {
      name: 'حاج امان‌محمد نوری',
      initials: 'ا‌ن',
      location: 'گنبد کاووس (گلستان)',
      packageType: 'خرید فیش عمره غیرحضوری',
      rating: 5,
      date: 'هفته گذشته',
      text: '«ما از استان گلستان خریدیم. سرعت پاسخگویی و پیگیری صفر تا صد کارشناسان حج متین عالی بود. تسویه هم دقیقاً بعد از تایید نهایی انجام شد. خداوند بهتون خیر بده.»',
    },
    {
      name: 'حاج محسن رضایی',
      initials: 'م‌ر',
      location: 'تهران',
      packageType: 'خرید فیش حج عمره تهران',
      rating: 5,
      date: '۳ روز پیش',
      text: '«فیش رو کمتر از یک روز به نامم منتقل کردن. با تشکر از برخورد محترمانه و پاسخگویی سریع آقای شیرازی در واتساپ. واقعاً بدون دغدغه و استرس انجام شد.»',
    },
    {
      name: 'خانم فاطمه کریمی',
      initials: 'ف‌ک',
      location: 'اصفهان',
      packageType: 'خرید فیش عمره شهرستان (غیرحضوری)',
      rating: 5,
      date: 'هفته گذشته',
      text: '«چون ساکن اصفهان بودیم خیلی نگران فرایند انتقال بودم، ولی بدون نیاز به سفر به تهران همه مراحل به صورت کاملاً غیرحضوری انجام شد و استعلام رسمی رو تحویل گرفتم.»',
    },
    {
      name: 'مهندس علیرضا حسینی',
      initials: 'ع‌ح',
      location: 'مشهد مقدس',
      packageType: 'خرید فیش عمره شهرستان',
      rating: 5,
      date: '۲ هفته پیش',
      text: '«استعلام اصالت فیش رو قبل از تسویه برام فرستادن و بعد با اطمینان کامل واریز کردم. خدا به کسب‌وکارتون برکت بده، ان‌شاءالله در حرمین شریفین نایب‌الزیاره خواهم بود.»',
    },
    {
      name: 'حاج علی‌اکبر صادقی',
      initials: 'ع‌ص',
      location: 'شیراز',
      packageType: 'خرید فیش عمره شهرستان (غیرحضوری)',
      rating: 5,
      date: 'ماه گذشته',
      text: '«مدارک رو ساعت ۱۰ صبح در بله فرستادم و تا عصر کل مراحل انتقال نهایی شد. سرعت عمل، پاسخگویی دقیق و صداقت کارشناسان مجموعه حج متین واقعاً ستودنیه.»',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const faqs = [
    {
      q: 'آیا انتقال فیش حج عمره به صورت کاملاً قانونی انجام می‌شود؟',
      a: 'بله، تمامی فرایند انتقال با رعایت کامل ضوابط قانونی انجام شده و فیش به صورت قطعی به نام خریدار محترم منتقل می‌شود و شما مالک قانونی و رسمی فیش خواهید بود.',
    },
    {
      q: 'فرایند انتقال چقدر زمان می‌برد؟',
      a: 'انتقال یک‌روزه، فوری و مطمئن است. پس از ارسال تصاویر مدارک در واتساپ یا بله و تایید اولیه توسط کارشناسان، مراحل در همان روز یا حداکثر ۲۴ ساعت کاری تکمیل می‌گردد.',
    },
    {
      q: 'انتقال فیش برای خریداران شهرستان چگونه انجام می‌شود؟',
      a: 'برای خریداران محترم شهرستان، کلیه مراحل به صورت کاملاً غیرحضوری و مطمئن انجام می‌شود و نیازی به هیچ‌گونه سفر، تردد یا مراجعه حضوری نخواهد بود.',
    },
    {
      q: 'نحوه پرداخت و تسویه وجه چگونه است؟',
      a: 'تسویه حساب پس از استعلام نهایی و همزمان با انتقال قطعی فیش به نام خریدار انجام می‌شود تا خریدار محترم با اطمینان خاطر کامل و بدون دغدغه خرید خود را نهایی کند.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-gray-800 antialiased font-sans selection:bg-[#064E3B] selection:text-white pb-24 md:pb-12">
      
      {/* Toast Notification */}
      {copiedPhone && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#064E3B] text-white px-4 py-2.5 rounded-full shadow-lg text-xs sm:text-sm font-medium flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-[#D97706]" />
          <span>شماره ۰۹۱۰۴۲۰۳۲۲۰ در حافظه کپی شد</span>
        </div>
      )}

      {/* Header Section */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex-shrink-0 group" aria-label="صفحه اصلی حج متین">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-1 bg-[#064E3B] shadow-sm border border-amber-400/40 flex items-center justify-center overflow-hidden">
                <img
                  src="logo.png"
                  alt="لوگوی طلایی حج متین"
                  className="w-full h-full object-contain aspect-square select-none"
                  loading="eager"
                />
              </div>
            </a>
            <div className="flex flex-col">
              <a href="#" className="flex items-center gap-1.5 group">
                <span className="text-xl sm:text-2xl font-black text-[#064E3B] tracking-tight group-hover:text-[#043629] transition-colors">حج متین</span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#D97706]"></span>
              </a>
              {/* Trust Badge - Link to Instagram */}
              <a
                href="https://www.instagram.com/hajjematin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-600 hover:text-[#D97706] font-medium transition-colors"
                title="صفحه رسمی حج متین در اینستاگرام"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D97706]" />
                <span>بیش از ۹۰,۰۰۰ همراه در اینستاگرام</span>
              </a>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-gray-700">
            <a href="#pricing" className="hover:text-[#064E3B] transition-colors">قیمت روز فیش</a>
            <a href="#reviews" className="hover:text-[#064E3B] transition-colors">رضایت خریداران</a>
            <a href="#articles" className="hover:text-[#064E3B] transition-colors text-emerald-800 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
              <span>راهنمای خرید و مقالات</span>
            </a>
            <a href="#faq" className="hover:text-[#064E3B] transition-colors">پرسش‌های متداول</a>
          </nav>

          {/* Support Phone & Copy Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              title="کپی شماره"
              className="hidden sm:inline-flex p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-[#064E3B] border border-emerald-800/15 font-semibold text-xs sm:text-sm transition-all duration-150 active:scale-95 shadow-xs"
              aria-label="تماس با پشتیبانی حج متین"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span className="hidden sm:inline">پشتیبانی:</span>
              <span
                className="tracking-wider font-bold inline-block"
                dir="ltr"
                style={{ fontSize: '10px', textAlign: 'center', lineHeight: '43px', height: '40px', width: '85px' }}
              >
                0910 420 3220
              </span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">

        {/* Hero Section */}
        <section className="text-center relative pb-8">
          
          {/* Small Indicator / Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/20 text-[#B45309] text-xs sm:text-sm font-semibold mb-5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse"></span>
            <span>حج متین؛ راهی مطمئن به سوی خانه خدا</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#064E3B] tracking-tight leading-[1.3] mb-4">
            واگذاری و خرید فوری فیش حج عمره
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            انجام صفر تا صد کلیه مراحل اداری و انتقال قانونی در کوتاه‌ترین زمان، بدون معطلی و بدون هزینه اضافی در سراسر کشور.
          </p>

          {/* The Exact 3 Trust Proof Cards Requested by User */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto text-xs sm:text-sm font-bold text-gray-800">
            
            {/* 1) فروش فیش حج عمره به سراسر ایران */}
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-white border border-emerald-900/10 shadow-xs hover:border-[#064E3B]/30 transition-all">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-xs font-black">
                ۱
              </span>
              <span className="text-gray-900">فروش فیش حج عمره به سراسر ایران</span>
            </div>

            {/* 2) انتقال یک روزه فوری و مطمئن */}
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-white border border-emerald-900/10 shadow-xs hover:border-[#064E3B]/30 transition-all">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-xs font-black">
                ۲
              </span>
              <span className="text-gray-900">انتقال یک روزه فوری و مطمئن</span>
            </div>

            {/* 3) همین حالا با خیال راحت و بدون هیچ معطلی اقدام کن */}
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-300/60 shadow-xs hover:border-amber-400 transition-all">
              <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center flex-shrink-0 text-xs font-black">
                ۳
              </span>
              <span className="text-amber-900">همین حالا با خیال راحت و بدون هیچ معطلی اقدام کن</span>
            </div>

          </div>

          {/* Live Visitor & Views Counter Strip */}
          <div className="mt-6 p-3.5 rounded-2xl bg-white/95 border border-emerald-900/10 shadow-xs max-w-2xl mx-auto flex flex-wrap items-center justify-around gap-3 text-xs text-gray-700">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-gray-500">آنلاین در این لحظه:</span>
              <span className="font-bold text-[#064E3B]">۳۲ نفر</span>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 font-medium">
              <Eye className="w-4 h-4 text-[#D97706]" />
              <span className="text-gray-500">بازدید امروز:</span>
              <span className="font-bold text-gray-900">۳,۴۸۰+</span>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-gray-500">کل بازدیدها:</span>
              <span className="font-bold text-gray-900">۱۴۸,۹۰۰+ زائر</span>
            </div>
          </div>

        </section>

        {/* Pricing Cards Section */}
        <section className="py-6 sm:py-8" id="pricing">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B] mb-1">تعرفه و قیمت روز فیش حج عمره</h2>
            <p className="text-xs sm:text-sm text-gray-500">قیمت‌های شفاف، مقطوع و به‌روزشده با انتقال قانونی</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Card 1: فیش حج عمره تهران */}
            <div className="relative bg-white rounded-2xl p-6 border-2 border-emerald-800/15 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div className="absolute -top-3 right-6 bg-[#064E3B] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                ویژه استان تهران
              </div>

              <div>
                <div className="flex items-start justify-between mb-4 mt-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">فیش حج عمره تهران</h3>
                    <p className="text-xs text-gray-500 mt-0.5">آماده انتقال فوری و قطعی به نام خریدار</p>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center font-bold">
                    <Building className="w-5 h-5" />
                  </span>
                </div>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-xl bg-[#FDFCF7] border border-amber-900/10 text-center">
                  <span className="text-xs text-gray-500 block mb-1">قیمت تمام‌شده و مقطوع:</span>
                  <div className="flex items-baseline justify-center gap-1.5 text-[#D97706]">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">۲۶,۰۰۰,۰۰۰</span>
                    <span className="text-sm font-bold text-gray-700">تومان</span>
                  </div>
                </div>

                {/* Benefits List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>استعلام آنلاین و تایید اصالت فیش قبل از تسویه</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>انتقال یک‌روزه و ثبت قطعی به نام خریدار</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>انجام کلیه مراحل بدون هیچ‌گونه معطلی</span>
                  </li>
                </ul>
              </div>

              {/* Action Button for Card 1 */}
              <a
                href={whatsappTehranUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#064E3B] hover:bg-[#043427] text-white text-center font-bold text-sm transition-all duration-150 active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
              >
                <span>درخواست خرید فیش تهران</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: فیش حج عمره شهرستان (کاملاً غیرحضوری) */}
            <div className="relative bg-white rounded-2xl p-6 border-2 border-amber-600/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div className="absolute -top-3 right-6 bg-[#D97706] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                ۱۰۰٪ غیرحضوری در سراسر کشور
              </div>

              <div>
                <div className="flex items-start justify-between mb-4 mt-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">فیش حج عمره شهرستان</h3>
                    <p className="text-xs text-gray-500 mt-0.5">انتقال کاملاً غیرحضوری در کلیه استان‌ها و شهرستان‌ها</p>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </span>
                </div>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-xl bg-[#FDFCF7] border border-amber-900/10 text-center">
                  <span className="text-xs text-gray-500 block mb-1">قیمت تمام‌شده و مقطوع:</span>
                  <div className="flex items-baseline justify-center gap-1.5 text-[#D97706]">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">۲۸,۰۰۰,۰۰۰</span>
                    <span className="text-sm font-bold text-gray-700">تومان</span>
                  </div>
                </div>

                {/* Benefits List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>انتقال ۱۰۰٪ غیرحضوری بدون نیاز به مراجعه حضوری</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>پوشش کلیه استان‌ها با پیگیری کامل کارشناسان</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>بدون هیچ‌گونه هزینه اضافه یا کمیسیون پنهان</span>
                  </li>
                </ul>
              </div>

              {/* Action Button for Card 2 */}
              <a
                href={whatsappCountyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-center font-bold text-sm transition-all duration-150 active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
              >
                <span>درخواست خرید فیش شهرستان (غیرحضوری)</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

        {/* Required Documents Box */}
        <section className="py-6 sm:py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-900/10 shadow-sm relative overflow-hidden">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#064E3B]">مدارک مورد نیاز جهت انتقال فوری</h2>
                <p className="text-xs text-gray-500">فرایند ساده و بدون نیاز به تشریفات پیچیده</p>
              </div>
            </div>

            {/* Document Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFCF7] border border-gray-200/80">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  ۱
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-sm block">فقط اسکن یا تصویر صفحه اول شناسنامه</span>
                  <span className="text-xs text-gray-500 mt-0.5 block">عکس باکیفیت و واضح با گوشی تلفن همراه کافیست.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFCF7] border border-gray-200/80">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  ۲
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-sm block">اسکن یا تصویر روی کارت ملی</span>
                  <span className="text-xs text-gray-500 mt-0.5 block">کارت ملی هوشمند یا رسید معتبر ثبت‌احوال.</span>
                </div>
              </div>

            </div>

            {/* Note & Urgency Callout */}
            <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                مدارک فوق را در <span className="font-bold text-[#064E3B]">واتساپ</span> یا <span className="font-bold text-[#064E3B]">بله</span> بفرستید تا استعلام و انتقال در <span className="font-bold underline decoration-[#D97706]">همان روز</span> پیگیری و هماهنگ شود.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Buttons Section */}
        <section className="py-6 sm:py-8" id="contact">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B] mb-1">ارسال سریع مدارک و ثبت درخواست</h2>
            <p className="text-xs sm:text-sm text-gray-500">روی یکی از پیام‌رسان‌های زیر بزنید و مدارک را فوراً ارسال فرمایید</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            
            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold transition-all duration-150 shadow-md active:scale-98"
            >
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </span>
                <div className="text-right">
                  <span className="block text-base font-bold">ارسال به واتساپ</span>
                  <span className="block text-xs text-emerald-100 font-normal">شروع گفتگو با متن پیش‌فرض</span>
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 text-white/80 group-hover:-translate-x-1 transition-transform" />
            </a>

            {/* Bale Button */}
            <a
              href={baleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-[#00A859] hover:bg-[#00924d] text-white font-bold transition-all duration-150 shadow-md active:scale-98"
            >
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-lg font-black">
                  بله
                </span>
                <div className="text-right">
                  <span className="block text-base font-bold">ارسال به پیام‌رسان بله</span>
                  <span className="block text-xs text-emerald-100 font-normal">ارسال مستقیم مدارک در بله</span>
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 text-white/80 group-hover:-translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Direct Call Box */}
          <div className="max-w-2xl mx-auto mt-4 p-4 rounded-2xl bg-white border border-gray-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3 text-right">
              <span className="w-10 h-10 rounded-full bg-emerald-50 text-[#064E3B] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <span className="block font-bold text-gray-900 text-sm">نیاز به مشاوره تلفنی فوری دارید؟</span>
                <span className="block text-xs text-gray-500">کارشناسان ما پاسخگوی تمامی پرسش‌های شما هستند</span>
              </div>
            </div>
            <a
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#033427] text-white font-bold text-sm transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>تماس مستقیم:</span>
              <span className="tracking-wider font-bold" dir="ltr">0910 420 3220</span>
            </a>
          </div>

        </section>

        {/* The Exact 3-Step Section Requested by User */}
        {/* مراحل انتقال سریع و مطمئن در 3 گام */}
        <section className="py-6 sm:py-8 border-t border-gray-200/60">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B] mb-1">مراحل انتقال سریع و مطمئن در 3 گام</h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">شفاف، فوری و مطمئن با پیگیری صفر تا صد با «حج متین»</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Step 1 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs relative">
              <span className="text-3xl font-black text-amber-500/20 absolute top-4 left-4">۰۱</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center font-bold mb-3">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">۱. ارسال تصاویر مدارک مورد نیاز</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                ارسال تصویر شناسنامه و کارت ملی در واتساپ یا بله جهت بررسی و ثبت اولیه پرونده.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs relative">
              <span className="text-3xl font-black text-amber-500/20 absolute top-4 left-4">۰۲</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center font-bold mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">۲. بررسی و تایید اولیه توسط کارشناسان حج متین</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                استعلام رسمی اصالت فیش و بررسی اطلاعات هویتی و ثبت در کوتاه‌ترین زمان.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs relative">
              <span className="text-3xl font-black text-amber-500/20 absolute top-4 left-4">۰۳</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">۳. تسویه حساب و انتقال قطعی به نام خریدار</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                تکمیل سریع مراحل اداری و انتقال قطعی و رسمی فیش به نام خریدار محترم.
              </p>
            </div>

          </div>
        </section>

        {/* Customer Satisfaction & Reviews Section (رضایت خریداران) */}
        <section className="py-6 sm:py-8 border-t border-gray-200/60" id="reviews">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-800/15 text-[#064E3B] text-xs font-semibold mb-2">
              <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
              <span>صدای خریداران و زائرین گرامی</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B] mb-1">رضایتمندی خریداران فیش حج عمره</h2>
            <p className="text-xs sm:text-sm text-gray-500">نظرات واقعی همراهانی که فیش خود را با اطمینان کامل از «حج متین» تحویل گرفتند</p>
          </div>

          {/* Overall Trust Metric Strip */}
          <div className="mb-6 p-4 rounded-2xl bg-white border border-emerald-900/10 shadow-2xs flex flex-wrap items-center justify-around gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">۴.۹ از ۵</span>
              <span className="text-xs text-gray-500">(بیش از ۱,۲۰۰ انتقال موفق)</span>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <div className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>میانگین سرعت انتقال: <strong>کمتر از ۲۴ ساعت</strong></span>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <div className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>تضمین ۱۰۰٪ اصالت و استعلام رسمی</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl border border-amber-500/30 flex-shrink-0 bg-emerald-50 text-[#064E3B] font-black text-sm flex items-center justify-center shadow-2xs">
                        <span>{rev.initials}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-gray-900 text-sm">{rev.name}</span>
                          <BadgeCheck className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-[11px] text-gray-500">{rev.location} · {rev.packageType}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {rev.text}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    انتقال قطعی
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional SEO Articles & Guides Section (دانشنامه و مقالات تخصصی حج عمره) */}
        <section className="py-8 sm:py-10 border-t border-gray-200/60" id="articles">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-800/15 text-[#064E3B] text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#D97706]" />
              <span>دانشنامه و مقالات تخصصی حج عمره مفرده</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B] mb-1">راهنمای جامع خرید فیش حج عمره و قوانین روز</h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
              مجموعه مقالات موثق درباره قیمت روز، نحوه انتقال قانونی، استعلام اصالت و آموزش خرید غیرحضوری فیش عمره
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {articles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-xs transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/60">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug hover:text-[#064E3B] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {art.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {art.focusKeywords.slice(0, 3).map((kw, kIdx) => (
                      <span key={kIdx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                        #{kw.replace(/\s+/g, '_')}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">{art.author}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#064E3B] hover:bg-[#043629] text-white text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                  >
                    <span>مطالعه کامل مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom SEO Callout */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-800/15 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-700 mb-2">
              سوالی درباره <strong>خرید فیش حج عمره</strong> یا شرایط انتقال دارید که در مقالات پاسخ داده نشده است؟
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#064E3B] text-white text-xs font-bold shadow-xs hover:bg-[#033427] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>تماس مستقیم با کارشناس</span>
                <span dir="ltr">0910 420 3220</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>پیام در واتساپ</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 sm:py-8 border-t border-gray-200/60 mb-6" id="faq">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#064E3B] mb-1">پرسش‌های متداول خریداران</h2>
            <p className="text-xs sm:text-sm text-gray-500">پاسخ به سوالات متداول متقاضیان خرید فیش حج عمره</p>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-right font-bold text-sm text-gray-900 hover:bg-gray-50/80 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-[#D97706]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#033427] text-gray-300 py-8 px-4 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#064E3B] border border-amber-400/40 p-1 flex items-center justify-center">
              <img
                src="logo.png"
                alt="حج متین"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-black text-white text-base block">حج متین</span>
              <span className="text-xs text-amber-400/90 block">راهی مطمئن و قانونی به سوی خانه خدا</span>
            </div>
          </div>

          <div className="text-xs text-gray-400">
            <span>شماره پشتیبانی و مشاوره: </span>
            <a href={`tel:${phoneNumber}`} className="text-amber-400 font-bold hover:underline" dir="ltr">
              0910 420 3220
            </a>
            <span className="block mt-1">کلیه حقوق برای مجموعه «حج متین» محفوظ است.</span>
          </div>

        </div>
      </footer>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-emerald-900/15 overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#064E3B] to-[#043629] text-white flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-white/10">
                  {selectedArticle.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-4 text-right">
              <h2 className="text-lg sm:text-2xl font-black text-[#064E3B] leading-snug">
                {selectedArticle.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-3">
                <span>نویسنده: {selectedArticle.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {selectedArticle.readTime}
                </span>
                <span>•</span>
                <span>به‌روزرسانی: {selectedArticle.dateModified}</span>
              </div>

              {/* Table of contents */}
              <div className="bg-amber-50/70 border border-amber-800/15 rounded-2xl p-4 my-3">
                <span className="font-bold text-xs text-[#B45309] block mb-2">فهرست سرفصل‌های این مقاله:</span>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                  {selectedArticle.tableOfContents.map((toc, tIdx) => (
                    <li key={tIdx}>{toc}</li>
                  ))}
                </ul>
              </div>

              {/* HTML Content */}
              <div
                className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-3"
                dangerouslySetInnerHTML={{ __html: selectedArticle.contentHtml }}
              />

              {/* Tags */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 block mb-2">کلمات کلیدی مقاله:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArticle.focusKeywords.map((kw, idx) => (
                    <span key={idx} className="text-xs bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-800/15 font-medium">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Call to Action */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
              <span className="text-xs text-gray-600 font-medium">سوالی درباره این مطلب دارید؟</span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#064E3B] text-white text-xs font-bold hover:bg-[#033427] transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>تماس: 09104203220</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-3.5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold transition-all cursor-pointer"
                >
                  بستن
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Fixed Bottom Sticky Bar for Mobile Users */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200/90 p-2.5 shadow-lg md:hidden">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white font-bold text-[11px] shadow-xs active:scale-95"
          >
            <MessageCircle className="w-5 h-5 mb-0.5" />
            <span>واتساپ</span>
          </a>

          {/* Bale */}
          <a
            href={baleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#00A859] text-white font-bold text-[11px] shadow-xs active:scale-95"
          >
            <span className="text-sm font-black mb-0.5 leading-none">بله</span>
            <span>ارسال مدارک</span>
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#064E3B] text-white font-bold text-[11px] shadow-xs active:scale-95"
          >
            <Phone className="w-5 h-5 mb-0.5" />
            <span>تماس تلفنی</span>
          </a>

        </div>
      </div>

    </div>
  );
}
