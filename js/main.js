gsap.registerPlugin(ScrollTrigger);

gsap.to(".header-bg", {
    y: "-20%",     // parallax movement
    ease: "none",
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "bottom top",
        scrub: 2, // smoothness
    }
});

// H1 animation
gsap.from(".header h1", {
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2
});

//

gsap.fromTo(".lead_section .section_title h2",
  {
    x: 0,      // starting position
    opacity: 1,
    scale: 1
  },
  {
    x: 200,   // move left when leaving
    opacity: 0,
    scale: 0.8,
    ease: "circ.inOut",
    scrollTrigger: {
        trigger: ".lead_section",
        start: "top center",   // when section top reaches center of viewport
        end: "bottom top",     // when section bottom reaches top of viewport
        scrub: 1,              // smooth scrubbing
    }
  }
);

gsap.fromTo(".lead_section p",
  {
    x: 0,      // starting position
    opacity: 1,
    scale: 1
  },
  {
    x: -200,   // move left when leaving
    opacity: 0,
    scale: 0.8,
    ease: "circ.inOut",
    scrollTrigger: {
        trigger: ".lead_section",
        start: "top center",   // when section top reaches center of viewport
        end: "bottom top",     // when section bottom reaches top of viewport
        scrub: 1,              // smooth scrubbing
    }
  }
);




// open navbar
const navToggle = document.getElementById('navToggle');
const fullNav = document.querySelector('.fullpage-nav');

let navOpen = false;

navToggle.addEventListener('click', () => {

    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    // Check if page scroll is less than header height
    if (window.scrollY < headerHeight) {
        window.scrollTo({
            top: headerHeight,
            behavior: 'smooth'
        });
    }


    if (!navOpen) {
        gsap.to(fullNav, {
            duration: 0.6,
            opacity: 1,
            scale: 1,
            pointerEvents: 'all',
            ease: "power3.out"
        });
    } else {
        gsap.to(fullNav, {
            duration: 0.4,
            opacity: 0,
            scale: 0.95,
            pointerEvents: 'none',
            ease: "power3.in"
        });
    }
    navOpen = !navOpen;
});

// =======

document.querySelector('.get_start_btn').addEventListener('click', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
        top: headerHeight,
        behavior: 'smooth'  // smooth scroll
    });
});

const closeNavBtn = document.querySelector('.fullpage-nav .close-nav');

closeNavBtn && closeNavBtn.addEventListener('click', () => {
    gsap.to(fullNav, {
        duration: 0.4,
        opacity: 0,
        scale: 0.95,
        pointerEvents: 'none',
        ease: "power3.in"
    });

    // Make sure the navOpen state is updated
    navOpen = false;
});
//


// Pin the scholarship section header
ScrollTrigger.create({
  trigger: ".scholarship-section .col-lg-6:first-child", // left column
  start: "top center",
  endTrigger: ".scholarship-section", // pin until section ends
  end: "bottom bottom",
  pin: true,
  pinSpacing: true
});
// Animate cards from bottom to top
gsap.utils.toArray('.scholarship-card').forEach((card, i) => {
  gsap.from(card, {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 100%",
      scrub: 1
    }
  });
});

// Optional: highlight card in focus
gsap.utils.toArray('.scholarship-card').forEach(card => {
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    end: "bottom center",
    onEnter: () => card.style.backgroundColor = "#1A3C73", // sky-blue overlay
    onEnterBack: () => card.style.backgroundColor = "#1A3C73",
    onLeave: () => card.style.backgroundColor = "rgba(255,255,255, 1)",
    onLeaveBack: () => card.style.backgroundColor = "rgba(255,255,255, 1)"
  });
});



function textAnimation() {
  const h1Element = document.querySelector("header h1");
  const h1Text = h1Element.textContent;

  if (typeof h1Text === "string") {
    // Clearing existing text in the h1 element.
    h1Element.textContent = "";

    // Breaking text content into an array of characters.
    const charactersArray = h1Text.split("");
    let charSet = "";

    // Wrapping each character in a span and appending it to the h1.
    charactersArray.forEach((text, index) => {
      if (charactersArray[index] === " ") {
        charSet += " ";
      } else {
        charSet += `<span class="gsapSpan">${text}</span>`;
      }
    });
    // Appending TextNode.
    h1Element.innerHTML = charSet;
  }

  const tl = gsap.timeline();


  // remove gsap to tl when copy this code
  gsap.from(".gsapSpan", {
    y: 80,
    scale: 2.5,
    opacity: 0,
    stagger: 0.03
  });
// remove gsap to tl when copy this code
  gsap.from("header p", {
    x: -200,
    scale: 0,
    opacity: 0,
    duration: 0.8
  });
// remove gsap to tl when copy this code
  gsap.from(".get_start_btn", {
    x: -100,
    scale: 0,
    opacity: 0,
    duration: 0.8
  });
}

window.onload = function () {
  textAnimation();
};

// about section gsap
gsap.from(".apm-left", {
  x: -80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-pro-master",
    start: "top 80%",
  }
});

gsap.from(".apm-image-card", {
  x: 80,
  scale: 0.9,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-pro-master",
    start: "top 80%",
  }
});

gsap.utils.toArray('.apm-item').forEach((item, i) => {
  // alternate direction: even = left, odd = right
  const fromX = i % 2 === 0 ? -50 : 50;
  gsap.from(item, {
    x: fromX,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: i * 0.15,
    scrollTrigger: {
      trigger: ".about-pro-master",
      start: "top center"
    }
  });
});

gsap.from('.apm-btn', {
  scale: 0.3,
  opacity: 0,
  ease: "power3.in",
  scrollTrigger: {
    trigger: ".about-pro-master",
    start: "bottom bottom"
  }
})

// certificate part gsap
gsap.from('.certificate-section .section_title h2', {
  scale: "0.3",
  opacity: 0,
  ease: "bounce.inOut",
  duration: 1,
  scrollTrigger: {
    trigger: ".certificate-section",
    start: "top center"
  }
})

gsap.from('.certificate-section .cert-content p', {
  scale: "0.3",
  x: -20,
  duration: 1,
  opacity: 0,
  ease: "bounce.inOut",
  scrollTrigger: {
    trigger: ".certificate-section",
    start: "top center"
  }
})


gsap.from(".cert-main", {
  scale: 0.7,
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".certificate-section",
    start: "top 85%",
  }
});

gsap.from(".cert-transcript", {
  scale: 0.6,
  opacity: 0,
  y: 120,
  duration: 1.4,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".certificate-section",
    start: "top 85%",
  }
});




let section = document.querySelector(".pm-types-section");
let scrollContainer = document.querySelector(".pm-horizontal-scroll");

gsap.to(scrollContainer, {
  x: () => -(scrollContainer.scrollWidth - window.innerWidth + 100),
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "bottom bottom",
    end: () => "+=" + (scrollContainer.scrollWidth + 200),
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});

// footer gsap
gsap.from(".landing-footer .footer-wrapper > div", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".landing-footer",
        start: "top 90%",
    }
});

gsap.to('.landing_footer_bg', {
  y: "-20%",
  ease: "none",
  scrollTrigger: {
    trigger: ".landing-footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2
  }
})


// close menu on nav link click
const navLinks = document.querySelectorAll('.fullpage-nav ul li')
navLinks.forEach(link => {
  link.addEventListener('click', ()=>{
    gsap.to(fullNav, {
        duration: 0.4,
        opacity: 0,
        scale: 0.95,
        pointerEvents: 'none',
        ease: "power3.in"
    });

    // Make sure the navOpen state is updated
    navOpen = false;
  })
})