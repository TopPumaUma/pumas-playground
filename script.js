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


function goToGame(title, description) {
  // Dynamically update the content to show the detailed view
  const container = document.querySelector(".container"); // Assume your "container" div holds the main content

  container.innerHTML = `
    <div class="main-game">
      <h2 id="game-title">${title}</h2>
      <div class="game-box">
        <p>${description}</p>
      </div>
    </div>
    <div class="game-list">
      <h3>Other Games</h3>
      <div class="game-item" onclick="goToGame('Game 1', 'Description for Game 1')">
        Game 1
      </div>
      <div class="game-item" onclick="goToGame('Game 2', 'Description for Game 2')">
        Game 2
      </div>
      <div class="game-item" onclick="goToGame('Game 3', 'Description for Game 3')">
        Game 3
      </div>
      <!-- Add more game items as needed -->
    </div>
  `;
}


