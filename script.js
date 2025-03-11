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


// Function to load game details dynamically
function loadGameDetail(title, details) {
  const container = document.body;

  // Replace the current content with the detailed game view
  container.innerHTML = `
    <div class="container">
      <!-- Left Section: Main Game -->
      <div class="main-game">
        <h2>${title}</h2>
        <div class="game-box">
          <p>${details}</p>
          <p>This is where your 16:9 game view content goes.</p>
        </div>
      </div>

      <!-- Right Section: Other Games -->
      <div class="game-list">
        <h3>Other Games</h3>
        <div class="game-item" onclick="loadGameDetail('Game 1', 'Details about Game 1')">Game 1</div>
        <div class="game-item" onclick="loadGameDetail('Game 2', 'Details about Game 2')">Game 2</div>
        <div class="game-item" onclick="loadGameDetail('Game 3', 'Details about Game 3')">Game 3</div>
      </div>
    </div>
  `;
}

