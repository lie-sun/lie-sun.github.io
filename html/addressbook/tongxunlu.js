window.onload = function () {
	let contact = [
		{
			'name': '赵茜',
			'tells': 18354689578,
			'firstinitial': 'ZHAOQIAN'
		},
		{
			'name': '李洁',
			'tells': 18456865595,
			'firstinitial': 'LIJIE'
		},
		{
			'name': '孙建',
			'tells': 15745647858,
			'firstinitial': 'SUNJIAN'
		},
		{
			'name': '王薇',
			'tells': 18354689578,
			'firstinitial': 'WWANGWEI'
		},
		{
			'name': '李树',
			'tells': 15645374684,
			'firstinitial': 'LISHU'
		},
		{
			'name': '高叶',
			'tells': 18354689578,
			'firstinitial': 'GAOYE'
		},
		{
			'name': '黄叶',
			'tells': 18354689578,
			'firstinitial': 'HUANGYE'
		},
		{
			'name': '艾尔',
			'tells': 18354689578,
			'firstinitial': 'AIER'
		},
		{
			'name': '毕博',
			'tells': 18354689578,
			'firstinitial': 'BIBO'
		},
		{
			'name': '蔡乃鸥',
			'tells': 18354689578,
			'firstinitial': 'CAINAOOU'
		},
		{
			'name': '大叔',
			'tells': 18354689578,
			'firstinitial': 'DASHU'
		},
		{
			'name': '佳杰',
			'tells': 18354689578,
			'firstinitial': 'JIAJIE'
		},
		{
			'name': '王焕',
			'tells': 18346438746,
			'firstinitial': 'WANGHUAN'
		}
    ];
	/*获取dt*/
	let dt = document.querySelector('dt');

	function getDate(){
		let date = localStorage.getItem('contact') ? JSON.parse(localStorage.contact) : false;
		if (!date) {
			localStorage.setItem('contact', JSON.stringify(contact));
		}
		return date;
	}
	let datess=getDate();
//	console.log(datess);
	dateobj(getDate());
	
	/*搜索电话*/
	let input=document.querySelector('input');
	
	input.onkeyup = function(){
		let inputvalue=this.value.trim();
		
		let newdate = datess.filter(val=>{
			return val.name.includes(inputvalue)||val.firstinitial.includes(inputvalue.toUpperCase())||val.tells.toString().includes(inputvalue);
			/*数字不能查询？？？？？？？？？？*/
			/*将数字先转换成字符串*/
		});
		dateobj(newdate);
	}
	
	/*小写obj*/
	function dateobj(getdate) {
	
		/*dateObj只能声明一次否则每次都创建一个 大写Obj*/
		let dateObj = {};

		getdate.forEach( function(val) {
			let firstname = val.firstinitial.charAt(0).toUpperCase();
			if (!dateObj[firstname]) {
				dateObj[firstname] = [];
			}
			dateObj[firstname].push(val);
		});
		/*获取到对象中首字母*/
		let keys = Object.keys(dateObj).sort();
		
		dt.innerHTML='';
		keys.forEach(ele => {
			dt.innerHTML += `<dl>${ele}</dl>`;
			dateObj[ele].forEach(value => {
				dt.innerHTML += `<dd><a href="tel:${value.tells}"> ${value.name} &nbsp;&nbsp;&nbsp;${value.tells}</a></dd>`;
			})
		});
		
		/*创建一个数组用来存放首字母的高度*/
		let firstArr = [];
		let dls = document.querySelectorAll('dl');
		let hint = document.getElementById('hint');
		hint.innerText = keys[0];

		dls.forEach(val => {
			firstArr.push(val.offsetTop);
		});
		/*首字母达到多少高度之后显示*/
		let header = document.querySelector('header');
		let headerheight = header.offsetHeight;
		window.onscroll = function () {
			let scrolltop = document.body.scrollTop;
			firstArr.forEach((val, index) => {
				if (val < scrolltop + headerheight + 5 ) {
					hint.innerText = keys[index];
				}
			});
		}

	}


}/*js结束*/
