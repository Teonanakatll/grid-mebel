export function myJquery() {

	let mainSlider = $('.top__slider');
	let logoLink = $('.logo');

	// $ всегда возвращает обьект $ даже если элемент не найден, поэтому проверяем длинну элемента
	// делает ссылку на логотипе неактивной на главной странице
	if (mainSlider.length) {
		logoLink.attr('href', '#');
		logoLink.css('pointer-events', 'none')
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

	let mobileButton = $('.header__btn-menu');
	let canToggle = true;
	const delay = 1000;

	if (mobileButton.length && mobileButton.is(':visible')) {
		let menu = $('.menu')

		mobileButton.on('click', function(e) {
			e.stopPropagation();
			if (canToggle) {
				menu.stop(true, true).toggleClass('menu--open');
				canToggle = false;

				setTimeout(() => {
					canToggle = true;
				}, delay);
			}
		})
		menu.on('click', function(e) {
			e.stopPropagation();
		})
		if (canToggle) {
			$('body').on('click', () => {
				menu.removeClass('menu--open')
			})

		}
	}

	$(window).on('resize load', function() {
    let measureSelect = $('.work__item--measure');
    let isSmallScreen = $(window).width() < 576;
    
    if (isSmallScreen && !measureSelect.hasClass('moved-to-designer')) {
        // console.log('Less than 576px');
        measureSelect.addClass('moved-to-designer'); // Помечаем, что элемент перемещен
        measureSelect.remove();
        $('.work__item--designer').after(measureSelect);
    } else if (!isSmallScreen && measureSelect.hasClass('moved-to-designer')) {
        // console.log('576px or more');
        measureSelect.removeClass('moved-to-designer'); // Снимаем отметку о перемещении
        measureSelect.remove();
        $('.work__items-box').after(measureSelect);
    }
});
}