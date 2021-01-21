
//current year

$(".tabs").on("click","a",function(){
    $('.tabs a').removeClass("active");
   $(this).addClass('active');
  });
  
  
  $(".Ticket").click(function(){
    $("div.cont").css("display", "none");
        $("#Ticket").fadeIn(100,function(){
            $("#Ticket").css("display", "block");
        });
      $(this).toggleClass("active");
  });
  $(".Agenda").click(function(){
    $("div.cont").css("display", "none");
        $("#Agenda").fadeIn(100,function(){
            $("#Agenda").css("display", "block");
      });
      $(this).toggleClass("active");
  });
  $(".Moredetails").click(function(){
    $("div.cont").css("display", "none");
        $("#Moredetails").fadeIn(100,function(){
            $("#Moredetails").css("display", "block");
        });
      $(this).toggleClass("active");
  });
