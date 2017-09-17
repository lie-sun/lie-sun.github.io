window.onload=function(){
	var one=document.getElementById('one');
	var onea=document.getElementById('onea');
	one.onmouseenter=function(){
		onea.style.display='block';
	};
	one.onmouseleave=function(){
		onea.style.display='none';
	};
	var four=document.getElementById('four');
	var shouc=document.getElementsByClassName('shouc')[0];
	four.onmouseenter=function(){
		shouc.style.display='block';
	};
	four.onmouseleave=function(){
		shouc.style.display='none';
	};
	var phone=document.getElementById('phone');
	var ewm=document.getElementsByClassName('ewm')[0];
	phone.onmouseenter=function(){
		ewm.style.display='block';
	};
	phone.onmouseleave=function(){
		ewm.style.display='none';
	};
};
