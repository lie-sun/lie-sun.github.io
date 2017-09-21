$(document).ready(function(){
	/*鼠标移入多次始终执行最后一次*/
	$('.list-ul>li').hover(function(){
		$(this).children('.list-container').stop().slideDown(300);
	},function(){
		$(this).children('.list-container').stop().slideUp(300);
	})
	
	var num=0;
	var time = setInterval(function(){
		$('.banner ul li').css({'opacity':'0'}).eq(num).css({'opacity':'1'});
		num++;
		if(num>5){
		   num=0;
		   }
	},3000)
	
});