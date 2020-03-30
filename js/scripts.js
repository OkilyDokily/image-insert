$(document).ready(function(){


  $("*").click(function(e){
    // e.preventDefault();
    e.stopPropagation();
    $(this).before("<img class='insertedimg' src='img/pretty.jpg'>");
    $(".insertedimg").click(function(e){
      e.stopPropagation();e
      $(this).remove();
    })
  });

  
});
  



  
  
  