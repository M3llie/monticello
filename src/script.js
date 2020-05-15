// header slick slider
$('.slickslider').slick({

    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
        
});

// News section slick slider
// $('.news-slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });


//   smoothe scroll

$('.navigation__link').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  });
  

