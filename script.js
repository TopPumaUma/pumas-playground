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



function loadGameDetail(title, details) {
  const container = document.getElementById("games-grid").parentElement;

  // Replace the current grid with the detailed view layout
  container.innerHTML = `
    <div class="main-game">
      <h2>${title}</h2>
      <div class="game-box">
        <p>${details}</p>
        <p>This is the main game area (16:9 rectangle).</p>
      </div>
    </div>
    <div class="game-list">
      <h3>Other Games</h3>
      <div class="game-item" onclick="loadGameDetail('Game 1', 'Details about Game 1')">
        Game 1
      </div>
      <div class="game-item" onclick="loadGameDetail('Game 2', 'Details about Game 2')">
        Game 2
      </div>
      <div class="game-item" onclick="loadGameDetail('Game 3', 'Details about Game 3')">
        Game 3
      </div>
    </div>
  `;
}

function handleBoxClick(gameTitle, gameDescription) {
  // Clear the current page layout
  document.body.innerHTML = `
    <div class="container">
      <!-- Left Section: Selected Game -->
      <div class="main-game">
        <h2>${gameTitle}</h2>
        <div class="game-box">
          <p>${gameDescription}</p>
          <p>This is where your main game area (16:9 rectangle) would go.</p>
        </div>
      </div>

      <!-- Right Section: Other Games -->
      <div class="game-list">
        <h3>Other Games</h3>
        <div class="game-item" onclick="handleBoxClick('Game 1', 'This is Game 1')">Game 1</div>
        <div class="game-item" onclick="handleBoxClick('Game 2', 'This is Game 2')">Game 2</div>
        <div class="game-item" onclick="handleBoxClick('Game 3', 'This is Game 3')">Game 3</div>
      </div>
    </div>
  `;
}
