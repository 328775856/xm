// JavaScript Document


$(document).ready(function(e) {	
	$(".navhide").parent().hover(
	   function(){
		$(this).children().show();
		},
		function(){
		$(".navhide").hide();
			})
				
});		