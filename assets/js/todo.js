//check off specific todos by clicking
$("ul").on("click","li",function(){   // when an li is clicked inside of an ul run the inside code


    if($(this).css("color") === "rgb(128, 128, 128)")
    {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else{
        //   $(this).css("color","gray");
        //   $(this).css("text-decoration","line-through");
        // or:----->

        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
    
    //*************** */OR***********************************************

    // $(this).toggleClass("completed");
});

//delete todo
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function() {  // this refers to the span
        $(this).remove(); //this refers to the li not span  
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13)  // 13 is the code for enter key
    {  
        // grabbing new todo text from input
      var todoText =  $(this).val();
      $(this).val("");
      //create a anew li and add to ul
       
        $("ul").append("<li><span><i class='far fa-trash'></i></span>" + todoText +"</li>");
    }
});

$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
});