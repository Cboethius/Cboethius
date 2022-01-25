
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
    text: 'Spezielle <br> Frühlingsangebote',
    duration: 2,
    ease: 'linear'
})
.to('h1', {
    x:330,
    y:-290,
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
    onComplete: function () {
        menu.play()
    }
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
})















  


