import Swiper from "swiper"

// import {animate} from "./gsap-test"
import { setBackgrounds } from "./set-background"

import { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay, EffectFade } from 'swiper/modules'
import { myJquery } from "./jquery";

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

	// animate();

	myJquery();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	setBackgrounds();

})

