const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.error(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
                    //! Llamar la función propiamente con sus argumentos
                    //propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}

export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string

    ) { }

    @Deprecated('Solo no lo uses')
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name.toLowerCase()}!!! ,${this.name.toLowerCase()}`)
    }
}
export const charmander = new Pokemon(4, 'Charmander');
charmander.scream()
