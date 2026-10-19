// ============================================================
// VOIDREWORK — скрипты сайта
// ============================================================

// ---------- Данные товаров (всего 8 шт) ----------
const products = [
  {
    id: 1,
    name: { ru: "One Piece: Pirate King", uz: "One Piece: Qorʻolchi" },
    type: "Плагин",
    icon: "🏴‍☠️",
    desc: {
      ru: "Погружение в мир Ван Писа! Фрукты дьявола, пиратские команды, поиск One Piece, сокровища и сражения на кораблях.",
      uz: "One Piece dunyosiga kirging! Xayol mevalari, pirotlar jamolati, One Piece qidirilishi, xazinalar va kech kitbi qarshi junglar."
    },
    price: 599
  },
  {
    id: 2,
    name: { ru: "DreamWeaver", uz: "DreamWeaver" },
    type: "Плагин",
    icon: "🌙",
    desc: {
      ru: "Полный контроль над снами. Луцидные сны, кошмары с уникальными мобами и сценарии для ивентов.",
      uz: "Turlarda to‘liq nazorat. Luzid hayollar, xavfli hayollar."
    },
    price: 399
  },
  {
    id: 3,
    name: { ru: "GravityAnomaly", uz: "GravityAnomaly" },
    type: "Плагин",
    icon: "🌀",
    desc: {
      ru: "Гравитационные аномалии: нулевая гравитация, ямы и падение вверх.",
      uz: "Gravitatsion anomaliyalari: nol gravitatsiya, chuqurlar va yuxoriga tushish."
    },
    price: 499
  },
  {
    id: 4,
    name: { ru: "AstralRealm", uz: "AstralRealm" },
    type: "Мод",
    icon: "✨",
    desc: {
      ru: "Астральное измерение: плавающие звездные острова, небесные мобы и порталы при полнолунии.",
      uz: "Astral o‘lcham: chuqur yulduz qal’alari, osmon moblari va to‘liq oy devorasi."
    },
    price: 899
  },
  {
    id: 5,
    name: { ru: "NeonNetwork", uz: "NeonNetwork" },
    type: "Плагин",
    icon: "🟣",
    desc: {
      ru: "Неоновая сеть в стиле voidrework. Светящиеся блоки, вывески и дороги.",
      uz: "NeonNetwork: voidrework uslubida. Yorug‘ bloklar, belgilar va yo‘llar."
    },
    price: 299
  },
  {
    id: 6,
    name: { ru: "Трезубец Фантайма", uz: "FanTime Trident" },
    type: "Плагин",
    icon: "🔱",
    desc: {
      ru: "Мифический трезубец с силами океана. Управляйте водой, призывайте волны и наносите сокрушительные удары по врагам.",
      uz: "Okean quvvotlari bilan minoriy trident. Suvga boshqaruvi, dallalarni chaqirish va dushmanlarga jinoyatan urish."
    },
    price: 699
  },
  {
    id: 7,
    name: { ru: "Боевые стили", uz: "Jang uslublari" },
    type: "Мод",
    icon: "⚔️",
    desc: {
      ru: "Система боевых стилей для Minecraft. Изучите меч, лук, копьё и магию. У каждого стиля свои комбо и суперудары.",
      uz: "Minecraft uchun jang uslublarining tizimi. Qilmoq, kamon, chopoq va sihirni o‘rang. Har uslubning o‘z kombosini va super urishi bor."
    },
    price: 899
  },
  {
    id: 8,
    name: { ru: "Quests", uz: "Vazifalar" },
    type: "Плагин",
    icon: "📜",
    desc: {
      ru: "Система квестов с наградами, прогрессом и историей сервера.",
      uz: "Mukofotlar, progres va server tarixi bilan vazifa tizimi."
    },
    price: 549
  }
];

// ---------- Состояние ----------
let cart = JSON.parse(localStorage.getItem("voidrework_cart")) || [];
let currentLang = localStorage.getItem("voidrework_lang") || "ru";
let currentCurrency = localStorage.getItem("voidrework_currency") || "RUB";

// Курсы валют (относительно RUB)
const currencyRates = {
  RUB: 1,
  USD: 0.011,
  EUR: 0.010,
  KZT: 5.3,
  UZS: 132,
  CNY: 0.081
};
const currencySymbols = { RUB: "₽", USD: "$", EUR: "€", KZT: "₸", UZS: "so'm", CNY: "¥" };

