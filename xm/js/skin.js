// JavaScript Document

$(document).ready(function(e) {
    //颜色切换
	$("#header_ul li").click(function(e) {
       $.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
    });
	//$("#l1").css("background","url(images/theme.gif) 0px 15px")
	var dt = new Date();
	if($.cookie("skinfile")){
		 var $skin="#"+$.cookie("skinfile");
		 if($skin=="#l1"){
		     $($skin).css("background","url(images/theme.gif) 0px 15px").siblings().css("background","");
		 $("nav,#cotent_left header").css("background","#3a599c");
		 }else if($skin=="#l2"){
		     $($skin).css("background","url(images/theme.gif) 18px 15px").siblings().css("background","");
		 $("nav,#cotent_left header").css("background","#d352e2");
	  }else if($skin=="#l3"){
		     $($skin).css("background","url(images/theme.gif) 36px 15px").siblings().css("background","");
		 $("nav,#cotent_left header").css("background","#ea4275");
	  }else if($skin=="#l4"){
		     $($skin).css("background","url(images/theme.gif) 56px 15px").siblings().css("background","");
		 $("nav,#cotent_left header").css("background","#07bfc7");
	  }else if($skin=="#l5"){
		     $($skin).css("background","url(images/theme.gif) 76px 15px").siblings().css("background","");
		 $("nav,#cotent_left header").css("background","#ffa400");
	  }else if($skin=="#l6"){
		     $($skin).css("background","url(images/theme.gif) 96px 15px").siblings().css("background","");
		 $("nav,#cotent_left header").css("background","#b5d521");
	  }
	};
	
		$("#l1").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 0px 15px")
		$("nav,#cotent_left header").css("background","#3a599c")
		$(this).siblings().css("background","");
    });
	$("#l2").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 18px 15px");
		$(this).siblings().css("background","");
		$("nav,#cotent_left header").css("background","#d352e2")
    });
	$("#l3").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 36px 15px");
		$(this).siblings().css("background","");
		$("nav,#cotent_left header").css("background","#ea4275")
    });
	$("#l4").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 56px 15px");
		$("nav,#cotent_left header").css("background","#07bfc7")
		$(this).siblings().css("background","");
    });
	$("#l5").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 76px 15px");
		$("nav,#cotent_left header").css("background","#ffa400")
		$(this).siblings().css("background","");
    });	
	$("#l6").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 96px 15px");
		$("nav,#cotent_left header").css("background","#b5d521")
		$(this).siblings().css("background","");
    });
	
});