import '../common/scss/main.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// POPPER
// import Popper from 'popper.js';
// window.Popper = Popper;

// BOOTSTRAP
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/dropdown';

// OTHER LIBS
// require("./libs/bootstrap-select/bootstrap-select.min.js");
// require("./libs/bootstrap-autocomplate/bootstrap-autocomplete.min.js");
// require('./req-libs/jquery-validate/jquery.validate.min.js');
// require("./libs/imask/imask.min.js");
// require('./req-libs/lazysizes/lazysizes.min.js');
// require('./req-libs/slick/slick.min.js');

$('.ya-open-button').on('click', () => {
  $('.modal-info').modal('show');
});

$('.yaform').on('load', (e) => {
  console.log('Event', e);
  // if (e.target.includes('success')) {
  $('.modal-info').modal('hide');
  // }
});
