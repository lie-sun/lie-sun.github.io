$(function () {
	let LIs = $('.nav-float li'),
		UlLi = $('#bogBoxIsPic li'),
		lia = $('.lia'),
		num = 0,
		T;
	/*定义一个动画*/
	function play() {
		for (let i = 0; i < LIs.length; i++) {
			LIs[i].classList.remove('circleradio');
			UlLi[i].classList.remove('view');
		}
		num++;
		if (num >= LIs.length) {
			num = 0;
		}
		if (num <= -1) {
			num = LIs.length - 1;
		}
		LIs[num].classList.add('circleradio');
		UlLi[num].classList.add('view');
	}
	/*定时器轮播显示*/
	T = setInterval(function () {
		play();
	}, 5000);

	/*鼠标放上去显示*/
	let flag = true;
	$(LIs).hover(
		function () {
			if (flag) {
				flag = false;
				for (let i = 0; i < LIs.length; i++) {
					LIs[i].classList.remove('circleradio');
					UlLi[i].classList.remove('view');
				}
				this.classList.add('circleradio');
				UlLi[$(this).index()].classList.add('view');
				setTimeout(() => {
					flag = true;
				}, 80);
			}
		}
	);
	/********商品列表鼠标移入显示时间*********/
	$(lia).hover(function () {
			$('.spam', this)[0].style.display = 'block';
		},
		function () {
			$('.spam', this)[0].style.display = 'none';
		}
	);







});
