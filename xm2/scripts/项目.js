// JavaScript Document
//轮播文字
    window.onload=function(){
		fun1();
		fun2();
		stopall();
		//show();
		}
	var t;
	var tt;
	var ttt;
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
			$("#lastnew").mouseover(
			function(e){
				clearTimeout(t)
				}
	)
	$("#lastnew").mouseout(
			function(){
				t=setTimeout('fun1()',2000)
				}	
			)
			$("#Rimg img").hover(
			function(){
				clearTimeout(tt);
				},
			function(){
				tt=setTimeout('fun2()',2000)
				}	
			)
//轮播图片控制			
			$("#Rimg+div span").mouseover(
			    function(e){
				clearTimeout(tt);	
				$(this).css("width","15px","height","15px","border-radius","15px");
	            $(this).siblings().css("width","10px","height","10px");
                var index=$(this).index();
	        	$("#Rimg img").eq(index).show().siblings().hide();
				}	
			)
			$("#Rimg+div sapn").mouseout(function(e) {
                tt=setTimeout('fun2()',2000)
            });
			}
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
		
  $(function(){
	  //左边菜单折叠部分
	  $("#left .top span").css("cursor","pointer");
	  $("#left .top span").click(function(e) {
        $(this).parent().next().slideToggle(500);
	   });
	  $("#left .top span").toggle(
	  function(){
		 // alert($(this).html())
		  $(this).children().attr("src","images/up.gif");
		 // $(this).css("background","#096");
		  },
	  function(){
		 $(this).children().attr("src","images/down.gif");
		 // $(this).css("background","");
		  }	  
	  )
	  	  $(".li div").hide();
	  $(".li").click(function(e) {
		  $(this).css("cursor","pointer");
		  //alert($(this).children().length)
        $(this).children().slideToggle(500);
	   });
	  $(".li").toggle(
	  function(){
		  $(this).css("list-style","url(images/treeview-expanded.gif)")
		  },
	  function(){
		  ($(this).css("list-style","url(images/treeview-collapsed.gif)"))
		  }	  
	  ).children("p,a").stop();	
	 //导航二级菜单
	 $("#nav ul li").hover(
	      function(){
		 $(this).children().children().show()
		 },
		 function(){
		$(this).children().children().hide(); 
			 })
	//颜色切换
		$("#l1").click(
	function(){
        $(this).css("background","url(images/theme.gif) 0px 15px")
		$("#top,#nav,.top,#right h3").css("background","#3a599c")
		$(this).siblings().css("background","");
    });
	$("#l2").click(
	function(){
        $(this).css("background","url(images/theme.gif) 18px 15px");
		$(this).siblings().css("background","");
		$("#top,#nav,.top,#right h3").css("background","#d352e2")
    });
	$("#l3").click(
	function(){
        $(this).css("background","url(images/theme.gif) 36px 15px");
		$(this).siblings().css("background","");
		$("#top,#nav,.top,#right h3").css("background","#ea4275")
    });
	$("#l4").click(
	function(){
        $(this).css("background","url(images/theme.gif) 56px 15px");
		$("#top,#nav,.top,#right h3").css("background","#07bfc7")
		$(this).siblings().css("background","");
    });
	$("#l5").click(
	function(){
        $(this).css("background","url(images/theme.gif) 76px 15px");
		$("#top,#nav,.top,#right h3").css("background","#ffa400")
		$(this).siblings().css("background","");
    });	
	$("#d1 p").prepend('<img src="images/treeview-item.gif">')
	   
	  })  

	
	  