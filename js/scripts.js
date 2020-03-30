$(document).ready(function(){


  $("*").click(function(e){
    // e.preventDefault();
    e.stopPropagation();
    $(this).before("<img id='insertedimg' src='img/pretty.jpg'>");
  });
});
  

  
  
  