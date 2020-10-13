jQuery(document).ready( function($) {

	/**
	 * Back to Top button
	 */
	var back_to_top = $('#back-to-top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 1000) {
			back_to_top.addClass('_shown');
		} else {
			back_to_top.removeClass('_shown');
		}
	});

	back_to_top.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 1000);
	});


	/**
	 * LazyLoad init
	 */
	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
		load_delay: 250,
		callback_loaded: function(element) {
			// console.log("👍 LOADED", element);
			$(element).siblings('.lazy-preloader').remove();
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
 * Marquee string for background text (classname: .bg-text)
 */
	if( window.matchMedia('(max-width: 1299.98px)').matches ) {
		$('.promo-content-marquee').marquee({
			// duration: 12000,
			delayBeforeStart: 0,
			startVisible: true,
			duplicated: true,
			pauseOnHover: true,
			gap: 350,
		})
	}


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
	 * Page navigation (ScrollSpy)
	 */
	if( $('#page-navigation').length ) {
		$('body').scrollspy({
			target: '#page-navigation',
			offset: 300,
		})
	}

	$('.page-navigation-list > li > a').on('click', function(e) {
		var section_id = $(this).attr('href')

		e.preventDefault()
		$('html, body').stop(true).animate({scrollTop: $(section_id).offset().top - 100}, 700)
	})

})