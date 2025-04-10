const swiper1 = new Swiper('.mySwiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper('.mySwiper2', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  }
});

//timeline//

const steps = document.querySelectorAll("[data-step]");
const bubble = document.getElementById("bubble");

function updateBubblePosition() {
  let activeStep = steps[0];
  let minDist = Infinity;

  steps.forEach((step) => {
    const rect = step.getBoundingClientRect(); // position relative to viewport
    const dist = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);

    if (dist < minDist) {
      minDist = dist;
      activeStep = step;
    }
  });

  // Now calculate its position relative to the wrapper's top
  const wrapper = document.querySelector(".process-wrapper");
  const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
  const stepTop = activeStep.getBoundingClientRect().top + window.scrollY;

  const relativeTop = stepTop + activeStep.offsetHeight / 2 - wrapperTop;

  bubble.style.top = `${relativeTop}px`;
}

// Attach to scroll and load events
window.addEventListener("scroll", updateBubblePosition);
window.addEventListener("load", updateBubblePosition);