// ---------- Переводы ----------
const i18n = {
  ru: {
    nav_home: "Главная",
    nav_catalog: "Каталог",
    nav_order: "Заказ",
    nav_contacts: "Контакты",
    badge: "Voidrework • Minecraft 2026",
    hero_title: "Плагины и моды<br>для Minecraft",
    hero_desc: "Качественные дополнения для серверов и одиночной игры. Доступные цены, быстрая установка, поддержка 24/7.",
    btn_catalog: "Перейти в каталог",
    btn_order: "Заказать разработку",
    stats1: "500+", stat1_label: "продаж плагинов",
    stats2: "100+", stat2_label: "довольных клиентов",
    stats3: "24/7", stat3_label: "поддержка",
    stats4: "5 мин", stat4_label: "установка плагина",
    features1_title: "Низкие цены", features1_text: "Доступная стоимость плагинов и модов для любого сервера.",
    features2_title: "Быстрая установка", features2_text: "Поможем поставить плагин на твой сервер за считанные минуты.",
    features3_title: "Поддержка", features3_text: "Техническая помощь после покупки и гарантия на товар.",
    features4_title: "Заказ под ключ", features4_text: "Разработаем уникальный плагин или мод под твои задачи.",
    catalog_title: "Плагины и моды",
    catalog_sub: "Выбирай товар, нажми «Купить» или подробнее, чтобы оформить заказ.",
    filter_all: "Все", filter_plugin: "Плагины", filter_mod: "Моды",
    reviews_title: "Отзывы",
    contacts_title: "Связаться с нами",
    contacts_sub: "Есть вопросы? Напиши в Telegram.",
    btn_send: "Отправить заявку",
    tg_channel: "Телеграм канал",
    tg_channel_link: "@voidrework",
    tg_me: "Мой Telegram",
    tg_me_link: "@coderxdprhb",
    tz: "Часовой пояс",
    tz_val: "UTC+3 (Мск)",
    footer_copy: "© 2026 Voidrework. Плагины и моды для Minecraft.",
    footer_all: "Все права защищены.",
    cart_title: "Корзина",
    cart_empty: "Корзина пуста",
    cart_total: "Итого:",
    cart_checkout: "Оформить заказ",
    order_title: "Заказ разработки",
    order_sub: "Нужна уникальная функция для сервера? Напишем плагин или мод под твои требования по доступной цене.",
    order_plugin: "Плагин",
    order_mod: "Мод",
    order_form_title: "Оставить заявку",
    order_name: "Имя",
    order_telegram: "Telegram",
    order_type: "Тип разработки",
    order_platform: "Платформа / версия",
    order_requirements: "Требования к плагину / моду",
    order_budget: "Бюджет",
    order_submit: "Отправить заявку на разработку",
    modal_category_plugin: "Плагин",
    modal_category_mod: "Мод",
    btn_details: "Подробнее",
    btn_buy: "Купить",
    toast_added: "Добавлено в корзину: ",
    toast_empty: "Корзина пуста",
    order_success: "Заказ оформлен!\nТовары: {items}\nИтого: {total}\n\nСвяжемся с тобой в Telegram @coderxdprhb.",
    contact_success: "Заявка отправлена! Мы свяжемся с вами в Telegram @coderxdprhb или через канал @voidrework.",
    send_opened_telegram: "Открыли Telegram — нажми «Отправить» в чате, чтобы заявка дошла до нас.",
    send_error: "Не удалось отправить автоматически. Мы открыли Telegram — нажми «Отправить» в чате.",
    order_success_form: "Заявка на разработку отправлена!\n\nТип: {type}\nПлатформа: {platform}\nБюджет: {budget}\n\nСвяжемся с тобой в Telegram @coderxdprhb.",
    scroll_top: "Наверх",
    lang_ru: "Русский",
    lang_uz: "Узбекский",
    lang_en: "Английский",
    lang_kz: "Казахский",
    lang_cn: "Китайский",
    currency_label: "Валюта:",
    language_label: "Язык:",
    modal_order_title: "Заказ разработки",
    order_hint: "Выберите тип разработки выше, чтобы оставить заявку.",
    product_not_found: "Товар не найден",
    modal_order_plugin: "Заказать плагин",
    modal_order_mod: "Заказать мод",
    modal_order_plugin_sub: "Создадим плагин под ваши требования",
    modal_order_mod_sub: "Разработаем мод под ваши задачи",
    modal_order_close: "Закрыть",
    order_modal_name: "Ваше имя",
    order_modal_telegram: "Ваш Telegram",
    order_modal_platform: "Платформа / версия",
    order_modal_details: "Описание заказа",
    order_modal_send: "Отправить заявку"
  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_catalog: "Katalog",
    nav_order: "Buyurtma",
    nav_contacts: "Aloqa",
    badge: "Voidrework • Minecraft 2026",
    hero_title: "Plaginlar va modlar<br>Minecraft uchun",
    hero_desc: "Serverlar va bitta o‘yin uchun sifatli qo‘shimchaqarlar. Qobil qimmatlar, tezkor o‘rnating, 24/7 yordam.",
    btn_catalog: "Katalogga o‘tish",
    btn_order: "Rivojlanishni buyurtma berish",
    stats1: "500+", stat1_label: "plagin sotilishi",
    stats2: "100+", stat2_label: "qoniqarli mijozlar",
    stats3: "24/7", stat3_label: "yordam",
    stats4: "5 daqiqa", stat4_label: "plaginni o‘rnating",
    features1_title: "Arzon narxlar", features1_text: "Haroqatli serverlar uchun qulay plaginlar va modlar.",
    features2_title: "Tezkor o‘rnating", features2_text: "Plaginni serveringizga bir necha daqiqada o‘rnating.",
    features3_title: "Yordam", features3_text: "Sotidan keyin texnik yordam va mahloflar kafolati.",
    features4_title: "To‘liq buyurtma", features4_text: "Sizning vazifangizga mos ыng‘ayli plagin yoki mod rivojlaymiz.",
    catalog_title: "Plaginlar va modlar",
    catalog_sub: "Turini tanlang, «Sotib olish» bosing yoki batafsilni ko‘ring.",
    filter_all: "Hammasi", filter_plugin: "Plaginlar", filter_mod: "Modlar",
    reviews_title: "Sharhlar",
    contacts_title: "Biz bilan bog‘laning",
    contacts_sub: "Savolingiz bormi? Telegramga yozing.",
    btn_send: "Ariza yuborish",
    tg_channel: "Telegram kanali",
    tg_channel_link: "@voidrework",
    tg_me: "Mening Telegramim",
    tg_me_link: "@coderxdprhb",
    tz: "Soat belti",
    tz_val: "UTC+3 (Msk)",
    footer_copy: "© 2026 Voidrework. Minecraft uchun plaginlar va modlar.",
    footer_all: "Barcha huquqlar himoyalangan.",
    cart_title: "Savatcha",
    cart_empty: "Savatcha bo‘sh",
    cart_total: "Jami:",
    cart_checkout: "Buyurtmani tasdiqlash",
    order_title: "Rivojlanish buyurtmasi",
    order_sub: "Server uchun noyob funksiya kerakmi? Biz sizning talablaringizga mos plagin yoki mod yozamiz.",
    order_plugin: "Plagin",
    order_mod: "Mod",
    order_form_title: "Ariza qoldirish",
    order_name: "Ismingiz",
    order_telegram: "Telegram",
    order_type: "Rivojlanish turi",
    order_platform: "Plaforma / versiya",
    order_requirements: "Plagin / mod talablari",
    order_budget: "Byudzhet",
    order_submit: "Rivojlanish arizasini yuborish",
    modal_category_plugin: "Plagin",
    modal_category_mod: "Mod",
    btn_details: "Batafsil",
    btn_buy: "Sotib olish",
    toast_added: "Savatchaga qo‘shildi: ",
    toast_empty: "Savatcha bo‘sh",
    order_success: "Buyurtma qabul qilindi!\nMahsulotlar: {items}\nJami: {total}\n\nBiz siz bilan Telegram @coderxdprhb orqali bog‘lanamiz.",
    contact_success: "Ariza yuborildi! Biz siz bilan Telegram @coderxdprhb yoki kanal @voidrework orqali bog‘lanamiz.",
    send_opened_telegram: "Telegram ochildi — ariza bizga yetib borishi uchun chatda «Yuborish» tugmasini bosing.",
    send_error: "Avtomatik yuborib bo‘lmadi. Telegram ochildi — chatda «Yuborish» tugmasini bosing.",
    order_success_form: "Rivojlanish arizasi yuborildi!\n\nTuri: {type}\nPlaforma: {platform}\nByudzhet: {budget}\n\nBiz siz bilan Telegram @coderxdprhb orqali bog‘lanamiz.",
    scroll_top: "Boshqa",
    lang_ru: "Русский",
    lang_uz: "Узбекский",
    lang_en: "Английский",
    lang_kz: "Казахский",
    lang_cn: "Китайский",
    currency_label: "Valyuta:",
    language_label: "Til:",
    modal_order_title: "Rivojlanish buyurtmasi",
    order_hint: "Ariza qoldirish uchun yuqoridan ishlab chiqish turini tanlang.",
    product_not_found: "Mahsulot topilmadi",
    modal_order_plugin: "Plagin buyurtma berish",
    modal_order_mod: "Mod buyurtma berish",
    modal_order_plugin_sub: "Sizning talablaringizga mos plagin yaratamiz",
    modal_order_mod_sub: "Sizning vazifalaringizga mos mod ishlab chiqamiz",
    modal_order_close: "Yopish",
    order_modal_name: "Ismingiz",
    order_modal_telegram: "Telegramingiz",
    order_modal_platform: "Platforma / versiya",
    order_modal_details: "Buyurtma tavsifi",
    order_modal_send: "Arizani yuborish"
  },
  en: {
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_order: "Order",
    nav_contacts: "Contacts",
    badge: "Voidrework • Minecraft 2026",
    hero_title: "Plugins and Mods<br>for Minecraft",
    hero_desc: "Quality add-ons for servers and single-player. Affordable prices, fast installation, 24/7 support.",
    btn_catalog: "Go to Catalog",
    btn_order: "Order Development",
    stats1: "500+", stat1_label: "plugin sales",
    stats2: "100+", stat2_label: "satisfied clients",
    stats3: "24/7", stat3_label: "support",
    stats4: "5 min", stat4_label: "plugin installation",
    features1_title: "Low Prices", features1_text: "Affordable plugins and mods for any server.",
    features2_title: "Fast Installation", features2_text: "We'll install the plugin on your server in minutes.",
    features3_title: "Support", features3_text: "Technical help after purchase and product guarantee.",
    features4_title: "Turnkey Order", features4_text: "We'll develop a unique plugin or mod for your tasks.",
    catalog_title: "Plugins and Mods",
    catalog_sub: "Choose an item, click «Buy» or Details to place an order.",
    filter_all: "All", filter_plugin: "Plugins", filter_mod: "Mods",
    reviews_title: "Reviews",
    contacts_title: "Contact Us",
    contacts_sub: "Questions? Write to Telegram.",
    btn_send: "Send Application",
    tg_channel: "Telegram Channel",
    tg_channel_link: "@voidrework",
    tg_me: "My Telegram",
    tg_me_link: "@coderxdprhb",
    tz: "Time Zone",
    tz_val: "UTC+3 (Moscow)",
    footer_copy: "© 2026 Voidrework. Plugins and Mods for Minecraft.",
    footer_all: "All rights reserved.",
    cart_title: "Cart",
    cart_empty: "Cart is empty",
    cart_total: "Total:",
    cart_checkout: "Place Order",
    order_title: "Development Order",
    order_sub: "Need a unique server feature? We'll write a plugin or mod to your requirements at an affordable price.",
    order_plugin: "Plugin",
    order_mod: "Mod",
    order_form_title: "Submit Application",
    order_name: "Name",
    order_telegram: "Telegram",
    order_type: "Development Type",
    order_platform: "Platform / Version",
    order_requirements: "Plugin / Mod Requirements",
    order_budget: "Budget",
    order_submit: "Submit Development Application",
    modal_category_plugin: "Plugin",
    modal_category_mod: "Mod",
    btn_details: "Details",
    btn_buy: "Buy",
    toast_added: "Added to cart: ",
    toast_empty: "Cart is empty",
    order_success: "Order placed!\nItems: {items}\nTotal: {total}\n\nWe'll contact you on Telegram @coderxdprhb.",
    contact_success: "Application sent! We'll contact you on Telegram @coderxdprhb or via channel @voidrework.",
    send_opened_telegram: "We opened Telegram — press \"Send\" in the chat so your request reaches us.",
    send_error: "Automatic sending failed. We opened Telegram — press \"Send\" in the chat.",
    order_success_form: "Development application sent!\n\nType: {type}\nPlatform: {platform}\nBudget: {budget}\n\nWe'll contact you on Telegram @coderxdprhb.",
    scroll_top: "Top",
    lang_ru: "Русский",
    lang_uz: "Узбекский",
    lang_en: "Английский",
    lang_kz: "Казахский",
    lang_cn: "Китайский",
    currency_label: "Currency:",
    language_label: "Language:",
    modal_order_title: "Development Order",
    order_hint: "Choose a development type above to submit a request.",
    product_not_found: "Product not found",
    modal_order_plugin: "Order Plugin",
    modal_order_mod: "Order Mod",
    modal_order_plugin_sub: "We'll create a plugin to your requirements",
    modal_order_mod_sub: "We'll develop a mod for your tasks",
    modal_order_close: "Close",
    order_modal_name: "Your Name",
    order_modal_telegram: "Your Telegram",
    order_modal_platform: "Platform / version",
    order_modal_details: "Order Description",
    order_modal_send: "Submit Application"
  },
  kz: {
    nav_home: "Басты",
    nav_catalog: "Каталог",
    nav_order: "Тарыту",
    nav_contacts: "Байланысу",
    badge: "Voidrework • Minecraft 2026",
    hero_title: "Плагиндер мен модтар<br>Minecraft үшін",
    hero_desc: "Серверлерге және ойына арналған сапалы қосымшалар. Доступті бағалар, тезіргі орнату, 24/7 қолдау.",
    btn_catalog: "Каталогқа өту",
    btn_order: "Жобаны тәртіптеу",
    stats1: "500+", stat1_label: "плагин сатылулары",
    stats2: "100+", stat2_label: "қанағаттанушы клиенттер",
    stats3: "24/7", stat3_label: " қолдау",
    stats4: "5 минут", stat4_label: "плагинді орнату",
    features1_title: "Төмен бағалар", features1_text: "Бірдей серверлерге қолжетімді плагиндер мен модтар.",
    features2_title: "Тезіргі орнату", features2_text: "Плагинді тіз минут ішінде серверіңізге орнатқанымыз келеді.",
    features3_title: "Қолдау", features3_text: "Сотынан кейін техникалық көмек және тауар кепілдігі.",
    features4_title: "Келісім бойынша тапсырыс", features4_text: "Сіздің vazifenize сәйкес ыңғайлы плагин немесе мод әзірлеу.",
    catalog_title: "Плагиндер мен модтар",
    catalog_sub: "Тậuмен таңдаңыз, «Satıп алу»не басу немесе түсінігімді алу арқылы тапсырыс беріңіз.",
    filter_all: "Барлығы", filter_plugin: "Плагиндер", filter_mod: "Модтар",
    reviews_title: "Пікірлер",
    contacts_title: "Бізбен байланысыңыз",
    contacts_sub: "Сұрақтарыңыз бар ма? Telegram-ге жазыңыз.",
    btn_send: "Арызды жіберу",
    tg_channel: "Telegram каналы",
    tg_channel_link: "@voidrework",
    tg_me: "Менің Telegram-ім",
    tg_me_link: "@coderxdprhb",
    tz: "Уақыт belti",
    tz_val: "UTC+3 (Msk)",
    footer_copy: "© 2026 Voidrework. Minecraft үшін плагиндер мен модтар.",
    footer_all: "Барлық һүқуқтар қорғалған.",
    cart_title: "Себет",
    cart_empty: "Себет бос",
    cart_total: "Барлығы:",
    cart_checkout: "Тапсырысты ресімдеу",
    order_title: "Аrtсери шігу тапсырысы",
    order_sub: "Серверге ыңғайлы өрістің керегі бар ма? Біз сіздің talabтарыңызға сәйкес плагин немесе мод жасаймыз.",
    order_plugin: "Плагин",
    order_mod: "Мод",
    order_form_title: "Арызды қалдыру",
    order_name: "Атыңыз",
    order_telegram: "Telegram",
    order_type: "Әзірлеу түрі",
    order_platform: "Платформа / нұсқа",
    order_requirements: "Плагин / мод талаптары",
    order_budget: "Бюджет (₽)",
    order_submit: "Артсери шігу арызын жіберу",
    modal_category_plugin: "Плагин",
    modal_category_mod: "Мод",
    btn_details: "Толығырау",
    btn_buy: "Сатып алу",
    toast_added: "Себетке қосылды: ",
    toast_empty: "Себет бос",
    order_success: "Тапсырыс ресімделді!\nТауарlar: {items}\nJami: {total}\n\nБіз Telegram @coderxdprhb арқылы хабарласамыз.",
    contact_success: "Арыз жіберілді! Біз Telegram @coderxdprhb немесе канал @voidrework арқылы хабарласамыз.",
    send_opened_telegram: "Telegram ашылды — өтінім бізге жетуі үшін чатта «Жіберу» түймесін басыңыз.",
    send_error: "Автоматты жіберу мүмкін болмады. Telegram ашылды — чатта «Жіберу» түймесін басыңыз.",
    order_success_form: "Әзірлеу арызы жіберілді!\n\nТүр: {type}\nПлатформа: {platform}\nБюджет: {budget}\n\nБіз Telegram @coderxdprhb арқылы хабарласамыз.",
    scroll_top: "Бас бетке",
    lang_ru: "Русский",
    lang_uz: "Узбекский",
    lang_en: "Английский",
    lang_kz: "Казахский",
    lang_cn: "Китайский",
    currency_label: "Валюта:",
    language_label: "Тіл:",
    modal_order_title: "Артсери шігу тапсырысы",
    order_hint: "Өтінім қалдыру үшін жоғарыдан әзірлеу түрін таңдаңыз.",
    product_not_found: "Тауар табылмады",
    modal_order_plugin: "Плагин тапсырысу",
    modal_order_mod: "Мод тапсырысу",
    modal_order_plugin_sub: "Талаптарыңызға сай плагин жасаймыз",
    modal_order_mod_sub: "Міндеттеріңізге сай мод әзірлейміз",
    modal_order_close: "Жабу",
    order_modal_name: "Атыңыз",
    order_modal_telegram: "Telegramingiz",
    order_modal_platform: "Платформа / нұсқа",
    order_modal_details: "Тапсырыс сипаттамасы",
    order_modal_send: "Арызды жіберу"
  },
  cn: {
    nav_home: "首页",
    nav_catalog: "目录",
    nav_order: "订购",
    nav_contacts: "联系",
    badge: "Voidrework • Minecraft 2026",
    hero_title: "插件和模组<br>适用于 Minecraft",
    hero_desc: "适用于服务器和单机的高质量插件。价格实惠，安装快捷，24/7 支持。",
    btn_catalog: "前往目录",
    btn_order: "订购开发",
    stats1: "500+", stat1_label: "插件销量",
    stats2: "100+", stat2_label: "满意客户",
    stats3: "24/7", stat3_label: "支持",
    stats4: "5 分钟", stat4_label: "插件安装",
    features1_title: "低价", features1_text: "适用于任何服务器的经济型插件和模组。",
    features2_title: "快速安装", features2_text: "我们将在几分钟内帮助您在服务器上安装插件。",
    features3_title: "支持", features3_text: "购买后提供技术支持和产品保证。",
    features4_title: "定制开发", features4_text: "我们将根据您的需求开发独特的插件或模组。",
    catalog_title: "插件和模组",
    catalog_sub: "选择商品，点击“购买”或“详情”下单。",
    filter_all: "全部", filter_plugin: "插件", filter_mod: "模组",
    reviews_title: "评价",
    contacts_title: "联系我们",
    contacts_sub: "有问题？请在 Telegram 上联系。",
    btn_send: "提交申请",
    tg_channel: "Telegram 频道",
    tg_channel_link: "@voidrework",
    tg_me: "我的 Telegram",
    tg_me_link: "@coderxdprhb",
    tz: "时区",
    tz_val: "UTC+3 (莫斯科)",
    footer_copy: "© 2026 Voidrework. Minecraft 插件和模组。",
    footer_all: "版权所有。",
    cart_title: "购物车",
    cart_empty: "购物车为空",
    cart_total: "总计:",
    cart_checkout: "下单",
    order_title: "开发订单",
    order_sub: "需要独特的服务器功能吗？我们将以实惠的价格为您编写插件或模组。",
    order_plugin: "插件",
    order_mod: "模组",
    order_form_title: "提交申请",
    order_name: "姓名",
    order_telegram: "Telegram",
    order_type: "开发类型",
    order_platform: "平台 / 版本",
    order_requirements: "插件 / 模组要求",
    order_budget: "预算",
    order_submit: "提交开发申请",
    modal_category_plugin: "插件",
    modal_category_mod: "模组",
    btn_details: "详情",
    btn_buy: "购买",
    toast_added: "已添加到购物车: ",
    toast_empty: "购物车为空",
    order_success: "订单已下单!\n商品: {items}\n总计: {total}\n\n我们将在 Telegram @coderxdprhb 上与您联系。",
    contact_success: "申请已提交! 我们将在 Telegram @coderxdprhb 或频道 @voidrework 上与您联系。",
    send_opened_telegram: "已打开 Telegram — 请在聊天中点击「发送」，让申请送达我们。",
    send_error: "自动发送失败。已打开 Telegram — 请在聊天中点击「发送」。",
    order_success_form: "开发申请已提交!\n\n类型: {type}\n平台: {platform}\n预算: {budget}\n\n我们将在 Telegram @coderxdprhb 上与您联系。",
    scroll_top: "返回顶部",
    lang_ru: "Русский",
    lang_uz: "Узбекский",
    lang_en: "Английский",
    lang_kz: "Казахский",
    lang_cn: "Китайский",
    currency_label: "货币:",
    language_label: "语言:",
    modal_order_title: "开发订单",
    order_hint: "请在上方选择开发类型以提交申请。",
    product_not_found: "未找到商品",
    modal_order_plugin: "订购插件",
    modal_order_mod: "订购模组",
    modal_order_plugin_sub: "我们将根据您的要求创建插件",
    modal_order_mod_sub: "我们将为您的任务开发模组",
    modal_order_close: "关闭",
    order_modal_name: "您的姓名",
    order_modal_telegram: "您的 Telegram",
    order_modal_platform: "平台 / 版本",
    order_modal_details: "订单描述",
    order_modal_send: "提交申请"
  }
};

