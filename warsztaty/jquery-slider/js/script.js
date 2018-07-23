$(document).ready(function() {
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    slideShow.css('width', slideCount * 100 + '%');
    
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({
            "width" : slideWidth + '%',
            "margin-left" : slideWidth * index + '%'
        })
    });
    
    $('.prev-slide').click(function() {
//        console.log('123');
        slide(slideIndex - 1);
        
    });
    
    $('.next-slide').click(function() {
//        console.log('345');
        slide(slideIndex + 1);
        
    });
    
    function slide(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            return;
        }
        
        var slideCaption = $('.slide-caption').eq(newSlideIndex);
        
        var marginLeft = -(newSlideIndex * 100) + '%' ;
        
        slideCaption.hide();
        
        slideShow.animate({
            "margin-left" : marginLeft,
        }, 800, function() {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
    }
    
    
    
});