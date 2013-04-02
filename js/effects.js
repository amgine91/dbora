$(document).ready(function(){

	
//	SCROLL DOWN FUNCTION

	$('.mainmenu').click(function() {
		if("homeLink" == $(this).attr('id')){
			gotoPos = "#header"
		}
		else if("hotelsLink" == $(this).attr('id')){
			gotoPos = "#hotelBox"
		}
		else if("actLink" == $(this).attr('id')){
			gotoPos = "#activitiesBox"
		}
		else if("transpoLink" == $(this).attr('id')){
			gotoPos = "#transpoBox"
		}
		$('html, body').animate({scrollTop:$('' + gotoPos + '').position().top-200}, 'slow');
	})

})