function t(key) {
  return i18n[currentLang]?.[key] || key;
}

// ---------- Отправка заявок в Telegram ----------
// Настройки лежат в js/config.js (window.VOIDREWORK_CONFIG).
// Если приёмник не настроен — открываем Telegram с готовым текстом заявки.
function vrConfig() {
  return window.VOIDREWORK_CONFIG || {};
}

function buildOrderText(payload) {
  const labels = {
    type: "Тип", name: "Имя", telegram: "Telegram", platform: "Платформа",
    details: "Описание", topic: "Тема", comment: "Комментарий",
    items: "Товары", total: "Сумма", budget: "Бюджет"
  };
  const cfg = vrConfig();
  const lines = ["🆕 Заявка с сайта " + (cfg.siteName || "Voidrework"), ""];
  Object.keys(payload).forEach((key) => {
    const value = payload[key];
    if (value === undefined || value === null || String(value).trim() === "") return;
    lines.push((labels[key] || key) + ": " + value);
  });
  lines.push("");
  lines.push("Язык: " + String(currentLang).toUpperCase());
  lines.push("Страница: " + location.href);
  return lines.join("\n");
}

// Открывает чат с менеджером и подставляет текст заявки.
function openTelegramWithOrder(text) {
  const username = vrConfig().telegramUsername || "coderxdprhb";
  const url = "https://t.me/" + username + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank", "noopener");
}

