// var i = 0
	// function imgscroll() {
	//     i = i + 1
	//     if (i) {
	//         // console.log('center -' + 680 * i + 'px')
	//         document.querySelector('.homeimg').style.backgroundPosition = 'center -' + i * 680 + 'px'
	//     } else {
	//         clearInterval(clock)
	//     }
	// }

	var c = 0
	var clock = setInterval(function () {
		c = c + 1
		if (c) {
			// console.log('center -' + 680 * i + 'px')
			document.querySelector('.homeimg').style.backgroundPosition = 'center -' + c * 550 + 'px'
		} else {
			clearInterval(clock)
		}
	}, 200)

	// var a = 0
	// var clock = setInterval(function () {
	//     a = a + 1
	//     if (a) {
	//         // console.log('center -' + 680 * a + 'px')
	//         document.querySelector('.cupimg').style.backgroundPosition = 'center -' + a * 850 + 'px'
	//     } else {
	//         clearInterval(clock)
	//     }
	// }, 200)

	window.addEventListener(
		'scroll',
		() => {
			document.body.style.setProperty(
				'--scroll',
				window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
			)
		},
		false
	)

	window.addEventListener('scroll', function () {
		if (window.scrollY >= 100) {
			document.querySelector('.cup-wrap').style.display = 'none'
		}
		if (window.scrollY < window.innerHeight - 100) {
			document.querySelector('.cup-wrap').style.display = 'block'
		}
	})

	window.addEventListener('scroll', function () {
		//最後一頁scrollTop=body-window，50是預留空間
		var last = document.body.scrollHeight - window.innerHeight - 50
		if (window.scrollY >= last) {
			document.querySelector('.homeimg').style.display = 'none'
		}
		if (window.scrollY <= last) {
			document.querySelector('.homeimg').style.display = 'block'
		}
	})
	var bottom = document.body.scrollHeight - window.innerHeight - 130
	console.log(bottom)
	if (window.scrollY > bottom) {
		document.querySelector('.fish').style.display = 'block'
	}
	if (window.scrollY < bottom) {
		document.querySelector('.fish').style.display = 'none'
	}
	window.addEventListener('scroll', function () {
		//最後一頁scrollTop=body-window，50是預留空間
		var bottom = document.body.scrollHeight - window.innerHeight - 130
		console.log(bottom)
		if (window.scrollY > bottom) {
			document.querySelector('.fish').style.display = 'block'
		}
		if (window.scrollY < bottom) {
			document.querySelector('.fish').style.display = 'none'
		}
	})
