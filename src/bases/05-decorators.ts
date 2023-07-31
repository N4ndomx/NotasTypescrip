
const miDecorador = () => {
    return (target: Function) => {

    }
}

@miDecorador()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string

    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name.toLowerCase()}!!! ,${this.name.toLowerCase()}`)
    }
}
export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();


