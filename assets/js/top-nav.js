$(document).ready(function() {
	var navInitHeight = $(".nav").height();
	
	if ($(window).outerWidth() > 1024) {
		$('.first-level-menu .has-submenu').mouseenter(function(){
			var fsLvlSubmenuHeight = $(this).find('.first-level-submenu').height();
			
			$(".nav").addClass("nav-opened");
			
			if ($("body").hasClass("inner-page")) {
				$(".nav").stop(true).stop(true).animate({'height': fsLvlSubmenuHeight + 120});
				$(".nav .logo").stop(true).stop(true).animate({'top': fsLvlSubmenuHeight / 2 - 30});
			}
			else {
				$(".nav").stop(true).stop(true).animate({'height': fsLvlSubmenuHeight + 180});
				$(".nav .logo").stop(true).stop(true).animate({'top': fsLvlSubmenuHeight / 2});
			}
			
			$(".works-as-submenu").hide();
		}).mouseleave(function(){
			$(".nav").removeClass("nav-opened");
			$(".nav").stop(true).delay(100).animate({'height': navInitHeight});
			$(".nav .logo").stop(true).delay(100).animate({'top': 0});
			$(".works-as-submenu").show();
		})
	}
	
	$('.top-search').click(function() {
		$(".nav").toggleClass("nav-opened");
		$(".first-level-menu, .top-lang, .second-level-menu, .burger-menu").toggleClass('remove');
		$(".top-navigation .top-search .icon-placeholder").toggleClass('show-close-icon');
		$(".top-navigation .search-form").toggleClass('show');
	})
	
	$('.burger-menu').click(function() {
		$("body").toggleClass("overflow-hidden");
		$(".nav").toggleClass("nav-opened").toggleClass("total");
		$(".first-level-menu, .top-lang, .second-level-menu").toggleClass('show')
		$(".top-search").toggleClass('remove');
	})

	$(window).resize(function() {
		//location.reload();
	})
})