// Отправка заявки. successMessage — что показать при успешной отправке.
async function submitOrder(payload, successMessage) {
  const url = String(vrConfig().telegramWorkerUrl || "").trim();

  // Приёмник не настроен — резервный способ через Telegram.
  if (!url) {
    openTelegramWithOrder(buildOrderText(payload));
    alert(t("send_opened_telegram"));
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({}, payload, {
        lang: currentLang,
        site: location.href
      }))
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    if (successMessage) alert(successMessage);
  } catch (err) {
    openTelegramWithOrder(buildOrderText(payload));
    alert(t("send_error"));
  }
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && i18n[currentLang] && i18n[currentLang][key] !== undefined) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (key && i18n[currentLang] && i18n[currentLang][key] !== undefined) {
      el.title = i18n[currentLang][key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && i18n[currentLang] && i18n[currentLang][key] !== undefined) {
      el.placeholder = i18n[currentLang][key];
    }
  });
  if (productsGrid) renderFiltered(productsGrid, activeFilter);
  renderHome();
  renderProductDetail();
  updateCartUI();
}

// ---------- Currency ----------
function formatPrice(price) {
  const converted = price * currencyRates[currentCurrency];
  const symbol = currencySymbols[currentCurrency];
  return `${converted.toFixed(2)} ${symbol}`;
}

