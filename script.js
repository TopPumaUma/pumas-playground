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


