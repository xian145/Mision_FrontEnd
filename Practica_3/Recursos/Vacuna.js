document.addEventListener("DOMContentLoaded", function(event) {
    const menu = document.querySelector(".menu") //es una constante, no se modificara el valor (const=constante) "menu" es el nombre de la constante y se le da el valor de la clase ".menu"
        let ultScrollY = window.scrollY //lo que hace es guardar la posicion despues de scrollear en la variable ultScrollY
    window.addEventListener("scroll", () => {
        if (ultScrollY < window.scrollY) {
            menu.classList.add("Esconder_menu") // lo que hace es que si se cumple la condicion agrega una nueva clase, siendo esta la clase "Esconder_menu"
        }
        else {
            menu.classList.remove("Esconder_menu") //en caso de no suceder la condicion antes dicha quitara la clase "Esconder_menu" y quedara con la clase original "menu"
        }
        ultScrollY = window.scrollY //con esto hara que el nuevo ultScrollY sea el ultimo valor en el que se encunetre el scroll
    });
});
