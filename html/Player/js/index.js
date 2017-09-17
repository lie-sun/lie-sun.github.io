window.onload=function(){
	let stop=document.querySelector('#stop'),
	    songname=document.querySelector('#songname'),
	    audio=document.querySelector('audio'),
		logoimg=document.querySelector('.logo-img'),
		Img=document.querySelector('.logo-img img')
		lists=document.querySelector('.lists'),
		indexx=0;
	/*左右按钮切换歌曲*/
	left.onclick=function(){
		indexx-=1;
		if(indexx<0){
			indexx=3;
		}
	}
	right.onclick=function(){
		indexx+=1;
		if(indexx>3){
			indexx=0;
		}
	}
	/*播放*/
	play.onclick=function(){
		audio.src=datashed[indexx].src;
		if(audio.paused){
			audio.play();
		}
		songsna.innerText=datashed[indexx].songs;
		lists.innerText='';
		stop.style.display='block';
		this.style.display='none';
		logoimg.classList.add('animation');
		datashed[indexx].lyrics.forEach(ele=>{lists.innerHTML+=`<li>${ele.lyric}</li>`});
		/*歌曲名字*/
		Img.src=datashed[indexx].photo;
		alltime.innerText=`/ ${datashed[indexx].alltime}`;
	}
	/*暂停*/
	stop.onclick=function(){
		if(audio.played){
			audio.pause();
		}
		play.style.display='block';
		this.style.display='none';
		logoimg.classList.remove('animation');
	}
	audio.ontimeupdate=function(){
		let ct=time(audio.currentTime);
		currenttime.innerText=ct;
		bgprogress.style.width=`${(audio.currentTime/audio.duration*100)}%`;
		dragcircle.style.left=`${audio.currentTime/audio.duration*300-5}px`;
		datashed[indexx].lyrics.forEach((ele,index)=>{
			let lis=document.querySelectorAll('.lists li');
			let num=0;
			lis[num].style.color='red';
			lis[num].style.fontSize='22px';
			if(ele.time==ct){
				lists.innerHTML='';
		   		for(let j=index;j<datashed[indexx].lyrics.length;j++){
					lists.innerHTML+=`<li>${datashed[indexx].lyrics[j].lyric}</li>`
				}
		    }
			
		});
	}
	function time(obj){
		let m=Math.floor(obj/60)>=10?Math.floor(obj/60):`0${Math.floor(obj/60)}`;
		let s=Math.floor(obj%60)>=10?Math.floor(obj%60):`0${Math.floor(obj%60)}`;
		return `${m}:${s}`;
	}
	/*收藏*/
	love.onclick=function(){
		this.style.color='red';
	}
	
}