
// 1) the nav bar moving out 

const nav_bar = gsap.timeline()

// 2) stager animation down to up show all the menus 

const menu = gsap.timeline().pause()

// 4) two_lip2 coming from the left

const two_lip2 = gsap.timeline().pause()

// 5) two_lip coming from the left

const two_lip = gsap.timeline().pause()

//  6) text for h1 looks like write on chak

const head_text = gsap.timeline().pause()

//  7) blumen halle banner drop down 

const banner = gsap.timeline().pause()

//  8) map is coming in from the right

const map_ftr = gsap.timeline().pause()

// 9) flowers rotating on the map
const flower = gsap.timeline().pause()

// 10 flowers rotating on the map
const flowerrotate = gsap.timeline()

const flowerrotate1 = gsap.timeline()

const flowerrotate2 = gsap.timeline()

const peddles = gsap.timeline()

const peddles1 = gsap.timeline()

const peddles2 = gsap.timeline()

// arrows line to location area


const block1 = gsap.timeline()
const block2 = gsap.timeline()
const block3 = gsap.timeline()
const block4 = gsap.timeline()
const block5 = gsap.timeline()
const arrow = gsap.timeline()

// 1)
nav_bar.from('.nav', {
    width: 0, 
    x: -550, 
    duration: 1,
    onComplete: function () {
        menu.play()
    }
});


// 2)
menu.from('.nav div',{
    x: 80,
    duration: 1,
    stagger: {
    amount: 2,
    from: '-7',
    onComplete: function () {
        two_lip2.play()
    }}
});

// 4()

two_lip2.from('.twolip2', {
    x: -400, 
    duration: 1,
    onComplete: function () {
        two_lip.play()
    }
});

// 5)
two_lip.from('.twolip', {
    y: -700, 
    duration: 1,
    onComplete: function () {
        head_text.play()
    }
});


// 6)
head_text
.fromTo('h1',{
    autoAlpha: 0,
    duration: 0.1,
},{
    autoAlpha: 1,
    duration:0.1,
    repeat: 6,
}, '+=1')
.to('h1', {
    text: 'Neue <br> Frühlingsangebote',
    duration: 2,
    ease: 'linear'
})
.to('h1', {
    x:230,
    y:-190,
    scale: 0.7,
    duration: 3,
    top:('10%'),
    ease: 'elastic.out(1, 0.6)',
    onComplete: function () {
        banner.play()
    }
})

// 7)
banner.from('h2', {
    width: 0, 
    y: -550, 
    duration: 1,
});


//  2)
menu
.from('.nav div',{
    autoAlpha: 1,
    duration: 0.5
},{
    autoAlpha: 1,
    duration:0.1,
    repeat: 1,
}, '+=1')
.to('.tulpen', {
    text: 'Tulpen',
    duration: 1,
    ease: 'linear',
})
.to('.ranunkeln', {
    text: 'Ranunkein',
    duration: 1,
    ease: 'linear',
})
.to('.anemonen', {
    text: 'Anemonen',
    duration: 1,
    ease: 'linear',
})
.to('.mohn', {
    text: 'Mohn',
    duration: 1,
    ease: 'linear',
})
.to('.hyazinthe', {
    text: 'Hyazinthe',
    duration: 1,
    ease: 'linear',
})
.to('.iris', {
    text: 'Iris',
    duration: 1,
    ease: 'linear',
    onComplete: function () {
       flower.play()
 }}
)

// 9)
flower.to(".flowermap1, .flowermap2, .flowermap3", {
    rotation: 10080,
    duration: 1000,
    repeat: Infinity,
    onComplete: function () {
        flowerrotate.play()
  }}
  )



flowerrotate.to(".big", {
    rotation: -10080,
    duration: 1000,
    repeat: Infinity,
})
flowerrotate1.to(".mid", {
    rotation: 10080,
    duration: 900,
    repeat: Infinity,
})
flowerrotate2.to(".small", {
    rotation: -10080,
    duration: 600,
    repeat: Infinity,
})


peddles.to('.peddles',{ 
  rotation: 1080,
  scale: -0.1,
  duration: 8, 
  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.218,0.538 0.376,0.686 0.568,0.866 0.818,1.001 1,1 "),
  x: -880,
  repeat: Infinity,
});


peddles1.to('.peddles1',{ 
    autoAlpha: 10,
    delay: 2,
    rotation: 1280,
    scale: -0.1,
    duration: 7, 
    ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.218,0.538 0.376,0.686 0.568,0.866 0.818,1.001 1,1 "),
    x: -900,
    repeat: Infinity,
  });
  
  peddles2.to('.peddles2',{ 
    autoAlpha: 10,
    delay: 3,
    rotation: 1480,
    scale: -0.1,
    duration: 6, 
    ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.218,0.538 0.376,0.686 0.568,0.866 0.818,1.001 1,1 "),
    x: -920,
    repeat: Infinity,
  });



// blocks arrows


block1.from('.block1', {
    repeat: Infinity,
    autoAlpha:5,
    duration: 2,
    onComplete: function () {
       block2.play()
    }
 })
block2.from('.block2', {
    autoAlpha:5,
    duration: 2,
    delay: 0.1,
    repeat: Infinity,
    onComplete: function () {
       block3.play()
    }
 })
block3.from('.block3', {
    autoAlpha:5,
    duration: 2,
    delay: 0.2,
    repeat: Infinity,
    onComplete: function () {
       block4.play()
    }
 })
block4.from('.block4', {
    autoAlpha:5,
    duration: 2,
    delay: 0.3,
    repeat: Infinity,
    onComplete: function () {
       block5.play()
    }
 })
block5.from('.block5', {
    autoAlpha:5,
    duration: 2,
    delay: 0.4,
    repeat: Infinity,
    onComplete: function () {
       arrow.play()
    }
 })
arrow.from('.arrow', {
    autoAlpha:5,
    duration: 2,
    delay: 0.4,
    repeat: Infinity,
    onComplete: function () {
        arrowlights.play()
     }
 })







  


