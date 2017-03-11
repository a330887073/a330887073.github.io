var len=0;
setInterval(function(){
	if(len===-2000){
		len=0;
	}else{
		len=len-500;
	}
	$("ul").animate({
		"margin-left":len,
	},1000)
},2000)