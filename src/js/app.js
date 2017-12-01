import $ from 'jquery';
import _ from 'lodash';

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

  if (window.innerWidth > 768) {
    $('.phone video').get(0).play();
  }

  $('.phone-bg').on('click', function () {
    $('.phone video').get(0).play();
  })

  dynamicStuff();
  $(window).on('resize orientationchange', _.debounce(dynamicStuff, 200));
};

function dynamicStuff() {
  console.log('sdfafdf');
  if (window.innerWidth < 768) {
    $('.phone video').css({
      width: $('.phone').width() - 22,
      height: $('.phone').height() - 16
    });
    $('.phone').css('width', '');
    $('.title').css('width', '');

  } else {
    $('.phone').css('width', $('.phone').height() * 0.487);
    $('.title').css('width', $('.title').height() * 1.63);
    $('.phone video').css({
      width: $('.phone').width() - 10,
      height: $('.phone').height() - 10
    })
  }
}


$(onDomReady);
