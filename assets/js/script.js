$( document ).ready(function() {
    //Logic starts here

    //STRICKTHROUGH DONE 
    $("#list").on('click', 'li',function(){
        $(this).toggleClass("done");
      });
    
    //DELETE THE TASK. 
    //NOTE!!!! THIS IS AN EVENT BOOBLING SITUATION!!!-TO STOR 1. ADD 'e' TO FUNCTION, THEN 2. INSIDE THE FUNCTION ADD e.stopPropagation,
    //THIS IS event delegation TOO. USE ON INSTEAD OF JUST CLICK
    $('#list').on('click', 'span', function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    });


    $("input[type='text']").keypress(function(e){
        if(e.which === 13){
            let inputVal = $(this).val();
            $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> '+inputVal+''+'</li>');
            $(this).val('');
        };
    });

    $("#toggle-form").click(function(){
        $("input[type='text']").fadeToggle();
    });







});