gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.container',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.header',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.left .left__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.right .right__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

	let items = gsap.utils.toArray('.inform-block .filler')

	items.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 100 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-950',
				end: 'top',
				scrub: true
			}
		})
	})

}

gsap.from('.logo',{
opacity:0,
duration:2,
delay:1,
y:30
})
gsap.from('.menu',{
opacity:0,
duration:1,
y:-30
})