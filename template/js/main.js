$(function(){
	$("body").keydown(function(e) {
		if(e.keyCode == 37) {
			if ($('.prev')[0]) {
				$('.prev')[0].click();
			}
		}
		else if(e.keyCode == 39) { 
			if ($('.next')[0]) {
				$('.next')[0].click();
			}
		}
	});
})