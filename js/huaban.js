window.onload = function () {
	let bigbox = document.querySelector('.canvas');
	let canvas = document.querySelector('canvas');
	let draw = canvas.getContext('2d');
	/*获取线形状*/
	let pencilLines = document.querySelector('#pencilLine'); //铅笔
	let straightLines = document.querySelector('#straightLine'); //实线
	let dasheds = document.querySelector('#dashed'); //虚线
	let erasers = document.querySelector('#eraser'); //橡皮
	let triangles = document.querySelector('#triangle'); //三角形
	let rectangles = document.querySelector('#rectangle'); //四边形
	let circles = document.querySelector('#circle'); //圆
	let rects = document.querySelector('#rect'); //bg四边形
	let clear = document.querySelector('#clear');
	/*定义历史记录*/
	let data = [];
	/*反撤销数组*/
	let popdata = [];
	//	draw.fillStyle='white';
	//	draw.fillRect(0,0,canvas.width,canvas.height);
	/*获取鼠标坐标*/
	canvas.onmouseenter = function () {
		canvas.onmousemove = function (e) {
			X.innerText = e.offsetX + ',';
			Y.innerText = e.offsetY + '像素';
		}
	}
	canvas.onmouseleave = function () {
		X.innerText = '';
		Y.innerText = '';
	}
	/*添加文字*/
	font.onclick = function () {
		checkbg();
		Font();
		this.classList.add('active');
	}
	/*铅笔*/
	pencilLines.onclick = function () {
		checkbg();
		pencilLine();
		this.classList.add('active');
	}
	/*直线*/
	straightLines.onclick = function () {
		checkbg();
		straightLine();
		this.classList.add('active');
	}
	/*虚线*/
	dasheds.onclick = function () {
		checkbg();
		dashed();
		this.classList.add('active');
	}
	/*三角形*/
	rightriangle.onclick = function () {
		checkbg();
		triangle();
		this.classList.add('active');
	}
	/*等边三角形*/
	triangles.onclick = function () {
		checkbg();
		NGon(3);
		this.classList.add('active');
	}
	/*四边形*/
	rectangles.onclick = function () {
		checkbg();
		rectangle();
		this.classList.add('active');
	}
	/*正五边形*/
	rightpentagon.onclick = function () {
		checkbg();
		NGon(5);
		this.classList.add('active');
	}
	/*圆*/
	circles.onclick = function () {
		checkbg();
		circle();
		this.classList.add('active');
	}
	/*实心五角星*/
	fiveriken.onclick = function () {
		checkbg();
		bgdihedral(5);
		this.classList.add('active');
	}
	/*五角星*/
	fivestar.onclick = function () {
		checkbg();
		dihedral(5);
		this.classList.add('active');
	}
	/*六角形*/
	sixstar.onclick = function () {
		checkbg();
		dihedral(6);
		this.classList.add('active');
	}
	/*bg四边形*/
	rects.onclick = function () {
		checkbg();
		rect();
		this.classList.add('active');
	}
	/*五边形*/

	/*bg五边形*/
	pentagon.onclick = function () {
		checkbg();
		bgNGon(5);
		this.classList.add('active');
	}

	/*六边形*/
	hexagram.onclick = function () {
		checkbg();
		NGon(6);
		this.classList.add('active');
	}
	/*bg六边形*/
	hexagon.onclick = function () {
		checkbg();
		bgNGon(6);
		this.classList.add('active');
	}
	/*四角形*/
	shuriken.onclick = function () {
		checkbg();
		bgdihedral(4);
		this.classList.add('active');
	}
	/*bg三边形*/
	righttriangle.onclick = function () {
		checkbg();
		bgNGon(3);
		this.classList.add('active');
	}
	/*bg圆*/
	bgcircle.onclick = function () {
		checkbg();
		draw.fillStyle = "#ff6700";
		bgscircle();
		this.classList.add('active');
	}
	/*橡皮擦*/
	erasers.onclick = function () {
		checkbg();
		eraser();
		this.classList.add('active');
	}
	/*选择*/
	check.onclick = function () {
		checkbg();
		Clip();
		this.classList.add('active');
	}
	/*撤销*/
	cancel.onclick = function () {
		Cancel();
	}
	/*反撤销*/
	theundo.onclick = function () {
		Theundo();
	}
	/*清除画板内容*/
	clear.onclick = function () {
		Clear();
	}

	/***********背景颜色的清除与添加************************/
	/*选中背景颜色*/
	function checkbg() {
		/*清除所有li背景颜色*/
		let lists = document.querySelectorAll('li');
		for (let i = 0; i < lists.length; i++) {
			lists[i].classList.remove('active');
		}
	}
	/*清除li背景颜色 及选择线宽和颜色的选取*/
	function clearbg() {
		/*边颜色的选择*/
		draw.strokeStyle = inputbtn.value;
		/*填充颜色的选择*/
		draw.fillStyle = inputbtn.value;
		/*线宽的选择*/
		draw.lineWidth = selects.options[selects.selectedIndex].value;
	}


	/**********函数方法的封装****************/
	/*默认调用铅笔工具gk,*/
	pencilLine();

	let save = document.querySelector('.icon-msnui-save-bold');
	save.onclick = function () {
		this.href = canvas.toDataURL('image/png');
		this.download = 'download.png';
	}

	/*添加文字*/
	function Font() {

		canvas.onmousemove = function (e) {
			X.innerText = e.offsetX + ',';
			Y.innerText = e.offsetY + '像素';
		}

		canvas.ondblclick = function () {
			popdata = [];
			let divs = document.createElement('div');
			let ox = event.offsetX,
				oy = event.offsetY;
			divs.style.cssText = `
				width:100px;height:100px;background:#ddd;
				position:absolute;top:${oy}px;left:${ox}px;
				color:#6C6C6C;border:1px dashed #7E7E7E;outline:none;
			`;
			divs.setAttribute("contenteditable", true);
			bigbox.appendChild(divs);
			divs.onmousedown = function () {

			}
			divs.onblur = function () {
				draw.font = 'normal 20px sans-serif';
				draw.fillText(divs.innerText, ox, oy);
				//				this.display='none';
				bigbox.removeChild(this);
				data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}

			}

		}

	}

	/*铅笔线*/
	function pencilLine() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			draw.beginPath();
			draw.moveTo(stx, sty);
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height); //此时如果清除的话下一次画会取消上一次画的
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.setLineDash([0]);
				draw.lineTo(endx, endy);
				draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}

	}
	/*直线*/
	function straightLine() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.moveTo(stx, sty);
				draw.setLineDash([0]);
				draw.lineTo(endx, endy);
				draw.closePath();
				draw.stroke();
			}
		}
		canvas.onmouseup = function (ev) {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
			X.innerText = ev.offsetX + ',';
			Y.innerText = ev.offsetY + '像素';
		}
	}
	/*虚线*/
	function dashed() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.moveTo(stx, sty);
				draw.setLineDash([5]);
				draw.lineTo(endx, endy);
				draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*三角形*/
	function triangle() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.moveTo(stx, sty);
				draw.setLineDash([0]);
				draw.lineTo(stx, endy);
				draw.lineTo(endx, endy);
				draw.closePath();
				draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*四边形*/
	function rectangle() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.setLineDash([0]);
				draw.moveTo(stx, sty);
				draw.lineTo(endx, sty);
				draw.lineTo(endx, endy);
				draw.lineTo(stx, endy);
				draw.closePath();
				draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*空心圆*/
	function circle() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				let R = Math.sqrt(Math.pow((endx - stx), 2) + Math.pow((endy - sty), 2));
				draw.beginPath();
				draw.setLineDash([0]);
				//draw.moveTo(stx+Math.abs(endx-stx)/2,sty+Math.abs(endy-sty)/2);//加上之后会出现中间的线
				draw.arc(stx + Math.abs(endx - stx) / 2, sty + Math.abs(endy - sty) / 2, R / 2, 0, 2 * Math.PI, false);
				draw.lineTo(stx + Math.abs(endx - stx) / 2 + R / 2, sty + Math.abs(endy - sty) / 2);
				draw.stroke();
				//				draw.fill();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*实心圆*/
	function bgscircle() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				let R = Math.sqrt(Math.pow((endx - stx), 2) + Math.pow((endy - sty), 2));
				draw.beginPath();
				draw.setLineDash([0]);
				//draw.moveTo(stx+Math.abs(endx-stx)/2,sty+Math.abs(endy-sty)/2);//加上之后会出现中间的线
				draw.arc(stx + Math.abs(endx - stx) / 2, sty + Math.abs(endy - sty) / 2, R / 2, 0, 2 * Math.PI, false);
				draw.lineTo(stx + Math.abs(endx - stx) / 2 + R / 2, sty + Math.abs(endy - sty) / 2);
				//				draw.stroke();
				draw.fill();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*bg四边形*/
	function rect() {
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.setLineDash([0]);
				draw.moveTo(stx, sty);
				draw.lineTo(endx, sty);
				draw.lineTo(endx, endy);
				draw.lineTo(stx, endy);
				draw.fill();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}

	/*****************方法封装******************/

	/*N边形*/
	function NGon(num) {
		let deg = 360 / num;
		let hudu = deg * Math.PI / 180;
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.setLineDash([0]);
				let R = Math.sqrt(Math.pow((endx - stx), 2) + Math.pow((endy - sty), 2));
				draw.moveTo(stx, sty - R);
				for (let i = 1; i < num; i++) {
					draw.lineTo(stx - R * Math.sin(i * hudu), sty - R * Math.cos(i * hudu));

				}
				//					draw.fill();
				draw.closePath();
				draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*bgN边形*/
	function bgNGon(num) {
		let deg = 360 / num;
		let hudu = deg * Math.PI / 180;
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.setLineDash([0]);
				let R = Math.sqrt(Math.pow((endx - stx), 2) + Math.pow((endy - sty), 2));
				draw.moveTo(stx, sty - R);
				for (let i = 1; i < num; i++) {
					draw.lineTo(stx - R * Math.sin(i * hudu), sty - R * Math.cos(i * hudu));

				}
				draw.fill();
				//					draw.closePath();
				//					draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*N角形*/
	//	dihedral(4);
	function dihedral(num) {
		let deg = 360 / num / 2;
		let hudu = deg * Math.PI / 180;
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.setLineDash([0]);
				let R = Math.sqrt(Math.pow((endx - stx), 2) + Math.pow((endy - sty), 2));
				draw.moveTo(stx, sty - R);
				for (let i = 1; i < num * 2; i++) {
					if (i % 2) {
						draw.lineTo(stx - (R * Math.sin(i * hudu)) / 5 * 2, sty - (R * Math.cos(i * hudu) / 5 * 2));
					} else if (!(i % 2)) {
						draw.lineTo(stx - R * Math.sin(i * hudu), sty - R * Math.cos(i * hudu));
					}

				}
				//				draw.fill();
				draw.closePath();
				draw.stroke();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}
	/*bgN角形*/
	function bgdihedral(num) {
		let deg = 360 / num / 2;
		let hudu = deg * Math.PI / 180;
		canvas.onmousedown = function (e) {
			clearbg();
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function (ev) {
				X.innerText = ev.offsetX + ',';
				Y.innerText = ev.offsetY + '像素';
				popdata = [];
				let endx = ev.offsetX,
					endy = ev.offsetY;
				draw.clearRect(0, 0, canvas.width, canvas.height);
				if (data.length >= 1) {
					draw.putImageData(data[data.length - 1], 0, 0);
				}
				draw.beginPath();
				draw.setLineDash([0]);
				let R = Math.sqrt(Math.pow((endx - stx), 2) + Math.pow((endy - sty), 2));
				draw.moveTo(stx, sty - R);
				for (let i = 1; i < num * 2; i++) {
					if (i % 2) {
						draw.lineTo(stx - (R * Math.sin(i * hudu)) / 5 * 2, sty - (R * Math.cos(i * hudu) / 5 * 2));
					} else if (!(i % 2)) {
						draw.lineTo(stx - R * Math.sin(i * hudu), sty - R * Math.cos(i * hudu));
					}

				}
				draw.fill();
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			canvas.onmousemove = null;
		}
	}

	/*******************************************/
	/*裁切*/
	function Clip() {
		let flag=true;
		let endx, endy, minX, minY, clipwidth, clipheight;
		let divs = document.querySelector('.move');
		canvas.onmousedown = function () {
			let bogbox = document.querySelector('.canvas');
			let stx = event.offsetX,
				sty = event.offsetY;
			canvas.onmousemove = function () {
				X.innerText = event.offsetX + ',';
				Y.innerText = event.offsetY + '像素';
				endx = event.offsetX;
				endy = event.offsetY;
				minX = endx > stx ? stx : endx;
				minY = endy > sty ? sty : endy;
				clipwidth = Math.abs(endx - stx);
				clipheight = Math.abs(endy - sty);
				divs.style.cssText = `
					border:1px dashed #6C6C6C;
					top:${minY+125}px;left:${minX+60}px;
					width:${clipwidth}px;height:${clipheight}px;
					display:block;
				`;

			}
//			divs.onmouseleave = function () {
				canvas.ondblclick = function () {
					divs.style.display = 'none';
					flag=false;
//				}
			}
			canvas.onmouseup = function () {
				let temp = draw.getImageData(minX, minY, clipwidth, clipheight);
				draw.clearRect(minX, minY, clipwidth, clipheight);
				data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
				draw.putImageData(temp, minX, minY);
				canvas.onmousemove = null;
				canvas.onmouseup = null;
						canvas.onmousemove = function (e) {
							//移动的位置
							let ox = e.offsetX,
								oy = e.offsetY;
							if (ox > minX && ox < minX + clipwidth && oy > minY && oy < minY + clipheight) {
								canvas.style.cursor = 'move';
							} else {
								canvas.style.cursor = 'crosshair';
							}
						}
						canvas.onmousedown = function (e) {
							let ox = e.offsetX,
								oy = e.offsetY;
							canvas.onmousemove = function (e) {
								let cx = e.offsetX,
									cy = e.offsetY;

								let lefts = cx - ox + minX,
									tops = cy - oy + minY;
								divs.style.left = `${lefts+60}px`;
								divs.style.top = `${tops+125}px`;
								
								if (data.length > 0) {
									draw.putImageData(data[data.length - 1], 0, 0)
								}
								if(flag){
									draw.putImageData(temp, lefts, tops);
								}
								
							}
							canvas.onmouseup = function () {
								data.push(draw.getImageData(0, 0,canvas.width, canvas.height
								));
								temp = null;
								canvas.onmousemove = null;
								canvas.onmouseup = null;
								draw.clearRect(0,0,canvas.width,canvas.height);
								draw.putImageData(data[data.length-1],0,0);
							}
						}
					}


		
		}

	}

	/*橡皮擦*/
	function eraser() {
		canvas.onmousedown = function (e) {
			let stx = e.offsetX,
				sty = e.offsetY;
			canvas.onmousemove = function () {
				X.innerText = e.offsetX + ',';
				Y.innerText = e.offsetY + '像素';
				popdata = [];
				let endx = event.offsetX,
					endy = event.offsetY;
				draw.clearRect(stx, sty, 20, 20);
				draw.clearRect(endx - 10, endy - 10, 20, 20);
			}
		}
		canvas.onmouseup = function () {
			data.push(draw.getImageData(0, 0, canvas.width, canvas.height));
			if (data.length >= 1) {
				draw.putImageData(data[data.length - 1], 0, 0);
			}
			canvas.onmousemove = null;
			X.innerText = event.offsetX + ',';
			Y.innerText = event.offsetY + '像素';
		}
	}

	/*清除画板*/
	function Clear() {
		draw.clearRect(0, 0, canvas.width, canvas.height);
		data = [];
		popdata = [];
	}

	/*Ctrl+Z撤销*/
	document.onkeydown = function (e) {
		if (e.ctrlKey && e.keyCode == 90) {
			Cancel();
		}
	}
	/*撤销*/
	function Cancel() {
		let abc = [1, 2, 3, 4, 5, 6, 7];
		if (data.length == 1) {
			popdata.push(data[data.length - 1]);
			data.pop();
			draw.clearRect(0, 0, canvas.width, canvas.height);
		} else if (data.length > 1) {
			popdata.push(data[data.length - 1]);
			let newdata = data.pop();
			draw.clearRect(0, 0, canvas.width, canvas.height);
			draw.putImageData(data[data.length - 1], 0, 0);
		} else {
			draw.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	/*反撤销*/
	function Theundo() {
		if (popdata.length >= 1) {
			data.push(popdata[popdata.length - 1]);
			draw.clearRect(0, 0, canvas.width, canvas.height);
			let newdata1 = popdata.pop();
			draw.putImageData(newdata1, 0, 0);
		}
	}

	/*加载完毕*/
}
