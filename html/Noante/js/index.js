window.onload = function () {
	/*页面加载玩之后开始执行*/

	/*点击搜索框是弹出与消失*/
	/*搜索框出现*/
	var container = $('.container');
	var Search = $('.Search');
	$('.icon-sousuo').click(function () {
		//		searchcontainer.toggleClass('searchShow');
		Search.css({
			'display': 'block'
		});
		container.animate({
			'width': '100%',
			'height': '84px',
		}, 400);
	});
	/*搜索框退出*/
	$('.icon-error').click(function () {
		Search.css({
			'display': 'none'
		});
		container.animate({
			'width': '0',
			'height': '0',
			'border': 'none'
		}, 300);
	});
	/***************************************/

	/*
	登录框弹入弹出的问题
	 */
	(function login() {
		// 获取登录遮罩按钮
		var allbg = $('.allbg');
		$('.allbg').on('click', function (e) {
			e = e || window.event;
			$(this).css({
				"display": 'none'
			});
			e.stopPropagation(); //阻止事件冒泡
		});
		$('.login').click(function (e) {
			e = e || window.event;
			allbg.css({
				'display': 'block'
			});
			e.stopPropagation();
		})
		/*登录关闭按钮功能*/
		$('#login-top-right').on('click', function (e) {
			e = e || window.event;
			allbg.css({
				'display': 'none'
			});
			e.stopPropagation();
		})
		/*登录框点击不变化*/
		$('.login-btn').click(function (e) {
			e = e || window.event;
			e.stopPropagation();
			allbg.css({
				'display': 'block'
			});
		})
	})();
	/**************************************/

	/*轮播条*/
	var speed = $('#speed'),
	    Wid_speed = $('#wid-speed'),
	    smallwidth = parseInt(speed.width()),
	    bigWidth = parseInt(Wid_speed.width()),
	    several, several2, span_speed = 2, //定义运行速度
	    SPeed = +(3 * parseInt(bigWidth)),
	    num = 0,
	/*定义一个开关，用来调整点击切换速度*/
	    flag = true,
	/*轮播图*/
		bannerLi = $('.banner-li'),
	/*获取轮播点*/
	 	list_lis = $('.list-li');
	/*滚动条开始滚动*/
	function Speed() {
		smallwidth = parseInt(speed.width());
		bigWidth = parseInt(Wid_speed.width());
		if (smallwidth >= bigWidth - 1) {
			smallwidth = 0; //改变滚动条的长度
			fn();
		}
		// 检测到点击之后将长度变为零
		$('.left-btn').click(function () {
			if (flag) {
				flag = false;

				(function fn1() {
					num--;
					if (num >= bannerLi.length) {
						num = 0;
					}
					if (num <= -1) {
						num = bannerLi.length - 1;
					}
					for (let i = 0; i < bannerLi.length; i++) {
						bannerLi.eq(i).removeClass('show');
						list_lis.eq(i).removeClass('rgba');
					}
					bannerLi.eq(num).toggleClass('show');
					list_lis.eq(num).toggleClass('rgba');
				})();
				//fn1();
				/*清除滚动条定时器重新开始*/
				gdtlb();
			}
		});
		/*右侧按钮切换*/
		$('.right-btn').click(function () {
			if (flag) {
				flag = false;
				fn();
				gdtlb();
			}
		})
		speed[0].style.width = smallwidth + span_speed + 'px';
	}

	function Scorrl() {
		several2 = setInterval(function () {
			bigWidth = parseInt(Wid_speed.width());
			Speed();
		}, 12);
	}

	/* 轮播  图片和轮播点同时进行切换*/
	function fn() {
		num++;
		if (num >= bannerLi.length) {
			num = 0;
		}
		if (num <= -1) {
			num = bannerLi.length - 1;
		}
		for (let i = 0; i < bannerLi.length; i++) {
			bannerLi.eq(i).removeClass('show');
			list_lis.eq(i).removeClass('rgba');
		}
		bannerLi.eq(num).toggleClass('show');
		list_lis.eq(num).toggleClass('rgba');
	}
	Scorrl();
	/*轮播点的点击切换*/
		list_lis.click(function () {
			let j=$(this).index();
			if (flag) {
				flag = false;
				window.event.stopPropagation();
				gdtlb();
				list_lis.removeClass('rgba');
				bannerLi.removeClass('show');
				list_lis.eq(j).addClass('rgba');
				bannerLi.eq(j).addClass('show');
				num = j;
			}
		})

	/*滚动条动画*/
	function gdtlb() {
		/*清除滚动条定时器重新开始*/
		clearInterval(several2);
		several2 = setInterval(function () {
			bigWidth = parseInt(Wid_speed.width());
			Speed();
		}, 12);
		speed[0].style.width = 0;
		setTimeout(function () {
			flag = true;
		}, 800)
	}




	/* JS底部*/
}
