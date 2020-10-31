jQuery(document).ready( function($) {

	/**
	 * Show input phone mask when checkbox is checked
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
	 * Sort a list alphabetically
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
})