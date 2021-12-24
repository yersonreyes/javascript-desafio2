$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $( "#enviarCorreo" ).click(function() {
    alert( "El correo fue enviado correctamente" );
  });

  $("#ingredientes").on("dblclick",function(){
    $("#ingredientes").addClass("text-danger");
  });

  $("#preparacion").on("dblclick",function(){
    $("#preparacion").addClass("text-danger");
  });



  $( ".card" ).click(function() {
    $(".card-body").toggleClass("cambio");
  });

