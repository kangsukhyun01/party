gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
////////////////lenis:ScrollTrigger연결////////////////

// badge // 한번 설정하면 모든 badge에 적용됨
gsap.to('.badge', {
  rotation: 360,
  duration: 5,
  ease: 'none',
  repeat: -1,
})

///////////////////////////////////////////////////////

/////////////////첫번째 영역//////////////////////
let stickys = document.querySelectorAll('.sticky')

stickys.forEach(function (sticky) {
  gsap.to(sticky, {
    scrollTrigger: {
      trigger: sticky,
      start: 'top top',
      end: '+=150%',
      scrub: 1,
    },
    // y: 250,
    // scale: 0.75,
    // rotation: -15,
    ease: 'power3.out'
  })
})


////////////////두번째 영역///////////////////
let conScales = document.querySelectorAll('.con-scale')

conScales.forEach(function (conScale) {
  gsap.fromTo(conScale, {
    y: 100,
    scale: 0.7,
    rotation: 15
  }, {
    scrollTrigger: {
      trigger: conScale,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 2
    },
    y: 0,
    scale: 1,
    rotation: 0,
    ease: 'power3.out'
  })
})
/////////////두번째영역 이미지의 각각 애니메이션//////////////////////

let secImgs = document.querySelectorAll('.section-images')

secImgs.forEach(function (secImg) {

  let imgs = secImg.querySelectorAll('img')
  let secImgsparent=secImg.parentNode

  imgs.forEach(function (img, index) {
    let imgDelay = index * 0.8
    gsap.set(img, {
      y: 400,
    })
    gsap.timeline({
        scrollTrigger: {
          trigger: '.website-content',
          start: 'top 60%',
          end: 'top top',
          scrub: 1,
        }
      })
      .to(img, {
        y: 0,
        duration: 2,
        delay: imgDelay,
        ease: 'power3.out'
      })
  })

})



// 세번째 페이지
// 글자 가르기

// const text = new SplitType('#target', { types: 'words, chars' })

let SplitTypes = document.querySelectorAll('.heading-large')

SplitTypes.forEach(function (char, i) {
  let parent = char.parentNode.parentNode
  const text = new SplitType(char, {
    types: 'chars'
  })
  //  console.log(text)

  gsap.from(text.chars, {
    opacity: 0,
    yPercent: 100,
    duration: 0.3,
    stagger: 0.02,
    scrollTrigger: {
      trigger: parent,
      start: 'top 60%',
      end: 'top 20%',
    }
  })
})



// 얼굴
let wrapper = document.querySelector('.tracker')
let emoji = document.querySelector('.emoji')
let emojiFace = document.querySelector('.emoji-face')
let moveEvent = function (e) {
  let wrapperRect = wrapper.getBoundingClientRect() // wrapper에 대한 공간정보 getBoundingClientRect (넓이,높이, 띄워저있는 거리)
  // console.log(wrapperRect)

  let relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2)
  let relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2)

  let emojiMaxDisplacement = 50;
  let emojiFaceMaxDisplacement = 75;

  let emojiDisplacement = (relX / wrapperRect.width) * emojiMaxDisplacement
  let emojiFaceDisplacement = (relY / wrapperRect.height) * emojiFaceMaxDisplacement

  let emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement
  let emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement

  gsap.to(emojiFace, {
    x: emojiFaceDisplacementX,
    y: emojiFaceDisplacementY,
    duration: 0.35,
    ease: "power3.out"
  })
  gsap.to(emoji, {
    x: emojiFaceDisplacementX,
    y: emojiFaceDisplacementY,
    duration: 0.35,
    ease: "power3.out"
  })
}

// 수업 다시볼거
gsap.to("[data-direct]", { 
  x: (i, el) => -(el.getAttribute("data-direct")) * 400, 
  ease: "none",
  scrollTrigger: {
      trigger: ".text_wrap",
      start: "top 20%",
      end: "top top",
      duration: 2,
      scrub: 2
  }
})
// 수업 다시볼거

let rarr = document.querySelectorAll("[data-speed]")

gsap.from(rarr[0], {
  scrollTrigger: {
    trigger: ".website-content2",
    start: "top 100%",
    end: "top top",
    scrub: 2
  },
  rotation: 45
})

gsap.from(rarr[1], {
  scrollTrigger: {
    trigger: ".text-black",
    start: "top 100%",
    end: "top top",
    scrub: 2
  },
  rotation: -45
})

gsap.from(rarr[2], {
  scrollTrigger: {
    trigger: ".website-content2",
    start: "80% 100%",
    end: "bottom top",
    scrub: 2
  },
  rotation: 45
})





//wave
gsap.to('.wave', {
  xPercent: 20,
  scrollTrigger: {
    trigger: '.website-content2',
    start: '90% 100%',
    end: '+=100%',
    scrub: 1
  }
})





// wrapper.addEventListener('mousemove',function(){moveEvent()})
wrapper.addEventListener('mousemove', moveEvent)