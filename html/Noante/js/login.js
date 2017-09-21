$(function(){
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
		$('.login-btn1').click(function (e) {
			e = e || window.event;
			e.stopPropagation();
			allbg.css({
				'display': 'block'
			});
		})
	})();
});