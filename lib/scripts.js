$(document).on('ready', funcionMain);

function funcionMain() {
    $("#agregarFila").on('click', nuevaFila);
    $("body").on('click',"#eliminarFila", eliminarFila);
}

function nuevaFila() {
    var opcion1=document.getElementById("opcion").value;
    var cantidad1=document.getElementById("cantidad").value;
    var nombreApellido1=document.getElementById("nombreApellido").value;
	var direccion1=document.getElementById("direccion").value;
	var telefono1=document.getElementById("telefono").value;
    var email1=document.getElementById("email").value;
    
	var nombreTabla=document.getElementById("tablaPedido");

    var row = nombreTabla.insertRow(0+1);
    var celda1 = row.insertCell(0);
    var celda2 = row.insertCell(1);
    var celda3 = row.insertCell(2);
    var celda4 = row.insertCell(3);
    var celda5 = row.insertCell(4);
    var celda6 = row.insertCell(5);
    var celda7 = row.insertCell(6);
    

    celda1.innerHTML = '<p name="opcion_f[]" class="non-margin">'+opcion1+'</p>';
    celda2.innerHTML = '<p name="cantidad_f[]" class="non-margin">' +cantidad1+'</p>';
    celda3.innerHTML = '<p name="nombreApellido_p[]" class="non-margin">'+nombreApellido1+'</p>';
    celda4.innerHTML = '<p name="direccion_p[]" class="non-margin">'+direccion1+'</p>';
    celda5.innerHTML = '<p name="telefono_p[]" class="non-margin">'+telefono1+'</p>';
    celda6.innerHTML = '<p name="email_p[]" class="non-margin">'+email1+'</p>';
    celda7.innerHTML = '<button type="button" value="BORRAR" class="btn btn-danger" id="eliminarFila">';
}

function seleccionarFila(presionaBorrar) {
	//Obteniendo la linea que se esta eliminando
	var elemento=presionaBorrar.parentNode.parentNode;
	//b=(fila).(obtener elementos de clase columna y traer la posicion 0).(obtener los elementos de tipo parrafo y traer la posicion0).(contenido en el nodo)
	var opcion=elemento.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
	var cantidad=elemento.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
	var nombreApellido=elemento.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
	var direccion=elemento.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
	var telefono=elemento.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;
	var email=elemento.getElementsByTagName("td")[5].getElementsByTagName("p")[0].innerHTML;

	var contenidoFila = [opcion, cantidad, nombreApellido, direccion, telefono, email];

	return contenidoFila;
}

function eliminarFila(){
	//Guardando la referencia del objeto presionado
	var _this = this;
	//Obtener las filas los datos de la fila que se va a elimnar
	var contenidoFila=seleccionarFila(_this);

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}

var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
      },
      format = function(s, c) {
        return s.replace(/{(\w+)}/g, function(m, p) {
          return c[p];
        })
      }
    return function(table, name) {
      if (!table.nodeType) table = document.getElementById(table)
      var ctx = {
        worksheet: name || 'Worksheet',
        table: table.innerHTML
      }
      window.location.href = uri + base64(format(template, ctx))
    }
  }) ()