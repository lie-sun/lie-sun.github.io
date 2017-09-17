/*
	1、小米头部列表那块儿鼠标移入出现 鼠标移出消失
*/
$(function(){
	let UA = $('.nav-center .ua'),
		areali=$('.areali'),
		libottom=$('.libottom')[0],
		UL=$('.nav-center ul')[0];
	UL.addEventListener('mouseenter',()=>{
		libottom.style.height=240+'px';
	},false);
	UL.addEventListener('mouseleave',()=>{
		libottom.style.height=0+'px';
	},false);

	for(let i=0;i<areali.length;i++){
		areali[i].addEventListener('mouseenter',function(){
			areali[i].children[1].style.display='block';
		},true);
		areali[i].addEventListener('mouseleave',function(){
			areali[i].children[1].style.display='none';
		},true);
	}

});

/*给四部分轮播定义一个函数，每个调用就可以*/

/**
1、鼠标移入调用这个函数
2、鼠标移入之后获取该元素内的左右按钮
3、在获取轮播的li
4、在获取下面的轮播点
*/

function slider(obj,num=0){
	$(function(){
		let Obj = $(obj),
			Btnl=$('.btn-l',Obj)[0],
			Btnr=$('.btn-r',Obj)[0],
			Con=$('.con',Obj),
			Bgg=$('.bgg')[0],
			LList=$('.Llist',Obj),
			cu=$('.cu')[0];
			
		$(Btnl).click(function(){
			if(num<=0){
			   return ;
			}
			num--;
			if (num <= 0) {
				$('.btn-l')[0].classList.remove('cu');
			}
			if (num >= 1) {
				$('.btn-r')[0].classList.add('cu');
			}
			
			for (let i = 0; i < Con.length; i++) {
				Con[num].style.left = -296 + 'px';

				animate(Con[num+1], {
					'left': 296
				})
				animate(Con[num], {
					'left': 0
				});
			}
		});	
		
		$(Btnr).click(function(){
			if (num >= Con.length-1) {
				return;
			}
			num++;
			if (num >= 1) {
				$('.btn-l')[0].classList.add('cu');
			}
			if (num >= Con.length-1) {
				$('.btn-r')[0].classList.remove('cu');
			}
			for (let i = 0; i < Con.length; i++) {
				Con[num].style.left = 296 + 'px';
				animate(Con[num-1], {
					'left': -296
				});
				animate(Con[num], {
					'left': 0
				});
				/*轮播点改变样式*/
				LList[i].classList.remove('Bgg');
				LList[num].classList.add('Bgg');
				
			}
		});
		
	});
	
	
}

/*鼠标移入之后调用这个函数，点击实现轮播*/
$(function(){
	$('.ul1').mouseenter(
	function(){
		slider('.ul1',num=0);
	});
	$('.ul2').mouseenter(
	function(){
		slider('.ul2',num=0);
	});
	$('.ul3').mouseenter(
	function(){
		slider('.ul3',num=0);
	});
	$('.ul4').mouseenter(
	function(){
		slider('.ul4',num=0);
	});

})































