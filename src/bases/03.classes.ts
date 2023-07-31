// Def clases de forma explicita (tradicional)

// export class Pokemon {
//     // Tengo que definir el dato por defecto 
//     public id: number;
//     public name: string;
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;

//         // Aqui inicializar los atributos de la clase
//         console.log('construcctor llamado');

//     }
// }
import axios from "axios";
import { Move, PokeapiResponse } from "../interface/pokeapi-responce.interface";

export class Pokemon { // forma corta

    get imgurl(): string {
        return `http:/pke/ ${this.id}`
    }

    constructor(
        public readonly id: number, // readonly no permite la modificacion del dato ni en la misma clase 
        // Quita la forma de establecer un valor al id
        public name: string,
        /// public urlimg: string ----> sin caso por que la puedo determinar
    ) { }

    // Metodos dif al get OJO!!!!!!!!
    public gritar() {
        return `${this.name.toUpperCase()}!!!!!!!!!`
    }
    // private hablar() {
    //     console.log(`${this.name},${this.name}`)
    // }

    // un metodo asincrono es un metodo comun solo que se ejecuta a destiempo 
    // un metodo que regresa una promesa literal!

    async getMovies(): Promise<Move[]> {
        //const movies = 10
        // Await dice espera a que la pro,esa se cumpla y luego muestrala sino imprime pendiente por que 
        // cuando se hizo seguia pendiente | solo con asy funciona
        // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4')
        // otra forma es desustructurando el obj
        // Con los tipos genericos estoy indicando que se esta regresando 
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves[0].move)
        return data.moves
    }
}


export const charmende = new Pokemon(12, 'char');  // Creo una nueva instacia de la clase poke
console.log(charmende.imgurl)
console.log(charmende.gritar())
charmende.getMovies()

// charmende.hablar()
// Diferencia entre utilizar class de interface es que la clase me permite
//crera instancias de esta misma clase y la interface da reglas y condiciones ;
// La interface no tiene representacion en javascript
