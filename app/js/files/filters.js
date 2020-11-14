jQuery(document).ready( function($) {
	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * WIDGET: Price Filter (noUiSlider)
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	var filterSlider = document.querySelectorAll('.filter-slider-handle');

	if( filterSlider.length ) {
		initFilterSlider = function() {
			filterSlider.forEach(slider => {
				let filterMinPrice = parseInt( slider.dataset.slidermin );
				let filterMaxPrice = parseInt( slider.dataset.slidermax );
				let priceFrom      = slider.nextElementSibling.querySelector('.filter-slider-from');
				let priceTo        = slider.nextElementSibling.querySelector('.filter-slider-to');
				let inputMinPrice  = parseInt( priceFrom.value );
				let inputMaxPrice  = parseInt( priceTo.value );

				// Create noUiSlide
				noUiSlider.create(slider, {
					start: [inputMinPrice, inputMaxPrice],
					connect: true,
					range: {
							'min': filterMinPrice,
							'max': filterMaxPrice
					}
				})

				// Change/Update noUiSlide values
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

				slider.noUiSlider.on('end', function (values, handle) {
					// Trigger «from» input value
					if (handle == 0) {
						$(priceFrom).change()
					}

					// Trigger «to» input value
					if( handle == 1) {
						$(priceTo).change()
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
				document.querySelector('.filter-reset').addEventListener('click', function () {
					slider.noUiSlider.set([parseInt(slider.dataset.slidermin), parseInt(slider.dataset.slidermax)]);
					priceFrom.setAttribute('value', parseInt(slider.dataset.slidermin));
					priceTo.setAttribute('value', parseInt(slider.dataset.slidermax));
				})
			})
		}
		initFilterSlider()
	}

	// Reinit filter
	reinitFilterSlider = function() {
		$('.filter-toggle-header._toggled, .widget-header._toggled').next().css('display', 'block');

		filterSlider = document.querySelectorAll('.filter-slider-handle');
		initFilterSlider()
	}
})