document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});


const gamesButton = document.getElementById("games-button");
const gamesGrid = document.getElementById("games-grid");

gamesButton.addEventListener("click", () => {
  gamesGrid.classList.toggle("hidden");
});


const footer = document.getElementById("footer-note");

window.addEventListener("scroll", () => {
  // Check if the user is near the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    footer.classList.remove("hidden"); // Show the footer
  } else {
    footer.classList.add("hidden"); // Hide the footer
  }
});
