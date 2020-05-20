$( document ).ready(function() {
    //Logic starts here

    //STRICKTHROUGH DONE 
    $("li").click(function(){
        $(this).toggleClass("done");
      });
    
    //DELETE THE TASK. NOTE!!!! THIS IS AN EVENT BOOBLING SITUATION!!!-TO STOR 1. ADD 'e' TO FUNCTION, THEN 2. INSIDE THE FUNCTION ADD e.stopPropagation,
    $('span').click(function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    });









});