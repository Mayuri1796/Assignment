const slickslider = ($) => {
  Drupal.behaviors.slickslider = {
    attach(context) {
      const $context = $(context);
      $context.find('.recent-photos').slick({
        infinite: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        icenterMode: true,
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              infinite: true,
              arrows: false,
              centerMode: true,
              centerPadding: '62px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
        ],
      });
    },
  };
};
slickslider(jQuery);

// (($) => {
//   Drupal.behaviors.three_slider = {
//     attach() {
//       const $carousel = $('.three_slider');
//       if ($carousel.length > 0) {
//         $($carousel)
//           .not('.center')
//           .slick({
//             icenterMode: true,
//             centerPadding: '30px',
//             slidesToShow: 3,
//             responsive: [
//               {
//                 breakpoint: 768,
//                 settings: {
//                   arrows: false,
//                   centerMode: true,
//                   centerPadding: '40px',
//                   slidesToShow: 3,
//                 },
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   arrows: false,
//                   centerMode: true,
//                   centerPadding: '40px',
//                   slidesToShow: 1,
//                 },
//               },
//             ],
//           });
//       }
//     },
//   };
// })(jQuery);
