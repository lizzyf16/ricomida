// ACTIVAR TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


$(function() {
    
    $("#enviarCorreo").on("click", function(){
        alert("El correo fue enviado correctamente...");
    });
    
});


$(function() {
    
    $("#INGREDIENTE").on("dblclick", function(){
        $(this).css("color", "#dc3545");
    });
    
});

$(function() {
    
    $("#Preparacion").on("dblclick", function(){
        $(this).css("color", "#dc3545");
    });
    
});

$(function() {
    
       $("#ocultardescrip1").on("click", function(){
        $(".descripcion").toggle("slow");
    });
});

$(function() {
    
    $("#ocultardescrip2").on("click", function(){
     $(".descripcion").toggle("slow");
 });
});
$(function() {
    
    $("#ocultardescrip3").on("click", function(){
     $(".descripcion").toggle("slow");
 });
});