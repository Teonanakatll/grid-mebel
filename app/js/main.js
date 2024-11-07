import { myJquery } from "./jquery";
import Swiper from "swiper";
import mixitup from "mixitup";
import { Fancybox } from "@fancyapps/fancybox";

// import {animate} from "./gsap-test"
import { setBackgrounds } from "./set-background"

import { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay, EffectFade } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {

	const sliderTop = new Swiper('.top__slider', {
		modules: [Pagination, Parallax, Autoplay, EffectFade],
		pagination: {
			el: '.top__slider-pagination',
			clickable: true,
		},
		loop: true,
		// autoplay: {
		// 	delay: 3000,
		// 	pauseOnMouseEnter: true,
		// },
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 2000,
		parallax: true,
	})

	const partSlider = new Swiper('.partners__slider', {
		modules: [Autoplay],
		loop: true,
		speed: 2000,
		autoplay: true,
		slidesPerView: 3,
		breakpoints: {
			768: {
				slidesPerView: 5
			},
			576: {
				slidesPerView: 4
			}
		}
	});

	const contactSlider = new Swiper('.contact-slider', {
		modules: [Mousewheel, Pagination],
		pagination: {
			el: '.contact-slider__pagination',
			dynamicBullets: true,
			// dynamicMainBullets: 3,
			clickable: true,
		},
		slidesPerView:2,
		slidesPerGroup:2,
		spaceBetween: 10,
		breakpoints: {
			1600: {
				slidesPerView: 10,
				slidesPerGroup: 10,
				spaceBetween: 18,
				dynamicMainBullets: 3,
			},
			1200: {
				slidesPerView: 8,
				slidesPerGroup: 8,
				pagination: {
					dynamicBullets: false,
				},
			},
			768: {
				slidesPerView: 6,
				slidesPerGroup: 6
			},
			576: {
				slidesPerView: 4,
				slidesPerGroup: 4
			},
		},
		mousewheel: {
			invert: true,
		},
		loop: true,
		speed: 1000,
	})

	const articleSlider = new Swiper('.article-slider__box', {
		modules: [Navigation],
		navigation: {
			prevEl: '.article-slider__prev',
			nextEl: '.article-slider__next'
		},
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		speed: 1000,
	})

	const container = document.querySelector('.gallery__inner');

	if (container) {
		const mixer = mixitup('.gallery__inner', {
			load: {
				filter: '.living',
			},
			animation: {
				// effects: 'fade rotateY(-125deg)',
				easing: 'ease-out'
			},
		});
	}

	// animate();

	myJquery();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	setBackgrounds();

})

