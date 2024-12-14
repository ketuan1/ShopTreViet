import Swiper from "swiper";
import { Pagination, EffectCreative, Keyboard, Mousewheel, Navigation, Thumbs, EffectFade, Autoplay, EffectCoverflow, Grid, FreeMode } from "swiper/modules";

/**
 * @param swiperInit
 */
export default function swiperInit() {

	$(".col-3-products .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 2,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.swiper-cols-1').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".col-3-products").find(".btn-next")[0],
				prevEl: $(this).closest(".col-3-products").find(".btn-prev")[0],
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
}
