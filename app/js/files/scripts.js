/**
 * Run scripts before loaded page
 */
$(function () {

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

})

/**
 * Run scripts when loaded page
 */
jQuery(document).ready( function($) {

	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * LazyLoad init
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	var callback_finish = function () {
		allLoaded = true;
		if (printRequested) {
			openPrintDialog();
		}
	}

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
		load_delay: 250,
		callback_loaded: function(element) {
			// console.log("👍 LOADED", element);
			$(element).siblings('.lazy-preloader').remove();
		},
		callback_finish: callback_finish,
	})

	// Callback function for AJAX dynamic content
	reinitLazyLoad = function () {
		lazyLoadInstance.update();
	}

	// lazyLoadAll when page printing
	if( $('.print').length ) {
		var printRequested = false;
		var allLoaded = false;

		function printButtonHandler(event) {
			printButton.innerHTML = "Подготовка...";
			printButton.disabled = true;
			if (allLoaded) {
				openPrintDialog();
			} else {
				printRequested = true;
				lazyLoadInstance.loadAll();
			}
		}

		function openPrintDialog() {
			printButton.innerHTML = printButtonContent;
			printButton.disabled = false;
			window.print();
		}

		var printButton = document.querySelector(".print");
		printButtonContent = printButton.innerHTML
		printButton.addEventListener("click", printButtonHandler)

		var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
		if (!isSafari) {
			window.onbeforeprint = function () {
				lazyLoadInstance.loadAll()
			}
		} else {
			// Safari doesn't support the onbeforeprint event
			var mediaQueryList = window.matchMedia("print");
			mediaQueryList.addListener(function (mql) {
				if (mql.matches) {
					lazyLoadInstance.loadAll()
				}
			})
		}
	}


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Bootstrap Modal (fix scroll when change modal, etc.)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('body').on('show.bs.modal', '.modal', function () {
		$('.modal:visible').removeClass('fade').modal('hide').addClass('fade');
	});
	$('a[href="#userLoginModal"]').on('click', function () {
		$('#userLoginModal').modal('show')
	})
	$('a[href="#userRegisterModal"]').on('click', function () {
		$('#userRegisterModal').modal('show')
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Bootstrap Tooltip
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('[data-toggle="tooltip"]').tooltip({
		// trigger: 'click',
		template: '<div class="tooltip base-tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
	})

	$('[data-toggle="filter-tooltip"]').tooltip({
		html: true,
		trigger: 'manual',
		placement: 'right',
		template: '<div class="tooltip base-tooltip filter-tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
	})
	if( $('[data-toggle="filter-tooltip"]').length ) {
		$('.widget-filters [data-toggle="filter-tooltip"]').click(function () {
			$('.widget-filters [data-toggle="filter-tooltip"]').tooltip('hide')
			$(this).tooltip('show')
		})
	}

	if( window.matchMedia('(min-width: 992px)').matches ) {
		$('[data-toggle="variative-product"]').tooltip({
			html: true,
			trigger: 'hover',
			placement: 'left',
			template: '<div class="tooltip variative-tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			title: function (e) {
				var ttHtml = $(this).find('.product-variative-info').clone();

				return ttHtml;
			}
		})
		$('[data-toggle="variative-comment"]').tooltip({
			html: true,
			trigger: 'hover',
			placement: 'top',
			template: '<div class="tooltip variative-tooltip-comment"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			title: function (e) {
				var ttCommentHtml = $(this).parent().find('.product-variative-comment').clone();

				return ttCommentHtml;
			}
		})
	}


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Back to Top button
	 *-------------------------------------------------------------------------------------------------------------------------------------------
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
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Sticky header
	 *-------------------------------------------------------------------------------------------------------------------------------------------
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
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Mobile header actions
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	if( window.matchMedia('(max-width: 1299.98px)').matches ) {
		// Mobile Menu
		$('.header-bottom .m-actions-item .menu-btn').on('click', function() {
			$(this).toggleClass('_toggled')
			$('.m-menu').toggleClass('_shown')
			$('.header-bottom').toggleClass('m-menu-toggled')

			// Close search if open
			$('.header-bottom').removeClass('search-toggled')
			$('.header-bottom .m-actions-item .search-btn').removeClass('_toggled')
			$('.header-bottom .navigation .search-form').removeClass('_shown')
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

			// Close mobile menu if open
			$('.header-bottom').removeClass('m-menu-toggled')
			$('.header-bottom .m-actions-item .menu-btn').removeClass('_toggled')
			$('.m-menu').removeClass('_shown')

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
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Header Search form
	 *-------------------------------------------------------------------------------------------------------------------------------------------
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
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Toggle Dropdown menu
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('[data-toggle="toggle-box"]').on('click', function(e) {
		e.preventDefault()

		$submenu = $(this)
		// Getting the next element
		$content = $submenu.next()
		// Open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$submenu.toggleClass('_toggled')
		$content.slideToggle(250)
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Mobile menu dropdown submenus
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('.mega-menu-sections .nav-item .has-submenu, .m-menu-nav > ul > li .has-dropmenu').on('click', function(e) {
		e.preventDefault()

		$submenu = $(this)

		// Open page when clicked twice on span element
		$submenu.find('span').unbind().click(function () {
			var pageLink = $submenu.attr('href')
			window.location.href = pageLink
		})

		// Getting the next element
		$content = $submenu.next()
		// Open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$submenu.toggleClass('_toggled')
		$content.slideToggle(250)
	})
	// Show submenu when page location equail category menu
	$('.mega-menu-sections .nav-item .has-submenu._toggled, .m-menu-nav > ul > li .has-dropmenu._toggled').next().css('display', 'block')


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Product card gallery slideshow on hover
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	if( window.matchMedia('(min-width: 992px)').matches ) {
		$(document).on('mouseenter', '.card-product .card-gallery-item', function() {
			$(this).siblings().removeClass('_active')
			$(this).addClass('_active')
		})
	}


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Marquee Promo string (header)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
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
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Product card actions (wishlist, compare & order buttons)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	// $('.card-product, .product-single .product-actions').on('click', '.wishlist-btn, .compare-btn, .order-btn', function(e) {
	// 	e.preventDefault()
	// 	$(this).toggleClass('_active')
	// })


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Stores contacts button (fixed)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
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
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Fix closing dropdown menu when selecting the text
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('.dropdown-menu').on('click', function (e) {
		e.stopPropagation()
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Page navigation (Bootstrap ScrollSpy)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	if( $('#page-navigation').length ) {

		// Init Bootstrap ScrollSpy if #page-navigation id registered on the page
		if( window.matchMedia('(min-width: 768px)').matches ) {
			$('body').scrollspy({
				target: '#page-navigation',
				offset: 300,
			})
		}

		// Animated scroll
		$('.page-navigation-list > li > a').on('click', function(e) {
			var section_id = $(this).attr('href')

			e.preventDefault()
			$('html, body').stop(true).animate({scrollTop: $(section_id).offset().top - 100}, 600)
		})
	}


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Read more button (readmore.js)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('[data-readmore="inline"]').readmore({
		embedCSS: false,
		speed: 75,
		moreLink: '<button type="button" class="read-more"><span>Читать все</span><svg class="icon icon-arrow"><use xlink:href="/images/symbol-defs.svg#arrow"></use></svg></button>',
		lessLink: '<button type="button" class="read-more _toggled"><span>Скрыть</span><svg class="icon icon-arrow"><use xlink:href="/images/symbol-defs.svg#arrow"></use></svg></button>',
	})
	$('[data-readmore="button"]').readmore({
		embedCSS: false,
		collapsedHeight: 160,
		collapsedMoreHeight: 320,
		speed: 75,
		moreLink: '<button type="button" class="btn btn-more btn-primary">Показать еще</button>',
		lessLink: '<button type="button" class="btn btn-more btn-primary">Скрыть</button>',
		afterToggle: function( trigger, element, expanded ) {
			if ( expanded ) {
					element.css( "height", "" );
					element.css( "height", element.height() + "px" );
			}
		},
	})
	$('.brands-card .brand-categories').readmore({
		embedCSS: false,
		speed: 75,
		moreLink: '<button type="button" class="read-more"><span>Показать все</span></button>',
		lessLink: '<button type="button" class="read-more _toggled"><span>Скрыть</span></button>',
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Compare products
	 *-------------------------------------------------------------------------------------------------------------------------------------------
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

})