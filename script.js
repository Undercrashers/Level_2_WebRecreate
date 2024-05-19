gsap.registerPlugin(ScrollTrigger); 


gsap.to(".vdodiv", {
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true
    },
    '--clip': "0%",
    ease: "power2", 
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


                
   
                
  let flag = 0
  const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});           
                