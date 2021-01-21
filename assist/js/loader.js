$(function(){

    $(window).on("load", function() {
        setTimeout(function() {
          window.scrollTo(0, 0);
          $("#wave_loader").fadeOut(1000,function(){
            $("#loader").fadeOut(500);
            $("#navbar").css("visibility", "visible");
          });
      }, 500);
      });
});
