let W = window.innerWidth;
let H = window.innerHeight;
$(window).on("load", function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
      $("#loader_img").fadeOut(1000,function(){
        $(".logo_event").addClass("loaded");
            $("#loader").fadeOut(3000);
        });
  }, 4000);
});


$(window).scroll(function(){
    $('.side').each(function(){
      if(isScrolledIntoView($(this))){
        $(this).css("opacity", "1");
    }
    });
  });
  
  function isScrolledIntoView(elem){
      var $elem = $(elem);
      var $window = $(window);
  
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + ($window.height());
  
      var elemTop = $elem.offset().top;

    return ( (elemTop+50 >= docViewTop));
}