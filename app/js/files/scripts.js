jQuery(document).ready( function($) {

	/**
	 * LazyLoad init
	 */
	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
		load_delay: 250,
		callback_loaded: function(element) {
			// console.log("👍 LOADED", element);
			$(element).siblings('.lazy-spin').remove();
		},
	})


	/**
	 * Sticky header
	 */
	if( window.matchMedia('(min-width: 1230px)').matches ) {
		var stickyHeader = $('.header'),
				headerOffset = $('.header .header-bottom').offset().top;

		$(window).on('scroll load', function() {
			if( $(window).scrollTop() >= headerOffset ) {
				stickyHeader.addClass('_sticky')
			} else {
				stickyHeader.removeClass('_sticky')
			}
		})
	}


	/**
	 * Mobile header actions
	 */
	if( window.matchMedia('(max-width: 1299.98px)').matches ) {
		// Mobile Menu
		$('.header-bottom .m-actions-item .menu-btn').on('click', function() {
			$(this).toggleClass('_toggled')
			$('.m-menu').toggleClass('_shown')
			$('.header-bottom').toggleClass('m-menu-toggled')
		})

		// Slide submenu
		$('.m-menu-nav ul > li > a.has-submenu').on('click', function(e) {
			e.preventDefault()
			$(this).siblings('.submenu').addClass('_toggled')
			$(this).siblings('.submenu').find('.back-btn').on('click', function() {
				$(this).parents('.submenu').removeClass('_toggled')
			})
		})

		// Mobile Search
		$('.header-bottom .m-actions-item .search-btn').on('click', function() {
			$(this).toggleClass('_toggled')
			$('.header-bottom').toggleClass('search-toggled')
			$('.header-bottom .navigation .search-form').toggleClass('_shown')
			$(document).on('click', function (e) {
				if ($(e.target).closest('.header-bottom').length === 0) {
					$('.header-bottom').removeClass('search-toggled')
					$('.header-bottom .m-actions-item .search-btn').removeClass('_toggled')
					$('.header-bottom .navigation .search-form').removeClass('_shown')
				}
			})
		})
	}


	/**
 * Header Search form
 */
	if( window.matchMedia('(min-width: 1230px)').matches ) {
		$('.header-bottom .navigation .search-form input').on('click', function() {
			$(this).parents('.search-form').addClass('_shown')
			$('.header-bottom').addClass('search-toggled')
			$('.header-bottom .navigation .menu').addClass('_hidden')
			$(document).on('click', function (e) {
				if ($(e.target).closest('.header-bottom .navigation .search').length === 0) {
					$('.header-bottom').removeClass('search-toggled')
					$('.header-bottom .navigation .search-form').removeClass('_shown')
					$('.header-bottom .navigation .menu').removeClass('_hidden')
				}
			})
		})
	}


	/**
	 * Mega menu
	 */
	$('.mega-menu-sections .nav-item .has-submenu, .m-menu-nav > ul > li .has-dropmenu, .m-menu-contacts .toggle-box-header').on('click', function(e) {
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


	/**
	 * Fix closing dropdown menu when selecting the text
	 */
	$('.dropdown-menu').on('click', function (e) {
		e.stopPropagation()
	})


	/**
	 * Show input phone mask when checkbox is cheked
	 */
	var switch_phone_mask_checkbox = $('.switch-input-mask').find('input[type="checkbox"]'),
			switch_phone_mask_input = switch_phone_mask_checkbox.parents('.form-group').find('input[type="tel"]');

	function switch_phone_mask() {
		if( switch_phone_mask_checkbox.is(':checked') ) {
			switch_phone_mask_input.mask('+7 (999) 999-99-99')
		} else {
			switch_phone_mask_input.mask('0#')
		}
	}
	switch_phone_mask()

	switch_phone_mask_checkbox.on('input checked', function() {
		switch_phone_mask()
	})

})