

/*为你推荐*/

$(function () {
	let commendl = $('.commend-l')[0],
		commendr = $('.commend-r')[0],
		bians = $('.bians')[0],
		UL = $('.commend-bottom ul'),
		num = 0,
		tt;

	/*点击左键按钮事件*/
	$('.commend-l')[0].onclick = () => {
		if (num <= 0) {
			return;
		}
		num--;

		if (num <= 0) {
			$('.commend-l')[0].classList.remove('bians');
		}
		if (num >= 1) {
			$('.commend-r')[0].classList.add('bians');
		}

		for (let i = 0; i < UL.length; i++) {
			UL[num].style.left = -1226 + 'px';

			animate(UL[i], {
				'left': 1226
			})
			animate(UL[num], {
				'left': 0
			});
		}
	}

	/*点击右键按钮事件*/
	$('.commend-r')[0].onclick = () => {
		if (num >= 3) {
			return;
		}
		num++;
		if (num >= 1) {
			$('.commend-l')[0].classList.add('bians');
		}
		if (num >= 3) {
			$('.commend-r')[0].classList.remove('bians');
		}
		for (let i = 0; i < UL.length; i++) {
			UL[num].style.left = 1226 + 'px';
			animate(UL[i], {
				'left': -1226
			});
			animate(UL[num], {
				'left': 0
			});
		}


	}


});
