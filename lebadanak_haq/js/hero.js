    $( () => {
	
	
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		if(windowTop > 20) { $('nav').addClass('navShadow'); }
  else{ 
    $('nav').removeClass('navShadow');
   }
   if(	windowTop > 20 ) {$('ul').css('top','70px');} else{ $('ul').css('top','160px');}
	
	});
	
	
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
		$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('nav ul').toggleClass('showMenu');
		$('nav').addClass('navShadow'); 
	$('nav ul').css('top','70px');
		$('nav li').on('click', () => {
			$('nav ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});

	
});
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}