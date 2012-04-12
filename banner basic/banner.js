
window.onload=function(){
	
	var bannerWidth = 980;
	
	var inx=document.getElementsByClassName('banner').item(0).getElementsByClassName('index');
	
	var divScrl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	
	var liBtns=document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	for(var i=0;i<liBtns.length;i++){
		(function(i){
			liBtns.item(i).onclick=function(){
				divScrl.style.left= (-i*bannerWidth) + 'px';
				
				inx.item(0).innerHTML=(i+1)+'/'+liBtns.length;  //number counter
			}
		})(i);
	}
	
}
