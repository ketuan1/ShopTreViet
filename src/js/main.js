import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, detectCloseElement, buttonToTop, clickScrollToDiv, appendCaptchaASP, replaceSvgImages } from "./helper";
import { header_mega_menu } from "./header_mega_menu";
import { header } from "./header";
import swiperInit from "./swiper";
$(document).ready(function () {
	setBackgroundElement();
	header_mega_menu.init();
	header.init();
	swiperInit();
	replaceSvgImages();
	FAQ();
	buttonToTop();
	CounterUps();
	TabNav();
});

/*==================== Aos Init ====================*/
setTimeout(() => {
AOS.init({
		offset: 100,
	});
}, 1000);

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

function TabNav() {
	$('.list-tab li:first-child').addClass('active');
		$('.tab-content').hide();
		$('.tab-content:first').show();

		$('.list-tab li').click(function(){
		$('.list-tab li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
		});
}

function CounterUps() {
	$(document).ready(function () {
		$(".countup").each(function () {
			const $this = $(this);
			const targetNumber = parseInt($this.data("number"));
			const duration = 1500;
			const increment = Math.ceil(targetNumber / (duration / 16));
			let currentNumber = 0;
			const timer = setInterval(function () {
				currentNumber += increment;
				if (currentNumber >= targetNumber) {
					currentNumber = targetNumber;
					clearInterval(timer);
				}
				$this.text(currentNumber);
			}, 16);
		});
	});
}





/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
