//Navbar//

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const logoWhite = document.querySelector('.logo-white');
  const logoColored = document.querySelector('.logo-colored');

  // Skip script if navbar-secondary is applied
  if (navbar.classList.contains('navbar-secondary')) {
    return;
  }

  function updateNavbar() {
    const scrolledPastThreshold = window.scrollY > 100;
    const isDesktop = window.innerWidth >= 992;

    if (isDesktop) {
      if (scrolledPastThreshold) {
        navbar.classList.remove('transparent');
        navbar.classList.add('white-bg');
        logoWhite.classList.add('d-none');
        logoColored.classList.remove('d-none');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('white-bg');
        logoWhite.classList.remove('d-none');
        logoColored.classList.add('d-none');
      }
    } else {
      navbar.classList.remove('transparent');
      navbar.classList.add('white-bg');
      logoWhite.classList.add('d-none');
      logoColored.classList.remove('d-none');
    }
  }

  window.addEventListener('scroll', updateNavbar);
  window.addEventListener('resize', updateNavbar);
  updateNavbar(); // Initial call
});




//document.addEventListener('DOMContentLoaded', function () {
//  const navbar = document.querySelector('.navbar');
//  const whiteSections = document.querySelectorAll('.white-section');
//  const navbarHeight = navbar.offsetHeight;
//
//  function isOverlapping(section) {
//    const rect = section.getBoundingClientRect();
//    return rect.top <= navbarHeight && rect.bottom >= 0;
//  }
//
//  function updateNavbar() {
//    let isWhiteBg = false;
//
//    whiteSections.forEach(section => {
//      if (isOverlapping(section)) {
//        isWhiteBg = true;
//      }
//    });
//
//    if (isWhiteBg) {
//      navbar.classList.remove('transparent');
//      navbar.classList.add('white-bg');
//    } else {
//      navbar.classList.add('transparent');
//      navbar.classList.remove('white-bg');
//    }
//  }
//
//  window.addEventListener('scroll', updateNavbar);
//  updateNavbar(); // Run on load
//});

//document.addEventListener('DOMContentLoaded', function () {
//  const navbar = document.querySelector('.navbar');
//  const whiteSections = document.querySelectorAll('.white-section');
//  const navbarHeight = navbar.offsetHeight;
//  const logoWhite = document.querySelector('.logo-white');
//  const logoColored = document.querySelector('.logo-colored');
//
//  function isOverlapping(section) {
//    const rect = section.getBoundingClientRect();
//    return rect.top <= navbarHeight && rect.bottom >= 0;
//  }
//
//  function updateNavbar() {
//    let isWhiteBg = false;
//
//    whiteSections.forEach(section => {
//      if (isOverlapping(section)) {
//        isWhiteBg = true;
//      }
//    });
//
//    if (isWhiteBg) {
//      navbar.classList.remove('transparent');
//      navbar.classList.add('white-bg');
//
//      // Switch to colored logo
//      logoWhite.classList.add('d-none');
//      logoColored.classList.remove('d-none');
//    } else {
//      navbar.classList.add('transparent');
//      navbar.classList.remove('white-bg');
//
//      // Switch to white logo
//      logoWhite.classList.remove('d-none');
//      logoColored.classList.add('d-none');
//    }
//  }
//
//  window.addEventListener('scroll', updateNavbar);
//  updateNavbar(); // on load
//});

//Cursor follower//

  const follower = document.querySelector('.cursor-follower');
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  const speed = 0.15;

  function animateFollower() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;
    follower.style.transform = `translate(${currentX - follower.offsetWidth / 2}px, ${currentY - follower.offsetHeight / 2}px)`;

    // Check if cursor is over a white section
    const elemAtPoint = document.elementFromPoint(mouseX, mouseY);
    if (elemAtPoint && elemAtPoint.closest('.white-section')) {
      follower.style.backgroundColor = '#0B6BFF'; // blue on white
    } else {
      follower.style.backgroundColor = '#ffffff'; // white on dark
    }

    requestAnimationFrame(animateFollower);
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  animateFollower();

  // Enlarge on interactive elements
  const hoverTargets = document.querySelectorAll('button, a, .hover-target');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => follower.classList.add('active'));
    el.addEventListener('mouseleave', () => follower.classList.remove('active'));
  });


