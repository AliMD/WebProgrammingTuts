
window.onload=function(){
	
	var bannerWidth = 980;
	
		
	var inx=document.getElementsByClassName('banner').item(0).getElementsByClassName('index');
	
	var divScrl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	
	var liBtns=document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	
	var j=1;
	divScrl.onclick=function(){
		inx.item(0).innerHTML=(j+1)+'/'+5;
		this.style.left=-(j*980)+'px';
		
		j++;
		if(j==liBtns.length) j=0;  //change pictres with just one click
	}
	
	for(var i=0;i<liBtns.length;i++){
		(function(i){
			liBtns.item(i).onclick=function(){
				divScrl.style.left= (-i*bannerWidth) + 'px';
				
				inx.item(0).innerHTML=(i+1)+'/'+liBtns.length;  //number counter
			}
		})(i);
	}
	
	// another way to use btns
	/* liBtns.item(0).onclick=function(){
		divScrl.style.left=0;
		inx.item(0).innerHTML="1/5";
	}
	liBtns.item(1).onclick=function(){
		divScrl.style.left=-980+'px';
		inx.item(0).innerHTML="2/5";
	}
	liBtns.item(2).onclick=function(){
		divScrl.style.left=-(2*980)+'px';
		inx.item(0).innerHTML="3/5";
	}
	liBtns.item(3).onclick=function(){
		divScrl.style.left=-(3*980)+'px';
		inx.item(0).innerHTML="4/5";
	}
	liBtns.item(4).onclick=function(){
		divScrl.style.left=-(4*980)+'px';
		inx.item(0).innerHTML="4/5";
	} */
	
}
