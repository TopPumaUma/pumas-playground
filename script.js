// Prevent form reload on submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

// Function to dynamically load game details
function loadGameDetail(gameTitle, gameURL) {
    const gamesGrid = document.getElementById("games-grid");
    const gameDetail = document.getElementById("game-detail");

    // Check if elements exist to prevent errors
    if (!gamesGrid || !gameDetail) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    // Hide the game grid and show the detailed view
    gamesGrid.style.display = "none";
    gameDetail.style.display = "block";

    // Populate the detailed view with the selected game
    gameDetail.innerHTML = `
        <h3 style="text-align: center; margin-bottom: 20px;">${gameTitle}</h3>
        <iframe src="${gameURL}" width="100%" height="80vh" frameborder="0" allowfullscreen></iframe>
        <button onclick="reloadGames()" style="margin: 20px auto; display: block; padding: 10px 20px; border: none; background-color: #4CAF50; color: white; border-radius: 5px; cursor: pointer;">
            Back to Games
        </button>
    `;
}

// Function to reset view to the games grid
function reloadGames() {
    const gamesGrid = document.getElementById("games-grid");
    const gameDetail = document.getElementById("game-detail");

    // Ensure both elements exist
    if (!gamesGrid || !gameDetail) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    // Reset to the games grid view
    gameDetail.style.display = "none";
    gamesGrid.style.display = "grid";
}

// Interactive Rainfall Effect
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Resize the canvas dynamically to the viewport
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initial canvas resize
resizeCanvas();

// Create raindrops array
const raindrops = [];

// Generate raindrops with dynamic properties
for (let i = 0; i < 150; i++) {
    raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 2
    });
}

// Animate raindrops with gradient coloring
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    raindrops.forEach(drop => {
        // Gradient effect based on drop position
        const greenComponent = Math.floor(255 - (drop.y / canvas.height) * 255); // More green at the top
        const blueComponent = Math.floor((drop.y / canvas.height) * 255);       // More blue at the bottom
        const color = `rgba(0, ${greenComponent}, ${blueComponent}, 0.8)`; // Gradient color

        // Move and reset the drop
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.x = Math.random() * canvas.width;
        }

        // Draw the raindrop
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    });

    requestAnimationFrame(animate);
}

// Start rainfall animation
animate();

// Handle resizing events to maintain canvas fit
window.addEventListener('resize', resizeCanvas);