function applyCurrency() {
  document.querySelectorAll("[data-price]").forEach(el => {
    const base = parseFloat(el.getAttribute("data-price"));
    if (!isNaN(base)) el.textContent = formatPrice(base);
  });
  updateCartUI();
}

// ---------- DOM ----------
const productsGrid = document.getElementById("productsGrid");
const homeProducts = document.getElementById("homeProducts");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartPanel = document.getElementById("cartPanel");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartTotalValue = document.getElementById("cartTotal");
const cartCheckout = document.getElementById("cartCheckout");

// Модалка товара
const modalOverlay = document.getElementById("modalOverlay");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalAddBtn = document.getElementById("modalAddBtn");

let currentModalProduct = null;

// Мобильное меню
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

// ---------- Рендер товаров ----------
function renderProducts(container) {
  if (!container) return;

  container.innerHTML = products.map((p) => {
    const name = p.name[currentLang] || p.name.ru;
    const desc = p.desc[currentLang] || p.desc.ru;
    return `
      <article class="product-card reveal" onclick="window.location='product.html?id=${p.id}'">
        <div class="product-card-top">
          <span class="product-card-icon">${p.icon}</span>
        </div>
        <div class="product-card-body">
          <span class="product-category">${p.type}</span>
          <h3>${name}</h3>
          <p>${desc}</p>
        </div>
        <div class="product-card-footer">
          <span class="price" data-price="${p.price}">${formatPrice(p.price)}</span>
          <button class="btn btn-outline" onclick="event.stopPropagation(); addToCart(${p.id})">${t("btn_buy")}</button>
        </div>
      </article>
    `;
  }).join("");
}

