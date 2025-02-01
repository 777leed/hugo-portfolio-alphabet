let mobileMenu = document.getElementById("mobile-menu");
let mobileButtonClose = document.getElementById("mobile-menu-close");
let mobileButton = document.getElementById("mobile-button");
let torchToggle = document.getElementById("torch-toggle");
const savedTheme = sessionStorage.getItem("theme") === "true"; // Parse to boolean
let torchOff = savedTheme;
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
torchToggle.addEventListener("click", () => {
  toggleLight();
});
mobileButtonClose.addEventListener("click", () => {
  closeMenu();
});

function showMenu() {
  mobileMenu.classList.remove("-right-72");
  mobileMenu.classList.add("right-0");
}
function toggleLight() {
  if (torchOff) {
    torchToggle.childNodes[1].src = "/images/icons8/icons8-light-mode-78.png";
    document.body.classList.add("invert");

    document.body.style.backgroundColor = "white";
    torchOff = false; // Update state
    sessionStorage.setItem("theme", "false"); // Save as string
  } else {
    torchToggle.childNodes[1].src = "/images/icons8/icons8-dark-mode-30.png";
    document.body.classList.remove("invert");

    document.body.style.backgroundColor = "#040707";
    torchOff = true; // Update state
    sessionStorage.setItem("theme", "true"); // Save as string
  }
  console.log("Theme saved as:", sessionStorage.getItem("theme"));
}

// Apply saved theme on page load
if (!torchOff) {
  document.body.classList.add("invert");
  document.body.style.backgroundColor = "white";
  torchToggle.childNodes[1].src = "/images/icons8/icons8-light-mode-78.png";
  document.getElementById("CollageImg").classList.add("invert");
} else {
  document.body.style.backgroundColor = "#040707";
  document.getElementById("CollageImg").classList.remove("invert");
  console.log("xx");
  torchToggle.childNodes[1].src = "/images/icons8/icons8-dark-mode-30.png";
}
function closeMenu() {
  mobileMenu.classList.remove("right-0");
  mobileMenu.classList.add("-right-72");
}
