// JavaScript Document
$(document).ready(function(e) {
    //颜色切换
	$("#l1").css("background","url(images/theme.gif) 0px 15px")
		$("#l1").click(
	function(){
        $(this).css("background","url(images/theme.gif) 0px 15px")
		$("nav,#cotent_left header").css("background","#3a599c")
		$(this).siblings().css("background","");
    });
	$("#l2").click(
	function(){
        $(this).css("background","url(images/theme.gif) 18px 15px");
		$(this).siblings().css("background","");
		$("nav,#cotent_left header").css("background","#d352e2")
    });
	$("#l3").click(
	function(){
        $(this).css("background","url(images/theme.gif) 36px 15px");
		$(this).siblings().css("background","");
		$("nav,#cotent_left header").css("background","#ea4275")
    });
	$("#l4").click(
	function(){
        $(this).css("background","url(images/theme.gif) 56px 15px");
		$("nav,#cotent_left header").css("background","#07bfc7")
		$(this).siblings().css("background","");
    });
	$("#l5").click(
	function(){
        $(this).css("background","url(images/theme.gif) 76px 15px");
		$("nav,#cotent_left header").css("background","#ffa400")
		$(this).siblings().css("background","");
    });	
	$("#l6").click(
	function(){
        $(this).css("background","url(images/theme.gif) 96px 15px");
		$("nav,#cotent_left header").css("background","#b5d521")
		$(this).siblings().css("background","");
    });
});