// Каталог фильтры
let activeFilter = "all";

if (productsGrid) {
  renderProducts(productsGrid);

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderFiltered(productsGrid, activeFilter);
    });
  });
}

function renderFiltered(container, filter) {
  if (!container) return;
  const filtered = filter === "all"
    ? products
    : products.filter((p) => p.type === filter);
  container.innerHTML = filtered.map((p) => {
    const name = p.name[currentLang] || p.name.ru;
    const desc = p.desc[currentLang] || p.desc.ru;
    return `
      <article class="product-card reveal" onclick="window.location='product.html?id=${p.id}'">
        <div class="product-card-top">
          <span class="product-card-icon">${p.icon}</span>
        </div>
        <div class="product-card-body">
          <span class="product-category">${p.type}</span>
          <h3>${name}</h3>
          <p>${desc}</p>
        </div>
        <div class="product-card-footer">
          <span class="price" data-price="${p.price}">${formatPrice(p.price)}</span>
          <button class="btn btn-outline" onclick="event.stopPropagation(); addToCart(${p.id})">${t("btn_buy")}</button>
        </div>
      </article>
    `;
  }).join("");
}

// ---------- Страница товара ----------
function renderProductDetail() {
  const container = document.getElementById("productDetail");
  if (!container) return;
  const id = parseInt(new URLSearchParams(window.location.search).get("id"), 10);
  const product = products.find((p) => p.id === id);
  if (!product) {
    container.innerHTML = `<p class="product-missing">${t("product_not_found")}</p>`;
    return;
  }
  const name = product.name[currentLang] || product.name.ru;
  const desc = product.desc[currentLang] || product.desc.ru;
  const categoryLabel = t(product.type === "Плагин" ? "modal_category_plugin" : "modal_category_mod");
  container.innerHTML = `
    <div class="product-detail-card reveal">
      <div class="product-detail-header">
        <span class="product-detail-icon">${product.icon}</span>
        <span class="product-detail-category">${categoryLabel}</span>
      </div>
      <h1>${name}</h1>
      <p class="product-detail-desc">${desc}</p>
      <div class="product-detail-price">
        <span class="price" data-price="${product.price}">${formatPrice(product.price)}</span>
        <button class="btn btn-primary btn-full" onclick="addToCart(${product.id})">${t("btn_buy")}</button>
      </div>
    </div>
  `;
}

