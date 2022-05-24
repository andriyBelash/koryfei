/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function menuInit() {
	let iconMenu = document.querySelector('.icon-menu')
	let menuBody = document.querySelector('.menu__body')
	let menuLink = document.querySelectorAll('.menu__link')
	let body = document.querySelector('body')

	iconMenu.addEventListener('click', () => {
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
		body.classList.toggle('_active')
		if(menuBody.classList.contains('_active')) {
			menuLink.forEach(function(item) {
				item.addEventListener('click', function () {
					iconMenu.classList.remove('_active')
					menuBody.classList.remove('_active')
					body.classList.remove('_active')
				})
			});
		}
	})
}

export function isMenuLink() {
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		
		const blockID = anchor.getAttribute('href').substr(1)
		
		document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		})
	})
	}
}

export function isMobileSwiper() {
	let sliders = document.querySelectorAll('._swiper');
		if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-bild')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-bild');

				if (slider.classList.contains('_swiper_scroll')) {
					let sliderScroll = document.createElement('div');
					sliderScroll.classList.add('swiper-scrollbar');
					slider.appendChild(sliderScroll);
				}
			}
			if (slider.classList.contains('_gallery')) {
				//slider.data('lightGallery').destroy(true);
			}
		}
		sliders_bild_callback();
		}

		function sliders_bild_callback(params) { }
		let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
		if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: true,
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
		}
		let slider_about = new Swiper('.mobile-project__items', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 800,
		pagination: {
			el: '.mobile-project__fraction',
			type: 'fraction',
		  },
		// Arrows
		navigation: {
			nextEl: '.arrow-next',
			prevEl: '.arrow-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			// 768: {
			// 	slidesPerView: 2,
			// 	spaceBetween: 20,
			// },
			// 992: {
			// 	slidesPerView: 3,
			// 	spaceBetween: 20,
			// },
			// 1268: {
			// 	slidesPerView: 4,
			// 	spaceBetween: 30,
			// },
		},
		on: {
		}
		});

}
export function isSwiper() {
	let sliders = document.querySelectorAll('._swiper');
		if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-bild')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-bild');

				if (slider.classList.contains('_swiper_scroll')) {
					let sliderScroll = document.createElement('div');
					sliderScroll.classList.add('swiper-scrollbar');
					slider.appendChild(sliderScroll);
				}
			}
			if (slider.classList.contains('_gallery')) {
				//slider.data('lightGallery').destroy(true);
			}
		}
		sliders_bild_callback();
		}

		function sliders_bild_callback(params) { }
		let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
		if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: true,
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
		}
		let slider_about = new Swiper('.gallery__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 800,
		pagination: {
			el: '.gallery__pagination',
			type: 'bullets',
			clickable: true
		  },
		// Arrows
		// navigation: {
		// 	nextEl: '.arrow-next',
		// 	prevEl: '.arrow-prev',
		// },
		// breakpoints: {
		// 	// 320: {
		// 	// 	slidesPerView: 1,
		// 	// 	spaceBetween: 0,
		// 	// 	autoHeight: true,
		// 	// },
		// 	// 768: {
		// 	// 	slidesPerView: 2,
		// 	// 	spaceBetween: 20,
		// 	// },
		// 	// 992: {
		// 	// 	slidesPerView: 3,
		// 	// 	spaceBetween: 20,
		// 	// },
		// 	// 1268: {
		// 	// 	slidesPerView: 4,
		// 	// 	spaceBetween: 30,
		// 	// },
		// },
		on: {
		}
		});

}

export function animScroll() {
	const animItems = document.querySelectorAll('._anim-items')

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)

		function animOnScroll(params) {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemsOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((scrollY > animItemsOffset - animItemPoint) && scrollY < (animItemsOffset + animItemHeight)) {
					animItem.classList.add('_active')
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active')
					}
				}
			}
		}

		function offset(el) {
			var rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}
		setTimeout(() => {
			animOnScroll();
		}, 300);
	}
}

