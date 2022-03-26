import { createStore } from 'vuex'

export default createStore({
  state: {  //almacenar variables
    customer: { //informacion del comprador
      name: '',
      phone: '',
      email: '',
      flavor: [],
      decor: []
    },
    information: [],
    contador: 0,
    flavors: { //valores inciales de los sabores
      Vainilla: 20,
      RedVelvet: 20,
      Chocolate: 20,
      Fresa: 20,
      Matcha: 20,
      Coco: 20
    },
    decoration: { //valores iniciales de las decoraciones
      adorno1: 20,
      adorno2: 20,
      adorno3: 20,
      adorno4: 20,
      adorno5: 20,
      adorno6: 20,
      adorno7: 20,
      adorno8: 20
    },
    flavorError: '',
  },
  getters: {  //recuperar informnacion del estado
    cuadrado(state) {
      return state.counter*state.counter;  //regresa lo que esta en counter dentro de state al cuadrado
    }
  },
  mutations: {  //cosas que utilizaremos para modificar el estado  (se utiliza commit)

    RestarSabor(state, sabor) {
      const sabores = sabor[0][this.state.contador][3] //crea una constante que es igual a sabor en la posicion [0][contador][3] dicho contador se mueve automaticamente por cada pedido
      for (var key in state.flavors) { //realiza un barrido dentro de lo que se contiene en flavors, objeto definido en state
        for (var flav in sabores){ //realiza un barrido dentro de los sabores elejidos por la persona
          let igual = sabores[flav] //guarda el valor del sabor en la posicion flav
          if (key == igual) { //en caso de que sean iguales ira a state y restara uno al valor que tenga el nombre igual a key que se encunetra en flavors
            state.flavors[key] -= 1
          }
        }
      }
    },

    RestarDecoracion(state, sabor) {
      const decora = sabor[0][this.state.contador][4]
      for (var llave in state.decoration) { 
        for (var dec in decora){ 
          let same = decora[dec] 
          if (llave == same) { 
            state.decoration[llave] -= 1
          }
        }
      }
    },

    push(state) {
      state.information.push([state.customer.name, state.customer.phone,state.customer.email, state.customer.flavor, state.customer.decor]) //agrega lo que se ecnunetra en el pedido a un arreglo
    },

    clear(state) {
      state.customer.name = '' // limpia el campo de name
      state.customer.phone = '' // limpia el campo de phone
      state.customer.email = '' // limpia el campo de email
      state.customer.flavor = [] // limpia el campo de flavor
      state.customer.decor = [] // limpia el campo de decor
    }
  },

  actions: {  //parecido a las mutaciones, pero en acciones podemos tener codigo asincrono (api) (las acciones llaman mutaciones) (se utiliza dispatch)
    confirm() {
      if (this.state.customer.flavor.length > 0) { //Se comprueba que efectivamente haya agarrado al menos un sabor
        
        this.commit('push') // esta funcion agrega el pedido de la persona a un arreglo nuevo

        var sabor = this.state.information; // guarda el arreglo en la variable sabor

        this.commit('RestarSabor', [sabor]) // aqui restamos los sabores elegidos por el cliente del pull original del pastelero

        this.commit('RestarDecoracion', [sabor])

        alert('Pedido exitoso'); // para avisar que ya se realizo el pedido

        this.state.contador += 1 // para movernos en el arreglo de los pedidos de las personas
      }

      this.state.flavorError = this.state.customer.flavor.length > 0 ? //en caso de no haber agarrado al menos un sabor se manda este mensaje de error
        '' : 'Se debe de elegir al menos un sabor'
 
      this.commit('clear'); // se limpian los campos para poder realizar un nuevo pedido
    },
  },
  modules: {  //cosas que aparecen solo si se cumplen ciertas condiciones
  }
})
