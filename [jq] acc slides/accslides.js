$(function(){
	
	var imgTags = $('.slider .scroll > div');
	
	imgTags.mouseover(function(){
		
		imgTags.stop().animate({
			'width':'50px'
			},650);
				
		$(this).stop().animate({
			'width':'450px'
			},650);
			
	});
	
	imgTags.mouseout(function(){
		
		imgTags.stop().animate({
			'width':'150px'
		},400);
		
	});
	
});