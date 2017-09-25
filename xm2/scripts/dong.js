// JavaScript Document
$(document).ready(function(e) {
	//$("a").attr('contenteditable','true');
    $("#dong").hover(
	function(e) {
        $(this).css('animation','dong linear 3s normal infinite 0s')
    },
	function(e) {
        $(this).css('animation','');
    }
	
	);

});
