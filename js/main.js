// Loader of the page 
$(window).on('load', function() {
	$('#loading_icon').fadeOut();
	$('#preloader').delay(500).fadeOut('slow');
	$('main, #slide_1').delay(350).show('slow');
	$('html, body').animate({
		scrollTop: 0
	}, 500);
});

// When document is ready hide scrollbar
$(document).ready(function(){
	$('body').css('overflow-y', 'hidden');
	
});

// Page sliding 
var page = 1;
var howManyPages = $('section').length;
var sectionHeight = $('section').height();
var nextPage;
var previousPage ;
var next;
var previous;

$(document).on('wheel', _.throttle(function(event){
	next = page + 1;
	previous = page - 1;
	nextPage = '#slide_' + next;
	previousPage = '#slide_' + previous;
		
	if (event.originalEvent.deltaY< 0 && previous != 0) {
		$('html, body').animate({
			scrollTop: $(previousPage).offset().top
		}, 500);
		
		page -= 1;
	}
	else if (event.originalEvent.deltaY > 0 && page != howManyPages){
		$('html, body').animate({
			scrollTop: $(nextPage).offset().top
		}, 500);
		
		page += 1;
	}
	
}, 1000));