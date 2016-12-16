$(document).ready(function(){
  $("#boton").click(function(){
		/*$.ajax({
		  url:"http://localhost:3002/demo.html",
		  type:"GET",
		  success : function(response){
				$("#ajax").html(response);
      }
		});*/
		$("#ajax").load("http://localhost:3002/demo.html");
	});
});
//desde el browser al servidor es request y del servidor a mi es response