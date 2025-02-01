let preloader = document.getElementById("pulsing-intro");
window.onload = () => {
  // Start fading the preloader once the page is loaded
  fadePreloader();
};

function fadePreloader() {
  preloader.style.transition = "opacity 1s ease"; // 1-second fade-out effect
  preloader.style.opacity = 0; // Set opacity to 0 to fade out

  // Wait for the fade-out to complete, then hide the element
  setTimeout(() => {
    preloader.style.display = "none"; // Hide the preloader completely
  }, 1000); // Match the transition duration
}
