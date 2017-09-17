
$(function () {

	/*获取轮播点*/

	let Banner = $('.Banner')[0],/*获取banner框大小  可以不用获取*/
        bigimg = $('.bigimg')[0],//获取ul标签
	    t,//设置定时器用于轮播
	    next = 0,now = 0,
	    smli = $('.smli'),
	    Width = smli[0].offsetWidth,
	    dashnav=$('.dashnav')[0],
	    lis=$('li',dashnav),
	    paddleft=$('.padd-left')[0],
	    paddright=$('.padd-right')[0],
	    flag=true;

	t = setInterval(function () {
		move();
	}, 3000);

	function move() {
		next++;
		if (next == smli.length) {
			next = 0;
		}
		smli[next].style.left = `${Width}px`;
		animate(smli[now], {left: -Width});
		animate(smli[next], {left: 0});
		lis[now].classList.toggle('dabg');
		lis[next].classList.toggle('dabg');
		now = next;
		setTimeout(function(){
			flag=true;
		},600);
	}
	function back() {
		next--;
		if (next == -1) {
			next = smli.length-1;
		}
		smli[next].style.left = `${-Width}px`;
		animate(smli[now], {left: Width});
		animate(smli[next], {left: 0});
		lis[now].classList.toggle('dabg');
		lis[next].classList.toggle('dabg');
		now = next;
		setTimeout(function(){
			flag=true;
		}, 600);
	}

	paddleft.onclick=function(){
		clearInterval(t);
		if(flag){
			flag=false;
			move();
		}
	}
	paddright.onclick=function(){
		clearInterval(t);
		if(flag){
			flag=false;
			back();
		}
	}
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			clearInterval(t);
			if(i > now){
				smli[i].style.left=`${Width}px`;
				animate(smli[i], {left:0});
				animate(smli[now], {left:-Width});
			}else if(i < now){
				smli[i].style.left=`${-Width}px`;
				animate(smli[i], {left:0});
				animate(smli[now], {left:Width});
			}
				lis[i].classList.toggle('dabg');
				lis[now].classList.toggle('dabg');
				now = next = i;
			}

		}
	



});
