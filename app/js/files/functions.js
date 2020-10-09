jQuery(document).ready( function($) {

	/**
	 * Show input phone mask when checkbox is cheked
	 */
	var switch_phone_mask_checkbox = $('.switch-input-mask').find('input[type="checkbox"]'),
			switch_phone_mask_input = switch_phone_mask_checkbox.parents('.form-group').find('input[type="tel"]');

	function switch_phone_mask() {
		if( switch_phone_mask_checkbox.is(':checked') ) {
			switch_phone_mask_input.mask('+7 (999) 999-99-99')
			switch_phone_mask_input.attr('placeholder', '+7 (___) ___-__-__')
		} else {
			switch_phone_mask_input.mask('0#')
			switch_phone_mask_input.attr('placeholder', 'Номер телефона')
		}
	}
	switch_phone_mask()

	switch_phone_mask_checkbox.on('input checked', function() {
		switch_phone_mask()
	})

})