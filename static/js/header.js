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

document.addEventListener("DOMContentLoaded", () => {
  // Get references to the header buttons
  const experienceButton = document.getElementById("experience-button");
  const projectsButton = document.getElementById("projects-button");
  const skillButton = document.getElementById("skill-button");

  // Get references to the sections
  const leftPanel = document.getElementById("left-panel");
  const rightPanel = document.getElementById("right-panel");
  const skillCarousel = document.getElementById("skill-carousel");
  const projectsSection = document.querySelector(".swiper");

  // Handle Experience button click
  if (experienceButton) {
    experienceButton.addEventListener("click", (e) => {
      e.preventDefault();

      // Scroll to the experience section in the left panel
      const experienceSection = document.querySelector(
        "#left-panel h1.font-bold.text-4xl.nothing"
      );
      if (experienceSection) {
        // Create a highlight animation
        const highlightAnimation = gsap.timeline();
        highlightAnimation
          .to(experienceSection, {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "5px",
            borderRadius: "5px",
            duration: 0.3,
          })
          .to(experienceSection, {
            backgroundColor: "transparent",
            padding: "0",
            duration: 0.3,
            delay: 0.5,
          });

        // Scroll the left panel to the experience section
        leftPanel.scrollTo({
          top: experienceSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  }

  // Handle Projects button click
  if (projectsButton) {
    projectsButton.addEventListener("click", (e) => {
      e.preventDefault();

      // Animate the projects section
      if (projectsSection) {
        // Create a highlight animation for the projects section
        const projectsAnimation = gsap.timeline();
        projectsAnimation
          .to(projectsSection, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(projectsSection, {
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
          });

        // Scroll to the projects section if needed
        rightPanel.scrollTo({
          top: projectsSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  }

  // Handle Skills button click
  if (skillButton) {
    skillButton.addEventListener("click", () => {
      // Animate the skills carousel and radar chart
      const skillsChart = document.getElementById("skillsChart");

      if (skillCarousel && skillsChart) {
        // Create a highlight animation for the skills section
        const skillsAnimation = gsap.timeline();
        skillsAnimation
          .to(skillCarousel, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            skillsChart,
            {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.2"
          )
          .to(
            skillCarousel,
            {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            "+=0.5"
          )
          .to(
            skillsChart,
            {
              scale: 1,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.2"
          );
      }
    });
  }
});
