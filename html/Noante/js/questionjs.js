/*1、包括‘一些问题’的点击显示隐藏
  2、‘我们的服务’点击事件，显示和隐藏
*/
$(document).ready(function(){
	/*一些问题*/
	$('.question-list').click(function(){
		/*清除其他列表的样式*/
		$('.question-list').not($('.question-list').eq($(this).index())).removeClass('actives');
		/*给点击的这个元素添加背景类*/
		$(this).addClass('actives');
		/*下面内容不显示*/
		$('.question-list').not($('.question-list').eq($(this).index())).next().removeClass('shows');
		/*点击的列表下面的内容显示*/
		$(this).next().addClass('shows');
	});
	
	/*我们的服务*/
	$('.Li-left li').click(function(){
		$('.Li-left li').not($('.Li-left li').eq($(this).index)).removeClass('actives');
		$(this).addClass('actives');
		let n=$(this).index();
		for(let i=0;i<$('.lists').length;i++){
			if(i>n){
			   $('.lists')[i].style.top='100%';
			}
			if(i<=n){
			   $('.lists')[i].style.top='0';
			}
		}
	});
});
















