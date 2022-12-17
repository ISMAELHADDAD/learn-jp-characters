const playButton = document.getElementById("play-button");
const overviewButton = document.getElementById("main-page-button");
const overviewSection = document.getElementById("overview-section");
const playSection = document.getElementById("play-section");
const playTable = document.getElementById("play-table");
const playCharacter = document.getElementById("play-character");
const answer = document.getElementById("answer");
const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");

let currentCharacterId = undefined;

function getAnswer(characterElement) {
  if (
    characterElement.id.includes("hiragana") ||
    characterElement.id.includes("katakana")
  ) {
    return characterElement.dataset.roumaji;
  }
  if (characterElement.id.includes("radical")) {
    return characterElement.dataset.name;
  }
  if (characterElement.id.includes("kanji")) {
    return characterElement.dataset.meanings;
  }
  return "";
}

function startPlaying() {
  if (currentCharacterId) {
    const characterElement = document.getElementById(currentCharacterId);
    playCharacter.textContent = characterElement.textContent;
    input.value = "";
    input.style = "";
    input.focus();
    submitButton.style = "";
    nextButton.style = "display: none;";
    playTable.className = "play-table";
    answer.style = "display: none;";
    answer.textContent = getAnswer(characterElement);
  }
}

function onSubmit() {
  const characterElement = document.getElementById(currentCharacterId);
  const answers = answer.textContent.toLowerCase().split(",");
  answer.style = "";
  if (answers.includes(input.value)) { // correct
    playTable.className = "play-table correct";
    updateProgress(currentCharacterId, true);
    input.style = "display: none;";
    submitButton.style = "display: none;";
    nextButton.style = "";
    nextButton.focus();
    characterElement.className = "character correct";
  } else { // wrong
    playTable.className = "play-table wrong";
    updateProgress(currentCharacterId, false);
    characterElement.className = "character not-answered";
  }
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    onSubmit();
  }
});

submitButton.addEventListener("click", () => {
  onSubmit();
});

function findNextCharacter() {
  const characters = document.getElementsByClassName("character not-answered");
  currentCharacterId = characters.length > 0? characters[0].id : undefined;
}

nextButton.addEventListener("click", () => {
  findNextCharacter();
  startPlaying();
});

function togglePage(page) {
  if (page === "overview") {
    overviewSection.style = "";
    playSection.style = "display: none;";
  }
  if (page === "play") {
    overviewSection.style = "display: none;";
    playSection.style = "";
    startPlaying();
  }
}

overviewButton.addEventListener("click", () => {
  togglePage("overview");
});

playButton.addEventListener("click", () => {
  findNextCharacter();
  togglePage("play");
});
