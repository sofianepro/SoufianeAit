$(function () {
	
	// Change Header Height
	$('.intro').height($(window).height());

	$(window).resize(function() {$('.intro').height($(window).height());})

	// Adjust intro item Center
	$('.intro .welcome').css('marginTop', ($(window).height() - $('.welcome').height()) / 2.4 );

	$('.intro').css('paddingTop', ($(window).height() - $('.mycontainer').height()) / 2 );

  	$(window).resize(function(){
  		$('.intro').css('paddingTop', ($(window).height() - $('.mycontainer').height()) / 2 );
  	})


});