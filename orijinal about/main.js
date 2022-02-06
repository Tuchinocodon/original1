

$(window).on("load", function(){
    $(".loadA").addClass('rotateOut');
    
});

window.setTimeout(start, 850);

function start(){
    document.getElementById('all').style.display = "unset";
    $(".all").addClass('fadeIn');
}
$(function () {
    $(".ms").on("inview", function (event, isInview) {
        if(isInview){
          
            
          $(".ms").addClass('fadeInDown');
            
        }else{
          
            $(".ms").css('opacity',0);
        }
 
    });
});

$(function (){
    $(".skt").on("inview", function(event, isInview){
        if(isInview){
            $(".skllpr").addClass('fadeInDown');
        }else{
      
            $(".skllpr").css('opacity', 0);
        }
    });
});


