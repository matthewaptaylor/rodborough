var nav = $(".navbar");
var logo = $(".logo");
header = $('.header').height();
$(window).resize(
	function(){
		var nav = $(".navbar");
		var logo = $(".logo");
		header = $('.header').height();
	}
);
$(window).scroll(
	function(){
		if($(this).scrollTop() > header - 56) {
			nav.addClass("stickyNav");
			logo.addClass("stickyLogo");
			nav.addClass("navBrandShow");
		}else{
			nav.removeClass("stickyNav");
			logo.removeClass("stickyLogo");
		}
	}
);