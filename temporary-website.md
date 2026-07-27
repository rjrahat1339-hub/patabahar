# temporary-website.md — পাতাবাহার (Patabahar) Plant Shop Website

**Purpose:** running record of all website work — what's DONE, what's PENDING, and what's
blocked on the owner. Updated every time we touch the website.

- **Live site:** https://rjrahat1339-hub.github.io/patabahar/
- **Owner:** rjrahat1339@gmail.com · WhatsApp for orders: **01851255899**
- **Business:** online plant shop, Bangladesh · nationwide delivery 3–5 days
- **Language:** Bangla (site UI + all product copy)
- **Last updated:** 2026-07-27

---

## 1. Where the files live

| What | Path |
|---|---|
| Working source (master copy) | `C:\Users\rjrah\Desktop\Projects\patabahar\` |
| Netlify upload folder (owner drags this) | `C:\Users\rjrah\Desktop\patabahar-website\` |
| Logo files (PNG + JPG) | `C:\Users\rjrah\Desktop\patabahar-logo\` |
| Logo option set (5 designs to choose from) | `C:\Users\rjrah\Desktop\patabahar-logo-options\` |
| Live host (current) | GitHub Pages — repo `rjrahat1339-hub/patabahar` |

**Architecture:** deliberately simple — one `index.html` (all CSS/JS inline) + one
`products.js` (all shop data) + `img/` folder. No build step, no framework, no database.
Chosen so the owner can edit everything in Notepad without developer help.

---

## 2. DONE ✅

### Site build
- Full storefront built from scratch; catalog renders from `products.js`.
- **Search box** (live filter), **category tabs** (সব / ইনডোর / ফুল / ফল with live counts),
  **price sorting** (low→high, high→low), "no result" message.
- **Hero + stats dashboard** (plant count, 64 districts, 3–5 days, 1-message ordering).
- **Trust strip** (healthy plants / careful packing / after-sale advice).
- **"How to order"** 3-step section.
- **Floating WhatsApp button**, sticky header, fully responsive (mobile-first — most BD buyers).
- Browser-tab favicon + **social share preview** (og: tags) so the link looks right when
  posted to WhatsApp/Facebook.

### Ordering
- Every product card has an **অর্ডার করুন** button → opens WhatsApp to `+8801851255899`
  with the order message **pre-written in Bangla** (plant name + price).
- Price **shown** on cards (owner's decision, chosen over "inbox for price").

### Catalog — 40 plants
| Category | Count | Examples |
|---|---|---|
| ইনডোর প্ল্যান্ট | 16 | মানি প্ল্যান্ট, স্নেক প্ল্যান্ট, ZZ, মনস্টেরা, এরিকা পাম, ক্রোটন, এগ্লোনিমা, লাকি বাম্বু, ক্যাকটাস, সাকুলেন্ট |
| ফুলের গাছ | 12 | জবা, বেলি, গন্ধরাজ, গোলাপ, রঙ্গন, গাঁদা, বাগানবিলাস, এডেনিয়াম, কামিনী, টগর, রজনীগন্ধা |
| ফলের চারা | 12 | আম, পেয়ারা, লেবু, লিচু, মাল্টা, পেঁপে, ড্রাগন ফল, বাউকুল, ডালিম, স্ট্রবেরি, কামরাঙ্গা, সফেদা |

- All 40 have photos, Bangla names, English names, Bangla descriptions, prices.
- **Photos:** sourced from Wikimedia Commons, **all Public Domain / CC-BY licensed**,
  credited in the footer (legal requirement for CC-BY). Optimised to ≤720px.

### Delivery policy (updated per owner)
- Delivery **charge is NOT fixed** — depends on **distance + plant size**, discussed with
  the owner on WhatsApp at order time. This is stated on the site in two places.
- Delivery time: 3–5 days, all 64 districts.

### Owner editing system
- **`products.js`** is the single file to edit. Heavily commented **in Bangla** at the top.
- Owner can change: price, description, name, stock status (`available: true/false`),
  add new plants (copy-paste a block), change WhatsApp number / delivery text / tagline.
- **Photo upload:** drop file in `img/`, set `img: "img/name.jpg"`.
- **Video upload:** drop `.mp4` in `video/`, set `video: "video/name.mp4"` → card shows
  video instead of photo. (Feature built and working; no videos uploaded yet.)
- Bangla guide files written: `কীভাবে-এডিট-করবেন.txt`, `সোশ্যাল-মিডিয়া-কিট.txt`.

### Social media system
- Buttons for **WhatsApp / Messenger / Instagram / TikTok** built into a
  "দাম, স্টক বা যত্ন নিয়ে প্রশ্ন?" section + footer icons.
- **Auto-hide logic:** a button only appears once its username is filled in
  `SHOP.social` in `products.js`. Prevents dead links. Currently **only WhatsApp shows.**

### Theme history (owner rejected 2, current is 3rd)
1. ❌ Earthy/warm linen + serif — rejected
2. ❌ Clean white/green professional — rejected
3. ✅ **Bright & colourful** (current) — gradient hero, colour-coded categories
   (sky-blue indoor / pink flower / orange fruit), rounded cards, sunny CTAs

### Logo
- 5 design options generated for owner to choose: pot / wreath / leaf / monstera tile /
  monogram. Delivered as **PNG (transparent bg)** + **JPG (white bg)** + contact sheet.
- Option 1 (smiling pot) is currently ON the site as a placeholder until owner chooses.
- ⚠️ Explained to owner: **JPG cannot have a transparent background** — that's the file
  format, not a mistake. Transparent = PNG only.

---

## 3. PENDING — blocked on OWNER 🔴

These cannot be done by Claude; they need the owner's phone/email/identity.

1. **REAL PRICES** — every price on the site is a placeholder guess. Highest priority.
2. **Choose a logo** — owner said "didn't like" the first one; 5 options delivered,
   awaiting a pick (option number).
3. **Create Facebook Page** — owner has no page. **Claude cannot create it**: requires
   the owner's Facebook login + phone verification + accepting Meta's terms as owner.
   No API/automation exists for this. Copy-paste setup text is ready in the social kit.
4. **Create Instagram + TikTok** (owner said they have a personal FB/IG — need the
   *business* usernames to link). Send usernames → buttons switch on in 1 minute.
5. **Netlify move (clean address)** — to get rid of `rjrahat1339-hub` in the URL and have
   `patabahar.netlify.app` instead. Needs owner email signup + drag the
   `patabahar-website` folder. All prepared; 5 minutes of owner's time.
6. **Own plant photos** — current photos are licensed stock. Real photos of actual stock
   will sell significantly better and remove the credits requirement.

---

## 4. PENDING — Claude can do next 🟡

- Switch on Messenger / Instagram / TikTok buttons (needs usernames from owner).
- Finalise + polish the chosen logo; regenerate full set (wide / square / icon / favicon).
- Attach a custom domain (e.g. `patabahar.com.bd`) when owner buys one — free on both
  GitHub Pages and Netlify, just DNS setup.
- Optional future features discussed but NOT built:
  - "Inbox for price" mode (hide prices) — owner chose to show prices instead
  - Full card checkout (needs owner's Stripe/bKash merchant account)
  - Customer reviews section (must be real reviews only — never fabricated)
  - Plant-care blog/tips page for SEO
  - Bangla/English language toggle

---

## 5. Rules & decisions to remember

- **Never fabricate**: no fake reviews, no invented sales figures, no made-up awards.
- **Photos must be properly licensed** and credited (currently Wikimedia CC/PD).
- **Only link social accounts that actually exist** — dead links damage buyer trust.
- **Owner must own all accounts** — never create accounts on their behalf even if asked;
  explain why and hand over copy-paste setup instructions instead.
- Prices are placeholders until the owner replaces them — flag this every time.
- Keep the site **one folder, no build step** so the owner stays independent.

---

## 6. Change log

| Date | Change |
|---|---|
| 2026-07-27 | Site created: 20 plants, earthy theme, WhatsApp ordering, GitHub Pages live |
| 2026-07-27 | Theme #2: professional white/green + dashboard header, search, sort |
| 2026-07-27 | Netlify upload folder + Bangla editing guide prepared (owner rejected GitHub route) |
| 2026-07-27 | Theme #3: bright & colourful (current). Social button system built (auto-hide) |
| 2026-07-27 | Logo v1 made + added to site (header, favicon, share preview) |
| 2026-07-27 | Delivery charge changed to distance+size based, discussed on WhatsApp |
| 2026-07-27 | 5 logo options generated (PNG + JPG) for owner to choose |
| 2026-07-27 | **+20 plants added → 40 total**; photo credits regenerated for all 40 |
