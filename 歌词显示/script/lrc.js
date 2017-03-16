$.ajax(
{
	type:"get",
	url:"lrc/赵雷-成都.lrc"
}).done(function(res){
	var ress=res.split("[")
	ress.shift();
	var lrc=[];
	var time=[];
	for(var i=0;i<ress.length;i++){
		var min=ress[i].split("]");
		var se=min[0].split(".");
		var second=se[0].split(":");
		var sum=parseInt(second[0])*60+parseInt(second[1]);
		time.push(sum);
		lrc.push(min[1]);//将歌词存入lrc数组当中
	}
	for(var j=0;j<lrc.length;j++){
		
		var p=$("<h2>");
		p.text(lrc[j]);
		$(".box").append(p);
	}
	
     	var minutes=-1;
	var k=0;
	var top=0;
	console.log(time);
	setInterval(function(){
		console.log(minutes,time[k]);
		minutes++;
		if(minutes==time[k]){
			$("h2").eq(k).css({"color":"red"});
			$("h2").eq(k).siblings().css({"color":"black"})
			k++;
			top-=5;
			$(".box").css({"margin-top":top})
		}
	},1000)
})