$(document).ready(function(){
	$('.list-ul>li').hover(function(){
		$(this).children('.list-container').slideDown(300);
	},function(){
		$(this).children('.list-container').slideUp(300);
	})
});