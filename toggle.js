
// if(document.documentElement.clientWidth > 790 ) {


// const map_ftr = gsap.timeline()

// map_ftr.to(".map", {
//         x: 700,
//         duration: 3,
//        scrollTrigger: { 
//         tigger: ".map",
//         start: "top center",
//         end: () => `+=${document.querySelector(".map").offsetHeight}`,
//         markers: {
//             startColor: "green",
//             endColor: "red",
//             fontSize: ".8rem",
//             indent: 200,
//         },
//     }
//     })


if(document.documentElement.clientWidth > 700 ) {

    const controller = new ScrollMagic.Controller()


    // 1. Parallax effect 
    
    document.addEventListener('DOMContentLoaded', () => {
        let controller = new ScrollMagic.Controller();
    
        let timeline = new TimelineMax();
        timeline
        .to('#citybot', 6, {
            y: 0,
        
        })
        .to('#citytop', 6, {
            y: 0
        }, '-=6 ')
        .to('#mtbot', 4, {
            y: 60
        }, '-=4')
        .to('#mtmid', 4, {
            y: 130
        }, '-=4')
        .to('#mttop', 4, {
            y: 160
        }, '-=4.2')
       
    
    
        let scene = new ScrollMagic.Scene({
            triggerElement: 'zurich img',
            duration: '100%',
            triggerHook: 'onEnter',
        })
        .setTween(timeline)
        .setPin('zurich')
        .addTo(controller);
    })
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".map", {
    x:-100,
    duration: 3,
    opacity: 100,
    scrollTrigger:{
        trigger: ".map",
        start: "top 60%",
        end: "top 100%",
        scrub: 2,
        toggleActions: "restart reverse none none",
    //     markers:{
    //         startColor: "red",
    //         endColor: "yellow",
    //         fontSize: "1rem",
    //     }
    }
})
gsap.to(".contact_text", {
    x: 200,
    opacity: 100,
    duration: 3,
    scrollTrigger:{
        trigger: ".contact_text",
        start: "top 60%",
        end: "top 100%",
        scrub: 2,
        toggleActions: "restart reverse none",
        // markers:{
        //     startColor: "red",
        //     endColor: "yellow",
        //     fontSize: "1rem",
        // }
    }
})

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}





