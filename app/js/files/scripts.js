jQuery(document).ready( function($) {
	/**
 * Header Search form
 */
	$('.header-bottom .navigation .search-form input').on('click', function() {
		$(this).parents('.search-form').addClass('_shown')
		$('.header-bottom .navigation').addClass('search-toggled')
		$('.header-bottom .navigation .menu').addClass('_hidden')
		if( $('.modal-backdrop').length == 0 ) {
			$('body').append('<div class="modal-backdrop fade"></div>')
			$('.modal-backdrop').on('click', function() {
				$(this).remove()
				$('.header-bottom .navigation').removeClass('search-toggled')
				$('.header-bottom .navigation .search-form').removeClass('_shown')
				$('.header-bottom .navigation .menu').removeClass('_hidden')
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
		$submenu.toggleClass('_toggled');
		$content.slideToggle(250);
	})

	/**
	 * Product card gallery
	 */
	$(document).on('mouseenter', '.card-product .card-gallery-item', function() {
		$(this).siblings().removeClass('_active')
		$(this).addClass('_active')
	})

	/**
	 * Product card actions
	 */
	$('.card-product').on('click', '.wishlist-btn, .compare-btn, .order-btn', function(e) {
		e.preventDefault()
		$(this).toggleClass("_active")
	})
	$('.card-product .order-btn').on('click', function() {
		$(this).find('span').text('Товар в корзине')
	})

})