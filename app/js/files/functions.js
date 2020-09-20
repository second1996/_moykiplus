/**
 * Mega menu
 */

$('.mega-menu-sections .nav-item .has-submenu').on('click', function(e) {
	e.preventDefault();
	$submenu = $(this);
	//getting the next element
	$content = $submenu.next();
	//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
	$submenu.toggleClass('is-toggled');
	$content.slideToggle(250);
})




const catalogBtn = $('.catalog-btn'),
			megaMenu = $('.mega-menu'),
			megaMenuSections = $('.mega-menu-sections'),
			megaMenuContent = $('.mega-menu-content');
			megaMenuContentSection = $('.mega-menu-content > .section');

// catalogBtn
// .on('mouseenter', function() {
// 	megaMenu.addClass('is-active')
// })
// .on('mouseleave', function() {
// 	megaMenu.removeClass('is-active')
// })

// megaMenuSections
// 	.find('.nav .submenu > li > a')
// 	.on('mouseenter', function () {
// 		let target = $(this),
// 				targetData = target.closest('li').data('menu');

// 		// console.log(targetData);
// 		target.closest('li').addClass('is-active')
		
// 		megaMenuContentSection.removeClass('is-active')
// 		megaMenuContent.find('.' + targetData).addClass('is-active')
// 	})
// 	.on('mouseleave', function() {
// 		let target = $('.nav .submenu > li')

// 		megaMenuSections.find('.nav .nav-link').on('mouseenter', function() {
// 			target.removeClass('is-active')
// 			megaMenuContentSection.removeClass('is-active')
// 		})
// 	})