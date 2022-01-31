


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
            y: 160,
        }, '-=4.4')
       
    
    
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
    x:-50,
    duration: 3,
    opacity: 100,
    scrollTrigger:{
        trigger: ".map",
        start: "top 60%",
        end: "top 100%",
        scrub: 1,
        toggleActions: "restart reverse none none",
    //     markers:{
    //         startColor: "red",
    //         endColor: "yellow",
    //         fontSize: "1rem",
    //     }
    }
})
gsap.to(".contact_text", {
    x: 100,
    opacity: 100,
    duration: 3,
    scrollTrigger:{
        trigger: ".contact_text",
        start: "top 60%",
        end: "top 100%",
        scrub: 1,
        toggleActions: "restart reverse none",
        // markers:{
        //     startColor: "red",
        //     endColor: "yellow",
        //     fontSize: "1rem",
        // }
    }
})
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



