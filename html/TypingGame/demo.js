window.onload = function () {
	function Game() {
		this.name = '打字游戏',
		/*定义下落速度*/
		this.speed = 5;
		/*定义页面中出现字母的长度*/
		this.length = 5;
		/*用来存放页面中的数组*/
		this.newArr = [];
		/*创建数组存放位置*/
		this.positionArr = [];
		/*用来存储时间函数*/
//		this.t = '';
		/*创建一个二维数组*/
		this.charArr = [
                ['A', './img/A.png'],
                ['B', './img/B.png'],
                ['C', './img/C.png'],
                ['D', './img/D.png'],
                ['E', './img/E.png'],
                ['F', './img/F.png'],
                ['G', './img/G.png'],
                ['H', './img/H.png'],
                ['I', './img/I.png'],
                ['J', './img/J.png'],
                ['K', './img/K.png'],
                ['L', './img/L.png'],
                ['M', './img/M.png'],
                ['N', './img/N.png'],
                ['O', './img/O.png'],
                ['P', './img/P.png'],
                ['Q', './img/Q.png'],
                ['R', './img/R.png'],
                ['S', './img/S.png'],
                ['T', './img/T.png'],
                ['U', './img/U.png'],
                ['V', './img/V.png'],
                ['W', './img/W.png'],
                ['X', './img/X.png'],
                ['Y', './img/Y.png'],
                ['Z', './img/Z.png']];
		/*得分*/
		this.grade = 0;
		this.lifes = 10;

	}
	/*开始游戏*/
	Game.prototype = {
		start: function () {
			this.getCharArr(this.length);
			this.drog();
			this.keydown();
		},
		/*创建多个字母*/
		getCharArr: function (length) {
			for (let i = 0; i < length; i++) {
				this.getChar();
			}
		},
		/*产生一个字母*/

		getChar: function () {
			/*在页面中产生div，并将其添加到body中*/
			let divs = document.createElement('div');
			/*产生一个下标*/
			let num;
			/*定义一个左边距*/
			let newlefts;
			/*产生一个上边距*/
			let newtops = Math.random() * 100 + 10;
			/*产生字母*/
			do {
				num = Math.floor(Math.random() * this.charArr.length);
			} while (this.charNoRepeat(num));
			/*位置拒重*/
			do {
				newlefts = Math.random() * (innerWidth - 200) + 100;
			} while (this.positionNoRepeat(newlefts));
			divs.classList.add('dcircle');
			divs.style.cssText = `
                top:${newtops}px;
                left:${newlefts}px;
                background-image:url(${this.charArr[num][1]});
            `;
			divs.innerText = this.charArr[num][0];
			this.newArr.push(divs);
			this.positionArr.push(newlefts);
			/*报错读不到是因为script放到了前面页面没有加载*/
			document.body.appendChild(divs);

		},
		/*字母查重*/
		charNoRepeat: function (num) {
			return this.newArr.some(val => val.innerText == this.charArr[num][0]);
		},
		/*位置查重*/
		positionNoRepeat: function (newlefts) {
			return this.positionArr.some(val => Math.abs(val - newlefts) < 50);
		},
		/*字母往下掉*/
		drog: function () {
			let that = this;
			let t = setInterval(function () {
				for (let i = 0; i < that.newArr.length; i++) {
					let tops = that.newArr[i].offsetTop;
					that.newArr[i].style.top = tops + that.speed + 'px';
					let lifes = document.getElementById('lifes');
					if (tops > 400) {
						document.body.removeChild(that.newArr[i]);
						that.lifes--;
						that.newArr.splice(i, 1);
						that.positionArr.splice(i, 1);
						/*当掉下去的时候生命值减一*/
						if (that.lifes < 1) {
							clearInterval(t);
						}
						lifes.innerText = that.lifes;
					}
				}
				if (that.newArr.length < that.length) {
					that.getChar();
				}
			}, 120);
			if (this.speed >= 8) {
				if (confirm('恭喜你通关了!是否重来一次?')) {
					that.newstart();
				}
				return;
			}
		},
		/*按下键盘对应字母消失*/
		keydown: function () {
			let that = this;
			document.onkeydown = function (e) {
				let keyCode = String.fromCharCode(e.keyCode);
				for (let i = 0; i < that.newArr.length; i++) {
					if (keyCode == that.newArr[i].innerText) {
						document.body.removeChild(that.newArr[i]);
						/*得分加一*/
						that.grade++;
						let grade = document.getElementById('score');
						grade.innerText = that.grade;
						that.newArr.splice(i, 1);
						that.positionArr.splice(i, 1);
						if (that.grade >10) {
							that.next();
						}

					}
				}

			}
		},
		/*进入下一关*/
		next: function () {
			let alldiv = document.querySelectorAll('.dcircle');
			alldiv.forEach(ele => {
				document.body.removeChild(ele);
			});
			this.length++;
			this.speed++;
			this.lifes = this.lifes;
			/*用来存放页面中的数组*/
			this.newArr = [];
			/*创建数组存放位置*/
			this.positionArr = [];
			/*用来存储时间函数*/
//			this.t = this.t;
			this.grade = 0;
			this.start();
		},
		/*重新开始*/
		newstart: function () {
			let alldiv = document.querySelectorAll('.dcircle');
			alldiv.forEach(ele => {
				document.body.removeChild(ele);
			});
			this.length = this.length;
			this.speed = this.speed;
			this.lifes = this.lifes;
			/*用来存放页面中的数组*/
			this.newArr = [];
			/*创建数组存放位置*/
			this.positionArr = [];
			/*用来存储时间函数*/
//			this.t = this.t;
			this.grade = this.grade;
			this.start();
		}
	}


	let game = new Game();
	game.start();
	newStart.onclick = function () {
		game.newstart();
	}
}
