export interface Article {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  author: string;
  focusKeywords: string[];
  tableOfContents: string[];
  contentHtml: string;
}

export const articles: Article[] = [
  {
    id: 'omrah-ticket-transfer-guide',
    slug: 'omrah-ticket-transfer-guide',
    title: 'راهنمای جامع خرید فیش حج عمره در سال ۱۴۰۳ و ۱۴۰۴؛ مراحل انتقال قانونی و فوری',
    shortDesc: 'همه چیز درباره نحوه خرید فیش حج عمره، استعلام اصالت، انتقال قطعی به نام خریدار در کمتر از ۲۴ ساعت و تفاوت فیش تهران و شهرستان بدون نیاز به مراجعه حضوری.',
    category: 'راهنمای خرید و انتقال',
    readTime: '۷ دقیقه مطالعه',
    datePublished: '2024-10-15',
    dateModified: '2024-11-20',
    author: 'کارشناس ارشد انتقال حج متین',
    focusKeywords: ['خرید فیش حج عمره', 'انتقال قانونی فیش عمره', 'فیش حج عمره مفرده', 'استعلام اصالت فیش حج', 'قیمت فیش حج عمره'],
    tableOfContents: [
      'مقدمه و وضعیت اعزام‌های جدید عمره مفرده',
      'فرایند انتقال قانونی فیش حج عمره به نام خریدار',
      'آیا خرید فیش حج عمره شهرستان برای همه امکان‌پذیر است؟',
      'مدارک لازم برای خرید و انتقال قطعی فیش عمره',
      'نکات حیاتی برای جلوگیری از کلاهبرداری در خرید فیش حج',
      'چرا زائرین مجموعه «حج متین» را انتخاب می‌کنند؟'
    ],
    contentHtml: `
      <p class="lead text-base sm:text-lg font-medium text-gray-800 leading-relaxed mb-4">
        با از سرگیری اعزام‌های کاروان‌های حج عمره مفرده پس از سال‌ها انتظار، تقاضا برای <strong>خرید فیش حج عمره</strong> به اوج خود رسیده است. از آنجا که ثبت‌نام جدیدی در بانک‌های ملی و ملت انجام نمی‌شود، تنها راه قانونی و معتبر برای تشرف به حرمین شریفین، خرید امتیاز فیش ثبت‌نامی‌های دوره‌های قبل با انتقال رسمی به نام زائر جدید است.
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۱. فرایند انتقال قانونی فیش حج عمره به نام خریدار</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        فرایند انتقال فیش حج عمره باید از مسیرهای ضابطه‌مند و مورد تایید سامانه جامع حج و زیارت صورت پذیرد. در روش‌های منسوخ گذشته، تشریفات پیچیده و اتلاف وقت چند هفته‌ای زائران را کلافه می‌کرد؛ اما در سیستم مدرن و چابک <strong>حج متین</strong>، فرایند به شکلی تنظیم شده که کلیه امور انتقال، تطبیق مدارک و استعلام سیستماتیک ظرف <strong>کمتر از ۲۴ ساعت کاری</strong> نهایی می‌شود.
      </p>
      <ul class="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4 bg-emerald-50/50 p-4 rounded-xl border border-emerald-900/10">
        <li><strong>استعلام سیستمی اصالت فیش:</strong> بررسی سابقه ثبت‌نام، اولویت فیش و عدم مسدودی یا واگذاری قبلی.</li>
        <li><strong>تنظیم و صدور تاییدیه قطعی:</strong> انتقال رسمی امتیاز فیش به کد ملی و مشخصات شناسنامه‌ای خریدار محترم.</li>
        <li><strong>تسویه حساب همزمان با انتقال:</strong> پرداخت وجه فیش دقیقاً پس از مشاهده استعلام و اطمینان کامل از اصالت.</li>
      </ul>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۲. انتقال فیش حج عمره شهرستان برای سراسر ایران (غیرحضوری)</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        یکی از دغدغه‌های اصلی زائرین محترم در استان‌های مختلف کشور مانند اصفهان، خراسان، سیستان و بلوچستان، کردستان، گلستان، فارس، آذربایجان و خوزستان، لزوم سفر به تهران یا مراکز استان‌ها بود. 
      </p>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        خوشبختانه با تدابیر اتخاذ شده در <strong>حج متین</strong>، خریداران سراسر کشور می‌توانند بدون نیاز به یک کیلومتر تردد، صرفاً با ارسال تصاویر مدارک شناسایی در شبکه‌های ارتباطی نظیر <em>واتساپ</em> یا پیام‌رسان <em>بله</em>، انتقال فیش خود را به صورت ۱۰۰٪ غیرحضوری دریافت نموده و مدارک ثبت‌شده نهایی را تحویل بگیرند.
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۳. مدارک لازم جهت خرید فیش عمره مفرده</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        برای تسریع در انتقال یک‌روزه، خریدار محترم تنها به ارائه مدارک زیر نیاز دارد:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div class="p-3 bg-white rounded-xl border border-gray-200">
          <span class="font-bold text-gray-900 block text-sm">۱. اصل یا تصویر واضح کارت ملی</span>
          <span class="text-xs text-gray-500">پشت و روی کارت ملی هوشمند یا برگه رسید ثبت‌نام</span>
        </div>
        <div class="p-3 bg-white rounded-xl border border-gray-200">
          <span class="font-bold text-gray-900 block text-sm">۲. تمام صفحات شناسنامه خریدار</span>
          <span class="text-xs text-gray-500">جهت تطبیق هویتی و ثبت در پرونده الکترونیک</span>
        </div>
        <div class="p-3 bg-white rounded-xl border border-gray-200">
          <span class="font-bold text-gray-900 block text-sm">۳. شماره تماس همراه فعال به نام خریدار</span>
          <span class="text-xs text-gray-500">جهت دریافت پیامک‌های تاییدیه و رهگیری</span>
        </div>
        <div class="p-3 bg-white rounded-xl border border-gray-200">
          <span class="font-bold text-gray-900 block text-sm">۴. آدرس پستی دقیق و کد پستی</span>
          <span class="text-xs text-gray-500">جهت ثبت در سامانه رسمی زائرین</span>
        </div>
      </div>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۴. هشدارهای امنیتی در خرید فیش حج عمره</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        متاسفانه با افزایش تقاضا، افراد سودجو با ارائه قیمت‌های غیرواقعی بسیار پایین اقدام به فریب زائران می‌کنند. همواره به این نکات توجه فرمایید:
      </p>
      <ol class="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
        <li>هرگز قبل از دریافت استعلام معتبر، بیعانه یا کل مبلغ را واریز نکنید.</li>
        <li>از خرید فیش‌های دارای منع قانونی، فیش‌های ورثه‌ای بلاتکلیف یا فیش‌های فاقد اولویت اعزام خودداری نمایید.</li>
        <li>با مراکزی همکاری کنید که هویت شفاف، سابقه طولانی و اعتماد ده‌ها هزار همراه داشته باشند (مانند پیج ۹۰,۰۰۰ نفره حج متین در اینستاگرام).</li>
      </ol>
    `
  },
  {
    id: 'omrah-ticket-price-factors',
    slug: 'omrah-ticket-price-factors',
    title: 'قیمت فیش حج عمره چقدر است و به چه عواملی بستگی دارد؟ (تحلیل روز ۱۴۰۳ و ۱۴۰۴)',
    shortDesc: 'بررسی دقیق نرخ روز فیش حج عمره مفرده، دلایل تفاوت قیمت فیش تهران و شهرستان، اثر اولویت اعزام و نکات طلایی خرید با بهترین قیمت و بدون واسطه.',
    category: 'قیمت‌گذاری و بازار',
    readTime: '۵ دقیقه مطالعه',
    datePublished: '2024-10-22',
    dateModified: '2024-11-25',
    author: 'واحد تحلیل بازار حج متین',
    focusKeywords: ['قیمت فیش حج عمره', 'نرخ روز فیش عمره', 'قیمت فیش عمره تهران', 'قیمت فیش عمره شهرستان', 'خرید بی واسطه فیش حج'],
    tableOfContents: [
      'دامنه قیمتی فیش حج عمره در حال حاضر',
      'عوامل تعیین‌کننده قیمت فیش عمره',
      'تفاوت قیمت فیش عمره تهران و شهرستان در چیست؟',
      'چرا خرید فیش عمره بدون واسطه به‌صرفه‌تر است؟',
      'پیش‌بینی روند قیمت‌ها در ماه‌های آتی'
    ],
    contentHtml: `
      <p class="lead text-base sm:text-lg font-medium text-gray-800 leading-relaxed mb-4">
        یکی از متداول‌ترین پرسش‌های متقاضیان زیارت بیت‌الله الحرام این است که: <strong>«قیمت فیش حج عمره امروز چقدر است و چه عواملی بر هزینه نهایی تاثیر می‌گذارند؟»</strong> در این تحلیل کارشناسی، ساختار قیمت‌گذاری فیش عمره مفرده را موشکافی می‌کنیم.
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۱. بازه قیمتی روز فیش عمره در مجموعه حج متین</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        در حال حاضر در مجموعه «حج متین» به عنوان مرجع تخصصی و بدون واسطه، نرخ‌گذاری‌ها با بالاترین سطح انصاف و شفافیت تعیین شده است:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-800/20">
          <span class="text-xs font-bold text-emerald-800 uppercase block mb-1">فیش حج عمره تهران</span>
          <span class="text-xl font-black text-[#064E3B] block mb-2">۲۸,۰۰۰,۰۰۰ تومان</span>
          <p class="text-xs text-gray-600 leading-relaxed">انتقال فوری، ثبت قطعی، آماده جهت کاروان‌بندی و اعزام از فرودگاه امام خمینی (ره).</p>
        </div>
        <div class="p-4 bg-amber-50 rounded-2xl border border-amber-800/20">
          <span class="text-xs font-bold text-amber-800 uppercase block mb-1">فیش حج عمره شهرستان</span>
          <span class="text-xl font-black text-[#D97706] block mb-2">۲۶,۰۰۰,۰۰۰ تومان</span>
          <p class="text-xs text-gray-600 leading-relaxed">انتقال ۱۰۰٪ غیرحضوری، معتبر برای تمامی استان‌های سراسر کشور با کمترین هزینه.</p>
        </div>
      </div>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۲. چه عواملی بر قیمت فیش عمره اثرگذارند؟</h3>
      <ul class="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 mb-4">
        <li><strong>اولویت فیش و سال ودیعه‌گذاری:</strong> فیش‌های ثبت‌نامی سال‌های ۱۳۸۷ تا ۱۳۹۰ دارای اولویت‌های فراخوان اولیه هستند و ارزش ویژه‌ای دارند.</li>
        <li><strong>منطقه صدور (تهران یا شهرستان):</strong> به دلیل حجم بالای پروازهای خروجی از پایتخت، فیش‌های تهران اندکی اختلاف قیمت با فیش‌های استانی دارند.</li>
        <li><strong>میزان عرضه و تقاضا در فصول زیارتی:</strong> در ایام ماه رجب، شعبان و به ویژه ماه مبارک رمضان به دلیل تقاضای مضاعف، ممکن است نرخ‌ها دچار نوسان گردند.</li>
        <li><strong>حذف دلالان و واسطه‌ها:</strong> خرید از پلتفرم‌های دست‌اول مانند حج متین، تا ۱۰ میلیون تومان صرفه‌جویی مالی در مقایسه با واسطه‌های گذری به همراه دارد.</li>
      </ul>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۳. راهنمای اقدام هوشمندانه برای خرید</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        اگر تصمیم قطعی برای تشرف دارید، توصیه کارشناسان این است که قبل از اتمام ظرفیت کاروان‌ها و افزایش فصلی نرخ‌ها، فیش خود را خریداری و استعلام قطعی آن را دریافت کنید تا نام شما در لیست اولویت‌های فعال درج شود.
      </p>
    `
  },
  {
    id: 'non-attendance-ticket-transfer',
    slug: 'non-attendance-ticket-transfer',
    title: 'آموزش خرید غیرحضوری فیش حج عمره در سراسر کشور بدون نیاز به سفر به تهران',
    shortDesc: 'چگونه از تبریز، مشهد، شیراز، زاهدان، اهواز، سنندج، گرگان و سایر شهرها فیش عمره مفرده بخریم؟ راهنمای کامل انتقال غیرحضوری در پیام‌رسان بله و واتساپ.',
    category: 'آموزش غیرحضوری',
    readTime: '۶ دقیقه مطالعه',
    datePublished: '2024-10-30',
    dateModified: '2024-11-28',
    author: 'پشتیبانی استانی حج متین',
    focusKeywords: ['خرید غیرحضوری فیش حج', 'فیش حج عمره شهرستان', 'انتقال فیش حج از راه دور', 'خرید فیش حج مشهد اصفهان شیراز', 'ارسال مدارک در بله'],
    tableOfContents: [
      'مزایای خرید غیرحضوری فیش حج برای زائرین شهرستانی',
      'گام‌به‌گام مراحل خرید غیرحضوری در حج متین',
      'تضمین امنیت و استعلام پیش از پرداخت',
      'مدت زمان دریافت مدارک تاییدشده',
      'پرسش‌های متداول خریداران غیرحضوری'
    ],
    contentHtml: `
      <p class="lead text-base sm:text-lg font-medium text-gray-800 leading-relaxed mb-4">
        بسیاری از مشتاقان زیارت خانه خدا در سراسر کشور با این سوال مواجهند که: <strong>«آیا می‌توان بدون سفر پرهزینه به تهران و از شهر محل سکونت، فیش حج عمره را به صورت کاملاً معتبر و قانونی به نام خود منتقل کرد؟»</strong> پاسخ قطعی بله است.
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۱. مزایای سرویس غیرحضوری حج متین</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        در روش‌های سنتی، خریدار مجبور بود برای یک انتقال ساده ساعت‌ها وقت صرف سفر، تهیه بلیت هواپیما یا قطار و اقامت در هتل کند. سیستم غیرحضوری حج متین مزایای زیر را فراهم آورده است:
      </p>
      <div class="space-y-2 mb-4">
        <div class="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
          <span class="text-sm text-gray-700"><strong>صرفه‌جویی چشمگیر در هزینه‌ها:</strong> حذف کامل هزینه‌های سنگین رفت‌وآمد و اقامت در پایتخت.</span>
        </div>
        <div class="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
          <span class="text-sm text-gray-700"><strong>سرعت بی‌نظیر:</strong> تکمیل انتقال در کمتر از ۲۴ ساعت کاری به جای روزها معطلی.</span>
        </div>
        <div class="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
          <span class="text-sm text-gray-700"><strong>پشتیبانی لحظه‌ای در واتساپ و بله:</strong> ارتباط مستقیم با کارشناس معتمد در تمام مراحل.</span>
        </div>
      </div>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۲. گام‌های ساده برای خرید غیرحضوری</h3>
      <ol class="list-decimal list-inside space-y-3 text-sm sm:text-base text-gray-700 mb-4 bg-gray-50 p-4 rounded-2xl border border-gray-200">
        <li><strong>تماس یا پیام اولیه:</strong> با شماره پشتیبانی <a href="tel:09104203220" class="text-emerald-700 font-bold">09104203220</a> تماس بگیرید یا در واتساپ/بله پیام دهید.</li>
        <li><strong>ارسال عکس مدارک:</strong> تصاویر کارت ملی هوشمند و شناسنامه زائر را از طریق پیام‌رسان بله یا واتساپ بفرستید.</li>
        <li><strong>بررسی و ثبت سیستماتیک:</strong> اطلاعات توسط کارشناسان در سامانه اختصاصی انتقال درج و اعتبارسنجی می‌شود.</li>
        <li><strong>ارائه استعلام رسمی به خریدار:</strong> تصویر برگه استعلام اصالت و انتقال به نام شما برایتان ارسال می‌شود.</li>
        <li><strong>تسویه حساب نهایی:</strong> با خیالی آسوده و پس از رویت استعلام قانونی، وجه فیش را تسویه می‌فرمایید.</li>
      </ol>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۳. نظرات خریداران شهرستانی</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        صدها زائر از استان‌های سیستان و بلوچستان، کردستان، گلستان، اصفهان، فارس و خراسان رضوی طی ماه‌های اخیر فیش خود را کاملاً غیرحضوری تحویل گرفته‌اند که رضایت‌نامه‌ها و پیام‌های صوتی و متنی آنان در بخش رضایتمندی سایت و پیج اینستاگرام ما قابل مشاهده است.
      </p>
    `
  },
  {
    id: 'omrah-registration-vs-purchase',
    slug: 'omrah-registration-vs-purchase',
    title: 'تفاوت ثبت‌نام جدید فیش عمره با خرید فیش آماده؛ آیا ثبت‌نام جدید در بانک‌ها انجام می‌شود؟',
    shortDesc: 'بررسی وضعیت ثبت‌نام‌های بانکی عمره مفرده، اولویت‌های اعلامی سازمان حج و زیارت، و دلایلی که چرا خرید فیش آماده تنها راه تشرف در حال حاضر است.',
    category: 'قوانین و مقررات',
    readTime: '۴ دقیقه مطالعه',
    datePublished: '2024-11-05',
    dateModified: '2024-11-29',
    author: 'هیات تحریریه حج متین',
    focusKeywords: ['ثبت نام فیش عمره', 'ثبت نام بانک ملی حج عمره', 'ثبت نام بانک ملت حج', 'خرید فیش آماده عمره', 'اولویت های اعزام عمره'],
    tableOfContents: [
      'آیا در حال حاضر ثبت‌نام جدید عمره در بانک‌ها وجود دارد؟',
      'چند میلیون نفر در نوبت اعزام عمره هستند؟',
      'چرا خرید فیش اولویت‌دار تنها راه سفر سریع است؟',
      'مراحل ثبت‌نام در کاروان پس از خرید فیش عمره'
    ],
    contentHtml: `
      <p class="lead text-base sm:text-lg font-medium text-gray-800 leading-relaxed mb-4">
        بسیاری از هموطنان با مراجعه به بانک‌های ملی یا ملت جویای ثبت‌نام جدید عمره مفرده می‌شوند. در این مقاله به این سوال بنیادین پاسخ می‌دهیم که آیا امکان ثبت‌نام جدید وجود دارد یا خیر و تفاوت آن با خرید فیش آماده چیست؟
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۱. عدم امکان ثبت‌نام جدید در بانک‌ها</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        از سال ۱۳۹۰ تاکنون هیچ‌گونه ودیعه‌گذاری و ثبت‌نام جدیدی برای حج عمره مفرده در بانک‌های عامل (بانک ملی و بانک ملت) صورت نگرفته است. بیش از ۵.۵ میلیون نفر از سال‌های پیش در صف انتظار اعزام قرار دارند؛ به همین دلیل سازمان حج و زیارت هیچ برنامه‌ای برای بازگشایی ثبت‌نام جدید ندارد.
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۲. راهکار قانونی: خرید امتیاز فیش ثبت‌نام‌شدگان قبلی</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        تنها راه تشرف برای کسانی که در سال‌های ۸۷ تا ۹۰ ثبت‌نام نکرده‌اند یا فیش قبلی خود را واگذار کرده‌اند، <strong>خرید فیش حج عمره</strong> با اولویت‌های مجاز فراخوان است. خریدار با انتقال قطعی به نام خود، تمام حقوق و اختیارات دارنده اولیه فیش را کسب کرده و بلافاصله می‌تواند در کاروان‌های مجاز سال جاری ثبت‌نام کند.
      </p>

      <h3 class="text-lg sm:text-xl font-bold text-[#064E3B] mt-6 mb-3">۳. کاروان‌بندی و انتخاب زمان سفر</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
        پس از تکمیل انتقال فیش در حج متین، با در دست داشتن اصل فیش و کارت ملی می‌توانید از طریق سامانه ثبت‌نام سازمان حج (یا دفاتر زیارتی مجاز) کاروان مدنظر با تاریخ پرواز دلخواه خود را رزرو و آماده پرواز به سوی سرزمین وحی شوید.
      </p>
    `
  }
];
