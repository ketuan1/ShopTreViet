import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile: function () {
		$(".header-hambuger").on("click", function () {
			$('body').toggleClass('openMenuMobile')
		});
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
	},
};

// custom sub-menu for wp
jQuery(document).ready(function ($) {
	// Thêm class wrap-toggle và icon vào menu-item-has-children
	$('.header-menu li.menu-item-has-children').each(function () {
		// Lấy thẻ <a>
		const $link = $(this).children('a');

		// Tạo wrap-toggle và icon
		const $icon = $('<i class="fa-sharp fa-light fa-chevron-down"></i>');
		const $wrapToggle = $('<div class="wrap-toggle"></div>');

		// Thêm thẻ <a> và icon vào wrap-toggle
		$wrapToggle.append($link.clone()).append($icon);

		// Thay thế thẻ <a> ban đầu bằng wrap-toggle
		$link.replaceWith($wrapToggle);
	});

	// Xử lý sự kiện click vào icon để toggle sub-menu
	$('.header-menu li.menu-item-has-children .wrap-toggle i').on('click', function (e) {
		e.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
		const $parentLi = $(this).closest('li');
		const $subMenu = $parentLi.children('.sub-menu');

		// Ẩn tất cả các sub-menu khác
		$('.sub-menu').not($subMenu).slideUp().removeClass('active');
		$('.wrap-toggle i').not($(this)).removeClass('open');

		// Hiển thị hoặc ẩn sub-menu hiện tại
		$subMenu.slideToggle().toggleClass('active');
		$(this).toggleClass('open');
	});

	// Click bên ngoài menu thì ẩn các sub-menu
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.header-menu').length) {
			$('.sub-menu').slideUp().removeClass('active');
			$('.wrap-toggle i').removeClass('open');
		}
	});
});


document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
