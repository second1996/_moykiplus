document.addEventListener("DOMContentLoaded", function() {

	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Catalog Categories slider
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	var categoriesSlider = document.querySelectorAll('.s-catalog .s-catalog-category-slider');
	var subcategoriesSlider = document.querySelectorAll('.s-subcategory .s-subcategory-list');
	var breakpoint = window.matchMedia( '(min-width: 767.98px)' );

	/**
	 * Shop Categories page slider
	 */
	categoriesSlider.forEach( (element, index) => {
		let categoriesSwiper;

		// Add extra class for each slider
		element.classList.add('s-catalog-category-slider-' + index);

		var breakpointChecker = function() {
			// if larger viewport and multi-row layout needed
			if ( breakpoint.matches === true ) {
					// clean up old instances and inline styles when available
					if ( categoriesSwiper !== undefined ) categoriesSwiper.destroy( true, true );
					// or/and do nothing
					return;
			// else if a small viewport and single column layout needed
			} else if ( breakpoint.matches === false ) {
					// fire small viewport version of swiper
					return enableSwiper();
			}
		}

		var enableSwiper = function() {
			categoriesSwiper = new Swiper('.s-catalog .s-catalog-category-slider-' + index, {
				loop: false,
				speed: 650,
				spaceBetween: 10,
				autoHeight: true,
				pagination: {
					el: '.s-catalog .s-catalog-category-slider-' + index + ' .swiper-pagination',
					type: 'bullets',
					clickable: true,
				}
			})
		}

		// keep an eye on viewport size changes
		breakpoint.addListener(breakpointChecker);
		// kickstart
		breakpointChecker();
	})

	/**
	 * Shop Subcategories page slider
	 */
	subcategoriesSlider.forEach( (element, index) => {
		let subcategoriesSwiper;

		var breakpointChecker = function() {
			// if larger viewport and multi-row layout needed
			if ( breakpoint.matches === true ) {
					// clean up old instances and inline styles when available
					if ( subcategoriesSwiper !== undefined ) subcategoriesSwiper.destroy( true, true );
					// or/and do nothing
					return;
			// else if a small viewport and single column layout needed
			} else if ( breakpoint.matches === false ) {
					// fire small viewport version of swiper
					return enableSwiper();
			}
		}

		var enableSwiper = function() {
			subcategoriesSwiper = new Swiper('.s-subcategory .s-subcategory-list-slider', {
				loop: false,
				speed: 650,
				spaceBetween: 10,
				autoHeight: true,
				pagination: {
					el: '.s-subcategory .s-subcategory-list-slider .swiper-pagination',
					type: 'bullets',
					clickable: true,
				}
			})
		}

		// keep an eye on viewport size changes
		breakpoint.addListener(breakpointChecker);
		// kickstart
		breakpointChecker();
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Brands Alpabet Masonry grid
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	var rowHeight = 20;

	brandsGrid = function() {
		let items = document.querySelectorAll('.s-catalog-brands-item');

		for (let i = 0, item; item = items[i]; i++) {
			item.classList.remove('s-catalog-brands-item-ready');

			let height = item.offsetHeight;
			let rowSpan = Math.ceil(height / rowHeight);

			item.style.gridRowEnd = 'span ' + rowSpan;
			item.classList.add('s-catalog-brands-item-ready');
		}
	}

	window.addEventListener('load', brandsGrid);
	window.addEventListener('resize', () => {
		clearTimeout(brandsGrid.resizeTimer);
		brandsGrid.resizeTimer = setTimeout(brandsGrid, 50);
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * WIDGET: Price Filter (noUiSlider)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	var filterSlider = document.querySelectorAll('.filter-slider-handle');

	filterSlider.forEach(slider => {
		let filterMinPrice = parseInt( slider.dataset.slidermin );
		let filterMaxPrice = parseInt( slider.dataset.slidermax );

		// Create noUiSlide
		noUiSlider.create(slider, {
			start: [filterMinPrice, filterMaxPrice],
			connect: true,
			range: {
					'min': filterMinPrice,
					'max': filterMaxPrice
			}
		})

		// Change/Update noUiSlide values
		var priceFrom = slider.nextElementSibling.querySelector('.filter-slider-from'),
				priceTo = slider.nextElementSibling.querySelector('.filter-slider-to');

		priceFrom.addEventListener('change', priceUpdateValues);
		priceTo.addEventListener('change', priceUpdateValues);

		slider.noUiSlider.on('update', function (values, handle) {
			var value = values[handle];

			// Set «from» value
			if (handle == 0) {
				priceFrom.value = Math.round(value);
			}

			// Set «to» value
			if( handle == 1) {
				priceTo.value = Math.round(value);
			}
		})

		function priceUpdateValues() {
			var priceFromValue, priceToValue;

			// Check if value isn't empty...
			if (priceFrom.value != '') {
				priceFromValue = priceFrom.value;
			}
			if (priceTo.value != '') {
				priceToValue = priceTo.value;
			}

			// ... and change values
			slider.noUiSlider.set([priceFromValue, priceToValue]);
		}

		// Set default values when form is reset
		var resetFilters = document.querySelector('button[type="reset"]');

		resetFilters.addEventListener('click', function () {
			slider.noUiSlider.set([parseInt(slider.dataset.slidermin), parseInt(slider.dataset.slidermax)]);
			priceFrom.setAttribute('value', parseInt(slider.dataset.slidermin));
			priceTo.setAttribute('value', parseInt(slider.dataset.slidermax));
		})
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Single Product: Sticky Product Complectation
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */

})


jQuery(document).ready( function($) {

	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Move widgets (shop filters) into .clone-widgets wrapper
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	if( $('.clone-widgets').length && window.matchMedia('(max-width: 991.98px)').matches ) {
		$('.page-widgets').appendTo('.clone-widgets')
	}


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Single Product: Sticky Product Complectation
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	if( $('.product-complect').length && window.matchMedia('(min-width: 768px)').matches ) {
		var stickyComplect = $('.product-complect'),
				stickyComplectOffset = stickyComplect.offset().top - 100;

		$(window).on('scroll load', function() {
			if( $(window).scrollTop() >= stickyComplectOffset ) {
				stickyComplect.addClass('_sticky')
			} else {
				stickyComplect.removeClass('_sticky')
			}
		})
	}


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Add display:block for hide container widget (widget title must has class '_toggled')
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$('.filter-toggle-header._toggled, .widget-header._toggled').next().css('display', 'block')


})