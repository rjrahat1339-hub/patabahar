// ============================================================
//  পাতাবাহার — আপনার দোকানের তথ্য ও গাছের তালিকা
//  THIS IS THE ONLY FILE YOU EDIT. এই ফাইলটিই শুধু এডিট করবেন।
//
//  ✏️  দাম বদলাতে:      price: 150  →  price: 200
//  ✏️  বর্ণনা বদলাতে:    desc_bn: "..." এর ভিতরের লেখা বদলান
//  ✏️  স্টক শেষ হলে:     available: true  →  available: false
//  ✏️  নতুন গাছ যোগ করতে: নিচের যেকোনো একটা { ... }, ব্লক কপি করে
//                        পেস্ট করুন, তারপর নাম-দাম-ছবি বদলান।
//  ✏️  নিজের ছবি দিতে:   GitHub-এ img ফোল্ডারে ছবি আপলোড করুন,
//                        তারপর img: "img/আপনার-ছবি.jpg" লিখুন।
//  🎬  ভিডিও দিতে:       video ফোল্ডারে .mp4 আপলোড করুন, তারপর
//                        video: "video/আপনার-ভিডিও.mp4" লিখুন।
//                        (ভিডিও থাকলে ছবির বদলে ভিডিও দেখাবে)
//
//  cat (ক্যাটাগরি) হবে এই তিনটার একটা:  "indoor" / "flower" / "fruit"
// ============================================================

const SHOP = {
  name_bn: "পাতাবাহার",
  tagline_bn: "সবুজে সাজুক আপনার ঘর",
  whatsapp: "8801851255899",               // অর্ডারের WhatsApp নম্বর
  delivery_bn: "সারা বাংলাদেশে হোম ডেলিভারি — মাত্র ৩ থেকে ৫ দিনে",
  hours_bn: "প্রতিদিন সকাল ৯টা – রাত ১০টা পর্যন্ত মেসেজের উত্তর দেওয়া হয়",

  // ---- সোশ্যাল মিডিয়া লিংক ----
  // অ্যাকাউন্ট বানানোর পর এখানে শুধু username বসান — সাইটে বাটন
  // নিজে নিজেই চলে আসবে। ফাঁকা ("") রাখলে ওই বাটন দেখাবে না।
  social: {
    facebook_page: "",    // যেমন: "patabahar.bd"  (facebook.com/ এর পরের অংশ)
    instagram: "",        // যেমন: "patabahar_bd"  (@ ছাড়া)
    tiktok: "",           // যেমন: "patabahar_bd"  (@ ছাড়া)
    youtube: "",          // যেমন: "@patabahar"    (চ্যানেল হ্যান্ডেল)
  },
};

