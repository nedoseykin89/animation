    
$(document).ready(function() {

    let $slider = $('.slider').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true
    });
    
    $(document).on('keydown', function(e) {
        if(e.keyCode == 37) {
            $slider.slick('slickPrev');
        }
        if(e.keyCode == 39) {
            $slider.slick('slickNext');
        }
    });

    $(document).on('wheel', function(e) {
        var delta = e.originalEvent.deltaY;

        if (delta > 1){
            $slider.slick('slickNext');
        } 
        if (delta < -1){
            $slider.slick('slickPrev');
        }
    });

})