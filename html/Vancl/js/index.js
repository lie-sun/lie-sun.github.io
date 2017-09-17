/*
* @Author: Administrator
* @Date:   2017-08-13 16:30:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-15 15:20:52
*/

window.onload=function(){

	var bimg=document.getElementsByClassName('bimg')[0];

	var piclis=bimg.getElementsByTagName('li');
	var yu=document.getElementsByClassName('yu')[0];
	var listlis=yu.getElementsByTagName('li');
	var stop=document.getElementById('stop');
	var listop=document.getElementById('listop');
	var Lbtn=document.getElementsByClassName('l')[0];
	var Rbtn=document.getElementsByClassName('r')[0];
	let num=0;
	let an;

	

	function play(){
		for(let i=0;i<piclis.length;i++){
			piclis[i].classList.remove('show');
			listlis[i].classList.remove('re');
		}
		num++;
		if(num>=piclis.length){
			num=0;
		}
		if(num<=-1){
			num=piclis.length-1;
		}
		piclis[num].classList.toggle('show');
		listlis[num].classList.toggle('re');
	};
	/*定义一个计时器，让图片不停的轮播*/
	an = setInterval(function(){
			play();
		},4000);
	stop.addEventListener('mouseenter', function(){
		clearInterval(an);
	}, false);
	stop.addEventListener('mouseleave', function(){
		an = setInterval(function(){
			play();
		},4000);
	}, false);

	/*点击左边按钮*/

	Lbtn.onclick=function(){
		clearInterval(an);
		num--;
		if(num>=piclis.length){
			num=0;
		}
		if(num<=-1){
			num=piclis.length-1;
		}
		for(let i=0;i<piclis.length;i++){
			piclis[i].classList.remove('show');
			listlis[i].classList.remove('re');
		}
		piclis[num].classList.toggle('show');
		listlis[num].classList.toggle('re');
	};
	/*点击右边按钮*/

	Rbtn.onclick=function(){
		clearInterval(an);
		num++;
		if(num>=piclis.length){
			num=0;
		}
		if(num<=-1){
			num=piclis.length-1;
		}
		for(let i=0;i<piclis.length;i++){
			piclis[i].classList.remove('show');
			listlis[i].classList.remove('re');
		}
		piclis[num].classList.toggle('show');
		listlis[num].classList.toggle('re');
	}
	/*鼠标放到轮播点上的时候轮播停止*/
	listop.onmouseenter=function(){
		clearInterval(an);
	}
	listop.onmouseleave=function(){
		an = setInterval(function(){
			play();
		},4000);
	};
	
	/*鼠标移到哪个点哪个点为红色，其他的点为白色*/
	function change(){
		for(let ii=0;ii<piclis.length;ii++){
			listlis[ii].onmouseenter=function(){
				for(let j=0;j<piclis.length;j++){
					piclis[j].classList.remove('show');
					listlis[j].classList.remove('re');
				}
				piclis[ii].classList.toggle('show');
				listlis[ii].classList.toggle('re');
				num=ii;
			}
		}
	};

	change();

	/*下拉列表*/
	
	var loLi=document.querySelectorAll('.loli');
	for(let i = 0; i< loLi.length;i++){
		loLi[i].onmouseenter=function(){
			let colslist=this.getElementsByClassName('colslist')[0];
		}
	}


	
	/*  js 结束   */
}