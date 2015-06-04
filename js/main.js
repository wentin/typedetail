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
	$('.vote').click(function(e) {
	    e.preventDefault();
	    window.open('https://thenetawards.com/vote/side-project/underline-js/');
	    window.open('https://thenetawards.com/vote/talent/wenting-zhang/');
	});
})