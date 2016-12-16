
$(document).ready(function(){
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  $("#login").click(function(e){
    e.preventDefault();
    enviar();

  }
})
function enviar() {
  var usuario = {
     txtEmail:$("#email").val(),
     txtPassword: $("3password").val(),
  }
  $.ajax({
      url: 'http://minonu.com/test/login.php',
      type: 'post',
      dataType: 'json',
      success: function (msg) {
       alert('SUCCESS!'); 
      },
      error: function(){
        alert('ERROR!');
        alert(input_data);
        }
    data: usuario
  });
