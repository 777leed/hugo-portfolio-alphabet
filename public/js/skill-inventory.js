let skillInventory = document.getElementById("skill-inventory");
let skillButton = document.getElementById("skill-button");
skillButton.addEventListener("click", () => {
  showSkills();
});

function showSkills() {
  if (skillInventory.classList.contains("-bottom-20")) {
    skillInventory.classList.remove("-bottom-20");
    skillInventory.classList.add("bottom-0");
    console.log("ff");
  } else {
    skillInventory.classList.remove("bottom-0");
    skillInventory.classList.add("-bottom-20");
  }
}
