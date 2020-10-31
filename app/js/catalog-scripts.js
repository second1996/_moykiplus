document.addEventListener("DOMContentLoaded", function() {
	/**
	 * Catalog Categories slider
	 */
	const catalogSliders = document.querySelectorAll('.s-catalog-category-slider');
	const breakpoint = window.matchMedia( '(min-width: 768.98px)' );

	catalogSliders.forEach( (element, index) => {
		let catalogSwiper;

		// Add extra class for each slider
		element.classList.add('s-catalog-category-slider-' + index);

		const breakpointChecker = function() {
			// if larger viewport and multi-row layout needed
			if ( breakpoint.matches === true ) {
					// clean up old instances and inline styles when available
					if ( catalogSwiper !== undefined ) catalogSwiper.destroy( true, true );
					// or/and do nothing
					return;
			// else if a small viewport and single column layout needed
			} else if ( breakpoint.matches === false ) {
					// fire small viewport version of swiper
					return enableSwiper();
			}
		}

		const enableSwiper = function() {
			catalogSwiper = new Swiper('.s-catalog .s-catalog-category-slider-' + index, {
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
	 * Brands Alpabet Masonry grid
	 */
	var rowHeight = 20;

	makeBrandsGrid = function() {
		let items = document.querySelectorAll('.s-catalog-brands-item');
		for (let i = 0, item; item = items[i]; i++) {
			// вынимаем элемент из грида и измеряем
			item.classList.remove('s-catalog-brands-item-ready');
			let height = item.offsetHeight;
			// рассчитываем, сколько рядов он займет
			let rowSpan = Math.ceil(height / rowHeight);
			// задаем соответствующий span в grid-row-end
			item.style.gridRowEnd = 'span ' + rowSpan;
			// возвращаем элемент в грид
			item.classList.add('s-catalog-brands-item-ready');
		}
	}

	window.addEventListener('load', makeBrandsGrid);
	window.addEventListener('resize', () => {
		clearTimeout(makeBrandsGrid.resizeTimer);
		makeBrandsGrid.resizeTimer = setTimeout(makeBrandsGrid, 50);
	})

})