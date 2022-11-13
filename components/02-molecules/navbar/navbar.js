const faq = ($) => {
  Drupal.behaviors.faq = {
    attach(context) {
      $(document, context).ready(function () {
        $('.btn').on('click', function () {
          $('.navbar-menu-list').toggleClass('show');
        });
      });
    },
  };
};
faq(jQuery);
