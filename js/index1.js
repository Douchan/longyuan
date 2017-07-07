//語言控制

//獲取元素
//  var language=document.getElementById("language");
//  var en=language.children[1];
//	var circle_shadow=document.getElementById("circle_shadow");
//	var circle=document.getElementById("circle");
//	
//	language.onmouseover=languageHandle;
//	language.onmouseout=languageHandle2;
//
//
//	function languageHandle(){
//	//shadow 旋轉的角度
//	circle_shadow.style.display="block";
//	circle.children[0].children[0].style.display="none"
//	en.style.color="#20c4f";
//	
//}
////function languageHandle2(){
//	//shadow 旋轉的角度
//	circle_shadow.style.display="none";
//	en.style.color="#fff";
//	
//}
//設置輪播圖背景
// var imagelist=document.getElementById("imglist");
// var lis=imagelist.children;
//
// for(var i=0;i<lis.length;i++){
// 	lis[i].style.backgroundImage="url(images/banner/banner_st01_one.jpg)"
//// 	lis[i].style.backgroundImage="url(images/banner/banner_st0"+(i+1)+"_one.jpg)"
// 	
// }
// 
 //设置轮播图特效的js
 var flag=0;
 $(function(){
 	$('#myCarousel').on('slide.bs.carousel', function () {
 		if(flag>3){
 			flag=0;
 		}
 		console.log($("img[data-index='"+flag+"']"));
 		
 		
 		//先定位并且获取元素，进场前的动画，离场的动画
 		//$(".item,.active").children[1](".carousel-caption").css({"transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
  // , "transition": "all 0.7s ease-in-out"})
 		
 		
 		
      $("img[data-index='"+flag+"']").css({
            "transition-property": "all",
            "transition-duration": "2s",
            "transition-timing-function": "ease-in-out",
            "transform":"scale3d(0.7,0.7,0.7)"
//         	"width":'300px',
//         	"height":'100px'
////          transform: "translate3d(272px, 0px, 0px) scale3d(1, 1, 1)"
				//"transform": "scale(0.8,0.9)"


      });
      
      flag++;
      
     
     //console.log(this);
    });
 })
 
////控制新闻模块
//var news=document.getElementsByClassName("news");
//console.log(news)
//for (var i=0;i<news.length;i++){
//	
//	news[i].onmouseover=onMouseHandle;
//}
//
//function onMouseHandle(){
//	
//		//news.style.boxShadow='1px 5px 10px red';
//	console.log("dianjia")
//		
//}
//$(function(){
////	 $(".news").hover(function () {
////              $(this).css("z-index",1).css("box-shadow","0px 0px 4px 3px #fff");
////          },function () {
////              $(this)..css("z-index",0).css("box-shadow","");
////          });
////
////	},)
//})
////控制新闻模块
//
$(function(){
    $(".news").hover(function(){
        $(this).css({width:302,height:250,top:"-10px",left:0,"z-index":1,"box-shadow":"0 0 40px 3px #aaa",  " margin":"0 25px 15px 0","padding":0})

    },function(){
        $(this).css({width:302,height:250,top:0,left:0,"z-index":0,"box-shadow":"","margin":"0 10px 0px 150","padding":"0 15px 0"})
    })
});



