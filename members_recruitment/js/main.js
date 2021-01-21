let W = window.innerWidth;
let H = window.innerHeight;
$(window).on("load", function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
      $("#wave_loader").fadeOut(1000,function(){
        $("#letter_loader").fadeIn(5500,function(){
          $("#loader").fadeOut(1500);
        });
      });
  }, 500);
  });

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 40;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();

$(function(){
    var slider = $('.slider'),
    slides = slider.find('li'),
    curr =0 ,
    playing = true,
    slideinterval = setInterval(gonext,4000);
    slides.eq(curr).addClass('current');
            //move right
            function gonext(){
              curr= curr+1;
              curr=(curr+slides.length)%(slides.length);
              slides.eq(curr).addClass('current').removeClass('prev').siblings().removeClass('current');
              slides.eq(curr).prevAll().addClass('prev');
              slides.eq(curr).nextAll().removeClass('prev');
            }
            //end of moveright
            //move left
            function goprev(){
              curr= curr-1;
              curr= (curr+slides.length)%(slides.length);
              slides.eq(curr).addClass('current').removeClass('prev').siblings().removeClass('current');
              slides.eq(curr).prevAll().addClass('prev');
              slides.eq(curr).nextAll().removeClass('prev');
            }
            // end of move left 
            $('.next').click(function(e){
              e.preventDefault();
              gonext();
            });
            $('.previous').click(function(e){
              e.preventDefault();
              goprev();
            });
//             slider.mouseenter(puase);
//             slider.mouseleave(puase);
function puase (){
  if(playing){
    playing=false;
    clearInterval(slideinterval);
  }
  else {
    playing =true;
    setInterval(slideinterval ,4000);
  }
}



});
  var hide = $('.hide'),
  from =$('.from'),
  label= from.find('label'),
  input = from.find('input');
  $('.apply').click(function(){
    var width = $(window).width(); 
    if (width<=750) {
            $('html,body').animate({scrollTop: $("#myform").offset().top},'slow');
    }
    else
   {applynow();}
 });
  function applynow(){
    $("body").css("overflow","auto");
    $('.slider').animate({
      left:'-20000px',
      width: '0px'
    },2000);
    
    hide.removeClass('hide').addClass('wrapper');
    from.addClass('from responsive');
    label.addClass('label');
    input.addClass('input');
  }
  function goback(){
    $('.slider').animate({
      width: '100%',
      left:'0px',
        bottom:'0px'
    },1000);
    window.scrollTo(0, 0);
    hide.addClass('hide').removeClass('wrapper');
    from.removeClass('from responsive');
    label.removeClass('label');
    input.removeClass('input');
    $("body").css("overflow","hidden");
  }
  function check(input) {
           if ((input.value <= 01000000000)||(input.value >= 01599999999)) {
             input.setCustomValidity('Enter your phone number correctly');
           } else {
             // input is fine -- reset the error message
             input.setCustomValidity('');
           }
         }
	    function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        function valid(f) {
            var re = /^[\d]*$/;
            if (!re.test(f.value)) {
                f.value = f.value.replace(/[^\d]/g,"");
            }
        } 
		// Disable scroll when focused on a number input.
		$('form').on('focus', 'input[type=number]', function(e) {
        $(this).on('wheel', function(e) {
            e.preventDefault();
        });
		});
	
		// Restore scroll on number inputs.
		$('form').on('blur', 'input[type=number]', function(e) {
			$(this).off('wheel');
		});
	
		// Disable up and down keys.
		$('form').on('keydown', 'input[type=number]', function(e) {
			if ( e.which == 38 || e.which == 40 )
				e.preventDefault();
		});