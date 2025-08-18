import Swiper from "swiper";
import { Pagination, EffectCreative, Keyboard, Mousewheel, Navigation, Thumbs, EffectFade, Autoplay, EffectCoverflow, Grid, FreeMode } from "swiper/modules";

/**
 * @param swiperInit
 */
export default function swiperInit() {

	$(".banner-page-home .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			speed: 1000,
			effect: "fade",
			// autoplay: {
			// 	delay: 5000,
			// },
			loop: true,
			pagination: {
				el: $(this).closest('.banner-page-home').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".banner-page-home").find(".btn-next")[0],
				prevEl: $(this).closest(".banner-page-home").find(".btn-prev")[0],
			},
		});
	});

	$(".home-cols-2 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 40,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-2').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-2").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-2").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 1,	
				},
				1290: {
					slidesPerView: 2,
				},
			},
		});
	});

	$(".home-cols-3 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 40,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-3').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-3").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-3").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 2,	
				},
				1290: {
					slidesPerView: 3,
				},
			},
		});
	});

	$(".home-cols-4 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 40,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-4').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-4").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-4").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 2,	
				},
				1290: {
					slidesPerView: 4,
				},
			},
		});
	});

	$(".home-cols-5 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 2,
			spaceBetween: 20,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-5').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-5").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-5").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 3,	
				},
				1290: {
					slidesPerView: 5,
				},
			},
		});
	});

	$(".home-cols-feature .swiper").each(function () {
		new Swiper(this, {
			modules: [Autoplay, Navigation],
			centeredSlides: true,
			loop: true,
			slidesPerView: 1,
			loopAdditionalSlides: 3,
			spaceBetween: 40,
			// autoplay: {
			// 	delay: 3500,
			// },
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: $(this).closest(".home-cols-feature").find(".button-next")[0],
				prevEl: $(this).closest(".home-cols-feature").find(".button-prev")[0],
			},
			breakpoints: {
				1290: {
					slidesPerView: 1.2,
					spaceBetween: 68,
				},
			},
		});
	});

	var productThumb = new Swiper(".section-product-detail.section-1 .product-detail-thumbnail .swiper", {
		slidesPerView: 3,
		spaceBetween: 15,
		freeMode: true,
		watchSlidesProgress: true,
		spaceBetween: 10,
		breakpoints: {
			768: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
			1024: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
			1280: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
		},
	});
	var productMain = new Swiper(".section-product-detail.section-1 .product-detail-image .swiper", {
		spaceBetween: 10,
		speed: 500,
		slidesPerView: 1,
		modules: [Navigation, Thumbs, Pagination],
		navigation: {
			prevEl: ".section-product-detail.section-1 .product-detail-thumbnail .btn-prev",
			nextEl: ".section-product-detail.section-1 .product-detail-thumbnail .btn-next",
		},
		thumbs: {
			swiper: productThumb,
		},
		pagination: {
			el: ".section-product-detail.section-1 .product-detail-thumbnail .swiper-pagination",
			clickable: true,
		},
	});



	// slider gallery
	var sliderThumbnail = new Swiper('.thumb-slider .swiper', {
		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 4000,
		},
		slidesPerView: 4,
		spaceBetween: 30,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

	});
	var mainSlider = new Swiper('.main-slider .swiper', {
		modules: [Thumbs, Autoplay, Navigation],
		navigation: {
			nextEl: '.thumb-slider .btn-next',
			prevEl: '.thumb-slider .btn-prev',
		},
		autoplay: {
			delay: 4000,
		},
		loop: true,
		thumbs: {
			swiper: sliderThumbnail
		}
	});
	// end



}
