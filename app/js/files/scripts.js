jQuery(document).ready( function($) {
	/**
 * Header Search form
 */
	$('.header-bottom .navigation .search-form input').on('click', function() {
		$(this).parents('.search-form').addClass('is-active')
		$('.header-bottom .navigation').addClass('search-toggled')
		$('.header-bottom .navigation .menu').addClass('is-hidden')
		if( $('.modal-backdrop').length == 0 ) {
			$('body').append('<div class="modal-backdrop fade"></div>')
			$('.modal-backdrop').on('click', function() {
				$(this).remove()
				$('.header-bottom .navigation').removeClass('search-toggled')
				$('.header-bottom .navigation .search-form').removeClass('is-active')
				$('.header-bottom .navigation .menu').removeClass('is-hidden')
			})
		}
	})

	/**
	 * Mega menu
	 */
	$('.mega-menu-sections .nav-item .has-submenu').on('click', function(e) {
		e.preventDefault();
		$submenu = $(this);
		//getting the next element
		$content = $submenu.next();
		//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$submenu.toggleClass('is-toggled');
		$content.slideToggle(250);
	})

	/**
	 * Product card gallery
	 */
	$(document).on('mouseenter', '.card-gallery .card-gallery-item', function() {
		$(this).siblings().removeClass("_active")
		$(this).addClass("_active")
	})

})