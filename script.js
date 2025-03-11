document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});


const gamesButton = document.getElementById("games-button");
const gamesGrid = document.getElementById("games-grid");

gamesButton.addEventListener("click", () => {
  gamesGrid.classList.toggle("hidden");
});

function switchGame(title, content) {
  // Update the title of the main game
  document.getElementById("game-title").textContent = title;

  // Update the content of the main game display
  const gameDisplay = document.getElementById("game-display");
  gameDisplay.innerHTML = `<p>${content}</p>`;
}




