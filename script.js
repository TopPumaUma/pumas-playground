// Prevent form reload on submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

// Function to dynamically load game details using iframe
function loadGameDetail(title, gameUrl) {
    const container = document.body;

    // Replace current content with game details
    container.innerHTML = `
        <div class="container">
            <!-- Main Game Section -->
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

            <!-- Game List Section -->
            <div class="game-list">
                <h3>Other Games</h3>
                <div class="game-item" onclick="loadGameDetail('Drive Mad', 'https://sites.google.com/gamekido.com/tyronesgames/drive-mad')">Drive Mad</div>
                <div class="game-item" onclick="loadGameDetail('Game 2', 'game2.html')">Game 2</div>
                <div class="game-item" onclick="loadGameDetail('Game 3', 'game3.html')">Game 3</div>
            </div>
        </div>
    `;
}

// Function to load game details with proper scrolling and layout adjustments
function loadGameDetail(gameTitle, gameURL) {
    const gamesGrid = document.getElementById("games-grid");
    const gameDetail = document.getElementById("game-detail");
    
    // Hide the grid and show the detailed view
    gamesGrid.style.display = "none";
    gameDetail.style.display = "block";

    // Populate the detailed view with the selected game
    gameDetail.innerHTML = `
        <h3 style="text-align: center; margin-bottom: 20px;">${gameTitle}</h3>
        <iframe src="${gameURL}" width="100%" height="80vh" frameborder="0" allowfullscreen></iframe>
        <button onclick="reloadGames()" style="margin: 20px auto; display: block; padding: 10px 20px; border: none; background-color: #4CAF50; color: white; border-radius: 5px; cursor: pointer;">Back to Games</button>
    `;
}

// Function to reset view to the games grid
function reloadGames() {
    const gamesGrid = document.getElementById("games-grid");
    const gameDetail = document.getElementById("game-detail");
    
    // Reset to the games grid view
    gameDetail.style.display = "none";
    gamesGrid.style.display = "grid"; // Ensure grid layout is restored
}

// Interactive Rainfall Effect
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Function to resize the canvas dynamically to the viewport height
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initial resize
resizeCanvas();

// Create raindrops array
const raindrops = [];

// Generate Raindrops
for (let i = 0; i < 150; i++) {
    raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 2
    });
}

// Animation logic
function animate() {
    ctx.clear
