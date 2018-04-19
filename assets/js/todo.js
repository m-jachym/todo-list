// przekreśla

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//usuwa element

$("ul").on("click", "span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); //stopuje bubbling
});

//dodawanie nowejp ozycji

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //z inputu do zmiennej
        let todoText = $(this).val();
        $(this).val("");
        //tworzy nowy element li i dodaje
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
    }
});