renderProductDetail();

// Главная — только 5 товаров
function renderHome() {
  if (!homeProducts) return;
  homeProducts.innerHTML = products.slice(0, 5).map((p) => {
    const name = p.name[currentLang] || p.name.ru;
    const desc = p.desc[currentLang] || p.desc.ru;
    return `
      <article class="product-card reveal" onclick="window.location='product.html?id=${p.id}'">
        <div class="product-card-top">
          <span class="product-card-icon">${p.icon}</span>
        </div>
        <div class="product-card-body">
          <span class="product-category">${p.type}</span>
          <h3>${name}</h3>
          <p>${desc}</p>
        </div>
        <div class="product-card-footer">
          <span class="price" data-price="${p.price}">${formatPrice(p.price)}</span>
          <button class="btn btn-outline" onclick="event.stopPropagation(); addToCart(${p.id})">${t("btn_buy")}</button>
        </div>
      </article>
    `;
  }).join("");
}

renderHome();

// ---------- Заказ страницы — кнопки Плагин / Мод с модалкой ----------
const orderTypeBtns = document.querySelectorAll(".order-type-btn");
const orderModal = document.getElementById("orderModal");
const orderModalBox = document.getElementById("orderModalBox");
const orderModalClose = document.getElementById("orderModalClose");
const orderModalTypeInput = document.getElementById("orderModalTypeInput");
const orderModalTitle = document.getElementById("orderModalTitle");
const orderModalSubtitle = document.getElementById("orderModalSubtitle");
const orderModalTypeLabel = document.getElementById("orderModalTypeLabel");
const orderModalForm = document.getElementById("orderModalForm");

if (orderTypeBtns.length) {
  orderTypeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      orderTypeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.dataset.type;
      orderModalTypeInput.value = type;
      const isPlugin = type === "Плагин";
      orderModalTitle.textContent = t(isPlugin ? "modal_order_plugin" : "modal_order_mod");
      orderModalSubtitle.textContent = t(isPlugin ? "modal_order_plugin_sub" : "modal_order_mod_sub");
      orderModalTypeLabel.textContent = t(isPlugin ? "order_plugin" : "order_mod");
      openOrderModal();
    });
  });
}

function openOrderModal() {
  if (!orderModal) return;
  orderModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  if (!orderModal) return;
  orderModal.classList.remove("show");
  document.body.style.overflow = "";
}

if (orderModalClose) {
  orderModalClose.addEventListener("click", closeOrderModal);
}

if (orderModal) {
  orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal) closeOrderModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOrderModal();
});

if (orderModalForm) {
  orderModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(orderModalForm);
    const data = Object.fromEntries(formData.entries());
    const msg = t("order_success_form")
      .replace("{type}", data["type"] || "")
      .replace("{platform}", data["platform"] || "")
      .replace("{budget}", "—");
    submitOrder({
      type: data["type"] || "",
      name: data.name,
      telegram: data.telegram,
      platform: data.platform,
      details: data.details
    }, msg);
    orderModalForm.reset();
    closeOrderModal();
  });
}

// ---------- Корзина ----------
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  cart.push(product);
  saveCart();
  updateCartUI();
  showToast(t("toast_added") + (product.name[currentLang] || product.name.ru));
}

window.addToCart = addToCart;

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
};

function saveCart() {
  localStorage.setItem("voidrework_cart", JSON.stringify(cart));
}

