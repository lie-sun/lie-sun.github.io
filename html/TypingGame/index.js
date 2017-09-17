//属性

//那些字符	个数	速度	得分	关卡	生命	减分
//保存页面中的元素	this.elements	时间函数嵌套循环	
//this.elements[i].offsetTop
//方法
//开始	消除	产生	下一关	重新开始
//注意：this的指向
function Game () {
	//能够产生的字符
	this.charSheet = [
	['Q','img/q.png'],
	['W','img/w.png'],
	['E','img/e.png'],
	['R','img/r.png'],
	['T','img/t.png'],
	['Y','img/y.png'],
	['U','img/u.png'],
	['I','img/i.png'],
	['O','img/0.png'],
	['P','img/p.png'],
	['A','img/a.png'],
	['S','img/s.png'],
	['D','img/d.png'],
	['F','img/f.png'],
	['G','img/g.png'],
	['H','img/h.png'],
	['J','img/j.png'],
	['K','img/k.png'],
	['L','img/l.png'],
	['Z','img/z.png'],
	['X','img/x.png'],
	['C','img/c.png'],
	['V','img/v.png'],
	['B','img/b.png'],
	['N','img/n.png'],
	['M','img/m.png']
	];
	//出现的个数
	this.length = 5;
	//把页面中的元素存在数组里面
	this.elements = [];
	this.speed = Math.random()*10+5;
	this.grade = 0;
	this.gradeObj = document.querySelector('span');//错误：获取错误
	this.lever = 10;
	//存页面中所有元素的位置
	this.positions = [];

	
	
	}
Game.prototype = {
	start:function(){
		this.getchars(this.length);//错误：前面要加this，调用方法
		this.slump();
		this.keydown();
	},
	//产生多个字符
	getchars:function(length){
		//出现
		for (let i = 0;i<length;i++) {
			this.getchar();
		}
	},
	//产生一个的字符
	getchar:function(){
		//this.charSheet[num]
		let num;
		//创建节点
		let divs = document.createElement('div');
		//左右各200个距离
		let lefts;
		let tops = Math.random()*100;
		//去重	do while
		do{
			//先执行一次
			num = Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkRepeat(num))
		//去重叠	do while
		
		do{
			//先执行一次
			lefts = (innerWidth-400)*Math.random()+200;
		}while(this.checkPosition(lefts))
		
		divs.classList.add('char');
		divs.style.cssText = `
			left:${lefts}px;top:${tops}px;
			background-image:url(${this.charSheet[num][1]});
		`;
		document.body.appendChild(divs);
		//把产生的字符给了div
		divs.innerText = this.charSheet[num][0];//错误
		//把页面中的元素插入到数组中		push
		this.elements.push(divs);

	},
	checkRepeat:function(num){
		//当前的字母和页面中的内容比
		//some
		return this.elements.some(value=>value.innerText == this.charSheet[num][0])
	},
	checkPosition:function(lefts){
		//当前的字母的位置和页面中的内容的位置做差，绝对值小于50
		//some
		return this.positions.some(function(value){
			return Math.abs(value-lefts)<50;
		});
	},
	//下落
	slump:function(){
		//时间函数，用箭头函数写的时候this就是指向它的上一级，不需要用that转换
		let that = this;
		//当做对象的属性
		this.t=setInterval(function(){
			//先循环,判断当下落到某一高度时，删除字符，当数组的长度小于它原来的长度时，添加字符
			for (let i= 0; i<that.elements.length;i++) {//报错：that.length永远是5个，
				//获取字符的高度
				let tops = that.elements[i].offsetTop;
				//下落，在变化之前
				that.elements[i].style.top = `${tops+that.speed}px`;//报错：先确定再判断位置
				//判断当下落到某一高度时，删除字符
				if(tops>=500){
					//splice删除数组元素
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.positions.splice(i,1);
				}
				//先判断再操作，把符合条件的删除了，再操作的时候操作的是它的下一个，所以就会闪
			}
			if (that.elements.length<that.length) {
				that.getchar();
			}
		},300)
		
	},
	keydown:function(){
		let that= this;
		document.onkeydown = function(e){
			// console.log(str.charCodeAt(1));//返回指定位置的字符所对应的unicode编码
      		// console.log(String.fromCharCode(98));//返回unicode编码所对应的指定位置的字符,用string调用，是构造函数的方法
      		let char = String.fromCharCode(e.keyCode);
      		for (let i = 0;i<that.elements.length;i++) {
      			//判断当char的内容和按下的内容一致时，删除字符
				if (char == that.elements[i].innerText) {
					that.grade++;
					that.gradeObj.innerText = that.grade;
					document.body.removeChild(that.elements[i]);
					that.positions.splice(i,1);
					that.elements.splice(i,1);
					if (that.grade == that.lever) {
						that.next();
					}
				}
			}
		}
	},
	next:function(){
		console.log(this)
		clearInterval(this.t);
		for (let i=0;i<this.elements.length;i++) {
			document.body.removeChild(this.elements[i])
		}
		this.elements = [];
		this.positions = [];
		
		
		this.length++;
		this.lever+=10;
		this.start();
	}
}
