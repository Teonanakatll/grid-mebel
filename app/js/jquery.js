export function myJquery() {

	let mainSlider = $('.top__slider');
	let logoLink = $('.logo');

	// $ всегда возвращает обьект $ даже если элемент не найден, поэтому проверяем длинну элемента
	if (mainSlider.length) {
		logoLink.attr('href', '#');
	} else {
		logoLink.attr('href', 'index.html')
	};

	// логика rightside menu
	let rSideMenu = $('.rightside-menu');

	rSideMenu.on('click', function(e) {
		e.stopPropagation();
	});

	$('.header__btn').on('click', function(e) {
		e.stopPropagation();
		// rSideMenu.slideDown(1000);
		rSideMenu.removeClass('rightside-menu--hide');
	})
	$('.rightside-menu__close, body').on('click', function() {
		// rSideMenu.slideUp(1000)
		rSideMenu.addClass('rightside-menu--hide');
	})

	$(document).on('keyup', function(e) {
		// console.log(e.key)
		if (e.key == "Escape") {
			// rSideMenu.slideUp(1000);
			rSideMenu.addClass('rightside-menu--hide');
		}
	})

	// обработка шкалы процентов айтема inspiration
	let inspItem = $('.inspiration__item');

	if (inspItem.length) {
		inspItem.each(function() {
			let ths = $(this);
			let percent = ths.attr('data-percent');
			let num = ths.find('.inspiration__item-num');
			let line = ths.find('.inspiration__item-line');

			num.html(`${percent}%`);
			// console.log(line.css('width'));
			line.css('width', `${percent}%`)
		})
	};

}