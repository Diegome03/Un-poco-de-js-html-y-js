window.onload = function ()
{
    var btn = document.getElementById("add-task");
    var areaTexto = document.getElementById("nueva-tarea");
    var currentUl = document.getElementById("lista-interactiva");
    var contador = 0;
    var erasebutton = document.getElementById("erase-task");

    erasebutton.onclick = function()
    {
        localStorage.clear()
        location.reload();
    }

    btn.onclick = function ()
    {
        let paridad = contador % 6;
        contador ++;

        var nuevoTexto = areaTexto.value;
        var newLi = document.createElement("li");

        switch (paridad){
            case 0:
                newLi.className = "child child-one";
                break;
            case 1:
                newLi.className = "child child-two";
                break;
            case 2:
                newLi.className = "child child-three";
                break;
            case 3:
                newLi.className = "child child-four";
                break;
            case 4:
                newLi.className = "child child-five";
                break;
            case 5:
                newLi.className = "child child-six";


        }

        var newContent = document.createTextNode(nuevoTexto);
        newLi.appendChild(newContent); //añade texto al div creado.
        // añade el elemento creado y su contenido al DOM
        currentUl.append(newLi);
        currentUl.clear(newLi)




    }
}