
var offsetHeightNav = document.getElementById('navbar').offsetHeight;
$("#intro").css("height", $(window).height() - offsetHeightNav);
console.log($(window).height());
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");

      $("#shots-nav").addClass("active-nav");

    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
      $("#shots-nav").removeClass("active-nav");

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
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      // stickyWrapper.height(stickyHeight);
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




const observer = new IntersectionObserver(fmenk, {
  threshold: [0, 1]
});

function fmenk(entries) {
  for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          entry.target.classList.toggle("inbound", true);
      } else {
          entry.target.classList.toggle("inbound", false);
      }
  }
}

const itemEls = Array.from(document.querySelectorAll(".item"));
for (const itemEl of itemEls)
  observer.observe(itemEl);
  var index;
  var quotes = ["Alone we can do so little; together we can do so much.",
      "Politeness is the poison of collaboration.",
      "Politeness is the poison of collaboration.",
      "The speed of the boss is the speed of the team.",
      "Teamwork makes the dream work.",
      "A successful team is a group of many hands and one mind.",
      "None of us is as smart as all of us.",
      "No individual can win a game by himself.",
      "No one can whistle a symphony. It takes a whole orchestra to play it.",
      "So powerful is the light of unity that it can illuminate the whole earth.",
      "We must all hang together or most assuredly we shall all hang separately.",
      "People achieve more as a result of working with others than against them.",
      "Teamwork is the ability to work together toward a common vision.",
      "Strategy is not a solo sport, even if you’re the Head.",
      "The main ingredient of stardom is the rest of the team.",
      "Teams share the burden and divide the grief.",
      "Individually, we are one drop. Together, we are an ocean.",
      "Sticks in a bundle are unbreakable.",
      "When he took time to help the man up the mountain, lo, he scaled it himself.",
      "A single arrow is easily broken, but not ten in a bundle.",
      "To ease another's heartache is to forget one's own. ",
      "It's easy to make a buck. It's a lot tougher to make a difference.",
      "Research has shown that people who volunteer often live longer.",
      "No act of kindness, no matter how small, is ever wasted.",
      "Service to others is the rent you pay for your room here on Earth.",
      "What is the essence of life? To serve others and to do good.",
      "We make a living by what we get, but we make a life by what we give.",
      "Ask not what your country can do for you, ask what you can do for your country.",
      "To be good, and to do good, is all we have to do.",
      "When you give yourself, you receive more than you give.",
      "No one is useless in this world who lightens the burden of another.",
      "Service to others is the rent you pay for your room here on Earth.",
      "Volunteers don’t get paid, not because they’re worthless, but because they’re priceless.",
      "The best way to find yourself is to lose yourself in the service of others.",
      "The smallest act of kindness is worth more than the grandest intention.",
      "Life’s most persistent and urgent question is, What are you doing for others?",
      "The meaning of life is to find your gift. The purpose of life is to give it away.",
      "Volunteers do not necessarily have the time; they just have the heart.",
      "It’s easy to make a buck.  It’s a lot tougher to make a difference.",
      "Act as if what you do makes a difference.  It does.",
      "We make a living by what we get, but we make a life by what we give.",
      "If you become a helper of hearts, springs of wisdom will flow from your heart.",
      "While earning your daily bread, be sure you share a slice with those less fortunate.",
      "Even if you just change one life, you’ve changed the world forever.",
      "Those who bring sunshine to the lives of others cannot keep it from themselves.",
      "Kindness, like a boomerang, always returns.",
      "Not only must we be good, but we must also be good for something.",
      "Wherever there is a human being, there is an opportunity for a kindness.",
      "We must all hang together or most assuredly we shall all hang separately.",
      "People achieve more as a result of working with others than against them.",
      "Teamwork is the ability to work together toward a common vision.",
      "Strategy is not a solo sport, even if you’re the Head.",
      "The main ingredient of stardom is the rest of the team.",
      "Teams share the burden and divide the grief.",
      "Individually, we are one drop. Together, we are an ocean.",
      "Sticks in a bundle are unbreakable.",
      "When he took time to help the man up the mountain, lo, he scaled it himself.",
      "A single arrow is easily broken, but not ten in a bundle.",
      "To ease another's heartache is to forget one's own. ",
      "It's easy to make a buck. It's a lot tougher to make a difference."
  ];
function WriteCanvas(str,ct){
  var ctx = ct,
          dashLen = 100,
          dashOffset = dashLen,
          speed = 20,
          txt = str,
          x = 22,
          i = 0;
      ctx.clearRect(0, 0, 1200, 600);
      ctx.font = "28px cursive";
      ctx.lineJoin = "round";
      ctx.strokeStyle = ctx.fillStyle = "#fff";
      (function loop() {
          ctx.clearRect(x, 0, 60, 150);
          ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
          dashOffset -= speed;
          ctx.strokeText(txt[i], x, 90);
          if (dashOffset > 0) requestAnimationFrame(loop);
          else {
              ctx.fillText(txt[i], x, 90);
              dashOffset = dashLen;
              x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

              if (i < txt.length) requestAnimationFrame(loop);
          }
          $("span, .over").click(function () {
              ctx.clearRect(0, 0, 1200, 600);
              i = 0, txt = " ";
              $(".showimg").fadeOut();
          });
      })();
}
  $("#waterfall .item img").on("click", function () {
      index = $("#waterfall .item img").index(this);
      console.log(index);
      var $src = $(this).attr("src");
      $(".showimg").fadeIn();
      $(".img-show img").attr("src", $src);
      var str = quotes[index];
      console.log(str);
      WriteCanvas(str, document.querySelector("canvas").getContext("2d"));
  });
  // var intro="Lat's take a tour";
  // WriteCanvas(intro,document.getElementById("tour").getContext("2d"));
  console.log(index);
});