const BuscarPokemon = () => {
    const PokeName = document.getElementById('PokeName') //va a leer el documento de HTML y buscar el id con el nombre que le pongamos en los parentesis
    let PokeInput = PokeName.value.toLowerCase() //aqui vamos a guardar el valor (value) de PokeName y lo guardaremos en en la variable nueva llamada PokeInput
    const url = `https://pokeapi.co/api/v2/pokemon/${PokeInput}`; //Se deben de usar comillas invertidas, lo que se hizo es que ahora pondra en esa parte lo que jale de PokeInput
    fetch(url).then((res) => { //res (response) es una de las opciones que puede tener, no se puede poner cualquier cosa en el parentesis
        if (res.status != '200') { //status 200 indica que todo esta bien, en caso de ser otro status, como el 404 indica que no se encontro
            PokeImagen('./Recursos/sad_pokemon.png') //En caso de entrar a este condicional lo que sucederia es cambiar la imagen a la que se indica ahi
        }
        else {
            return res.json();
        }
    }).then((data) => {
        let PokeImg = data.sprites.front_default; //lo que hace es que de data saca la informacion de sprites front default, aqui es asi de especifico porque es justo lo que se quiere consultar
        let id_number = data.id //defini variable que es igual al id de la consulta, en este caso el id es el numero del pokedex del pokemon
        if (id_number < 10) { //esto solo lo hago para poder jalar las imagenes de otro lado
            id_number = '00'+id_number
        }
        else if (id_number >= 10 && id_number < 100) {
            id_number = '0'+id_number
        }
        else {
        }
        console.log(id_number);
        console.log(PokeImg);
        PokeImagen(`https://www.serebii.net/pokemon/art/${id_number}.png`) //ejecuto la funcion PokeImagen que esta definida abajo
    })
}

const PokeImagen = (url) => { //nueva funcion que cambia la imagen de la pokeball por la del pokemon que se busco
    const PokeImage = document.getElementById('PokeImage') //se crea una constante que vale lo que se agarra del HTML el id que tenga PokeImage
    PokeImage.src = url; //lo que hara aqui con el elemento que agarro anteriormente es cambiar la imagen con el nuevo URL
}

