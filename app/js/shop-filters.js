document.addEventListener("DOMContentLoaded", function() {

	/**
	 * Price Filter (noUiSlider)
	 */

	// Filter Price (handle, data-slider-min, data-slider-max)
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

})

jQuery(document).ready( function($) {

	/**
	 * Read more init
	 */
	$('.filter-toggle-inner .filter-show-less').readmore({
		embedCSS: false,
		speed: 75,
		moreLink: '<button type="button" class="read-more"><span>Показать ещё</span></button>',
		lessLink: '<button type="button" class="read-more _toggled"><span>Скрыть</span></button>',
	})

})