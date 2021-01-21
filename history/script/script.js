$(document).ready(function(){
    if(window.innerWidth > 767){
   
$(document).ready(function(){
    var page_container = document.getElementsByTagName('div')[0];
    var sections_counter = document.getElementsByTagName('section').length;
    var section_height = document.getElementsByTagName('section');
    page_container.style.height = 1200 * sections_counter;


    
});



//setting z-index 
$(document).ready(function(){
    window.addEventListener('scroll',function(){
    
        var slide_1 = document.getElementsByTagName('section')[0];
        var slide_2 = document.getElementsByTagName('section')[1];
        var slide_3 = document.getElementsByTagName('section')[2];
        var slide_4 = document.getElementsByTagName('section')[3];
        var slide_5 = document.getElementsByTagName('section')[4];
        var slide_6 = document.getElementsByTagName('section')[5];
        var slide_7 = document.getElementsByTagName('section')[6];
        var slide_8 = document.getElementsByTagName('section')[7];
        
        //setting z-index for mid-content
        var $mid_Contents = $('.mid-content').toArray();

        for(var i = 0;i< $mid_Contents.length ; i++){
            var cur = $mid_Contents[i]
            $(cur).css('z-Index',(i+2).toString());
        }

        //setting opacity for sections when scrolling

        
        
        slide_1.style.zIndex = '1';
        slide_2.style.zIndex = '2';
        slide_3.style.zIndex = '3';
        slide_4.style.zIndex = '4';
        slide_5.style.zIndex = '5';
        slide_6.style.zIndex = '6';
        slide_7.style.zIndex = '7';
        slide_8.style.zIndex = '8';
    
        slide_1.style.top = '0';
        slide_2.style.top = '800px';
        slide_3.style.top = '1600px';
        slide_4.style.top = '2400px';
        slide_5.style.top = '3200px';
        slide_6.style.top = '4000px';
        slide_7.style.top = '4800px';
        slide_8.style.top = '5600px';
        
        //layers
        if(window.pageYOffset == 0){
            slide_1.style.position = 'absolute';
    
            slide_2.style.top = '800px';
    
            slide_3.style.top = '1600px';
    
            slide_4.style.top = '2400px';

            slide_5.style.top = '3200px';
            slide_6.style.top = '4000px';
            slide_7.style.top = '4800px';
            slide_8.style.top = '5600px';
    
        }
        else if(window.pageYOffset < 800){
            
            slide_1.style.position = 'fixed';
    
            slide_2.style.position = 'absolute';
            slide_2.style.top = '800px';
            
            slide_3.style.top = '1600px';
    
            slide_4.style.top = '2400px';

            slide_5.style.top = '3200px';

            slide_6.style.top = '4000px';

            slide_7.style.top = '4800px';
            
            slide_8.style.top = '5600px';
           
    
        }else if(window.pageYOffset >= 800 && window.pageYOffset < 1600){
    
            slide_1.style.position = 'absolute';
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.top = '1600px';
            slide_3.style.position = 'absolute';
    
            slide_4.style.position = 'absolute'
            slide_4.style.top = '2400px';

            slide_5.style.position = 'absolute'
            slide_5.style.top = '3200px';
    
           
    
        }else if(window.pageYOffset >= 1600 && window.pageYOffset < 2400){
    
            slide_1.style.position = 'absolute';
    
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.position = 'fixed';
            slide_3.style.top = 0;
    
            slide_4.style.position = 'absolute'
            slide_4.style.top = '2400px';
            
            slide_5.style.position = 'absolute'
            slide_5.style.top = '3200px';
        }
        else if(window.pageYOffset >= 2400 && window.pageYOffset < 3200){
    
            slide_1.style.position = 'absolute';
    
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.position = 'fixed';
            slide_3.style.top = 0;
    
            slide_4.style.position = 'fixed'
            slide_4.style.top = 0;

            slide_5.style.position = 'absolute'
            slide_5.style.top = '3200px';
        }
        else if(window.pageYOffset >= 3200 && window.pageYOffset < 4000 ){
    
            slide_1.style.position = 'absolute';
    
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.position = 'fixed';
            slide_3.style.top = 0;
    
            slide_4.style.position = 'fixed'
            slide_4.style.top = 0;

            slide_5.style.position = 'fixed';
            slide_5.style.top = 0;

            slide_6.style.position = 'absolute';
            slide_6.style.top = '4000px';

            slide_7.style.position = 'absolute';
            slide_7.style.top = '4800px';

            slide_8.style.position = 'absolute';
            slide_8.style.top = '5600px';
        }
        else if(window.pageYOffset >= 4000 && window.pageYOffset < 4800 ){
            slide_1.style.position = 'absolute';
    
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.position = 'fixed';
            slide_3.style.top = 0;
    
            slide_4.style.position = 'fixed'
            slide_4.style.top = 0;

            slide_5.style.position = 'fixed';
            slide_5.style.top = 0;

            slide_6.style.position = 'fixed';
            slide_6.style.top = 0;

            slide_7.style.position = 'absolute';
            slide_7.style.top = '4800px';

            slide_8.style.position = 'absolute';
            slide_8.style.top = '5600px';
        }
        else if(window.pageYOffset >= 4800 && window.pageYOffset < 5600 ){
            slide_1.style.position = 'absolute';
    
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.position = 'fixed';
            slide_3.style.top = 0;
    
            slide_4.style.position = 'fixed'
            slide_4.style.top = 0;

            slide_5.style.position = 'fixed';
            slide_5.style.top = 0;

            slide_6.style.position = 'fixed';
            slide_6.style.top = 0;

            slide_7.style.position = 'fixed';
            slide_7.style.top = 0;

            slide_8.style.position = 'absolute';
            slide_8.style.top = '5600px';
        }else if(window.pageYOffset >= 5600 && window.pageYOffset < 6400 ){
            slide_1.style.position = 'absolute';
    
            slide_2.style.position = 'fixed';
            slide_2.style.top = 0;
    
            slide_3.style.position = 'fixed';
            slide_3.style.top = 0;
    
            slide_4.style.position = 'fixed'
            slide_4.style.top = 0;

            slide_5.style.position = 'fixed';
            slide_5.style.top = 0;

            slide_6.style.position = 'fixed';
            slide_6.style.top = 0;

            slide_7.style.position = 'fixed';
            slide_7.style.top = 0;

            slide_8.style.position = 'fixed';
            slide_8.style.top = 0;
        }
    });

    //setting button borders for side btns for after refresh

    if(window.pageYOffset >= 0 && window.pageYOffset < 560){
        $('.sec1').css('border','1.5px solid white');
        $('.sec2').css('border','none');
        $('.sec3').css('border','none');
        $('.sec4').css('border','none');
    }else if(window.pageYOffset>=560 && window.pageYOffset < 1300){
        $('.sec1').css('border','none');
        $('.sec2').css('border','1.5px solid white');
        $('.sec3').css('border','none');
        $('.sec4').css('border','none');
    }else if(window.pageYOffset > 1300 && window.pageYOffset <= 2165){
        $('.sec1').css('border','none');
        $('.sec2').css('border','none');
        $('.sec3').css('border','1.5px solid white');
        $('.sec4').css('border','none');
    }
    else if(window.pageYOffset >= 2165 && window.pageYOffset < 2900){
        $('.sec1').css('border','none');
        $('.sec2').css('border','none');
        $('.sec3').css('border','none');
        $('.sec4').css('border','1.5px solid white');
    }else if(window.pageYOffset > 2900 && window.pageYOffset <= 3650){
        $('.sec1').css('border','none');
        $('.sec2').css('border','none');
        $('.sec3').css('border','none');
        $('.sec4').css('border','none');
        $('.sec5').css('border','1.5px solid white');
        $('.sec6').css('border','none');
        $('.sec7').css('border','none');
        $('.sec8').css('border','none');
    }else if(window.pageYOffset > 3650  && window.pageYOffset <= 4515){
        $('.sec1').css('border','none');
        $('.sec2').css('border','none');
        $('.sec3').css('border','none');
        $('.sec4').css('border','none');
        $('.sec5').css('border','none');
        $('.sec6').css('border','1.5px solid white');
        $('.sec7').css('border','none');
        $('.sec8').css('border','none');
    }else if(window.pageYOffset > 4515  && window.pageYOffset <= 5380){
        $('.sec1').css('border','none');
        $('.sec2').css('border','none');
        $('.sec3').css('border','none');
        $('.sec4').css('border','none');
        $('.sec5').css('border','none');
        $('.sec6').css('border','none');
        $('.sec7').css('border','1.5px solid white');
        $('.sec8').css('border','none');
    }else if(window.pageYOffset > 5380  && window.pageYOffset < 6245){
        $('.sec1').css('border','none');
        $('.sec2').css('border','none');
        $('.sec3').css('border','none');
        $('.sec4').css('border','none');
        $('.sec5').css('border','none');
        $('.sec6').css('border','none');
        $('.sec7').css('border','none');
        $('.sec8').css('border','1.5px solid white');
    }

});

// btn borders when scrolling

window.addEventListener('scroll',function(){
    if(window.pageYOffset == 0 || pageYOffset <= 560){
        $('.sec1').css('border','1.5px solid white');
        $('.sec2').css('border','none');
    }else if(window.pageYOffset > 560 && window.pageYOffset <= 1300){
        $('.sec1').css('border','none');
        $('.sec2').css('border','1.5px solid white');
        $('.sec3').css('border','none');
    }else if(window.pageYOffset > 1300 && window.pageYOffset <= 2165){
        $('.sec2').css('border','none');
        $('.sec3').css('border','1.5px solid white');
        $('.sec4').css('border','none');
    }else if(window.pageYOffset > 2165 && window.pageYOffset < 2900){
        $('.sec3').css('border','none');
        $('.sec4').css('border','1.5px solid white');
        $('.sec5').css('border','none');
    }else if(window.pageYOffset > 2900 && window.pageYOffset <= 3650){
        $('.sec4').css('border','none');
        $('.sec5').css('border','1.5px solid white');
        $('.sec6').css('border','none');
    }else if(window.pageYOffset > 3650  && window.pageYOffset <= 4565){
        $('.sec5').css('border','none');
        $('.sec6').css('border','1.5px solid white');
        $('.sec7').css('border','none');
    }else if(window.pageYOffset > 4565  && window.pageYOffset <= 5165){
        $('.sec6').css('border','none');
        $('.sec7').css('border','1.5px solid white');
        $('.sec8').css('border','none');
    }else if(window.pageYOffset > 5380  && window.pageYOffset <= 6245){
        $('.sec7').css('border','none');
        $('.sec8').css('border','1.5px solid white');
    }
    
});

//after refresh behavior
$(document).ready(function(){
    $('.tl-sec1').css('z-index','1');
    $('.tl-sec2').css('z-index','2');
    $('.tl-sec3').css('z-index','3');
    $('.tl-sec4').css('z-index','4');
    $('.tl-sec5').css('z-index','5');
    $('.tl-sec6').css('z-index','6');
    $('.tl-sec7').css('z-index','7');
    $('.tl-sec8').css('z-index','8');

    $(this).scrollTop(0);

    
});



//side buttons clicks
$('.sec1').click(function () { 
    window.scrollTo(0,0);
});
$('.sec2').click(function () { 
    window.scrollTo(0,800);
});
$('.sec3').click(function () { 
    window.scrollTo(0,1600);
});
$('.sec4').click(function () { 
    window.scrollTo(0,2400);
});
$('.sec5').click(function () { 
    window.scrollTo(0,3200);
});
$('.sec6').click(function () { 
    window.scrollTo(0,4000);
});
$('.sec7').click(function () { 
    window.scrollTo(0,4800);
});
$('.sec8').click(function () { 
    window.scrollTo(0,5600);
});


    }
});

