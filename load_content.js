async function load(title, path, characterFn, idFn) {
  try {
    const response = await fetch(path);
    const content = await response.json();
    const titleElement = document.createElement("h1");
    titleElement.textContent = title;
    overviewSection.appendChild(titleElement);
    const charContainer = document.createElement("div");
    charContainer.style = "max-width: 680px; display: flex; flex-wrap: wrap;"
    overviewSection.appendChild(charContainer);
    content.forEach(c => {
      const node = document.createElement("div");
      node.textContent = characterFn(c);
      node.id = idFn(c);
      node.className = "character not-answered";
      if (progress.includes(node.id)) {
        node.className = "character correct";
      }
      Object.entries(c).forEach(([key, value]) => {
        node.dataset[key] = value;
      })
      charContainer.appendChild(node);

      node.addEventListener("click", () => {
        currentCharacterId = node.id;
        togglePage("play");
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function init() {
  try {
    await load("Hiragana", "./data/hiragana.json", (c) => c.kana, (c) => `hiragana-${c.roumaji}`);
    await load("Katakana", "./data/katakana.json", (c) => c.kana, (c) => `katakana-${c.roumaji}`);
    await load("Radicals 1", "./data/radicals_1.json", (c) => c.radical, (c) => `radical-${c.id}`);
    await load("Radicals 2", "./data/radicals_2.json", (c) => c.radical, (c) => `radical-${c.id}`);
    await load("Kanji 1", "./data/kanji_level_1.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 2", "./data/kanji_level_2.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 3", "./data/kanji_level_3.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 4", "./data/kanji_level_4.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 5", "./data/kanji_level_5.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 6", "./data/kanji_level_6.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 7", "./data/kanji_level_7.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 8", "./data/kanji_level_8.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 9", "./data/kanji_level_9.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 10", "./data/kanji_level_10.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 11", "./data/kanji_level_11.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 12", "./data/kanji_level_12.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 13", "./data/kanji_level_13.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 14", "./data/kanji_level_14.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 15", "./data/kanji_level_15.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
    await load("Kanji 16", "./data/kanji_level_16.json", (c) => c.kanji, (c) => `kanji-${c.id}`);
  } catch (error) {
    console.error(error);
  }
}

init();