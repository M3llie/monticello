//  =========  Slick Slider  Header/About

$(".hero-slider").slick({
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  pauseOnDotsHover: true,
  dotsClass: $(this).toggleClass("rotate-90"),
  autoplay: true,
  autoplaySpeed: 4000,
  // dotClass: $.addClass("intro"),
});

//  ========= Slick Slider  News

// $(".news-slider").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   dots: true,
//   arrows: true,
//   // autoplay: true,
//   // autoplaySpeed: 4000,
//   prevArrow:
//     '<span class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></span>',
//   nextArrow:
//     '<span class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></span>',
// });

$('.news-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: false,
  verticalSwiping: false,
    prevArrow:
    '<span class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></span>',
  nextArrow:
    '<span class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//  ========= Smoothe Scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            let $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

console.log($('a[href*="#"]'));

// $('.navigation__link').on('click', function(e) {
//   e.preventDefault()

//   $('html, body').animate(
//     {
//       scrollDown: $($(this).attr('href')).offset().top,
//     },
//     500,
//     'linear'
//   )
// });

// =========  Map !!!! lägg till ikon

let icon = {
  url: '<i class="far fa-dot-circle"></i>',
  scaledSize: new google.maps.Size(40, 40),
};

let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: -6.15816, lng: 39.19534 },
  zoom: 16,
  styles: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#eaeaea",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          color: "#b0b0b0",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      elementType: "labels.text",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          color: "#dfdfdf",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#dfdfdf",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#f6f4f7",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      stylers: [
        {
          color: "#dfdfdf",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ],
});

let marker = new google.maps.Marker({
  position: { lat: -6.15815, lng: 39.195344 },
  map: map,

  draggable: true,
  icon: icon,
});

console.log(map);
console.log(marker);
console.log(icon);

// =============== form validation

// $(function () {
//   $("form[name='form']").validate({
//     rules: {
//       name: "required",
//       email: {
//         required: true,

//         email: true,
//       },
//     },
//     messages: {
//       name: "Please enter your name",
//       email: "Please enter a valid email address",
//     },
//     submitHandler: function (form) {
//       form.submit();

//     },
//   });
// });

$(function () {
  $("form[name='form']").validate({
    rules: {
      name: "required",
      button: "button-send",
      email: {
        required: true,
        button: true,
        email: true,
      },
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      button: "Thanks",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
