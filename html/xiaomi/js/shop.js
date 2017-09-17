$(function(){
	let liil = $('.liil'),
		ulli = $('.ulli'),
		ulli1 = $('.ulli1'),
		oea = $('.oea')[0],
		oea1 = $('.oea')[0],
		a = $('.jdtop a');
	/*商品中家电鼠标移入事件*/
	for(let i =0;i<4;i++){
		/*鼠标移入显示*/
		$(liil[i]).mouseenter(function(){
			for(let j=0;j<ulli.length;j++){
				a[j].classList.remove('oea');
				ulli[j].style.display='none';
			}
			ulli[i].style.display='block';
			a[i].classList.add('oea');
			
		})
	}
	/*商品中智能鼠标移入事件*/
	for(let ii =4;ii<9;ii++){
		$(liil[ii]).mouseenter(function(){
			for(let j=4;j<9;j++){
				a[j].classList.remove('oea');
//				ulli[j].style.display='none';
			}
//			ulli[i].style.display='block';
			a[ii].classList.add('oea');
			
		})
	}
	/*商品中搭配鼠标移入事件*/
	for(let i =9;i<13;i++){
		$(liil[i]).mouseenter(function(){
			for(let j=9;j<13;j++){
				a[j].classList.remove('oea');
//				ulli[j].style.display='none';
			}
//			ulli[i].style.display='block';
			a[i].classList.add('oea');
			
		})
	}
	/*商品中配件鼠标移入事件*/
	for(let i =13;i<17;i++){
		$(liil[i]).mouseenter(function(){
			for(let j=13;j<17;j++){
				a[j].classList.remove('oea');
//				ulli[j].style.display='none';
			}
//			ulli[i].style.display='block';
			a[i].classList.add('oea');
			
		})
	}
	/*商品中周边鼠标移入事件*/
	for(let i =17;i<22;i++){
		$(liil[i]).mouseenter(function(){
			for(let j=17;j<22;j++){
				a[j].classList.remove('oea');
//				ulli[j].style.display='none';
			}
//			ulli[i].style.display='block';
			a[i].classList.add('oea');
			
		})
	}
});