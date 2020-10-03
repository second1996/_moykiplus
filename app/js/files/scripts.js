jQuery(document).ready( function($) {

	/**
	 * Sticky header
	 */
	var stickyHeader = $('.header'),
			headerOffset = $('.header .header-bottom').offset().top;

	$(window).on('scroll load', function() {
		if( $(window).scrollTop() >= headerOffset ) {
			stickyHeader.addClass('_sticky')
		} else {
			stickyHeader.removeClass('_sticky')
		}
	})

	/**
	 * Mobile header actions
	 */
	$('.header-bottom .m-actions-item .menu-btn').on('click', function() {
		alert('click')
	})
	$('.header-bottom .m-actions-item .search-btn').on('click', function() {
		$('.header-bottom').toggleClass('search-toggled')
		$('.header-bottom .navigation .search-form').addClass('_shown')
		if( $('.search-backdrop').length == 0 ) {
			$('body').append('<div class="search-backdrop"></div>')
			$('.search-backdrop').on('click', function() {
				$(this).remove()
				$('.header-bottom').removeClass('search-toggled')
				$('.header-bottom .navigation .search-form').removeClass('_shown')
				$('.header-bottom .navigation .menu').removeClass('_hidden')
			})
		}
	})

	/**
 * Header Search form
 */
	$('.header-bottom .navigation .search-form input').on('click', function() {
		$(this).parents('.search-form').addClass('_shown')
		$('.header-bottom').addClass('search-toggled')
		$('.header-bottom .navigation .menu').addClass('_hidden')
		if( $('.search-backdrop').length == 0 ) {
			$('body').append('<div class="search-backdrop"></div>')
			$('.search-backdrop').on('click', function() {
				$(this).remove()
				$('.header-bottom').removeClass('search-toggled')
				$('.header-bottom .navigation .search-form').removeClass('_shown')
				$('.header-bottom .navigation .menu').removeClass('_hidden')
			})
		}
	})

	/**
	 * Mega menu
	 */
	$('.mega-menu-sections .nav-item .has-submenu').on('click', function(e) {
		e.preventDefault()
		$submenu = $(this)
		//getting the next element
		$content = $submenu.next()
		//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$submenu.toggleClass('_toggled')
		$content.slideToggle(250)
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

	/**
	 * Stores list button
	 */
	$('.stores-button').on('click', function() {
		$(document).on('click', function (e) {
			if ($(e.target).closest('.stores-content').length === 0) {
				$('.stores').removeClass('_toggled')
			}
		})
		$(this).parents('.stores').toggleClass('_toggled')
	})

})