var picWidth = 980,
currentSlide = 0,
divScrl, liBtns, picsLen, go2slide, nextSlide, prvSlide,sw=null,play,pause,pp;
window.onload=function(){
	divScrl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	liBtns = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	play	= document.getElementById("play");
	pause	= document.getElementById("pause");
	pp		= document.getElementById("pp");//<!-- mean : play/pause button-->
	picsLen = liBtns.length;
	go2slide = function (n){
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		divScrl.style.left = -n*picWidth + 'px';
		currentSlide=n;
	};
	nextSlide = function (){
		go2slide(currentSlide+1)
	};
	prvSlide = function (){
		go2slide(currentSlide-1)
	};
	for(var i=0;i<picsLen;i++){
		(function(j){
			liBtns.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
	play.onclick=function (){
		if (sw==null)//<!-- bara in ke har bar ke setinterval mishe speed ziyad nashe !;)  --!>
		sw = setInterval(nextSlide,1000);
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
			sw = setInterval(nextSlide,1000);
	}
}