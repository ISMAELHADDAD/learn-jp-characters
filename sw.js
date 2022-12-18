self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("learn-jp-characters-store")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/load_content.js",
          "/interaction.js",
          "/progress.js",
          "/192.png",
          "/1024.png",
          "/favicon.ico",
          "/manifest.webmanifest",
          "data/hiragana.json",
          "data/kanji_level_1.json",
          "data/kanji_level_10.json",
          "data/kanji_level_11.json",
          "data/kanji_level_12.json",
          "data/kanji_level_13.json",
          "data/kanji_level_14.json",
          "data/kanji_level_15.json",
          "data/kanji_level_16.json",
          "data/kanji_level_2.json",
          "data/kanji_level_3.json",
          "data/kanji_level_4.json",
          "data/kanji_level_5.json",
          "data/kanji_level_6.json",
          "data/kanji_level_7.json",
          "data/kanji_level_8.json",
          "data/kanji_level_9.json",
          "data/katakana.json",
          "data/radicals_1.json",
          "data/radicals_2.json",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
