/* ==========================================================================
   Blackveil — শুধু এই ফাইলটাই বদলাবেন।
   index.html ছুঁবেন না।
   ========================================================================== */

window.CONTENT = {

  /* উপরে ছোট লাইন (যেমন: "Personal · Motivation") */
  eyebrow: "Personal · Motivation",

  /* আপনার নাম — বড় করে দেখাবে */
  name: "Blackveil",

  /* নামের নিচের এক লাইন পরিচয়। <em>...</em> দিলে সেই অংশ হাইলাইট হবে */
    tagline: "Darkness isn’t evil. <em>It’s honest.</em>",

  /* ----- HERO-র ছোট ট্যাগগুলো ----- যত খুশি, খালি রাখলে দেখাবে না */
  chips: ["Self-taught", "Still going", "No shortcuts"],

  /* ----- প্রতিটা সেকশনের শিরোনামের নিচের ছোট বাক্য -----
     কোনোটা না চাইলে "" খালি রাখুন — তখন ওটা দেখাবে না */
  leads: {
    quotes:  "The lines I keep coming back to.",
    songs:   "What I play when the work gets long.",
    closing: "",
    follow:  "Say something, or just stay close."
  },

  /* ----- THEME / রঙ -----
     নিচের যেকোনো একটার নাম বসান:   "crimson" | "amber" | "ice" | "mono"
     crimson = রক্ত-লাল  (এখন এটা চালু)
     amber   = সোনালি         ice = বরফি নীল        mono = সাদা-কালো
     নিজের রঙ চাইলে theme: { accent:"#d2413c", accentRgb:"210,65,60",
                             ember:"#6e1414", emberRgb:"110,20,20",
                             hi:"#ff8f7a", on:"#150404" }  এভাবে লিখুন। */
  theme: "crimson",
  themes: {
    crimson: { accent:"#d2413c", accentRgb:"210,65,60", ember:"#6e1414", emberRgb:"110,20,20", hi:"#ff8f7a", on:"#150404" },
    amber:   { accent:"#e9a340", accentRgb:"233,163,64", ember:"#b4551f", emberRgb:"180,85,31", hi:"#f8e0ab", on:"#120c04" },
    ice:     { accent:"#7fc4dd", accentRgb:"127,196,221", ember:"#1d5f7a", emberRgb:"29,95,122", hi:"#d6f2fb", on:"#04121a" },
    mono:    { accent:"#d6d2ca", accentRgb:"214,210,202", ember:"#5c5852", emberRgb:"92,88,82", hi:"#ffffff", on:"#0b0b0b" }
  },

  /* ----- MOTIVATION সেকশনের স্ক্রল -----
     প্রতি লাইনে কতটুকু স্ক্রল লাগবে (স্ক্রিনের % হিসাবে)।
     45 = এখনকার সেটিং।  কমালে (35) দ্রুত বদলাবে,
     বাড়ালে (90) ধীরে বদলাবে — কিন্তু বেশি বাড়ালে নিচে নামতে দেরি লাগবে। */
  quoteScroll: 45,

  /* ----- MOTIVATION LINES -----  যত খুশি লাইন দিতে পারেন।
     প্রতিটা লাইন একটা string, কমা দিয়ে আলাদা */
  quotesTitle: "Words I Live By",
    quotes: [
      "You keep waiting for the perfect time.\n\nTime keeps moving without you.",
      "Success is not luck. It’s effort, every day.",
      "If you don’t start today, you won’t start tomorrow either.",
      "You keep saying tomorrow, until you realize how many tomorrows you’ve already wasted.",
      "When you have empty pockets, even a simple hello can make people think you are asking for something.",
      "Be good — but never waste your time proving it.",
      "If nobody wants to go with you,\n\nGo Alone."
    ],

  /* ----- MOTIVATION সেকশনের "Skip" বাটন -----
     এই লেখাটাই বাটনে দেখাবে। বাটনে চাপ দিলে motivation
     লাইনগুলো না দেখেই সোজা নিচের সেকশনে চলে যাবে। */
  skipLabel: "Skip the lines",

  /* ----- AND NOW — গল্প -----
     এগুলো সাধারণভাবে নিচে নিচে থাকবে — স্ক্রল করলে একটার পর একটা
     ফুটে উঠবে (কোনো আলাদা scroll পদ্ধতি নেই)।
     প্রতিটা অংশ এই রকম:  { title: "ছোট শিরোনাম", text: "গল্পের অংশ" }
     যত খুশি যোগ করুন। শিরোনাম না চাইলে title বাদ দিন বা খালি রাখুন।
     ⚠️ নিচের লেখাগুলো শুধু জায়গা ধরে রাখার জন্য — নিজের কথা দিয়ে বদলে নিন। */
  story: [
    { title: "Where I came from",
      text: "Your line goes here. Where you started, what you had, what you didn't." },
    { title: "The part nobody saw",
      text: "The months that didn't work. What broke, and what you kept doing anyway." },
    { title: "The turn",
      text: "The decision, the person, or the moment that changed the direction of everything." },
    { title: "Where I stand now",
      text: "Not the finish line — just proof that the direction was right." }
  ],

  /* ----- প্লেয়ার দেখাবে কি না -----
       "visible" = প্লেয়ার + গানের তালিকা, দুইটাই দেখা যাবে
       "list"    = শুধু গানের তালিকা থাকবে; প্লেয়ার বা ভিডিও কিছুই
                   দেখাবে না — নামে চাপ দিলেই গান বাজবে। (এখন এটা চালু)
       "hidden"  = Songs সেকশনটাই থাকবে না; শুধু বাঁ-নিচের ♪ বাটন।
       ⚠️ "list" ও "hidden" — দুইটাতেই YouTube-এর গান বাদ পড়ে,
          এবং শুধু নিজের ফাইল বা সরাসরি অডিও লিংক কাজ করে। */
    playerMode: "visible",

  /* ----- ব্যাকগ্রাউন্ড মিউজিকের আওয়াজ (0.0 = চুপ, 1.0 = পুরো) */
    musicVolume: 0.45,

    /* ----- YouTube গান কীভাবে চলবে -----
       "link"  = সাইটে কোনো ভিডিও দেখাবে না; শুধু একটা ▶ বাটন।
                 চাপ দিলে নতুন ট্যাবে YouTube-এ গান খুলবে। (এখন এটা)
       "embed" = সাইটের ভেতরেই গান বাজবে, কিন্তু YouTube-এর
                 ভিডিও প্লেয়ার দেখা যাবে (ওটা লুকানো সম্ভব না)। */
    youtubeMode: "link",

  /* ----- SONGS / SOUNDTRACK -----  গান দেওয়ার ৩ উপায়
     যেকোনো লাইন হুবহু এভাবে লিখুন — তিন রকমই একসাথে চলে।

     (১) নিজের ফাইল:
         { title: "গানের নাম", artist: "শিল্পী", src: "songs/track1.mp3" }
         mp3 ফাইলটা songs/ ফোল্ডারে রাখতে হবে।

     (২) সরাসরি অডিও লিংক (ফাইল লাগবে না):
         { title: "গানের নাম", artist: "শিল্পী", src: "https://.../song.mp3" }
         লিংকটা সরাসরি অডিও ফাইলের হতে হবে (.mp3/.ogg/.m4a)।
         YouTube/Spotify-র পেজ লিংক এখানে কাজ করবে না।

     (৩) YouTube লিংক (ফাইল লাগবে না):
         { title: "গানের নাম", artist: "শিল্পী", youtube: "https://youtu.be/XXXXXXXXXXX" }
         watch?v= / youtu.be / shorts — যেকোনো রকম লিংক চলবে।
         এটা সিলেক্ট করলে প্লেয়ারের জায়গায় YouTube প্লেয়ার দেখাবে,
         আর পাশের ◀ ▶ বাটন দিয়ে গান বদলাতে পারবেন।

     নিচের demo লাইনটা মুছে দিন। যত খুশি লাইন যোগ করুন। */
  songsTitle: "My Soundtrack",
  songs: [
        { title: "her",                artist: "JVKE",                        youtube: "https://youtu.be/mpxEUex3dek" },
        { title: "Nevada",             artist: "Vicetone, Cozi Zuehlsdorff",  youtube: "https://youtu.be/QqccaHauSKQ" },
        { title: "Him & I",            artist: "G-Eazy, Halsey",              youtube: "https://youtu.be/SA7AIQw-7Ms" },
        { title: "After Dark",         artist: "Mr.Kitty",                    youtube: "https://youtu.be/sVx1mJDeUjY" },
        { title: "Sweater Weather",    artist: "The Neighbourhood",           youtube: "https://youtu.be/GCdwKhTtNNw" },
        { title: "Daddy Issues",       artist: "The Neighbourhood",           youtube: "https://youtu.be/_lMlsPQJs6U" },
        { title: "Do I Wanna Know?",   artist: "Arctic Monkeys",              youtube: "https://youtu.be/bpOSxM0rNPM" },
        { title: "MIDDLE OF THE NIGHT",artist: "Elley Duhé",                  youtube: "https://youtu.be/oSHzUD-uqKY" },
        { title: "Another Love",       artist: "Tom Odell",                   youtube: "https://youtu.be/MwpMEbgC7DA" },
        { title: "Space Song",         artist: "Beach House",                 youtube: "https://youtu.be/RBtlPT23PTM" }
      ],

  /* ----- CLOSING ----- */
  closingTitle: "And Now",
  /* <strong>...</strong> দিলে সেটা হাইলাইট হবে */
  closing: "I'm not asking anyone to believe it yet. <strong>Just watch.</strong>",

  /* ----- LINKS / FIND ME -----
       name = বক্সে যে নামটা দেখাবে (ক্লিক করলে href-এ যাবে)
       href = লিংক
       চাইলে নামের নিচে ছোট করে username-ও দেখাতে পারেন —
       প্রতিটা লাইনে  handle: "@username"  যোগ করে দিলেই হবে। */
    followTitle: "Find Me",
  links: [
      { label: "Telegram", name: "𝙎𝙃𝘼𝙆𝙄𝙇",   href: "https://t.me/S_H_AK_I_L" },
      { label: "Channel",  name: "𝗕𝗹𝗮𝗰𝗸𝘃𝗲𝗶𝗹", href: "https://t.me/Blackveil_Night" }
    ],

  /* ----- FOOTER ----- */
  footLeft: "© " + new Date().getFullYear() + " · Blackveil",
  footRight: "Built with patience"
};
