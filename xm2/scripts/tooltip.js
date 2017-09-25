// JavaScript Document
$(document).ready(function(e) {   
			var x =15;
            var y = 20;
            $("a.tooltip").mouseover(function(e){
               //显示title 
               this.myTitle = this.title;
               //清空title属性的值
               this.title="";
               var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";//创建div元素
               $("body").append(tooltip);//将它追加到文档中
               $("#tooltip").css({
				   "position":"absolute",
			        "top":(e.pageY+y)+"px",
                    "left":(e.pageX-x)+"px",
					"background":"#D0B3BB",
					//"width":"60px",
				//	"textDecoration":"none",
               }).show("fast");
			   //alert()//设置x坐标和y坐标，并且显示
			   $("a.tooltip").mouseout(function(){
                //隐藏title
                this.title = this.myTitle;
                $("#tooltip").remove();//移除
				
            })
			})
			});