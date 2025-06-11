function updateJobPos(jobPos, currentIndexjp, posList) {
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
function fadePreloader(preloader) {
  preloader.style.transition = "opacity 1s ease"; // 1-second fade-out effect
  preloader.style.opacity = 0; // Set opacity to 0 to fade out

  // Wait for the fade-out to complete, then hide the element
  setTimeout(() => {
    preloader.style.display = "none"; // Hide the preloader completely
  }, 1000); // Match the transition duration
}
function rebuildSlides(cardsToShow, swiper, wrapper) {
  // Destroy previous Swiper
  if (swiper) swiper.destroy(true, true);

  wrapper.innerHTML = "";

  cardsToShow.forEach((card) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = card.innerHTML;
    slide.setAttribute("data-tags", card.getAttribute("data-tags"));
    slide.setAttribute(
      "data-project-name",
      card.getAttribute("data-project-name")
    );
    slide.setAttribute(
      "data-project-description",
      card.getAttribute("data-project-description")
    );
    slide.setAttribute(
      "data-project-icon",
      card.getAttribute("data-project-icon")
    );
    slide.setAttribute("data-thumbnails", card.getAttribute("data-thumbnails"));
    wrapper.appendChild(slide);
  });
}
function initSwiper() {
  return new Swiper(".mySwiper", {
    slidesPerView: 1.3, // 👈 default for mobile (<640px)
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 2.3,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("skill-list");
  if (!list) return;

  // Duplicate the list items to allow seamless looping
  list.innerHTML += list.innerHTML;

  // Style the list for continuous transform-based animation
  const container = document.getElementById("skill-carousel");
  let offset = 0;
  const speed = 0.5; // pixels per frame — lower = slower, smoother

  function scrollLoop() {
    offset += speed;

    // Total scroll height before resetting (half the list, since it's duplicated)
    const resetAfter = list.scrollHeight / 2;

    if (offset >= resetAfter) offset = 0;

    list.style.transform = `translateY(-${offset}px)`;
    requestAnimationFrame(scrollLoop);
  }

  scrollLoop();
  let preloader = document.getElementById("pulsing-intro");
  let jobPos = document.getElementById("job-pos");
  let currentIndexjp = 0;
  let posList = [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Designer By Heart",
  ];
  let swiper = null;
  const allCards = Array.from(document.querySelectorAll(".project-card"));
  const wrapper = document.querySelector(".swiper-wrapper");
  const filterButtons = document.querySelectorAll(".filter-btn");
  fadePreloader(preloader);
  setInterval(updateJobPos(jobPos, currentIndexjp, posList), 4000);
  rebuildSlides(allCards, swiper, wrapper);
  swiper = initSwiper();

  const leftPanel = document.getElementById("left-panel");
  const rightPanel = document.getElementById("right-panel");
  const projectDetailsPanel = document.getElementById("project-details-panel");
  // const mainContentWrapper = document.getElementById('main-content-wrapper'); // Not strictly needed for these animations but good to have if layout expands
  const backButton = document.getElementById("back-to-main");

  const detailsName = document.getElementById("details-name");
  const detailsDescription = document.getElementById("details-description");

  // Select all project preview buttons/areas
  const projectPreviewButtons = document.querySelectorAll(
    ".project-preview-btn"
  );

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // UI toggling
      filterButtons.forEach((b) =>
        b.classList.remove("activefilter", "inactivefilter")
      );
      btn.classList.add("activefilter");

      const selectedFilter = btn.getAttribute("data-filter");

      const filtered = allCards.filter((card) => {
        return (
          selectedFilter === "all" ||
          card.getAttribute("data-tags") === selectedFilter
        );
      });

      rebuildSlides(filtered, swiper, wrapper);
      swiper = initSwiper();
    });
  });

  projectPreviewButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let showcasee = document.getElementsByClassName("showcasee");
      let displayedimg = document.getElementById("displayedimg");
      const card = button.parentElement.parentElement;
      let thumbnails = JSON.parse(card.dataset.thumbnails);
      Array.from(showcasee).forEach((pictureHolder, i) => {
        pictureHolder.src = thumbnails[i];
        pictureHolder.addEventListener("click", () => {
          displayedimg.src = pictureHolder.src;
          console.log("works");
        });
      });
      event.preventDefault(); // Prevent any default anchor behavior if it's a link
      if (!card) return; // Should not happen if structure is correct

      const projectName = card.getAttribute("data-project-name");
      console.log(projectName); // Log the projectName to see if it's being extracted correctly
      const projectDescription = card.getAttribute("data-project-description");
      // Populate details panel
      detailsName.textContent = projectName || "Project Name";

      detailsDescription.textContent =
        projectDescription || "No description available.";

      // Animation with GSAP
      const tl = gsap.timeline();
      tl.to(leftPanel, {
        xPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
        .to(
          rightPanel,
          {
            xPercent: -100, // This assumes right panel takes full width of its container after left panel is gone
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.4"
        ) // Start slightly after left panel starts moving
        .to(
          projectDetailsPanel,
          {
            x: "0%", // Slides in from the right
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.3"
        ); // Start slightly after right panel starts moving
    });
  });

  if (backButton) {
    backButton.addEventListener("click", () => {
      const tl = gsap.timeline();
      tl.to(projectDetailsPanel, {
        x: "100%", // Slides out to the right
        duration: 0.5,
        ease: "power2.inOut",
      })
        .to(
          rightPanel,
          {
            xPercent: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.4"
        )
        .to(
          leftPanel,
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.3"
        );
    });
  }
});
