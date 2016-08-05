var count = 1; // count from 1 as the slide id starts from.
var slides = $(".slides .slide"); // get the total slides 

/*
All we doing here is as we using the overflow hidden we just need to set the only slide to display as a block the rest is just hide.

This function simple checks if the next button was triggered or the previous
Also checks if the count is reached the end of the slides so it resets it back to the first slide,
otherwise just add 1 to the current count.
Same goes for the previous except it checks if the first slide and sets it to the last.
 */
var showHideSlides = function(e, next){
    if(next){
        if(count == slides.size()){
            count = 1;
        }else{
            count = count + 1;
        }
    }else{
        if(count == 1){
            count = slides.size();
        }else{
            count = count - 1;
        }
    }

    slides.css('display','none');
    $(".slides #"+count).css('display','block');
    e.preventDefault();
}

$("#next").click(function(e){
    showHideSlides(e, true);
});

$("#previous").click(function(e){
   showHideSlides(e, false);
});