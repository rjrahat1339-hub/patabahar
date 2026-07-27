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
];
