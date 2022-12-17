const starCount = document.getElementById("star-count");

let progress = [];
let loadProgress = localStorage.getItem("progress");
if (loadProgress) {
  progress = JSON.parse(loadProgress);
}
setCounter();

function updateProgress(characterId, isCorrect) {
  if (isCorrect) {
    const index = progress.findIndex((id) => id === characterId);
    if (index === -1) progress.push(characterId);
    localStorage.setItem("progress", JSON.stringify(progress));
  } else {
    const index = progress.findIndex((id) => id === characterId);
    if (index !== -1) {
      progress = progress.filter((id) => id !== characterId);
      localStorage.setItem("progress", JSON.stringify(progress));
    }
  }
  setCounter();
}

function setCounter() {
  starCount.textContent = `${progress.length} of 2575*`;
}