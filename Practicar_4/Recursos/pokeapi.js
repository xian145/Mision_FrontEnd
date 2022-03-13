const BuscarPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/chikorita';
    fetch(url).then((res) => { //res (response) es una de las opciones que puede tener, no se puede poner cualquier cosa en el parentesis
        //console.log(res);  //Imprime en la consola la respuesta que obtuvo de res, basicamente lo que hace es ver si todo bien con el url
        return res.json();
    }).then((data) => {
        console.log(data); //Lo que hace es sacar la data de la respuesta
        let PokeImg = data.sprites.front_default; //lo que hace es que de data saca la informacion de sprites front default, aqui es asi de especifico porque es justo lo que se quiere consultar
        console.log(PokeImg);
    })
}

//BuscarPokemon() //aqui llama a la funcion BuscarPokemon

const PokeImagen = (url) => { //nueva funcion
    const PokeImage = document.getElementById('PokeImage') //se crea una constante que vale lo que se agarra del HTML el id que tenga PokeImage
    PokeImage.src = url; //lo que hara aqui con el elemento que agarro anteriormente es cambiar la imagen con el nuevo URL
}

const imp = () => {
    const PokeName = document.getElementById('PokeName') //va a leer el documento de HTML y buscar el id con el nombre que le pongamos en los parentesis
    let PokeInput = PokeName.value //aqui vamos a guardar el valor (value) de PokeName y lo guardaremos en en la variable nueva llamada PokeInput
    console.log('que onda? ' + PokeInput);
}