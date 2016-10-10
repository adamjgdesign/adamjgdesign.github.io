
var opts = { duration: 800, distance: '100px',  reset: false, mobile: false, viewFactor : 0.2, scale : 1, };

window.sr = ScrollReveal(opts);
sr.reveal('.appear');



$('.menu-toggle').click(function(){
	$('#menu').toggleClass('hidden');
})


$('.form-toggle').click(function(){
	$('#form').toggleClass('hidden');
})



$(function(){

  // Instantiate MixItUp:

  $('#portfolio-section').mixItUp();

});



$('#filters').fixedsticky();


        var tStart = 50 // Start transition 100px from top
        , tEnd = 200 // End at 500px
        , cStart = [0, 0, 0]
        , cEnd = [255, 255, 255]
        , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];
  
 

      $(document).ready(function(){
        $(document).scroll(function() {
          var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
          p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
          var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
          $("#body").css('background-color', 'rgb(' + cBg.join(',') +')');
        });
      });
      
      

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
         $('.logo').hide();
     }
     else {
         $('.logo').show();
     }
});



$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
         $('#intro').show();
     }
     else {
         $('#intro').hide();
     }
});

/*Scroll transition to anchor*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

