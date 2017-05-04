// Loader of the page 
$(window).on('load', function() {
	console.log('Strona zaladowana');
	
	$('#loading_icon').fadeOut();
	$('#preloader').delay(500).fadeOut('slow');
	$('main, #slide_1').delay(350).show('slow');
});

// When document is ready hide scrollbar
$(document).ready(function(){
	$('body').css('overflow-y', 'hidden');
	
});

// Page sliding 
	var page = 1;
	var howManyPages = $('section').length;
$(document).on('wheel', _.throttle(function(event){
	
	var sectionHeight = $('section').height();
	var currentPosition = $(window).scrollTop();
	var nextPage = page + 1;
	var next = '#slide_' + nextPage;
	var previousPage = page - 1;
	var previous = '#slide_' + previousPage;
	var current = '#slide_' + page;
	
	
	if (event.originalEvent.deltaY < 0 && previousPage != 0) {
		console.log("Gora");
		$('html, body').animate({
			scrollTop: $(previous).offset().top
		}, 500); // How fast will the page be shown
		
		page = page - 1; 
		
	}
	else if (event.originalEvent.deltaY > 0 && nextPage != howManyPages) {
		console.log("Dol");
		$('html, body').animate({
			scrollTop: $(next).offset().top
		}, 500);
		
		page = page + 1;
		
	}

	
}, 1000)); // Event from mouse wheel is taken every second 
