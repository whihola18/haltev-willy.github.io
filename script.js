//event pada saat link di click
// $('.page-scroll').on('click', function(){

// 	// ambil isi href
// 	var href = $(this).attr('href');
// 	console.log(href);
// })
//parallax

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//Jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/6 +'%)'
	});

		$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

		$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});


	//Portfolio
	// if( wScroll > $('.portfolio').offset().top ) {
	// 	console.log('ok');
	// }

})