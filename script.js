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
