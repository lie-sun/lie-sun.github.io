/**
 * [$ description]
 * @param  {[type]} select [description]
 * @param  {[type]} ranger [description]
 * @return {[type]}        [description]
 */
function $(select,ranger){
	
	if(typeof select == 'string'){
		ranger=ranger?ranger:document;
		/*ranger = ranger==undefined?document:ranger;*/
		select=select.trim();
		let typeofSelect=select.charAt(0);
		if(typeofSelect == '#'){
			return document.getElementById(select.substr(1)); 
		}else if(typeofSelect == '.'){
			return ranger.getElementsByClassName(select.substr(1));
		}else if(/[a-z][a-z1-6]{0,7}/ig.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}else if(typeof select == 'function'){
		window.onload=function(){
			/*如果判断为函数对象*/
			select();
		}
	}
};
function Html(select,content){
	if(arguments.length==1){
		return select.innerHTML;
	}else if(arguments.length==2){
		select.innerHTML=content;
	}
};
function Text(){

};

/*objArr 传入的是json对象*/
function css(element,objArr){
	for(let i in objArr){
		console.log(i);
		console.log(objArr);
		element.style[i]=objArr[i];
	}
};

/*给元素添加事件*/
// 给元素添加事件
function turnUp(element,event,fn){

};
// 给元素删除事件
function turnDown(element,event){

};


/*定义动画*/
function animations(element,obj,speed){
	console.log(element);
	let animation=setInterval(function(){
		for(let i in obj){
			/*i 是当前的宽度*/
			let Width=parseInt(getComputedStyle(element,null)[i]);

			if(Width>=obj[i]){
				clearInterval(animation);
			}
			// console.log(`${Width+speed}px`);
			element.style[i]=`${Width+speed}px`;
			Width+=speed;
		}
	},60);

};
function animationss(element,Arrobj,speed,fn){

	let animation=setInterval(function(){
		for(let i in Arrobj){
			/*i 是当前的宽度*/
			let Width=parseInt(getComputedStyle(element,null)[i]);

			if(Width>=Arrobj[i]){
				clearInterval(animation);
				setTimeout(function(){
					if(fn){
						fn.call(element);
					}
				},200);
			}
			element.style[i]=`${Width+speed}px`;
			Width+=speed;
		}
	},60);

};





