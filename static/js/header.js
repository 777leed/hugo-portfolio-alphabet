let CollageImg = document.getElementById("CollageImg");
let logoImg = document.getElementById("logoImg");
let logoList = ["GAME DEP", "FILM DEP", "MUSIC DEP", "TECH DEP", "VISUALS DEP"];
let currentIndex = 0;

logoImg.addEventListener("click", () => {
  // Change the logo every 2 seconds
  setInterval(updateLogo, 500);
});

function updateLogo() {
  // Update the `src` attribute
  logoImg.src = `/images/${logoList[currentIndex]}.png`;
  // Move to the next index, looping back to 0 if needed
  currentIndex = (currentIndex + 1) % logoList.length;
}
