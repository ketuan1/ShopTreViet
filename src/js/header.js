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
document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
