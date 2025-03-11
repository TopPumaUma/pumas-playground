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
        <div class="game-item" onclick="loadGameDetail('Drive Mad', 'Drive Mad is a car game requiring you to avoid obstacles as you complete the level in the fun, colorful form!')">Game 1</div>
        <div class="game-item" onclick="loadGameDetail('Game 2', 'Details about Game 2')">Game 2</div>
        <div class="game-item" onclick="loadGameDetail('Game 3', 'Details about Game 3')">Game 3</div>
        <div class="game-item" onclick="loadGameDetail('Game 4', 'Details about Game 4')">Game 4</div>
        <div class="game-item" onclick="loadGameDetail('Game 5', 'Details about Game 5')">Game 5</div>
        <div class="game-item" onclick="loadGameDetail('Game 6', 'Details about Game 6')">Game 6</div>
        <div class="game-item" onclick="loadGameDetail('Game 7', 'Details about Game 7')">Game 7</div>
        <div class="game-item" onclick="loadGameDetail('Game 8', 'Details about Game 8')">Game 8</div>
        <div class="game-item" onclick="loadGameDetail('Game 9', 'Details about Game 9')">Game 9</div>
      </div>
    </div>
  `;
}

function loadGameDetail(title, gameUrl) {
  const container = document.body;

  container.innerHTML = `
    <div class="container">
      <!-- Left Section: Main Game -->
      <div class="main-game">
        <h2>${title}</h2>
        <div class="game-box">
          <iframe
            src="${gameUrl}"
            width="100%"
            height="100%"
            style="border:none; border-radius: 10px;"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <!-- Right Section: Other Games -->
      <div class="game-list">
        <h3>Other Games</h3>
        <div class="game-item" onclick="loadGameDetail('Drive Mad', 'https://poki.com/en/g/drive-mad')">Game 1</div>
        <div class="game-item" onclick="loadGameDetail('Game 2', 'game2.html')">Game 2</div>
        <div class="game-item" onclick="loadGameDetail('Game 3', 'game3.html')">Game 3</div>
        <div class="game-item" onclick="loadGameDetail('Game 4', 'game1.html')">Game 4</div>
        <div class="game-item" onclick="loadGameDetail('Game 5', 'game2.html')">Game 5</div>
        <div class="game-item" onclick="loadGameDetail('Game 6', 'game3.html')">Game 6</div>
        <div class="game-item" onclick="loadGameDetail('Game 7', 'game1.html')">Game 7</div>
        <div class="game-item" onclick="loadGameDetail('Game 8', 'game2.html')">Game 8</div>
        <div class="game-item" onclick="loadGameDetail('Game 9', 'game3.html')">Game 9</div>
      </div>
    </div>
  `;
}

