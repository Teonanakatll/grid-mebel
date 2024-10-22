export function myJquery() {

	let rSideMenu = $('.rightside-menu');

	rSideMenu.on('click', function(e) {
		e.stopPropagation();
	})

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
}