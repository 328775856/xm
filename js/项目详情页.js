// JavaScript Document


//轮播文字
  /*  window.onload=function(){
		fun1();
		fun2();
		stopall();
		//show();
		}
	var t;
	var tt;
	var i=0;	
	var j=0;
	var Img;
	var idx;
	function fun1(){
	 var arr=$("#lastnew p");
	// alert($("#Rimg+div span").length+i)
		//alert(arr.first().html())
		arr.last().after("<p>"+arr.first().html()+"</p>"); 
	//  alert(arr.last().html())	
	  arr.first().remove();	
	   t=setTimeout("fun1()",2000);  
		}
//轮播图片
     function fun2(){
     var $img=$("#Rimg img");	  
	  $img.eq(j).show();
	  $img.eq(j).siblings().hide();
//控制轮播的按钮	  
	 $("#Rimg+div span").eq(j).css("width","15px","height","15px","border-radius","15px");
	 $("#Rimg+div span").eq(j).siblings().css("width","10px","height","10px");
	   j++;
	 //  alert(j)
	 if(j==5){
		  j=0;
		  }
	  tt=setTimeout("fun2()",2000);  
		}			
//轮播停止事件		
	function stopall(){
			$("#lastnew").hover(
			function(){
				clearTimeout(t)
				},
			function(){
				setTimeout('fun1()',2000)
				}	
			)
			$("#Rimg img").hover(
			function(){
				clearTimeout(tt)
				},
			function(){
				setTimeout('fun2()',2000)
				
				}	
			)
//轮播图片控制			
			$("#Rimg+div span").hover(
			    function(){
				clearTimeout(tt);
				$(this).css("width","15px","height","15px","border-radius","15px");
	            $(this).siblings().css("width","10px","height","10px");
                var index=$(this).index();
	        	$("#Rimg img").eq(index).show().siblings().hide();
				},
			function(){
				//setTimeout('fun2()',2000)
				}	
			)
			}*/
/*//轮播图片控制
function show(){
	$("#Rimg+div span").hover(
	function(){
		$(this).css("width","15px","height","15px","border-radius","15px");
	    $(this).siblings().css("width","10px","height","10px");
        var index=$(this).index();
		//alert(index)
		$("#Rimg img").eq(index).show().siblings().hide();
		},
	function(){
		setTimeout('fun2()',2000)
       
		}
	)	
}*/			
	var num='blue';	
	var k;
  $(function(){
	  //左边菜单折叠部分
	/*  $("#left .top span").css("cursor","pointer");
	  $("#left .top span").click(function(e) {
        $(this).parent().next().slideToggle(500);
	   });
	  $("#left .top span").toggle(
	  function(){
		  $(this).text("︽") 
		  },
	  function(){
		  ($(this).text("︾"))
		  }	  
	  )
	  	  $("#d1 ul li p").hide();
	  $("#d1 ul li").click(function(e) {
		  $(this).css("cursor","pointer")
        $(this).children().slideToggle(500);
	   });
	  $("#d1 ul li").toggle(
	  function(){
		  $(this).css("list-style","url(images/treeview-collapsed.gif)")
		  },
	  function(){
		  ($(this).css("list-style","url(images/treeview-expanded.gif)"))
		  }	  
	  )	*/
	 //导航二级菜单
	 $("#nav ul li").hover(
	      function(){
		 $(this).children().children().show()
		 },
		 function(){
		$(this).children().children().hide(); 
			 })
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
		 $("#top,#nav,.top").css("background","#3a599c");
		 }else if($skin=="#l2"){
		     $($skin).css("background","url(images/theme.gif) 18px 15px").siblings().css("background","");
		 $("#top,#nav,.top").css("background","#d352e2");
	  }else if($skin=="#l3"){
		     $($skin).css("background","url(images/theme.gif) 36px 15px").siblings().css("background","");
		 $("#top,#nav,.top").css("background","#ea4275");
	  }else if($skin=="#l4"){
		     $($skin).css("background","url(images/theme.gif) 56px 15px").siblings().css("background","");
		 $("#top,#nav,.top").css("background","#07bfc7");
	  }else if($skin=="#l5"){
		     $($skin).css("background","url(images/theme.gif) 76px 15px").siblings().css("background","");
		 $("#top,#nav,.top").css("background","#ffa400");
	  }else if($skin=="#l6"){
		     $($skin).css("background","url(images/theme.gif) 96px 15px").siblings().css("background","");
		 $("#top,#nav,.top").css("background","#b5d521");
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
		$("#top,#nav,.top").css("background","#d352e2")
    });
	$("#l3").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 36px 15px");
		$(this).siblings().css("background","");
		$("#top,#nav,.top").css("background","#ea4275")
    });
	$("#l4").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 56px 15px");
		$("#top,#nav,.top").css("background","#07bfc7")
		$(this).siblings().css("background","");
    });
	$("#l5").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 76px 15px");
		$("#top,#nav,.top").css("background","#ffa400")
		$(this).siblings().css("background","");
    });	
	$("#l6").click(
	function(){
		$.cookie("skinfile",this.id,{path:"/",expires:dt.getTime()+36*60*60*1000});
        $(this).css("background","url(images/theme.gif) 96px 15px");
		$("#top,#nav,.top").css("background","#b5d521")
		$(this).siblings().css("background","");
    });

