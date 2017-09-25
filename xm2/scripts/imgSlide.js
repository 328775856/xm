/*新款上市模块横向滚动*/
$(function(){
	$("input").click(function(e) {
        $(this).attr("placeholder","");
    });
	$("#img ul li").first().css("opacity","1").siblings().css("opacity","0");
	var len = $(".prolist_content ul li").length;
	var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
	var none_unit_width = $(".prolist").width(); //获取框架内容的宽度,不带单位
	var $parent = $(".prolist_content"); 
    //向右 按钮
	$(".module_left_right a").first().css({'color':"#fff","background":"#F39"});
	$(".module_left_right a").hover(function(e) {
        $(this).css({'color':"#fff","background":"#F39"}).siblings().css({'color':"#000","background":"#ccc"});
		$("#img ul li").eq($(this).index()).css("opacity","1").siblings().css("opacity","0");
    },
	function(e) {
      //  $(this).css({'color':"#000","background":"#ccc"})
    }).click(function(){ 
		if( !$parent.is(":animated") ){
			var index=$(this).index()
		//	if(){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$parent.animate({ left :"-"+index*none_unit_width}, 800);  //通过改变left值，达到每次换一个版面
				//alert(none_unit_width)
		//	}
		}
	 
   });
$(".prolist_content img").hover(function(){
	$(this).css("opacity","0.5")
	},function(){
	$(this).css("opacity","1")	
		})
});