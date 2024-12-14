import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, detectCloseElement, buttonToTop, clickScrollToDiv, appendCaptchaASP } from "./helper";
import { header } from "./header";
import swiperInit from "./swiper";
$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	FAQ();
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});

/*==================== FAQ =================*/
function FAQ() {
	$(".faq-full-content .main-faq:nth-child(1)").addClass("active-faq");
	$(".faq-full-content .main-faq:nth-child(1) .heading-faq").addClass("active");
	$(".faq-full-content .main-faq:nth-child(1) .content-faq").slideDown();
	$(".heading-faq").on("click", function () {
		var $mainFaq = $(this).closest(".main-faq");
		if ($(this).hasClass("active")) {
			$(this).siblings(".content-faq").slideUp();
			$(this).removeClass("active");
			$mainFaq.removeClass("active-faq");
		} else {
			$(".heading-faq").removeClass("active");
			$(".content-faq").slideUp();
			$(".main-faq").removeClass("active-faq");

			$(this).siblings(".content-faq").slideToggle();
			$(this).toggleClass("active");
			$mainFaq.addClass("active-faq");
		}
	});
}
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
