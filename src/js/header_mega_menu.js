
/*==================== Header Mega Menu ====================*/
/**
 * @param header_mega_menu
 */

export const header_mega_menu = {
    init() {
		
    }
};


// disable hover background sub-menu
// jQuery(document).ready(function () {
// 	$('.header-menu .sub-menu > li.menu-item-has-children').hover(
// 		function () {
// 			$('.header-menu .sub-menu > li:first-child').addClass('disable-first-highlight');
// 		},
// 		function () {
// 			$('.header-menu .sub-menu > li:first-child').removeClass('disable-first-highlight');
// 		}
// 	);
// })

// //custom menu
// jQuery(document).ready(function ($) {
// 	// 1. Ẩn .walker-image khi dưới 1024px
// 	function toggleWalkerImage() {
// 		if (window.innerWidth < 1024) {
// 			$('.walker-image').hide();
// 		} else {
// 			$('.walker-image').show();
// 		}
// 	}
// 	toggleWalkerImage();

// });

// //add icon for li menu desktop
// jQuery(document).ready(function($) {
// 	$('.header-menu > .menu-item-has-children > a').each(function() {
// 	  $(this).append(' <i class="fa-regular fa-chevron-down icon-desk"></i>');
// 	});
//   });
  

// $(document).ready(function () {
// 	// Chỉ chạy khi màn hình < 1024px
// 	if ($(window).width() < 1024) {
// 		// Menu cấp 1
// 		$('.header-menu li.menu-item-has-children > a').each(function () {
// 			const $a = $(this);
// 			$a.wrap('<span class="toggle-icon"></span>');
// 			$('<i class="fa-sharp fa-light fa-chevron-down"></i>').appendTo($a.parent());
// 		});

// 		// Menu cấp 2
// 		$('.mega-menu > div > .sub-menu > li.menu-item-has-children > a').each(function () {
// 			const $a = $(this);
// 			$a.wrap('<span class="toggle-icon"></span>');
// 			$('<i class="fa-sharp fa-light fa-chevron-down"></i>').appendTo($a.parent());
// 		});
// 	}

// 	// Toggle cấp 1
// 	$('.header-menu').on('click', 'li.menu-item-has-children > .toggle-icon', function (e) {
// 		//e.preventDefault();
// 		//e.stopPropagation();

// 		if ($(window).width() < 1024) {
// 			const $parent = $(this).closest('li');

// 			// Đóng các menu khác
// 			if (!$parent.hasClass('active')) {
// 				$('.header-menu > li.menu-item-has-children').not($parent).removeClass('active').find('.mega-menu').slideUp(300);
// 			}

// 			$parent.toggleClass('active');
// 			$parent.find('> .mega-menu').stop(true, true).slideToggle(300);
// 		}
// 	});

// 	// Toggle cấp 2
// 	$('.mega-menu').on('click', '.sub-menu > li.menu-item-has-children > .toggle-icon', function (e) {
// 		//e.preventDefault();
// 		//e.stopPropagation();

// 		if ($(window).width() < 1024) {
// 			const $item = $(this).closest('li');

// 			// Đóng các mục khác cùng cấp
// 			if (!$item.hasClass('active')) {
// 				$item.siblings('.menu-item-has-children').removeClass('active').find('.mega-wrap').slideUp(300);
// 			}

// 			$item.toggleClass('active');
// 			$item.find('> .mega-wrap').stop(true, true).slideToggle(300);
// 		}
// 	});
// });