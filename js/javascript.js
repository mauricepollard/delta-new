
$(document).ready(function(){
    $("#member-submit").on("click", function(){
       if( $("#member-submit").val() != 5001){
        $("#error-message").show();
       }
       else{
        $("#error-message").hide();
        window.location.href = "/";
       }
      });
  });