// JavaScript Document

var t;
var tt;
var i=0;
var j=0;
window.onload=function(){
		showimg();
		}
function showimg(){
	/*	$("#simg img").eq(i).fadeOut(2000,function(){
		$("#simg img").eq(i+1).fadeIn(2000,function(){
			$("#simg img").eq(i+1).fadeOut(2000,function(){
			$("#simg img").eq(i+2).fadeIn(2000,function(){
				$("#simg img").eq(i+2).fadeOut(2000,function(){
				$("#simg img").eq(i+3).fadeIn(2000,function(){
				$("#simg img").eq(i+3).fadeOut(2000,function(){
				$("#simg img").eq(i+4).fadeIn(2000,function(){
				$("#simg img").eq(i+4).fadeOut(2000,function(){
					if(i==5){
						i=0;
						}
				$("#simg img").eq(i).fadeIn(2000)
				});  
				});
				});
				});
				});
				});
			})
			});	
		});
		$("#simg img").eq(i).css("animation","fadeOut 3s alternate 1 linear") ;
		$("#simg img").eq(i+1).css("animation","fadeIn 3s alternate 1 linear") ;
		i++;*/
		//alert(i)
		
		$("#simg div img").eq(i).fadeOut(200,function(){
			//$("#simg ul li").eq(i-1).removeClass("selected");
			$("#simg ul li").eq(i).addClass("selected").siblings().removeClass("selected");
		$("#simg div img").eq(i).fadeIn(1000);
			});
		
			i++;
			if(i==5){
						i=0;
						};
				   t=setTimeout('showimg()',3000)
		
		}
	

$(document).ready(function(e) {	
	$(".strong").css("color","#f00");
$("#simg img").hover(
		function(e){
			 clearTimeout(t);
			$(this).css("cursor","pointer");
			},
		function(e){
			i=$(this).index()
			t=setTimeout('showimg()',3000)
			})
	$("#simg ul li").hover(
	   function(){
		   clearTimeout(t);
		   i=100;
         $("#simg div img").eq($(this).index()).show().siblings().hide();
		 $(this).removeClass("select").addClass("selected").siblings().removeClass("selected").removeClass("select");
		},
		function(){
			i=$(this).index();
			j=$(this).index();
			 t=setTimeout('showimg()',3000)
			})		
				
});		