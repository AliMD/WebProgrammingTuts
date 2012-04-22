var picWidth = 980,
currentSlide = -1,
prevSlide,
divScrl, liBtns, picsLen, go2slide, nextSlide, prvSlide,sw=null,play,pause,pp;
window.onload=function(){
	divScrl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	liBtns = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	play	= document.getElementById("play");
	pause	= document.getElementById("pause");
	pp		= document.getElementById("pp");//<!-- mean : play/pause button-->
	picsLen = liBtns.length;
	go2slide = function (n,m){
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		divScrl.style.left = -n*picWidth + 'px';
		currentSlide=n;
		prevSlide = m;
	//active li ha !
	liBtns.item(currentSlide).style.backgroundColor='#39d';
	liBtns.item(currentSlide).style.height=22+'px';
	liBtns.item(currentSlide).style.marginTop=-6+'px';
	//return to back ! :D
	liBtns.item(prevSlide).style.marginTop=0;
	liBtns.item(prevSlide).style.height=10+'px';
	liBtns.item(prevSlide).style.backgroundColor='#333';
	};
	nextSlide = function (){
		go2slide(currentSlide+1,currentSlide)
	};
	prvSlide = function (){
		go2slide(currentSlide-1,currentSlide)
	};
	for(var i=0;i<picsLen;i++){
		(function(j){
			liBtns.item(j).onclick=function(){
				go2slide(j,currentSlide);
			}
		})(i);
	}
	play.onclick=function (){
		if (sw==null)//<!-- bara in ke har bar ke setinterval mishe speed ziyad nashe !;)  --!>
		sw = setInterval(nextSlide,3000);
	}
	pause.onclick = function (){
		clearInterval(sw);
		sw=null;//<!-- baraye control setInterval -->
	}
	pp.onclick = function (){
		if (sw!=null){
			clearInterval(sw);
			sw=null;
		}else
			sw = setInterval(nextSlide,3000);
	}
}