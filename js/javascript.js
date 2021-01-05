
$(document).ready(function(){
    $("#member-submit").on("click", function(){
       if( $("#member-submit").text() != "5001"){
        $("#error-message").show();
       }
       else{
        $("#error-message").hide();
        window.location.href = "/";
       }
      });
  });