function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function ArtaTextoCopiado(){

    document.getElementById("ximena").style.display="flex";
    document.getElementById("ximena2").style.display="flex";

}



//  Inicializa un menú contextual para toda la página
var contextMenu = CtxMenu();

//1er menu
    // Se llamará a nuestra función cuando el usuario seleccione "¡Hola Mundo!" en el menú contextual personalizado.
    function holaMundo(){
        alert("¡Nuevo menu contextual!");
    }
    // Añade una función personalizada al menú
    contextMenu.addItem("Hola Mundo", holaMundo, Icon = "info.svg");
    // Añade un seperador
    contextMenu.addSeperator();
    // Añade un segundo elemento al menú, esta vez con un ícono
    contextMenu.addItem("Recargar Página",
        function(){
            location.reload();
        },
        Icon = "info.svg"
    );
    contextMenu.addSeperator();    
    //Para añadir mas items de menu
    contextMenu.addItem("Aquí pueden ir más items",
        function(){
            //código aqui
        },
        Icon = "info.svg"
    );


//2do menu
    // Función de ejemplo para cambiar el color de fondo de un elemento
    function ChangeElementColor(element){
        var color = [
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255
        ];
        element.style.background = "rgb(" + color + ")"
    }

    // Inicialice un menú personalizado especial para el div "CustomContextMenu"
    var contextMenuTwo = CtxMenu("#CustomContextMenu");
    contextMenuTwo.addItem("Cambiar Color del  DIV", ChangeElementColor);