var cookie;//存入cookie
$(".button").click(function(){
var str=$(".str").val();
if($.cookie(String(cookie))){
$.cookie(cookie,$.cookie(String(cookie))+"*"+str);
}else{
$.cookie(cookie,str);	
}


//for (var j = cookie.length - 1; j >= 0; j--) {
	console.log($.cookie(String(cookie)))
//}
})
$(".str").focus(function(){
	//alert(123);
	if($.cookie(String(cookie))){
	var arr=$.cookie(String(cookie)).split("*");
	$(".box").empty();
	for (var i = arr.length - 1; i >= 0; i--) {
		var li=$("<li>");
		li.text(arr[i]);
		$(".box").append(li);
	}
	var li=$("<li class='clear'>");
		li.text("清除所有搜索记录");
		$(".box").append(li);
	}
})

	$('.box').delegate('.clear','click',function(){
		$.cookie(String(cookie),"")
		window.location.reload();
		})


