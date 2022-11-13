const counterup = ($) => {
  Drupal.behaviors.counterup = {
    attach(context) {
      $(document, context).ready(function () {});
    },
  };
};
counterup(jQuery);