function updateCartUI() {
  if (cartCount) cartCount.textContent = cart.length;

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">' + t("cart_empty") + '</p>';
    if (cartTotalValue) cartTotalValue.textContent = formatPrice(0);
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => {
    const name = item.name[currentLang] || item.name.ru;
    return `
      <div class="cart-item">
        <span class="cart-item-icon">${item.icon}</span>
        <div class="cart-item-info">
          <h4>${name}</h4>
          <span class="price" data-price="${item.price}">${formatPrice(item.price)}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})">×</button>
      </div>
    `;
  }).join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  if (cartTotalValue) cartTotalValue.textContent = formatPrice(total);
}

function openCart() {
  if (cartOverlay) cartOverlay.style.display = "block";
  if (cartPanel) cartPanel.style.display = "flex";
}

function closeCart() {
  if (cartOverlay) cartOverlay.style.display = "none";
  if (cartPanel) cartPanel.style.display = "none";
}

if (cartBtn) cartBtn.addEventListener("click", openCart);
if (cartClose) cartClose.addEventListener("click", closeCart);
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

if (cartCheckout) {
  cartCheckout.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast(t("toast_empty"));
      return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const list = cart.map((i) => i.name[currentLang] || i.name.ru).join(", ");
    submitOrder(
      { type: "Заказ из корзины", items: list, total: formatPrice(total) },
      t("order_success").replace("{items}", list).replace("{total}", formatPrice(total))
    );
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
  });
}

// ---------- Модалка товара (покупка) ----------
function openModal(id) {
  const product = products.find((p) => p.id === id);
  if (!product || !modalOverlay || !productModal) return;

  currentModalProduct = product;
  modalIcon.textContent = product.icon;
  modalCategory.textContent = product.type === "Плагин" ? t("modal_category_plugin") : t("modal_category_mod");
  modalTitle.textContent = product.name[currentLang] || product.name.ru;
  modalDesc.textContent = product.desc[currentLang] || product.desc.ru;
  modalPrice.textContent = formatPrice(product.price);

  modalOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove("show");
  document.body.style.overflow = "";
  currentModalProduct = null;
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalOverlay) modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("show")) closeModal();
});

if (modalAddBtn) {
  modalAddBtn.addEventListener("click", () => {
    if (!currentModalProduct) return;
    addToCart(currentModalProduct.id);
    closeModal();
    showToast(`${t("toast_added")}${currentModalProduct.name[currentLang] || currentModalProduct.name.ru}`);
  });
}

// ---------- Язык и валюта ----------
const langSelect = document.getElementById("langSelect");
const currencySelect = document.getElementById("currencySelect");

if (langSelect) {
  langSelect.value = currentLang;
  langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    localStorage.setItem("voidrework_lang", currentLang);
    applyLang();
  });
}

if (currencySelect) {
  currencySelect.value = currentCurrency;
  currencySelect.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    localStorage.setItem("voidrework_currency", currentCurrency);
    applyCurrency();
  });
}

// ---------- Анимация ----------
const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Мобильное меню ----------
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// ---------- Язык и валюта на телефоне ----------
// На узких экранах переключатели переносятся внутрь меню, иначе их не видно.
const headerInner = document.querySelector(".header-inner");
const headerControls = document.querySelector(".header-controls");
const mobileQuery = window.matchMedia("(max-width: 1200px)");

function placeHeaderControls() {
  if (!nav || !headerControls) return;
  if (mobileQuery.matches) {
    if (headerControls.parentElement !== nav) nav.appendChild(headerControls);
  } else if (headerInner && headerControls.parentElement !== headerInner) {
    headerInner.insertBefore(headerControls, menuToggle || null);
  }
}

placeHeaderControls();
if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", placeHeaderControls);
else if (mobileQuery.addListener) mobileQuery.addListener(placeHeaderControls);

// ---------- Кнопка "Наверх" ----------
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollTopBtn.classList.add("show");
    else scrollTopBtn.classList.remove("show");
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Формы ----------
function setupContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    submitOrder({
      type: "Сообщение с сайта",
      name: data.name,
      telegram: data.telegram,
      topic: data.topic,
      comment: data.comment
    }, t("contact_success"));
    form.reset();
  });
}

setupContactForm("contactForm");

const orderForm = document.getElementById("orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(orderForm);
    const data = Object.fromEntries(formData.entries());
    const type = data["Тип разработки"] || data["development_type"] || data.type || "";
    const platform = data["Платформа / версия"] || data["platform"] || "";
    const budget = data["Бюджет"] || data["budget"] || "";
    const msg = t("order_success_form")
      .replace("{type}", type)
      .replace("{platform}", platform)
      .replace("{budget}", budget || "—");
    submitOrder({
      type: type,
      name: data["Имя"] || data.name,
      telegram: data["Telegram"] || data.telegram,
      platform: platform,
      details: data["Требования к плагину / моду"] || data.details,
      budget: budget
    }, msg);
    orderForm.reset();
  });
}

// ---------- Toast ----------
function showToast(message) {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#1e1b4b";
  toast.style.border = "3px solid #a855f7";
  toast.style.color = "#fff";
  toast.style.padding = "12px 24px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "6px 6px 0 #000";
  toast.style.zIndex = "2000";
  toast.style.fontFamily = "'Press Start 2P', cursive";
  toast.style.fontSize = "12px";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

// ---------- Инициализация ----------
applyLang();
applyCurrency();
updateCartUI();
