var galleryTop = new Swiper('.gallery-top', {
    /*nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',*/
	autoplay:4000,
    loop: true,
	pagination:'.swiper-pagination',
	paginationClickable:true,
    spaceBetween: 0
});
/*$(window).resize(function(){
    reinitSwiper(galleryTop);
});
function reinitSwiper(swiper) {
  setTimeout(function () {
    swiper.onResize();
  }, 500);
}*/


var sviperSliderList = [];
$(document).ready(function() {
	
	
	$.each($('#three-per-one-slider .tabcontent .swiper-container'), function(i,v) {
		var slider = new Swiper($(v), {
			direction: 'horizontal',
			slidesPerView: 3,
			/*spaceBetween: 40,*/
			autoplay:2000,
			spaceBetween: 15,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			breakpoints: {
				414: {
					slidesPerView: 1,
				},
				667: {
					slidesPerView: 2,
				},
				900: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
					/*spaceBetween: 16,*/
				}
			}
		});
		
		sviperSliderList[i] = slider;
	})
	
	$.each($('#one-per-one-slider .tabcontent .swiper-container'), function(i,v) {
		var slider = new Swiper($(v), {
			direction: 'horizontal',
			slidesPerView: 1,
			autoplay:2000,
			spaceBetween: 15,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		});
		
		sviperSliderList[i] = slider;
	})
	
	$.each($('.programs-tablist .tabcontent .swiper-container'), function(i,v) {
		var slider = new Swiper($(v), {
			direction: 'horizontal',
			slidesPerView: 4,
			autoplay:false,
			spaceBetween: 15,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			breakpoints: {
				424: {
					slidesPerView: 1,
				},
				667: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				}
			}
		});
		
		sviperSliderList[i] = slider;
	})
	
	
	new Swiper('#two-per-one-slider .swiper-container', {
		direction: 'horizontal',
		slidesPerView: 1,
		autoplay:2000,
		spaceBetween: 0,
		nextButton: '#two-per-one-slider .swiper-button-next',
		prevButton: '#two-per-one-slider .swiper-button-prev',
	});
	
	new Swiper('.four-cols-slider .swiper-container', {
		direction: 'horizontal',
		slidesPerView: 4,
		autoplay:2000,
		spaceBetween: 15,
		nextButton: '.four-cols-slider .swiper-button-next',
		prevButton: '.four-cols-slider .swiper-button-prev',
		breakpoints: {
			424: {
				slidesPerView: 1,
			},
			667: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			}
		}
	});
	
	new Swiper('.is-cols-template .swiper-container', {
		direction: 'horizontal',
		slidesPerView: 2,
		autoplay:2000,
		spaceBetween: 15,
		nextButton: '.is-cols-template .swiper-button-next',
		prevButton: '.is-cols-template .swiper-button-prev',
		breakpoints: {
			414: {
				slidesPerView: 1,
			},
			667: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			}
		}
	});
	
})