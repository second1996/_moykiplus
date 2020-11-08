jQuery(document).ready( function($) {

	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Show input phone mask when checkbox is checked
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	function switch_phone_mask(selector) {
		var switch_phone_mask_checkbox = $(selector).find('input[type="checkbox"]'),
				switch_phone_mask_input = switch_phone_mask_checkbox.parents('.form-group').find('input[type="tel"]');

		if( switch_phone_mask_checkbox.is(':checked') ) {
			switch_phone_mask_input.mask('+7 (999) 999-99-99')
			switch_phone_mask_input.attr('placeholder', '+7 (___) ___-__-__')
		} else {
			switch_phone_mask_input.mask('0#')
			switch_phone_mask_input.attr('placeholder', 'Номер телефона')
		}
	}
	// Callback
	$('.switch-input-mask').each(function(index, element) {
		/**
		 * Run switch_phone_mask function for each selector on the page
		 */
		switch_phone_mask(element)

		/**
		 * Run switch_phone_mask function when checkbox is changed
		 */
		$(element).find('input[type="checkbox"]').on('input checked', function() {
			switch_phone_mask(element)
		})
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Sort a list alphabetically
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	$.fn.sortList = function() {
		var list = $(this)
		var listItems = $('.form-checkbox', list).get()

		listItems.sort(function(a, b) {
				var compA = $(a).text().toUpperCase()
				var compB = $(b).text().toUpperCase()
				return (compA < compB) ? -1 : 1;
		})

		$.each(listItems, function(i, el) {
				// list.append(itm);
				var letter = $(el).text().charAt(0);

				if (!$(this).parent().find('[data-letter="'+ letter +'"]').length) {
					$(this).parent().append('<div data-letter="'+ letter+'"><span>'+ letter +'</span></div>')
				}
				$(this).parent().find('[data-letter="'+ letter +'"]').append(this)
		})
	}

	$("#sort-brand-az").sortList()

	// $('#sort-brand-az .form-checkbox').each(function () {
	// 	var letter = $('.form-checkbox-label', this).text().charAt(0);
		
	// 	if (!$(this).parent().find('[data-letter="'+ letter +'"]').length) {
	// 		$(this).parent().append('<div data-letter="'+ letter+'"><span>'+ letter +'</span></div>');
	// 	}
	// 	$(this).parent().find('[data-letter="'+ letter +'"]').append(this);

	// });


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Product Quantity
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 */
	if (!String.prototype.getDecimals) {
		String.prototype.getDecimals = function () {
			var num = this,
				match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
			if (!match) {
				return 0;
			}
			return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
		}
	}

	productQuantity = function() {
		$(document).on('click', '.quantity-minus, .quantity-plus', function () {
			// Get values
			var $qty = $(this).closest('.quantity').find('.quantity-value'),
					currentVal = parseFloat( $qty.attr('data-quantity-value') ),
					max = parseFloat( $qty.attr('max') ),
					min = parseFloat( $qty.attr('min') ),
					step = $qty.attr('step');

			// Format values
			if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
			if (max === '' || max === 'NaN') max = '';
			if (min === '' || min === 'NaN') min = 0;
			if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = '1';

			// Change the value
			if ($(this).is('.quantity-plus')) {
				if (max && (currentVal >= max)) {
					$qty.val(max + ' шт.');
					$qty.attr('data-quantity-value', max);
				} else {
					var maxValue = (currentVal + parseFloat(step)).toFixed(step.getDecimals())
					$qty.val(maxValue + ' шт.');
					$qty.attr('data-quantity-value', maxValue);
				}
			} else {
				if (min && (currentVal <= min)) {
					$qty.val(min + ' шт.');
					$qty.attr('data-quantity-value', min);
				} else if (currentVal > 0) {
					var minValue = (currentVal - parseFloat(step)).toFixed(step.getDecimals());

					$qty.val(minValue + ' шт.');
					$qty.attr('data-quantity-value', minValue);
				}
			}
			// console.log($qty.attr('data-quantity-value'));
			$qty.attr('data-quantity-value', parseInt( $qty.val() ));

			// Trigger change event
			$qty.trigger('change');

		})
	}
	productQuantity()

})