
const ani = gsap.timeline()
const ani1 = gsap.timeline().pause()

const aniA = gsap.timeline().pause()
const ani2 = gsap.timeline().pause()

const aniB = gsap.timeline().pause()
const ani3 = gsap.timeline().pause()

const aniC = gsap.timeline().pause()
const ani4 = gsap.timeline().pause()

ani.to('.rose1', {
autoAlpha: 1,
duration: 0.1,
ease:'linear',
onComplete: function () {
  ani1.play()
  }
})
ani1.to('.rose1', {
  autoAlpha: 0,
  duration: 0,
  onComplete: function () {
    aniA.play()
  }
})

aniA.to('.rose2', {
  autoAlpha: 1,
  duration: 0.1,
  onComplete: function () {
    ani2.play()
    }
  })
ani2.to('.rose2', {
  autoAlpha: 0,
  duration:0,
  onComplete: function () {
    aniB.play()
  }
})
aniB.to('.rose3', {
  autoAlpha: 1,
  duration: 0.1,
  onComplete: function () {
    ani3.play()
    }
  })
  ani3.to('.rose3', {
    autoAlpha: 0,
    duration:0,
    onComplete: function () {
      aniC.play()
    }
  })
  aniC.to('.rose4', {
    autoAlpha: 1,
    duration: 0.1,
    onComplete: function () {
      ani.play()
      }
    })
   
  
