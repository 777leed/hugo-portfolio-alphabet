let jobPos = document.getElementById("job-pos");
let CollageImg = document.getElementById("CollageImg");
let currentIndex = 0;
let currentIndexjp = 0;
let currentIndexCollage = 0;
let posList = [
  "Web Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "Designer By Heart",
];
let CollageList = ["collage2", "collage3", "collage1"];

// Track if all elements have been loaded
let imagesToLoad = [CollageImg];
let loadedImages = 0;
fadePreloader(); // All images are loaded, fade out the preloader

// Listen for the initial page load
window.onload = () => {
  // Start other intervals after the page is fully loaded
  setInterval(updateJobPos, 4000);
  setInterval(updateCollage, 4000);
};

function updateCollage() {
  // Fade out the image by setting opacity to 0
  CollageImg.style.opacity = 0;

  // Once the fade-out is complete, change the image source
  setTimeout(() => {
    CollageImg.src = `/images/${CollageList[currentIndexCollage]}.png`;

    // Fade the image back in by setting opacity to 1
    CollageImg.style.opacity = 1;

    // Move to the next index, looping back to 0 if needed
    currentIndexCollage = (currentIndexCollage + 1) % CollageList.length;
  }, 1000); // Wait for the fade-out duration (1s) before changing the image
}

function updateJobPos() {
  // Remove the animation class to reset the animation
  jobPos.parentNode.classList.remove("typewriter");
  // Change the text content
  jobPos.innerText = `${posList[currentIndexjp]}`;

  // Trigger a reflow to restart the animation
  void jobPos.parentNode.offsetWidth; // This forces a reflow

  // Reapply the animation class
  jobPos.parentNode.classList.add("typewriter");

  // Move to the next position in the list
  currentIndexjp = (currentIndexjp + 1) % posList.length;
}
