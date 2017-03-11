$("#tel").focus(function(){
	$("#check").text("请输入手机号码")
}).blur(function(){
	
	if($("#tel").val()===""){
		$("#check").text("")
	}else{
		if(!(/^1(3|4|5|7|8)\d{9}$/).test($("#tel").val()))
		{	
	  		$("#check").text("手机号码不正确");
	  		$("#check").css({"color":"red"})
		}else{
			$("#check").text("手机号验证通过");
	  		$("#check").css({"color":"green"})
		}
	}
})