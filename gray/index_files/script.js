$(document).ready(function(){


var h = 0;
function smoothScrollTo(h) {
	if (window.pageXOffset < h) {
		window.scrollTo(window.pageXOffset+80, 0);
		setTimeout('smoothScrollTo('+h+')', 25);
	} else {
		window.scrollTo(window.pageXOffset-80, 0);
		setTimeout('smoothScrollTo('+h+')', 25);
	}
}

function whell() {
	width = document.body.clientWidth;
	if ( width > 1020 ) {
		$('html').on('mousewheel', function(event) {
    		console.log(event.deltaX, event.deltaY, event.deltaFactor);
    		if ( event.deltaX == -1 || event.deltaY == -1 ) {
    			smoothScrollTo( $(document).scrollLeft() + event.deltaFactor );
    		}
    		if ( event.deltaX == 1 || event.deltaY == 1 ) {
    			smoothScrollTo( $(document).scrollLeft() - event.deltaFactor );
    		}
		});
	};
};

whell();
$(window).resize( whell );

/* function() {

$("#article")
	.mouseenter( function() { ifvar = 0 } )
	.mouseleave( function() { ifvar = 1 } );

addEvent(document.body, mousewheel, function(event){
	event = window.event || event;
	if ( ifvar != 0 && width > 1020 ) {
		$(document).scrollLeft( $(document).scrollLeft() - event.wheelDelta );
	};
}, false);

}); */


});