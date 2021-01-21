document.getElementById('myVideo').play();

var offsetHeightNav = document.getElementById('navbar').offsetHeight;
$("#intro,#myVideo").css("max-height", $(window).height() - offsetHeightNav);
var vid = document.getElementById("myVideo");
vid.autoplay = true;
vid.load();

var pos = 0;
var turn = 0;
var data = ['Possible', 'Challenging', 'Worthy'];
var speed = 250;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("demo").innerHTML += data[turn].charAt(pos);
    pos++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(erase, speed + 100);
  }
}

function erase() {
  if (pos >= 0) {
    var str = data[turn].toString().substring(0, pos);
    document.getElementById("demo").innerHTML = str;
    pos--;
    setTimeout(erase, speed - 100);
  } else {
    turn++;
    if (turn >= data.length)
      turn = 0;
    setTimeout(typeWriter, speed);
  }
}
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");

      $("#about-nav").addClass("active-nav");

    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
      $("#about-nav").removeClass("active-nav");

    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});
$(document).ready(function () {

  prepare('zainab');
  prepare('ac');
  prepare('er');
  prepare('ir');
  prepare('mm');
  prepare('qmc');
  prepare('od');

  $('.all').hover(
      function(){
          removeAllMarks();
          // this.removeClass("Nall");
          $(this).addClass("member-hover");

      },
      function(){
          if($(this).hasClass('data-active')==false)
              $(this).removeClass("member-hover");
          // $('.Nall.all').addClass("leave");
      }
  );

});


function prepare(key){
  if(key=='zainab')
    key='all';
  $("." + key).click(function () {
      if ($(this).hasClass('state') == false){
          removeAllMarks();
          $(this).addClass("member-hover");

      }else{
          $(this).removeClass("member-hover");
      }
      // $(this).data('state', new_state);
      $('.' + key).each(function(){
          $(this).addClass("member-hover");
          $(this).addClass("data-active");
      });
  });
}

function removeAllMarks(){
  $('.all').each(function(){
      $(this).removeClass("member-hover");
      // $(this).removeClass("leave");
  })
}


