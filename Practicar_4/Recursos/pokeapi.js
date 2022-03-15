const PokeName = document.querySelector("#PName") //busco en el arhcivo de HTML por id
const PokeNumber = document.querySelector('#PNumber')
const PokeTypes = document.querySelector('#PTypes')
const PokeStats = document.querySelector('#PStats')
const PokeAbilities = document.querySelector('#PAbilities')
const PokeHeight = document.querySelector('#PHeight')
const PokeWeight = document.querySelector('#PWeight')

const BuscarPokemon = event => {
    event.preventDefault(); //evitamos el submit al entrar a la pagina
    const PokeName = document.getElementById('PokeName') //va a leer el documento de HTML y buscar el id con el nombre que le pongamos en los parentesis
    let NameInput = PokeName.value.toLowerCase() //aqui vamos a guardar el valor (value) de PokeName y lo guardaremos en en la variable nueva llamada NameInput
    const url = `https://pokeapi.co/api/v2/pokemon/${NameInput}`; //Se deben de usar comillas invertidas, lo que se hizo es que ahora pondra en esa parte lo que jale de NameInput
    fetch(url).then((res) => { //res (response) es una de las opciones que puede tener, no se puede poner cualquier cosa en el parentesis
        return res.json();
    }).then((data) => {
        ChangeImage(data) //Llamo a la funcion que lo que hara sera cambiar la imagen del pokemon
        PokeInfo(data) //Llamo a la funcion PokeInfo que lo que hara sera sacar toda la info que ocupo del pokemon
    })
    .catch(err => PokeError()) //en caso de encontrar CUALQUIER error llama a la funcion que se define abajo
}

const ChangeImage = (data) => { 
    let id_number = data.id //defini variable que es igual al id de la consulta, en este caso el id es el numero del pokedex del pokemon
    if (id_number < 10) { //esto solo lo hago para poder jalar las imagenes de otro lado
        id_number = '00'+id_number
    }
    else if (id_number >= 10 && id_number < 100) {
        id_number = '0'+id_number
    }
    else {
    }
    const PokeImage = document.getElementById('PokeImage') //se crea una constante que vale lo que se agarra del HTML el id que tenga PokeImage
    PokeImage.src = (`https://www.serebii.net/pokemon/art/${id_number}.png`); //lo que hara aqui con el elemento que agarro anteriormente es cambiar la imagen con el nuevo URL
}

const PokeInfo = (data) => {
    let abi = document.querySelector(".abis")
    abi.classList.remove("abi")
    const {types, stats, abilities} = data; //va a sacar la info de stats y types de data y los guardara justamente en esas mismas variables
    PokeName.textContent = data.name; //Estoy cambiando lo que se encuentra en div con id "PName" por la info que se saca de la api con data.name
    PokeNumber.textContent = `No ${data.id}` //Agrego el numero del pokemon dentro del div que tiene el id "PNumber"
    PokeHeight.textContent = `Height: ${data.height/10} Meters`
    PokeWeight.textContent = `Weight: ${data.weight/10} Kg`
    PokemonTypes(types) //Llama a al funcion definida abajo
    PokemonStats(stats) //Llama a al funcion definida abajo
    PokemonAbilities(abilities) //Llama a la funcion definida abajo
}

const PokemonTypes = (types) => {
    PokeTypes.innerHTML = ''; //para limpiar el campo y no se acumulen cada vez que el usuario realiza una nueva busqueda
    types.forEach(type => {
        let TypeText = document.createElement('div') //creo una variable que crea un div que posteriormenete se le agregara un contenido
        TypeText.textContent = type.type.name //a la variable se le agregar el contido que se encunetra en type type name, que se consigue de la api
        TypeText.style.color = typeColors[type.type.name] //setea los colores de la font del tipo, a los colores que se definen al final del archivo
        PokeTypes.appendChild(TypeText); //agrega uno por cada tipo extra, dado que es pokemon es con un maximo de 2 tipos
    });
}

const PokemonStats = (stats) => {
    PokeStats.innerHTML = '' //para limpiar el campo en caso de hacer una nueva busqueda
    stats.forEach(stat =>{
        let StatElmnt = document.createElement('div') //va a crear un div por cada elemento que se encuentre en stats este en especifico sera el contenedor 
        let StatElmntName = document.createElement('div') //contenedor dentro de contenedor para colorcar el nombre del stat
        let StatElmntNumber = document.createElement('div') //Contenedor para el valor del stat
        StatElmntName.textContent = stat.stat.name //Colocara el nombre que obtiene de la api en StatElmntName
        StatElmntNumber.textContent = stat.base_stat //colocara lo que obtiene de la api en .base_stat en StatElmntNumber
        StatElmnt.appendChild(StatElmntName) //agregamos al contenedor el div que contiene el nombre del stat
        StatElmnt.appendChild(StatElmntNumber) //agregammos al contenedor el div que contiene el valor del stat
        PokeStats.appendChild(StatElmnt) //agregamos el contenedor cons los contenedores de nombre y valores de stats al div dentro del html que contiene el id 'PStats'
    })
}

const PokemonAbilities = (abilities) => {
    PokeAbilities.innerHTML = '' //para limpiar tras cada busqueda
    abilities.forEach(ability => {
        let AbilityElmnt = document.createElement('div') //crea un div para colocar algo despues
        AbilityElmnt.textContent = ability.ability.name //le asigna el valor a AbilityElmnt de lo que se encunetre en ability name que saca de la api
        PokeAbilities.appendChild(AbilityElmnt) //agrego lo que acabo de guardar en la variable al html con id PAbilities
    })
}

const PokeError = () => {
    const PokeImage = document.getElementById('PokeImage') //se crea una constante que vale lo que se agarra del HTML el id que tenga PokeImage
    PokeImage.src = ('./Recursos/sad_pokemon.png'); //lo que hara aqui con el elemento que agarro anteriormente es cambiar la imagen con el nuevo URL
    PokeName.textContent = 'Not Found'
    PokeTypes.textContent = ''
    PokeStats.textContent = ''
    PokeNumber.textContent = ''
    PokeAbilities.textContent = ''
    PokeHeight.textContent =''
    PokeWeight.textContent =''
    let abi = document.querySelector(".abis")
    abi.classList.add("abi")
}

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    fairy: '#F0A786',
    default: '#2A1A1F',
}; 