//缩略图
   $("#color div").eq(0).css("border","#06F 1px solid");
   $("#color div").click(function(e) {
	   num=this.id;
    $(this).css("border","#06F 1px solid").siblings().css("border","0px");
	$(".jqzoom img").first().remove();
	$(".jqzoom").append('<img src="images/pro_img/'+this.id+'_two_small.jpg" class="fs" alt=""  jqimg="images/pro_img/'+this.id+'_two_big.jpg" id="bigImg">');
	 $("#floorimg").attr("src",' '+'images/pro_img/'+this.id+'_two_big.jpg'); 
	var name=$(this).attr('name')
	$("#color").prev().children().html(name);
	 
	//if(this.id!="green"){	
		$("#one img").remove();
		$("#one").append('<img src="images/pro_img/'+this.id+'_one.jpg">');
		$("#two img").remove();
		$("#two").append('<img src="images/pro_img/'+this.id+'_two.jpg">');	
		$("#three img").remove();
	    $("#three").append('<img src="images/pro_img/'+this.id+'_three.jpg">')
	/*	}else{
		$("#one img").remove();
		$("#one").append('<img src="images/pro_img/'+this.id+'_one.jpg">');
		$("#two img").remove();
		$("#two").append('<img src="images/pro_img/'+this.id+'_two.jpg">');	
		$("#three img").remove(); 
			};*/
	
});
//图片放大
   $("#two,#three").css("border","0px");
     $("#thickImg img").click(function(e) {
                $("#floor").css("display","block");
				
            });
			$("#x").click(function(e) {
                    $("#floor").css({"display":"none","z-index":"1"});
                });
  $("#left_footer div:not(#f)").click(function(e) {
   // $(".jqzoom img").prop("src","images/pro_img/blue_"+this.id+"_small.jpg");
	//$(".jqzoom img").attr("jqimg","images/pro_img/blue_"+this.id+"_small.jpg");
	$(".jqzoom img").first().remove();
	$(".jqzoom").append('<img src="images/pro_img/'+num+'_'+this.id+'_small.jpg" class="fs" alt=""  jqimg="images/pro_img/'+num+'_'+this.id+'_big.jpg" id="bigImg"/>');
	$(this).css("border","#06F 1px solid").siblings("#left_footer div:not(#f)").css("border","0px");
	$("#floorimg").attr("src",' '+'images/pro_img/'+num+'_'+this.id+'_big.jpg'); 
	
});
//尺寸
 $("#size div").eq(0).css("background","#06C");  
   $("#size div").click(function(e) {
	
    $(this).css("background","#06C").siblings().css("background","");
	$("#h4 span").html(this.id);
});
  $("option").click(function(e) {
	  $("#size+h4+h4 span").html(($(this).index()+1)*200+"元")
});

        
    $("#star").mousemove(function(e){
		var s=e.clientX-this.offsetLeft;

		//alert(s)
	if(s>=0&&s<8){
			$(this).css("background-position","0px"+" -"+0+"px");
			return k=0;
			}else if(s>=8&&s<16){
			$(this).css("background-position","0px"+" -"+16+"px");
			return k=1;
			}else if(s>=16&&s<32){
			$(this).css("background-position","0px"+" -"+32+"px");
			return k=2;	
				}else if(s>=32&&s<48){
			$(this).css("background-position","0px"+" -"+48+"px");
			return k=3;
			}else if(s>=48&&s<60){
			$(this).css("background-position","0px"+" -"+64+"px");	
			return k=4;
				}else if(s>=60&&s<72){
			$(this).css("background-position","0px"+" -"+80+"px");
			return k=5;
			}else{
			$(this).css("background-position","0px"+" -"+80+"px");
			return k=5;
			}
    });
		$("#star").click(function(e) {
			switch(k){
			case 0:alert("您评分为0星")	;
			break;
			case 1:alert("您评分为星1")	;
			break;
			case 2:alert("您评分为2星")	;
			break;
			case 3:alert("您评分为3星")	;
			break;
			case 4:alert("您评分为4星")	;
			break;
			case 5:alert("您评分为5星")	;
			break;
			default:;
				}
	});
	$("#ipt").click(function(e) {
     alert("感谢您的购买\n您购买的\n产品是：免烫高支棉条纹衬衣；\n尺寸是："+$("#h4 span").html()+"\n颜色是："+$("#color").prev().children().html()+"\n总价是："+ $("#size+h4+h4 span").html());
    });   
	  })  

/*使用jqzoom*/
$(function(){

	$(".jqzoom").jqueryzoom({
					xzoom: 310, //放大图的宽度(默认是 200)
					yzoom: 310, //放大图的高度(默认是 200)
					offset: 10, //离原图的距离(默认是 10)
					position: "right", //放大图的定位(默认是 "right")
					preload:1   
	});
});
$(document).ready(function(e) {
        $( "#tabs" ).tabs();
});	
	  