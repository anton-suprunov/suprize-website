import $ from 'jquery';

const onDomReady = () => {
  var logo = $('.logo__img'),
    nav = $('.nav'),
    body = $('body');

  nav.on('mouseenter', function () {
    nav.addClass('nav_hovered');
  });

  nav.on('mouseleave', function () {
    nav.removeClass('nav_hovered');
  });

  twemoji.parse(document.body);

  if (window.innerWidth < 768) {
    $('.nav__li_has-dropdown .nav__link')
      .on('click', function (e) {
        e.preventDefault();
        var el = $(this).parent();

        if (el.hasClass('nav__li_has-dropdown_active')) {
          el.removeClass('nav__li_has-dropdown_active');
        } else {
          el.addClass('nav__li_has-dropdown_active');
        }
      });
  }
  
  function animate(selector) {
    var el = document.querySelector(selector);
    if (!el) return;
    el.className = el.className + ' animated_in';
  }

};


$(onDomReady);
