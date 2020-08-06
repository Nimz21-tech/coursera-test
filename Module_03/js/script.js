(function ($)
$(document).ready(function (){

	//hide .navbar first
	$(".navscroll").hide();

	//fade in .navbar
    $(function(){
    	$(window).scroll(function () {

    		// set ddistance user needs to scroll before we start fade in...
    		if($(this).scrollTop() >100){
    			$(".navscroll").fadeIn();
    		}else{
    			$(".navscroll").fadeOut();
    		}
    		});
    	});
    });
}(jQuery));