//script for cursor without white//
//  const follower = document.querySelector('.cursor-follower');
//  let mouseX = 0;
//  let mouseY = 0;
//  let currentX = 0;
//  let currentY = 0;
//  const speed = 0.15;
//
//  // Animate the follower position
//  function animateFollower() {
//    currentX += (mouseX - currentX) * speed;
//    currentY += (mouseY - currentY) * speed;
//    follower.style.transform = `translate(${currentX - follower.offsetWidth / 2}px, ${currentY - follower.offsetHeight / 2}px)`;
//    requestAnimationFrame(animateFollower);
//  }
//
//  window.addEventListener('mousemove', (e) => {
//    mouseX = e.clientX;
//    mouseY = e.clientY;
//  });
//
//  animateFollower();
//
//  // Add active class on hover
//  const hoverTargets = document.querySelectorAll('button, a, .hover-target'); // Add more selectors if needed
//  hoverTargets.forEach((el) => {
//    el.addEventListener('mouseenter', () => {
//      follower.classList.add('active');
//    });
//    el.addEventListener('mouseleave', () => {
//      follower.classList.remove('active');
//    });
//  });



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
    const rect = step.getBoundingClientRect();
    const dist = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);

    // Remove active class from all steps
    step.classList.remove("active");

    if (dist < minDist) {
      minDist = dist;
      activeStep = step;
    }
  });

  // Add active class to closest step
  activeStep.classList.add("active");

  // Move the bubble
  const wrapper = document.querySelector(".process-wrapper");
  const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
  const stepTop = activeStep.getBoundingClientRect().top + window.scrollY;

  const relativeTop = stepTop + activeStep.offsetHeight / 2 - wrapperTop;
  bubble.style.top = `${relativeTop}px`;
}

window.addEventListener("scroll", updateBubblePosition);
window.addEventListener("load", updateBubblePosition);


//without text scaling up///
//const steps = document.querySelectorAll("[data-step]");
//const bubble = document.getElementById("bubble");
//
//function updateBubblePosition() {
//  let activeStep = steps[0];
//  let minDist = Infinity;
//
//  steps.forEach((step) => {
//    const rect = step.getBoundingClientRect(); // position relative to viewport
//    const dist = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
//
//    if (dist < minDist) {
//      minDist = dist;
//      activeStep = step;
//    }
//  });
//
//  // Now calculate its position relative to the wrapper's top
//  const wrapper = document.querySelector(".process-wrapper");
//  const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
//  const stepTop = activeStep.getBoundingClientRect().top + window.scrollY;
//
//  const relativeTop = stepTop + activeStep.offsetHeight / 2 - wrapperTop;
//
//  bubble.style.top = `${relativeTop}px`;
//}
//
//// Attach to scroll and load events
//window.addEventListener("scroll", updateBubblePosition);
//window.addEventListener("load", updateBubblePosition);


//FAQ//

document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("load-more");
    const faqContainer = document.getElementById("faq-container");
    const faqWrapper = document.getElementById("faqWrapper");

    let originalContent = faqContainer.innerHTML;
    let isExpanded = false;

    loadMoreBtn.addEventListener("click", function () {
        let page = parseInt(loadMoreBtn.getAttribute("data-page"));

        if (isNaN(page) || page < 1) {
            page = 2;
        }

        if (!isExpanded) {
            fetch(`/faq-list/?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    if (data.faqs.length > 0) {
                        data.faqs.forEach((faq, index) => {
                            const newId = `extraFaq${page}-${index}`;
                            const faqHtml = `
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading${newId}">
                                        <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapse${newId}"
                                                aria-expanded="false">
                                            ${faq.question}
                                        </button>
                                    </h2>
                                    <div id="collapse${newId}" class="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">${faq.answer}</div>
                                    </div>
                                </div>
                            `;
                            faqContainer.insertAdjacentHTML('beforeend', faqHtml);
                        });

                        faqWrapper.classList.add("expanded"); // 💡 Smoothly expand the container

                        if (data.has_next) {
                            loadMoreBtn.setAttribute("data-page", page + 1);
                        } else {
                            loadMoreBtn.innerHTML = 'Load Less <img src="/static/icons/up.svg" class="ms-2" width="20" height="20">';
                            isExpanded = true;
                        }
                    }
                });
        } else {
            // Load Less behavior
            faqContainer.innerHTML = originalContent;
            loadMoreBtn.innerHTML = 'Load More <img src="/static/icons/down.svg" class="ms-2" width="20" height="20">';
            loadMoreBtn.setAttribute("data-page", "2");
            isExpanded = false;
            faqWrapper.classList.remove("expanded"); // 💡 Smoothly collapse
        }
    });
});


// Get the button
// Show the button after scrolling down 100px
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("myBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Scroll smoothly to the top when clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


