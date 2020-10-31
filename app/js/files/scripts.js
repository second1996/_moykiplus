/**
 * Run scripts before loaded page
 */
// Hide Promo string & setup «key -> hide-promo-string» into sessionStorage
$('.promo .btn-close').on('click', function () {
	$('.promo').hide()
	sessionStorage.setItem('promo-string', 'hide')
})
// Check if «hide-promo-string» set «true» in sessionStorage...
if( sessionStorage.getItem('promo-string') == 'hide' ) {
	// ... and then hide this.
	$('.promo').hide()
} else {
	$('.promo').removeClass('d-none')
}


/**
 * Run scripts when loaded page
 */
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
	$('.mega-menu-sections .nav-item .has-submenu, .m-menu-nav > ul > li .has-dropmenu, [data-toggle="toggle-box"]').on('click', function(e) {
		e.preventDefault()
		$submenu = $(this)
		//getting the next element
		$content = $submenu.next()
		//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$submenu.toggleClass('_toggled')
		$content.slideToggle(250)

		// Fix readmore when element isn't visible (display: none)
		if( $('.filter-show-less').length || $('.filter-inner').is(':hidden') ) {
			$('.filter-show-less').readmore({
				embedCSS: false,
				speed: 75,
				moreLink: '<button type="button" class="read-more"><span>Показать ещё</span></button>',
				lessLink: '<button type="button" class="read-more _toggled"><span>Скрыть</span></button>',
			})
		}
	})


	/**
	 * Product card gallery
	 */
	$(document).on('mouseenter', '.card-product .card-gallery-item', function() {
		$(this).siblings().removeClass('_active')
		$(this).addClass('_active')
	})


	/**
	 * Marquee Promo string
	 */
	$('.promo-content-marquee').marquee({
		// duration: 12000,
		delayBeforeStart: 0,
		startVisible: true,
		duplicated: true,
		pauseOnHover: true,
		gap: 350,
	})


	/**
	 * Product card actions
	 */
	$('.card-product').on('click', '.wishlist-btn, .compare-btn, .order-btn', function(e) {
		e.preventDefault()
		$(this).toggleClass("_active")
	})


	/**
	 * Stores contacts button
	 */
	$('.btn-stores-button').on('click', function() {
		$(document).on('click', function (e) {
			if ($(e.target).closest('.btn-stores-content').length === 0) {
				$('.btn-stores').removeClass('_toggled')
			}
		})
		$(this).parents('.btn-stores').toggleClass('_toggled')
	})


	/**
	 * Fix closing dropdown menu when selecting the text
	 */
	$('.dropdown-menu').on('click', function (e) {
		e.stopPropagation()
	})


	/**
	 * Page navigation
	 */
	if( $('#page-navigation').length ) {
		/**
		 * Init Bootstrap ScrollSpy if #page-navigation id registered on the page
		 */
		if( window.matchMedia('(min-width: 768px)').matches ) {
			$('body').scrollspy({
				target: '#page-navigation',
				offset: 300,
			})
		}

		/**
		 * Animated scroll
		 */
		$('.page-navigation-list > li > a').on('click', function(e) {
			var section_id = $(this).attr('href')

			e.preventDefault()
			$('html, body').stop(true).animate({scrollTop: $(section_id).offset().top - 100}, 600)
		})
	}


	/**
	 * Read more button on mobile (xxs, xs, sm)
	 */
	$('[data-readmore="inline"]').readmore({
		embedCSS: false,
		speed: 75,
		moreLink: '<button type="button" class="read-more"><span>Читать все</span><svg class="icon icon-arrow"><use xlink:href="images/symbol-defs.svg#arrow"></use></svg></button>',
		lessLink: '<button type="button" class="read-more _toggled"><span>Скрыть</span><svg class="icon icon-arrow"><use xlink:href="images/symbol-defs.svg#arrow"></use></svg></button>',
	})
	$('[data-readmore="button"]').readmore({
		embedCSS: false,
		speed: 75,
		moreLink: '<button type="button" class="btn btn-more btn-primary">Показать еще</button>',
		lessLink: '<button type="button" class="btn btn-more btn-primary">Скрыть</button>',
	})
	$('.brands-card .brand-categories').readmore({
		embedCSS: false,
		speed: 75,
		moreLink: '<button type="button" class="read-more"><span>Показать все</span></button>',
		lessLink: '<button type="button" class="read-more _toggled"><span>Скрыть</span></button>',
	})


	/**
	 * Compare products
	 */
	$('#compare-differences').on('click', function (e) {
		e.preventDefault();

		$('#compare-differences').addClass('_active')

		$('.compare-table-key').each(function(index, el){
			var rowValues = [];
	
			$('.compare-table-slide').each(function() {
				rowValues.push($(this).find('.compare-table-value').eq(index).text())
			})
	
			var toHide = isStringArrayEqual(rowValues);
	
			if( toHide ) {
				$(this).addClass('d-none')
				$('.compare-table-slide').each(function() {
					$(this).find('.compare-table-value').eq(index).addClass('d-none')
				})
			}
		})
	
		function isStringArrayEqual(stringArr) {
			var outArr = true, i = 0;

			while (++i < stringArr.length) {
				outArr = outArr && (stringArr[i-1] === stringArr[i]);
			}

			return outArr;
		}

		$('#compare-all').removeClass('_active')
	})

	$('#compare-all').on('click', function (e) {
		e.preventDefault()
		$('#compare-all').addClass('_active')
		$('.compare-table-key, .compare-table-value').each(function() {
			if( $(this).hasClass('d-none') ) {
				$(this).removeClass('d-none')
			}
		})
		$('#compare-differences').removeClass('_active')
	})


	/**
	 * Choose Brand coutries
	 */
	$('#brands-countries-choose').on('click', function () {
		$(this).toggleClass('_toggled')
		$(this).next().slideToggle(250)
	})

})