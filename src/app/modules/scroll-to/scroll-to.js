function scrollToSection(target) {
  $(target).click(e => {
    const sectionAnchor = e.target.getAttribute('href');
    if (document.querySelector(sectionAnchor)) {
      // e.preventDefault();
      const elementTop = $(sectionAnchor).offset().top;
      if (window.matchMedia('(max-width: 1000px)').matches) {
        $('html').animate({ scrollTop: elementTop }, 0);
      } else {
        $('html').animate({ scrollTop: elementTop }, 1000);
      }
    }
  });
}
scrollToSection('.scroll-down__button');
scrollToSection('.nav-menu__animation-block');
scrollToSection('.send-request__button');
// scrollToSection('.main-menu__button');
// scrollToSection('.main-footer__menu-link');
