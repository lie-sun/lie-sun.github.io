'use strict';
window.onload = function () {
	
	/*购物车鼠标移入事件*/
	var car =document.getElementById('car');
	var containers=document.querySelector('.containers');
	let sv=5;
	car.onmouseenter=()=>{
		sv=Math.abs(sv);
		let cc = setInterval(()=>{
			let Height=parseInt(getComputedStyle(containers,null).height);
			if(Height<=90){
				containers.style.height=Height+sv+'px';
		    }else{
				clearInterval(cc);
			}
		},10);
	}
	car.onmouseleave=()=>{
		sv=-sv;
		let tt = setInterval(()=>{
			let Height=parseInt(getComputedStyle(containers,null).height);
			if(Height>0){
				containers.style.height=Height+sv+'px';
		    }else{
				clearInterval(tt);
			}
		},10);
	}

	let search_text = document.getElementsByClassName('search-text')[0];
	let search_btn = document.getElementsByClassName('search-btn')[0];
	let _float = document.getElementsByClassName('_float')[0];
	let container1 = document.getElementsByClassName('container1')[0];

	search_text.onfocus = function () {
		search_text.style.border = '1px solid #ff6700';
		search_text.style.borderRight = 'none';
		search_btn.style.border = '1px solid #ff6700';
		_float.style.opacity = 0;
		container1.style.display = 'block';
	}
	search_text.onblur = function () {
		search_text.style.border = '1px solid #e0e0e0';
		search_text.style.borderRight = 'none';
		search_btn.style.border = '1px solid #e0e0e0';
		_float.style.opacity = 1;
		container1.style.opacity = 0;
	}

	// 获取圆点列表
	var list = document.getElementsByClassName('list')[0];
	var list_lis = list.getElementsByTagName('li');
	// 获取图片列表
	var bigbox = document.getElementsByClassName('bigbox')[0];
	var imglist = bigbox.getElementsByTagName('li');
	// 定义一个数
	var num = 0;
	let sev, flag = true;

	function fn() {
		num++;
		for (let i = 0; i < list_lis.length; i++) {
			list_lis[i].classList.remove('rabg');
			imglist[i].classList.remove('showw');
		}
		if (num == list_lis.length) {
			num = 0;
		}
		list_lis[num].classList.toggle('rabg');
		imglist[num].classList.toggle('showw');
	}
	sev = setInterval(function () {
		fn();
	}, 3000);




    $('.bigbox').hover(
    	function () {
            clearInterval(sev);
        },
		function () {
            sev = setInterval(function () {
                fn()
            }, 3000);
        }
	)



	for (let j = 0; j < list_lis.length; j++) {
		list_lis[j].onclick = function () {
			clearInterval(sev);
			several(j);
			num = j;
		}
	}


	function several(i) {
		list_lis[i].classList.toggle('rabg');
		imglist[i].classList.toggle('showw');
		list_lis[num].classList.toggle('rabg');
		imglist[num].classList.toggle('showw');
	}





	/*右键点击事件*/
	$('.rightbtn').click(function () {
		if (flag) {
			flag = false;
			clearInterval(sev);
			num++;
			if (num == list_lis.length) {
				num = 0;
			}
			for (let i = 0; i < list_lis.length; i++) {
				list_lis[i].classList.remove('rabg');
				imglist[i].classList.remove('showw');
				list_lis[num].classList.add('rabg');
				imglist[num].classList.add('showw');
			}
			setTimeout(function () {
				flag = true;
			}, 600);
		}

	})
	/*左键点击事件*/
	$('.leftbtn').click(function () {
		if (flag) {
			flag = false;
			clearInterval(sev);
			num--;
			if (num == -1) {
				num = list_lis.length - 1;
			}
			for (let i = 0; i < list_lis.length; i++) {
				list_lis[i].classList.remove('rabg');
				imglist[i].classList.remove('showw');
				list_lis[num].classList.add('rabg');
				imglist[num].classList.add('showw');
			}

			setTimeout(function () {
				flag = true;
			}, 600);
		}

	});


	/*小米明星单品*/
	//获取图片轮播
	let xmbottpm = document.getElementsByClassName('xmbottpm')[0];
	let UL = xmbottpm.getElementsByTagName('ul'); // 2个 

	let rltr;

	let rlflag = true;


	/*自动轮播*/
	/*先调用一次*/
	rltr =setTime();

	$('.ll').click(function () {
		if (rlflag) {
            $(this).toggleClass('bc');
            $('.rr').toggleClass('bc');
            animate(UL[0], {left: -1226});
            animate(UL[1], {left: 0});
            rlflag = false;
        }
        clearInterval(rltr);
        setTime();
    })
	$('.rr').click(function () {


        if (!rlflag) {
            $(this).toggleClass('bc');
            $('.ll').toggleClass('bc');
            animate(UL[1], {left: 1226});
            animate(UL[0], {left: 0});
            rlflag = true;
        }
        clearInterval(rltr);
        setTime();
	})
	/*定义动画*/
	function setTime() {
        setTimeout(function () {
            rltr = setInterval(function () {
                if (rlflag) {
                    $('.ll').removeClass('bc');
                    $('.rr').addClass('bc');
                    animate(UL[0], {left: -1226});
                    animate(UL[1], {left: 0});
                    rlflag = false;

                }else if (!rlflag) {
                    $('.rr').toggleClass('bc');
                    $('.ll').toggleClass('bc');
                    animate(UL[1], {left: 1226});
                    animate(UL[0], {left: 0});
                    rlflag = true;
                }
            }, 5000);
        },0);
    }

	/*js结束*/
}
