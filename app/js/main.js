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
		slidesPerView: 5,
	});

	const contactSlider = new Swiper('.contact-slider', {
		modules: [Mousewheel, Pagination],
		pagination: {
			el: '.contact-slider__pagination',
			// dynamicMainBullets: true,
			clickable: true,
		},
		slidesPerView: 10,
		slidesPerGroup: 10,
		spaceBetween: 18,
		mousewheel: {
			invert: true,
		},
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

