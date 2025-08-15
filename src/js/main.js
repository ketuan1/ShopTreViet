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
	const faqItems = document.querySelectorAll('.item-faq');

	if (faqItems.length > 0) {
	faqItems[0].classList.add('active');
	const firstIcon = faqItems[0].querySelector('i');
	if (firstIcon) {
		firstIcon.classList.replace('fa-plus', 'fa-minus');
	}
	}

	faqItems.forEach(item => {
	const title = item.querySelector('.title');
	title.addEventListener('click', function () {
		faqItems.forEach(faq => {
		if (faq !== item) {
			faq.classList.remove('active');
			faq.querySelector('i').classList.replace('fa-minus', 'fa-plus');
		}
		});

		item.classList.toggle('active');
		const icon = item.querySelector('i');
		if (item.classList.contains('active')) {
		icon.classList.replace('fa-plus', 'fa-minus');
		} else {
		icon.classList.replace('fa-minus', 'fa-plus');
		}
	});
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

jQuery(".box-category-menu .title-sidebar").on("click", function (e) {
	//e.preventDefault();
	jQuery(this).toggleClass("active").next().slideToggle();
});
jQuery(".box-category-menu .list-filter > ul > li > a").on("click", function (e) {
	//e.preventDefault();
	jQuery(this).next().slideToggle();
	jQuery(this).toggleClass("active").parent().siblings().find("a").removeClass("active");
});

jQuery(".btn-filter").on("click", function () {
	jQuery(".box-category-menu").addClass("active");
});
jQuery(".box-category-menu .btn-close").on("click", function () {
	jQuery(".box-category-menu").removeClass("active");
});





/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
