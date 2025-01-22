let mobileMenu = document.getElementById("mobile-menu");
let mobileButtonClose = document.getElementById("mobile-menu-close");
let mobileButton = document.getElementById("mobile-button");
let logoImg = document.getElementById("logoImg");
let logoList = ["GAME DEP", "FILM DEP", "MUSIC DEP", "TECH DEP", "VISUALS DEP"];
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

mobileButton.addEventListener("click", () => {
  showMenu();
});

mobileButtonClose.addEventListener("click", () => {
  closeMenu();
});

function showMenu() {
  mobileMenu.classList.remove("-right-72");
  mobileMenu.classList.add("right-0");
}

function closeMenu() {
  mobileMenu.classList.remove("right-0");
  mobileMenu.classList.add("-right-72");
}
