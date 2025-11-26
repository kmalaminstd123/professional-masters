gsap.registerPlugin(ScrollTrigger);

// Responsive Animations
ScrollTrigger.matchMedia({
    
    // Desktop
    "(min-width: 992px)": function() {
        // Parallax Header
        gsap.to(".header-bg", {
            y: "-30%",
            ease: "none",
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });

        // Horizontal Scroll
        let section = document.querySelector(".pm-types-section");
        let scrollContainer = document.querySelector(".pm-horizontal-scroll");
        
        if(section && scrollContainer) {
            gsap.to(scrollContainer, {
                x: () => -(scrollContainer.scrollWidth - window.innerWidth + 100),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + (scrollContainer.scrollWidth),
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            });
        }
    },

    // Mobile
    "(max-width: 991px)": function() {
        gsap.to(".header-bg", {
            y: "-10%",
            ease: "none",
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });
    },

    // All Devices
    "all": function() {
        
        // Header Text
        const tl = gsap.timeline();
        tl.from("header h1", { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 })
          .from("header p", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
          .from(".get_start_btn", { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");

        // Stats Counter
        gsap.utils.toArray(".stat-number").forEach(stat => {
            let target = stat.getAttribute("data-count");
            let suffix = stat.getAttribute("data-suffix") || "";
            let rawVal = parseFloat(target);
            
            gsap.to(stat, {
                innerHTML: rawVal,
                duration: 2,
                snap: { innerHTML: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function() {
                    stat.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
                }
            });
        });

        // Fade In Sections
        const fadeElements = [".endorse-box", ".lead_section", ".scholarship-card", ".highlight-item", ".testimonial-card"];
        
        fadeElements.forEach(el => {
            gsap.utils.toArray(el).forEach((item, i) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1, // Stagger effect if multiple
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%"
                    }
                });
            });
        });

        // About Section
        gsap.from(".apm-left", {
            x: -50, opacity: 0, duration: 1, scrollTrigger: { trigger: ".about-pro-master", start: "top 75%" }
        });
        gsap.from(".apm-image-card", {
            x: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: ".about-pro-master", start: "top 75%" }
        });

        // Certificate
        gsap.from(".cert-frame", {
            scale: 0.9, opacity: 0, duration: 1, ease: "back.out(1.7)", scrollTrigger: { trigger: ".certificate-section", start: "top 70%" }
        });
    }
});

// Navbar Toggle
const navToggle = document.getElementById('navToggle');
const fullNav = document.querySelector('.fullpage-nav');
const closeNavBtn = document.querySelector('.close-nav');
const navLinks = document.querySelectorAll('.fullpage-nav ul li a');
let navOpen = false;

function toggleNav() {
    if (!navOpen) {
        gsap.to(fullNav, { duration: 0.5, opacity: 1, scale: 1, pointerEvents: 'all', ease: "power3.out" });
    } else {
        gsap.to(fullNav, { duration: 0.4, opacity: 0, scale: 0.95, pointerEvents: 'none', ease: "power3.in" });
    }
    navOpen = !navOpen;
}

if(navToggle) navToggle.addEventListener('click', toggleNav);
if(closeNavBtn) closeNavBtn.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', () => { if(navOpen) toggleNav(); }));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// footer parralax gsap
gsap.to('.landing_footer_bg', {
    y: "-20%",
    ease: "none",
    scrollTrigger: {
        trigger: ".landing-footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
    }
})