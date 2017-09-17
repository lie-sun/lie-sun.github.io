$(function () {
	let flor = $('.slidefloor')[0],
		FLLI = $('li', flor);
	let flag=true;
	window.onscroll = function () {
		/*返回顶部*/
		$(FLLI[8]).click(
			function () {
				animate(document.body, {
					'scrollTop': 0
				}, 500);
			}
		);

		let mlrsTop = $('.mlrs')[0].offsetTop,
			cdkwTop = $('.cdkw')[0].offsetTop,
			jjshTop = $('.jjsh')[0].offsetTop,
			dzacTop = $('.dzac')[0].offsetTop,
			hwcxTop = $('.hwcx')[0].offsetTop,
			qzsgTop = $('.qzsg')[0].offsetTop,
			cnxhTop = $('.cnxh')[0].offsetTop,
			livetelecastTop = $('.live-telecast')[0].offsetTop,
			bodyTop = document.body.scrollTop;
		
		/*如果滚动条高度达到500的时候搜索框出现*/
				if (bodyTop>livetelecastTop-100) {
					if (flag) {
						flag = false;
						animate($('.floatsearch')[0], {
							'top': 0
						}, 500);

					}

				} else {
					if(!flag){
					   flag=true;
						animate($('.floatsearch')[0], {
							'top': -50
						}, 500);
					   }
				}

		
		
		if (bodyTop >= mlrsTop - 100 && bodyTop < cdkwTop - 100) {
			FLLI[1].style.background = '#EB5E8D';
		} else {
			FLLI[1].style.background = 'rgba(0,0,0,0.6)';
		}
		if (bodyTop >= cdkwTop - 100 && bodyTop < jjshTop - 100) {
			FLLI[2].style.background = '#0AA7E9';
		} else {
			FLLI[2].style.background = 'rgba(0,0,0,0.6)';
		}
		if (bodyTop >= jjshTop - 100 && bodyTop < dzacTop - 100) {

			FLLI[3].style.background = '#64C332';
		} else {
			FLLI[3].style.background = 'rgba(0,0,0,0.6)';
		}
		if (bodyTop >= dzacTop - 100 && bodyTop < hwcxTop - 100) {

			FLLI[4].style.background = '#FF4553';
		} else {
			FLLI[4].style.background = 'rgba(0,0,0,0.6)';
		}
		if (bodyTop >= hwcxTop - 100 && bodyTop < qzsgTop - 100) {
			FLLI[5].style.background = '#18C9A9';
		} else {
			FLLI[5].style.background = 'rgba(0,0,0,0.6)';
		}
		if (bodyTop >= qzsgTop - 100 && bodyTop < cnxhTop - 100) {

			FLLI[6].style.background = '#f7a945';
		} else {
			FLLI[6].style.background = 'rgba(0,0,0,0.6)';
		}
		if (bodyTop >= cnxhTop - 100) {
			FLLI[7].style.background = '#000';
		} else {
			FLLI[7].style.background = 'rgba(0,0,0,0.6)';

		}

		if (bodyTop >= livetelecastTop) {
			flor.style.display = 'block';
		}
		if (bodyTop < livetelecastTop) {
			flor.style.display = 'none';
		}

		$(FLLI[1]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': mlrsTop
				}, 500);
			}
		);
		$(FLLI[2]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': cdkwTop
				}, 500);
			}
		);
		$(FLLI[3]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': jjshTop
				}, 500);
			}
		);
		$(FLLI[4]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': dzacTop
				}, 500);
			}
		);
		$(FLLI[5]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': hwcxTop
				}, 500);
			}
		);
		$(FLLI[6]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': qzsgTop
				}, 500);
			}
		);
		$(FLLI[7]).click(
			function () {
				animate(
					document.body,{
					'scrollTop': cnxhTop
				}, 500);
			}
		);


	}
});
