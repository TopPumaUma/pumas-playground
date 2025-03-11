document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});


const gamesButton = document.getElementById("games-button");
const gamesGrid = document.getElementById("games-grid");

gamesButton.addEventListener("click", () => {
  gamesGrid.classList.toggle("hidden");
});