// ⚠️ সব দাম এখন আনুমানিক (PLACEHOLDER) — আপনার আসল দাম বসান!
const PRODUCTS = [

  // ---------- ইনডোর প্ল্যান্ট (Indoor Plants) ----------
  { cat: "indoor", name_bn: "মানি প্ল্যান্ট", name_en: "Money Plant (Pothos)",
    price: 150, img: "img/money-plant.jpg", video: "", available: true,
    desc_bn: "সবচেয়ে সহজে বাঁচে এমন ইনডোর গাছ। অল্প আলোতেও ভালো থাকে, পানিতে বা টবে দুইভাবেই রাখা যায়।" },

  { cat: "indoor", name_bn: "স্নেক প্ল্যান্ট", name_en: "Snake Plant",
    price: 350, img: "img/snake-plant.jpg", video: "", available: true,
    desc_bn: "ঘরের বাতাস পরিষ্কার করে। সপ্তাহে একদিন পানি দিলেই চলে — ব্যস্ত মানুষের জন্য পারফেক্ট।" },

  { cat: "indoor", name_bn: "জেড জেড প্ল্যান্ট", name_en: "ZZ Plant",
    price: 650, img: "img/zz-plant.jpg", video: "", available: true,
    desc_bn: "চকচকে গাঢ় সবুজ পাতা, অফিস-বাসা দুই জায়গাতেই মানায়। যত্ন প্রায় লাগেই না।" },

  { cat: "indoor", name_bn: "পিস লিলি", name_en: "Peace Lily",
    price: 400, img: "img/peace-lily.jpg", video: "", available: true,
    desc_bn: "সাদা ফুলসহ মায়াবী ইনডোর গাছ। ছায়ায় ভালো থাকে, ফুল ফোটে ঘরের ভিতরেই।" },

  { cat: "indoor", name_bn: "মনস্টেরা", name_en: "Monstera Deliciosa",
    price: 950, img: "img/monstera.jpg", video: "", available: true,
    desc_bn: "কাটা-পাতার বিখ্যাত শোভাময় গাছ — ঘরে রাখলেই ছবির মতো লাগে। ইনস্টাগ্রাম-ফেভারিট!" },

  { cat: "indoor", name_bn: "ঘৃতকুমারী (অ্যালোভেরা)", name_en: "Aloe Vera",
    price: 120, img: "img/aloe-vera.jpg", video: "", available: true,
    desc_bn: "রূপচর্চা আর ঔষধি গুণের জন্য ঘরে ঘরে প্রিয়। রোদ পছন্দ করে, পানি কম লাগে।" },

  { cat: "indoor", name_bn: "স্পাইডার প্ল্যান্ট", name_en: "Spider Plant",
    price: 200, img: "img/spider-plant.jpg", video: "", available: true,
    desc_bn: "ঝুলন্ত টবে দারুণ মানায়। বাতাস পরিষ্কার করে, বাচ্চা গাছ হয় বলে সহজে বাড়ানো যায়।" },

  { cat: "indoor", name_bn: "রাবার প্ল্যান্ট", name_en: "Rubber Plant",
    price: 450, img: "img/rubber-plant.jpg", video: "", available: true,
    desc_bn: "বড় চকচকে পাতার আভিজাত্যময় গাছ। ড্রয়িংরুমের কোণায় রাখার জন্য সেরা।" },

  // ---------- ফুলের গাছ (Flowering Plants) ----------
  { cat: "flower", name_bn: "জবা", name_en: "Hibiscus (Joba)",
    price: 180, img: "img/joba.jpg", video: "", available: true,
    desc_bn: "দেশি লাল জবা — প্রায় সারা বছর ফুল দেয়। রোদ পেলেই খুশি।" },

  { cat: "flower", name_bn: "বেলি", name_en: "Arabian Jasmine (Beli)",
    price: 220, img: "img/beli.jpg", video: "", available: true,
    desc_bn: "সন্ধ্যায় মন-মাতানো সুগন্ধ। বারান্দার টবে চমৎকার হয়।" },

  { cat: "flower", name_bn: "গন্ধরাজ", name_en: "Gardenia (Gandharaj)",
    price: 280, img: "img/gandharaj.jpg", video: "", available: true,
    desc_bn: "সাদা ফুলের রাজকীয় সুবাস — নামেই যার পরিচয়। ছাদবাগানের গর্ব।" },

  { cat: "flower", name_bn: "গোলাপ", name_en: "Rose (Golap)",
    price: 200, img: "img/golap.jpg", video: "", available: true,
    desc_bn: "দেশি জাতের লাল গোলাপ। রোদ আর নিয়মিত যত্নে ফুলে ভরে থাকে।" },

  { cat: "flower", name_bn: "রঙ্গন", name_en: "Ixora (Rongon)",
    price: 160, img: "img/rongon.jpg", video: "", available: true,
    desc_bn: "থোকা থোকা লাল ফুল, সারা বছরই ফোটে। বেড়া বা টব দুটোতেই চলে।" },

  { cat: "flower", name_bn: "গাঁদা", name_en: "Marigold (Genda)",
    price: 80, img: "img/genda.jpg", video: "", available: true,
    desc_bn: "শীতের সবচেয়ে জনপ্রিয় ফুল। অল্প খরচে বাগান রঙিন করার সেরা উপায়।" },

  // ---------- ফলের চারা (Fruit Saplings) ----------
  { cat: "fruit", name_bn: "আম (আম্রপালি, কলমের চারা)", name_en: "Mango — Amrapali (grafted)",
    price: 350, img: "img/aam.jpg", video: "", available: true,
    desc_bn: "কলমের চারা — ২/৩ বছরেই ফল। ছাদবাগানে ড্রামেও চাষ করা যায়।" },

  { cat: "fruit", name_bn: "পেয়ারা (থাই)", name_en: "Guava — Thai (grafted)",
    price: 250, img: "img/peyara.jpg", video: "", available: true,
    desc_bn: "বারো মাস ফল দেয় এমন জাত। টবে/ড্রামে দারুণ ফলন।" },

  { cat: "fruit", name_bn: "লেবু (সিডলেস)", name_en: "Lemon — Seedless",
    price: 220, img: "img/lebu.jpg", video: "", available: true,
    desc_bn: "বিচিহীন রসালো লেবু, সারা বছর ধরে। বারান্দার টবেই হয়।" },

  { cat: "fruit", name_bn: "লিচু (চায়না-৩)", name_en: "Lychee — China-3",
    price: 400, img: "img/lichu.jpg", video: "", available: true,
    desc_bn: "মিষ্টি বড় দানার জনপ্রিয় জাত। বাড়ির উঠানের জন্য সেরা ফলগাছ।" },

  { cat: "fruit", name_bn: "মাল্টা (বারি-১)", name_en: "Malta — BARI-1",
    price: 300, img: "img/malta.jpg", video: "", available: true,
    desc_bn: "দেশে সফল মাল্টার জাত — সবুজ খোসা, ভিতরে মিষ্টি রস। কলমের চারা।" },

  { cat: "fruit", name_bn: "পেঁপে", name_en: "Papaya (Pepe)",
    price: 100, img: "img/pepe.jpg", video: "", available: true,
    desc_bn: "দ্রুত বাড়ে, ৬-৮ মাসেই ফল। সবজি ও পাকা ফল দুইভাবেই খাওয়া যায়।" },

  // ============ নতুন যোগ হলো (২০টি) ============

  // ---------- ইনডোর প্ল্যান্ট ----------
  { cat: "indoor", name_bn: "এরিকা পাম", name_en: "Areca Palm",
    price: 550, img: "img/areca-palm.jpg", video: "", available: true,
    desc_bn: "ঘরের কোণা বা ড্রয়িংরুমের জন্য সবচেয়ে জনপ্রিয় পাম। বাতাস পরিষ্কার রাখে, দেখতে রাজকীয়।" },

  { cat: "indoor", name_bn: "ক্রোটন (পাতাবাহার)", name_en: "Croton",
    price: 250, img: "img/croton.jpg", video: "", available: true,
    desc_bn: "লাল-হলুদ-সবুজ রঙিন পাতার গাছ — আমাদের দোকানের নামও এই গাছ থেকেই! রোদে রঙ আরও গাঢ় হয়।" },

  { cat: "indoor", name_bn: "সিনগোনিয়াম", name_en: "Syngonium",
    price: 220, img: "img/syngonium.jpg", video: "", available: true,
    desc_bn: "তীরের ফলার মতো নরম পাতা। ছোট টবে বা ঝুলন্ত পটে দুইভাবেই সুন্দর, যত্ন খুব কম।" },

  { cat: "indoor", name_bn: "লাকি বাম্বু", name_en: "Lucky Bamboo",
    price: 300, img: "img/lucky-bamboo.jpg", video: "", available: true,
    desc_bn: "শুধু পানিতেই বেঁচে থাকে। সৌভাগ্যের প্রতীক হিসেবে উপহার দেওয়ার জন্য দারুণ।" },

  { cat: "indoor", name_bn: "ক্যাকটাস (মিক্স)", name_en: "Cactus (assorted)",
    price: 180, img: "img/cactus.jpg", video: "", available: true,
    desc_bn: "টেবিল বা জানালার পাশে ছোট্ট সাজ। মাসে দুই-তিনবার পানি দিলেই যথেষ্ট।" },

  { cat: "indoor", name_bn: "সাকুলেন্ট (মিক্স)", name_en: "Succulent (assorted)",
    price: 200, img: "img/succulent.jpg", video: "", available: true,
    desc_bn: "গোলাপের মতো সাজানো মাংসল পাতা। পড়ার টেবিল বা অফিস ডেস্কের জন্য পারফেক্ট।" },

  { cat: "indoor", name_bn: "এগ্লোনিমা", name_en: "Aglaonema (Chinese Evergreen)",
    price: 480, img: "img/aglaonema.jpg", video: "", available: true,
    desc_bn: "গোলাপি-সবুজ নকশা করা পাতা। কম আলোতেও রঙ ধরে রাখে — ঘরের ভিতরের গাছ হিসেবে সেরা।" },

  { cat: "indoor", name_bn: "ফার্ন", name_en: "Boston Fern",
    price: 260, img: "img/fern.jpg", video: "", available: true,
    desc_bn: "ঝাঁকড়া সবুজ পাতার ঝর্ণা। বাথরুম বা বারান্দার ছায়ায় দারুণ জমে।" },

  // ---------- ফুলের গাছ ----------
  { cat: "flower", name_bn: "বাগানবিলাস", name_en: "Bougainvillea",
    price: 300, img: "img/bougainvillea.jpg", video: "", available: true,
    desc_bn: "ছাদ বা বারান্দা ফুলে ভরিয়ে দেয়। কড়া রোদ আর কম পানিতেই সবচেয়ে ভালো ফুল ফোটে।" },

  { cat: "flower", name_bn: "এডেনিয়াম (মরু গোলাপ)", name_en: "Adenium (Desert Rose)",
    price: 450, img: "img/adenium.jpg", video: "", available: true,
    desc_bn: "মোটা গুঁড়ি আর গাঢ় গোলাপি ফুল — বনসাই-প্রেমীদের প্রিয়। পানি খুব কম লাগে।" },

  { cat: "flower", name_bn: "কামিনী", name_en: "Kamini (Orange Jasmine)",
    price: 260, img: "img/kamini.jpg", video: "", available: true,
    desc_bn: "থোকা থোকা সাদা ফুলের তীব্র সুবাস, সন্ধ্যায় পুরো উঠান ভরে যায়। বেড়া হিসেবেও লাগানো যায়।" },

  { cat: "flower", name_bn: "টগর", name_en: "Togor (Crape Jasmine)",
    price: 190, img: "img/togor.jpg", video: "", available: true,
    desc_bn: "দেশি সাদা ফুল, প্রায় সারা বছর ফোটে। পূজা-অর্চনা আর বাগান দুটোতেই চিরচেনা।" },

  { cat: "flower", name_bn: "চন্দ্রমল্লিকা", name_en: "Chrysanthemum",
    price: 150, img: "img/chandromollika.jpg", video: "", available: true,
    desc_bn: "শীতের সবচেয়ে সুন্দর ফুলের একটি। নানা রঙে পাওয়া যায়, টবে দারুণ হয়।" },

  { cat: "flower", name_bn: "রজনীগন্ধা", name_en: "Tuberose (Rojonigondha)",
    price: 170, img: "img/rojonigondha.jpg", video: "", available: true,
    desc_bn: "রাতে ছড়ানো মিষ্টি ঘ্রাণের জন্য বিখ্যাত। কন্দ থেকে সহজেই বাড়ে।" },

  // ---------- ফলের চারা ----------
  { cat: "fruit", name_bn: "ড্রাগন ফল", name_en: "Dragon Fruit",
    price: 350, img: "img/dragon-fruit.jpg", video: "", available: true,
    desc_bn: "এখন দেশে সবচেয়ে চাহিদার ফল। ছাদে খুঁটি দিয়ে সহজেই চাষ করা যায়, দামও ভালো।" },

  { cat: "fruit", name_bn: "কুল/বরই (বাউকুল)", name_en: "Jujube — BAU Kul",
    price: 280, img: "img/boroi.jpg", video: "", available: true,
    desc_bn: "বড় মিষ্টি আপেল-কুল। কলমের চারা, অল্প দিনেই ফল ধরে।" },

  { cat: "fruit", name_bn: "ডালিম/আনার", name_en: "Pomegranate (Dalim)",
    price: 320, img: "img/dalim.jpg", video: "", available: true,
    desc_bn: "টবেও ফল দেয় এমন জাত। পুষ্টিগুণে ভরা, দেখতেও সুন্দর।" },

  { cat: "fruit", name_bn: "স্ট্রবেরি", name_en: "Strawberry",
    price: 150, img: "img/strawberry.jpg", video: "", available: true,
    desc_bn: "শীতকালের জন্য ছাদবাগানের মজার ফল। ঝুলন্ত টবে বাচ্চারাও লাগাতে ভালোবাসে।" },

  { cat: "fruit", name_bn: "কামরাঙ্গা", name_en: "Star Fruit (Kamranga)",
    price: 260, img: "img/kamranga.jpg", video: "", available: true,
    desc_bn: "তারার মতো কাটা যায় — টক-মিষ্টি দেশি ফল। গাছ ছোট থাকে, উঠানে মানায়।" },

  { cat: "fruit", name_bn: "সফেদা", name_en: "Sapodilla (Sofeda)",
    price: 300, img: "img/sofeda.jpg", video: "", available: true,
    desc_bn: "মধুর মতো মিষ্টি নরম ফল। কলমের চারা, যত্ন কম লাগে।" },
];
