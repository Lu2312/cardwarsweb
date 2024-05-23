
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("español");
    var checkBox2 = document.getElementById("ingles");
    var text = document.getElementById("text");
    var text2 = document.getElementById("text2");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
        // Crear un nuevo elemento iframe
        var iframe = document.createElement('iframe');
        // Establecer los atributos necesarios para el iframe
        iframe.setAttribute('src', 'tabla_espanol.html');
        iframe.style.width = '800px';
        iframe.style.height = '900px';
        // Añadir el iframe al documento
        document.body.appendChild(iframe);

    } else if (checkBox2.checked == true) {
        text2.style.display = "block";

        // Crear un nuevo elemento iframe
        var iframe2 = document.createElement('iframe');
        // Establecer los atributos necesarios para el iframe
        iframe2.setAttribute('src', 'tabla.html');
        iframe2.style.width = '800px';
        iframe2.style.height = '900px';
        // Añadir el iframe al documento
        document.body.appendChild(iframe2);


    } else {
        text.style.display = "none";
        text2.style.display = "none";

        var iframes = document.querySelectorAll('iframe');
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }

 
    }





}