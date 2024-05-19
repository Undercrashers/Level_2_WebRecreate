gsap.registerPlugin(ScrollTrigger); // Initialize ScrollTrigger plugin

gsap.to(".vdodiv", {
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true
    },
    '--clip': "0%",
    ease: "power2", // or any other GSAP easing function like "Power2.easeInOut"
    duration: 2
});

const cards = document.querySelectorAll(".card");
                cards.forEach(card => {
                  const cardContent = card.querySelector(".card-content");
                  card.addEventListener('mouseover', () => {
                    cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
                  });
                  card.addEventListener('mouseleave', () => {
                    cardContent.style.maxHeight = 0;
                  });
                });