
$(document).ready(function(){
    $("#member-submit").on("click", function(){
       if( $("#pin").val() != 5001){
        $("#error-message").show();
       }
       else{
        $("#error-message").hide();
       $(".hidden-phone").show();
       }
      });
  });